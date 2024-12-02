#!/bin/bash
set -euo pipefail

# Function to disable swap and update fstab
disable_swap() {
  echo "SWAP SHIT"
  swapoff -a
  sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab
}

# Function to configure firewall
configure_firewall() {
  echo "FIREWALL"
  apt-get install -y ufw
  ufw allow 6443/tcp
  ufw allow 2379/tcp
  ufw allow 2380/tcp
  ufw allow 10250/tcp
  ufw allow 10251/tcp
  ufw allow 10252/tcp
  ufw allow 10255/tcp
  ufw enable
  ufw reload
}

# Function to configure containerd and networking
configure_containerd_network() {
  echo "CONTAINERD AND NETWORK STUFF"
  cat <<EOF | tee /etc/modules-load.d/containerd.conf 
overlay 
br_netfilter
EOF
  modprobe overlay
  modprobe br_netfilter
  cat <<EOF | tee /etc/sysctl.d/99-kubernetes-k8s.conf
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
net.bridge.bridge-nf-call-ip6tables = 1
EOF
}

# Function to install containerd
install_containerd() {
  echo "INSTALLING CONTAINERD"
  apt-get update
  apt-get install -y ca-certificates curl
  install -m 0755 -d /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
  chmod a+r /etc/apt/keyrings/docker.asc

  # Add the repository to Apt sources:
  echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
  apt-get update
  apt-get install -y containerd.io

  containerd config default | tee /etc/containerd/config.toml >/dev/null 2>&1
  echo "CONTAINERD DONE"
}

# Function to install kubeadm, kubelet, and kubectl
install_k8s_tools() {
  echo "INSTALLING kubeadm, kubelet, kubectl"
  apt-get update
  apt-get install -y apt-transport-https ca-certificates curl gpg
  curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.31/deb/Release.key | gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
  echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.31/deb/ /' | tee /etc/apt/sources.list.d/kubernetes.list
  apt-get update
  apt-get install -y kubelet kubeadm kubectl
  apt-mark hold kubelet kubeadm kubectl
  echo "DONE INSTALLING kubeadm, kubelet, kubectl"
}

# Function to install Cilium
install_cilium() {
  echo "INSTALLING CILIUM"
  CILIUM_CLI_VERSION=$(curl -s https://raw.githubusercontent.com/cilium/cilium-cli/main/stable.txt)
  CLI_ARCH=amd64
  if [ "$(uname -m)" = "aarch64" ]; then CLI_ARCH=arm64; fi
  curl -L --fail --remote-name-all https://github.com/cilium/cilium-cli/releases/download/${CILIUM_CLI_VERSION}/cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}
  sha256sum --check cilium-linux-${CLI_ARCH}.tar.gz.sha256sum
  tar xzvfC cilium-linux-${CLI_ARCH}.tar.gz /usr/local/bin
  rm cilium-linux-${CLI_ARCH}.tar.gz{,.sha256sum}
  cilium install --version 1.16.4
}

# Function to initialize the Kubernetes cluster
init_k8s_cluster() {
  echo "INIT-ING CLUSTER"
  kubeadm init --control-plane-endpoint pfsense.local.mandhuk.com --skip-phases=addon/kube-proxy
}

# Function to set up kubectl config
setup_kubectl_config() {
  echo "SETTING UP kubectl config"
  mkdir -p "$HOME"/.kube
  cp -i /etc/kubernetes/admin.conf "$HOME"/.kube/config
  chown "$(id -u)":"$(id -g)" "$HOME"/.kube/config
}

# Main function to call all setup functions in order
main() {
  # Run Kubernetes setup only if the environment variable is set
  if [[ "${SETUP_K8S:-}" == "true" ]]; then
    install_k8s_tools
    init_k8s_cluster
    setup_kubectl_config
    install_cilium
  else
    disable_swap
    configure_firewall
    configure_containerd_network
    install_containerd
  fi

  echo "(: DONE DONE DONE :)"
}

# Execute the main function
main

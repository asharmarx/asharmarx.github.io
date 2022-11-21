import { useRef } from "react";
import { MeInTheBackDiv } from "./styles/myStyles";

const BackgroundVideo = ({ muteMe, tickleMe }) => {
  const refMeUp = useRef(null);
  if (refMeUp.current) {
    if (tickleMe) {
      refMeUp.current.play();
    } else {
      refMeUp.current.pause();
    }
  }
  const videoSource =
    "https://drive.google.com/uc?id=11fKiSBYtC-5q3xiuevY3Qd6m-Y-SE2vS";
  return (
    <MeInTheBackDiv>
      <video ref={refMeUp} autoPlay loop muted={muteMe}>
        <source src={videoSource} type="video/mp4" />
      </video>
    </MeInTheBackDiv>
  );
};

export default BackgroundVideo;

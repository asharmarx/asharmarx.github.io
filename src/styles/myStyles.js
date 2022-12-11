import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

// Components in App.js
export const ButtonWrapper = styled.div`
  height: 10%;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: center;

  .topButton {
    width: 5%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.buttonBackground};
  }
  .buttonLogo {
    font-size: 3rem;
    @media screen and (max-width: 850px) {
      font-size: 2.5rem;
      padding: 1rem 0;
    }

    @media screen and (max-width: 500px) {
      font-size: 1.5rem;
      padding: 1rem 0;
    }
  }
`;

// Common Components between L/R n T/B
export const Wait4MeWrap = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    to right ${(props) => ", #7678ED " + props.wait4MeWidth}%,
    #f7567c 50%
  );
  h1 {
    fonts-size: 5rem;
    color: #fff;
    background-color: #000;
  }
  span {
    display: table;
    margin: 0 auto;
  }
`;

export const WrapMeSenpai = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1000;
  background-color: ${({ theme }) => theme.meColor};
`;

export const MeInTheBackDiv = styled.div`
  position: fixed;
  z-index: -2000;
  height: 100%;
  width: 100%;

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const WhereAmIWrap = styled.div`
  margin: 0;
  padding: 2rem 0;
  text-align: center;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.navTextColor};

  @media screen and (max-width: 850px) {
    font-size: 1.2rem;
    padding: 1rem 0;
  }
`;

export const HomePageDiv = styled.div`
  height: 100%;
  width: 100%;
`;

export const WhatIHaveDoneWrapper = styled.div`
  padding: 1rem 0;
  margin: 0;
  ul {
    list-style: devanagari;
    margin-left: 3rem;
  }
  p {
    padding: 0.5rem 0;
  }
  li {
    padding: 0.2rem 0;
  }
`;

export const WhatIReadWrapper = styled.div`
  padding: 1rem 0;
  margin: 0;
  scroll-behavior: smooth;
  p {
    padding: 1rem 0;
  }

  ul {
    margin-left: 2rem;
  }

  li {
    padding: 0.5rem 0;
  }
`;

export const SeeAlsoWrapper = styled.div`
  h3 {
    padding: 1rem 0;
  }

  .seeAlso {
    display: flex;
    span {
      padding-right: 0.5rem;
    }
  }
`;

export const WhatIHaveHeardWrapper = styled.div`
  .auxLinknPicDiv {
    display: flex;
    overflow-x: scroll;
    gap: 1rem;
  }
`;

// Left/Right Styles

export const LeftDiv = styled.div`
  display: inline-block;
  width: 30vw;
  height: 100%;
  position: fixed;
`;

export const RightDiv = styled.div`
  display: inline-block;
  width: 68vw;
  position: relative;
  left: 32%;
`;

export const LeftRightNav = styled(Nav)`
  padding: 2rem;
  height: 50%;
  text-decoration: none;
  font-size: 3rem;
  padding-bottom: 1rem;

  .nav-item {
    padding: 2rem 0;

    a {
      color: ${({ theme }) => theme.navTextColor};
      text-decoration: none;
      padding: 0.8rem;

      &:hover {
        &:not(.active) {
          color: ${({ theme }) => theme.navLinkHover};
        }
      }
    }
  }

  .nav-item > .active {
    background-color: ${({ theme }) => theme.activeNavLinkBack};
    color: #000;
  }

  @media screen and (max-width: 850px) {
    font-size: 1.75rem;
    padding: 1rem 0;
  }
`;

// Top/Bpttom Styles

export const TopDiv = styled.div`
  height: 30%;
  overflow-y: scroll;
`;

// contains the mainHighway
export const BottomDiv = styled.div`
  height: 70vh;
  overflow: scroll;
`;

export const TopBottomNav = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-around;
  padding: 2rem;
  font-size: 3.5rem;

  .nav-item {
    padding: 2rem 0;

    a {
      color: ${({ theme }) => theme.navTextColor};
      text-decoration: none;
      padding: 0.8rem;

      &:hover {
        &:not(.active) {
          color: #b4da55;
        }
      }
    }
  }

  .nav-item > .active {
    background-color: ${({ theme }) => theme.activeNavLinkBack};
    color: #000;
  }

  @media screen and (max-width: 850px) {
    font-size: 1.75rem;
    padding: 1rem 0;
  }
`;

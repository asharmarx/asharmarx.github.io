import styled from "styled-components";

export const Wait4Me = styled.div`
  height: 100%;
  width: 100%;
  h1 {
    fonts-size: 5rem;
  }
  span {
    display: table;
    margin: 0 auto;
  }
`;

const WrapMeSenpai = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -1;
  background-color: ${({ theme }) => theme.meColor};
`;

export default WrapMeSenpai;

export const MeInTheBackDiv = styled.div`
  position: fixed;
  z-index: -2;
  width: 100%;
  height: 100%;

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 12%;
  @media screen and (max-width: 850px) {
    width: 48%;
  }

  .topButton {
    width: 33%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.buttonBackground};
  }
  .buttonLogo {
    font-size: 5rem;
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

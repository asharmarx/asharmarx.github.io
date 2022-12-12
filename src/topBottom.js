import { useState } from "react";
import {
  WrapMeSenpai,
  WhereAmIWrap,
  TopDiv,
  BottomDiv,
  TopBottomNav,
} from "./styles/myStyles";
import NavBar from "./components/navBar";
import BackgroundVideo from "./backgroundVideo";
import Wait4Me from "./components/wait4meS";
import useMajorHighway from "./hookudh/useMajorHighway";
import useMinorHighway from "./hookudh/useMinorHighway";

const TopBottomApp = ({ muteMe, tickleMe }) => {
  const majorHighways = useMajorHighway();
  const minorHighways = useMinorHighway();
  const [iamLoaded, setIamLoaded] = useState(false);
  const [wait4MeWidth, setWait4MeWidth] = useState(0);
  return (
    <>
      {!iamLoaded && <Wait4Me wait4MeWidth={wait4MeWidth} />}
      <BackgroundVideo
        muteMe={muteMe}
        tickleMe={tickleMe}
        setLoaded={setIamLoaded}
        setWait4MeWidth={setWait4MeWidth}
        videoWidth="100%"
      />
      <WrapMeSenpai />
      <TopDiv>
        <NavBar navWrap={TopBottomNav} />
        <WhereAmIWrap>{minorHighways}</WhereAmIWrap>
      </TopDiv>
      <BottomDiv>{majorHighways}</BottomDiv>
    </>
  );
};

export default TopBottomApp;

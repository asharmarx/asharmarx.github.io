import { useState } from "react";
import { WrapMeSenpai, WhereAmIWrap } from "./styles/myStyles";
import NavBar from "./components/navBar";
import BackgroundVideo from "./backgroundVideo";
import Wait4Me from "./components/wait4meS";
import useMajorHighway from "./hookudh/useMajorHighway";
import useMinorHighway from "./hookudh/useMinorHighway";
import { LeftDiv, RightDiv, LeftRightNav } from "./styles/myStyles";

const LeftRightApp = ({ muteMe, tickleMe }) => {
  const majorHighways = useMajorHighway();
  const minorHighways = useMinorHighway();

  const [iamLoaded, setIamLoaded] = useState(false);
  const [wait4MeWidth, setWait4MeWidth] = useState(0);
  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      <LeftDiv>
        {!iamLoaded && <Wait4Me wait4MeWidth={wait4MeWidth} />}{" "}
        <BackgroundVideo
          muteMe={muteMe}
          tickleMe={tickleMe}
          setLoaded={setIamLoaded}
          setWait4MeWidth={setWait4MeWidth}
          videoWidth="inherit"
        />
        <WrapMeSenpai />
        <NavBar navWrap={LeftRightNav} />
        <WhereAmIWrap>{minorHighways}</WhereAmIWrap>
      </LeftDiv>
      <RightDiv>{majorHighways}</RightDiv>
    </div>
  );
};

export default LeftRightApp;

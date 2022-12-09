import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { lightTheme, darkTheme } from "./themes/theme";
import {
  WrapMeSenpai,
  ButtonWrapper,
  WhereAmIWrap,
  TopDiv,
  BottomDiv,
} from "./styles/myStyles";
import {
  ThemeButton,
  MuteButton,
  TickleButton,
} from "./components/toggleButtons.jsx";
import NavBar from "./components/navBar";
import BackgroundVideo from "./backgroundVideo";
import Wait4Me from "./components/wait4me";
import useMajorHighway from "./hookudh/useMajorHighway";
import useToggle from "./hookudh/useToggle";
import useMinorHighway from "./hookudh/useMinorHighway";

const App = () => {
  const majorHighways = useMajorHighway();
  const minorHighways = useMinorHighway();
  const [appTheme, toggleAppTheme] = useToggle(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [muteMe, toggleMuteMe] = useToggle(true);
  const [tickleMe, toggleTickleMe] = useToggle(true);
  const [iamLoaded, setIamLoaded] = useState(false);
  const [wait4MeWidth, setWait4MeWidth] = useState(0);
  return (
    <ThemeProvider theme={appTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      {!iamLoaded && <Wait4Me wait4MeWidth={wait4MeWidth} />}
      <BackgroundVideo
        muteMe={muteMe}
        tickleMe={tickleMe}
        setLoaded={setIamLoaded}
        setWait4MeWidth={setWait4MeWidth}
      />
      <WrapMeSenpai />
      <TopDiv>
        <ButtonWrapper>
          <ThemeButton onClick={toggleAppTheme} appTheme={appTheme} />
          <MuteButton onClick={toggleMuteMe} muteMe={muteMe} />
          <TickleButton onClick={toggleTickleMe} tickleMe={tickleMe} />
        </ButtonWrapper>
        <NavBar />
        <WhereAmIWrap>{minorHighways}</WhereAmIWrap>
      </TopDiv>
      <BottomDiv>{majorHighways}</BottomDiv>
    </ThemeProvider>
  );
};

export default App;

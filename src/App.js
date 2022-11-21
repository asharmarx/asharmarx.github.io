import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { lightTheme, darkTheme } from "./themes/theme";
import {
  ThemeButton,
  MuteButton,
  TickleButton,
} from "./components/ToggleButtons.jsx";
import HomePage from "./components/homePage.jsx";
import WhatIRead from "./components/whatIRead";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import WhatIHaveDone from "./components/whatIHaveDone";
import { useState } from "react";
import BackgroundVideo from "./backgroundVideo";
import WrapMeSenpai, { ButtonWrapper, Wait4Me } from "./styles/myStyles";

const App = () => {
  const [appTheme, setAppTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [muteMe, setMuteMe] = useState(true);
  const [tickleMe, setTickleMe] = useState(true);
  const [iamLoaded, setIamLoaded] = useState(false);
  const toggleTheme = () => (appTheme ? setAppTheme(false) : setAppTheme(true));
  const toggleMute = () => (muteMe ? setMuteMe(false) : setMuteMe(true));
  const toggleTickle = () =>
    tickleMe ? setTickleMe(false) : setTickleMe(true);
  console.log("loaded", iamLoaded);
  return (
    <ThemeProvider theme={appTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <BackgroundVideo
        muteMe={muteMe}
        tickleMe={tickleMe}
        setLoaded={setIamLoaded}
      />
      {iamLoaded ? (
        <>
          <WrapMeSenpai />
          <ButtonWrapper>
            <ThemeButton onClick={toggleTheme} appTheme={appTheme} />
            <MuteButton onClick={toggleMute} muteMe={muteMe} />
            <TickleButton onClick={toggleTickle} tickleMe={tickleMe} />
          </ButtonWrapper>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/what-i-read" element={<WhatIRead />} />
            <Route path="/what-i-have-done" element={<WhatIHaveDone />} />
            <Route path="/*" element={<HomePage />} />
          </Routes>
        </>
      ) : (
        <Wait4Me>
          <span>
            <h1>Wait for me....</h1>
          </span>
        </Wait4Me>
      )}
    </ThemeProvider>
  );
};

export default App;

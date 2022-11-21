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
import WrapMeSenpai, { ButtonWrapper } from "./styles/myStyles";

const App = () => {
  const [appTheme, setAppTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [muteMe, setMuteMe] = useState(true);
  const [tickleMe, setTickleMe] = useState(true);
  const toggleTheme = () => (appTheme ? setAppTheme(false) : setAppTheme(true));
  const toggleMute = () => (muteMe ? setMuteMe(false) : setMuteMe(true));
  const toggleTickle = () =>
    tickleMe ? setTickleMe(false) : setTickleMe(true);

  return (
    <ThemeProvider theme={appTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <BackgroundVideo muteMe={muteMe} tickleMe={tickleMe} />
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
    </ThemeProvider>
  );
};

export default App;

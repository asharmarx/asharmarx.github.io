import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { lightTheme, darkTheme } from "./themes/theme";
import ThemeButton from "./components/themeButton.jsx";
import HomePage from "./components/homePage.jsx";
import WhatIRead from "./components/whatIRead";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import WhatIHaveDone from "./components/whatIHaveDone";
import { useState } from "react";

const App = () => {
  const [appTheme, setAppTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const toggleTheme = () => (appTheme ? setAppTheme(false) : setAppTheme(true));
  return (
    <ThemeProvider theme={appTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ThemeButton onClick={toggleTheme} appTheme={appTheme} />
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

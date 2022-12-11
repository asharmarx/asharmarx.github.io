import { ThemeProvider } from "styled-components";
import {
  MuteButton,
  SwitchARooButton,
  ThemeButton,
  TickleButton,
} from "./components/toggleButtons";
import useToggle from "./hookudh/useToggle";
import LeftRightApp from "./leftRight";
import { GlobalStyles } from "./styles/globalStyles";
import { ButtonWrapper } from "./styles/myStyles";
import { lightTheme, darkTheme } from "./themes/theme";
import TopBottomApp from "./topBottom";

const App = () => {
  const [appTheme, toggleAppTheme] = useToggle(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [muteMe, toggleMuteMe] = useToggle(true);
  const [tickleMe, toggleTickleMe] = useToggle(true);
  const [switchARoo, toggleSwitchARoo] = useToggle(true);

  return (
    <ThemeProvider theme={appTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ButtonWrapper>
        <ThemeButton onClick={toggleAppTheme} appTheme={appTheme} />
        <MuteButton onClick={toggleMuteMe} muteMe={muteMe} />
        <TickleButton onClick={toggleTickleMe} tickleMe={tickleMe} />
        <SwitchARooButton onClick={toggleSwitchARoo} switchARoo={switchARoo} />
      </ButtonWrapper>
      {switchARoo ? (
        <LeftRightApp muteMe={muteMe} tickleMe={tickleMe} />
      ) : (
        <TopBottomApp muteMe={muteMe} tickleMe={tickleMe} />
      )}
    </ThemeProvider>
  );
};

export default App;

import { ThemeProvider } from "styled-components";
import { createClient, Provider as GQLProvider } from "urql";
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
  const { REACT_APP_ENV } = process.env;
  const bumURL =
    REACT_APP_ENV === "dev"
      ? "http://localhost:9443/collectthis"
      : "https://brain.aman.monster/collectthis";

  const klajunt = createClient({
    url: bumURL,
  });
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
      <GQLProvider value={klajunt}>
        {switchARoo ? (
          <TopBottomApp muteMe={muteMe} tickleMe={tickleMe} />
        ) : (
          <LeftRightApp muteMe={muteMe} tickleMe={tickleMe} />
        )}
      </GQLProvider>
    </ThemeProvider>
  );
};

export default App;

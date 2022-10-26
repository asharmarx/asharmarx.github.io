import styled from "styled-components";

const ThemeButtonWrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 3rem;
  height: 3rem;

  .themeButton {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.buttonBackground};
  }
  .themeButtonLogo {
    font-size: 2rem;
  }
`;

export default ThemeButtonWrapper;

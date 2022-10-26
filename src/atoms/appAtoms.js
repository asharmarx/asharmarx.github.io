import { atom } from "jotai";

export const appTheme = atom({
  key: "appTheme",
  default:
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches,
});

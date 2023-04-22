import "@emotion/react";
import { defaultTheme } from "@styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}

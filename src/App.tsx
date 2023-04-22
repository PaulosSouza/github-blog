import { ThemeProvider } from "@emotion/react";
import { GlobalStyle } from "@styles/GlobalStyles";
import { defaultTheme } from "@styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GithubProvider } from "@contexts/GithubContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <GithubProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GithubProvider>
    </ThemeProvider>
  );
}

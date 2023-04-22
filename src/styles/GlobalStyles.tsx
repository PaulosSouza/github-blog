import { Global, css, useTheme } from "@emotion/react";

export function GlobalStyle() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :focus {
          outline: 0;
        }

        body {
          background: ${theme["base-background"]};
          color: ${theme["base-text"]};
          -webkit-font-smoothing: antialiased;
        }

        body,
        input,
        textarea,
        button {
          font: 400 1rem Nunito, sans-serif;
        }

        a {
          text-decoration: none;
        }
      `}
    />
  );
}

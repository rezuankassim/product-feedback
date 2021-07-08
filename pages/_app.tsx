import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import GlobalFonts from "../fonts/fonts";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;

import { ThemeProvider } from "styled-components";
import type { AppProps /* , AppContext */ } from "next/app";
import wrapper from "../store";
import "../styles/globals.css";

const theme = {
  primary: "green",
};

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);

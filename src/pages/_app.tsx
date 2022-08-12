import "../styles/globals.css";
import type { AppProps /*, AppContext */ } from "next/app";
import wrapper from "../store";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);

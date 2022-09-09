import React from "react";
import { wrapper } from "@redux/store";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import {Home} from '@components/index'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);

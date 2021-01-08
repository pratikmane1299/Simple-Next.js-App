import React, { useState, useEffect } from "react";
import Router from "next/router";
import "../styles/globals.css";

import FullScreenLoader from "../components/FullScreenLoader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return <>{loading ? <FullScreenLoader /> : <Component {...pageProps} />}</>;
}

export default MyApp;

import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  console.log("appp execurted");
  return <Component {...pageProps} />;
}

export default MyApp;

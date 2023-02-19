import "../styles/globals.css";
import { Source_Sans_Pro } from "@next/font/google";
import { Head } from "../components/head";

const font = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

function MyApp({ Component, pageProps }: any) {
  return (
    <div className={font.className}>
      <Head />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

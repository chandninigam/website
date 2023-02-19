import "../styles/globals.css";
import { Source_Sans_Pro } from "@next/font/google";
import { Head } from "../components/head";

const font = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function MyApp({ Component, pageProps }: any) {
  return (
    <main className={font.className}>
      <Head />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;

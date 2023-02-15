import "../styles/globals.css";
import { Source_Sans_Pro } from "@next/font/google";

const font = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function MyApp({ Component, pageProps }: any) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;

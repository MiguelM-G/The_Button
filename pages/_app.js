import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ContraptionProviderApp } from "../contexts/context";

function MyApp({ Component, pageProps }) {
  return (
    <ContraptionProviderApp>
      <Component {...pageProps} />
    </ContraptionProviderApp>
  );
}

export default MyApp;

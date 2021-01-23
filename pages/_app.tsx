import type { AppProps  } from 'next/app'
import "../styles/globals.css";
import {useEffect} from 'react'
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    if("serviceWorker" in navigator) {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
    }
  },[])
  return <Component {...pageProps} />
}
export default MyApp

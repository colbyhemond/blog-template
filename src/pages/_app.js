import '@/styles/globals.css'
import Script from 'next/script'  


export default function App({ Component, pageProps }) {
  return (<>
    <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    <Component {...pageProps} />
  </>)
}

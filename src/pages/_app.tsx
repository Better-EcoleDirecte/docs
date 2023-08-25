import React from 'react'
import { AppProps } from "next/app"
import "../theme/styles/theme.css"

export default function App({ Component, pageProps }: AppProps) {
  return <React.StrictMode>
    <Component {...pageProps} />
  </React.StrictMode>
}
import React from 'react'
import '@component/styles/globals.css'
/* eslint-disable react/prop-types */

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

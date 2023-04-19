import React from 'react'
import '../styles/globals.css'
import GlobalStyle from '../theme/GlobalStyle'
/* eslint-disable react/prop-types */


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>

  )
}

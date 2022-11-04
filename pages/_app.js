import 'antd/dist/antd.css'; 
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  
  return( 
      <>
      <Navbar/>
      <Component {...pageProps} />
      </>
  )
}

export default MyApp
import 'antd/dist/antd.css'; 
import '../styles/globals.css';

import {useEffect,useState} from "react";
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {

  return( 
    <div className='app'>
    <Navbar/>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp

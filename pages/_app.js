import 'antd/dist/antd.css'; 
import '../styles/globals.css';
import "../styles/login.css";
import { useRouter } from 'next/router';
import {useEffect} from "react";
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  const router= useRouter();

  useEffect(() => {
    const session = localStorage.getItem('session')
    console.log(session)
    if(session !== null){
      fetch("http://localhost:3000/me", {
        headers: {
          Authorization: "Bearer " + session,
        },
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // window.localStorage('session', JSON.stringify(data));
      })
    } else {
      router.push('/login');
    }
    }, []);

   

  return( 
    <div className='app'>
    <Navbar/>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp
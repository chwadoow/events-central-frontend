import 'antd/dist/antd.css'; 
import '../styles/globals.css';
import "../styles/login.css";
import { useRouter } from 'next/router';
import {useEffect} from "react";
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  const router= useRouter();

<<<<<<< HEAD
  // useEffect(() => {
  //   const session = localStorage.getItem('session')

=======
  useEffect(() => {
    const session = localStorage.getItem('session')
>>>>>>> dc294abed56c4ab32c8c6a68a141ed25b03c34c0
    // if(session !== null){
    //   fetch("http://localhost:3000/me", {
    //     headers: {
    //       Authorization: "Bearer " + session,
    //     },
    //   })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data)
<<<<<<< HEAD
    //     window.localStorage('session', JSON.stringify(data));
=======
    //     // window.localStorage('session', JSON.stringify(data));
>>>>>>> dc294abed56c4ab32c8c6a68a141ed25b03c34c0
    //   })
    // } else {
    //   router.push('/login');
    // }
<<<<<<< HEAD
    // }, []);
=======
    }, []);
>>>>>>> dc294abed56c4ab32c8c6a68a141ed25b03c34c0


  return( 
    <div className='app'>
    <Navbar/>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp

import 'antd/dist/antd.css'; 
import '../styles/globals.css';
import "../styles/login.css";
import Navbar from '../components/Navbar';
import Layout from 'antd/lib/layout/layout';
function MyApp({ Component, pageProps }) {
  return( 
    <>
    <Navbar/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp

import Home from "./Home";
import Head from "next/head";
import { Col, Row } from "antd";
import { Carousel } from 'antd';
export default function Index() {  
  return (
    <div>
      <Head>
        <title>Bomboclat Events</title>
      </Head>
      <Home/>
    </div>
  );
}


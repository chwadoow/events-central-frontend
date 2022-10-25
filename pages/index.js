import Head from "next/head";
import HomePageEvents from "../components/HomePageEvents";
import NextImage from "next/image";
import CategoryList from "../components/CategoryList";
import { Col, Row } from "antd";
import img from "../public/redd-qMFSP1xYVTQ-unsplash.jpg";

export const getStaticProps = async () => {
  const res1 = await fetch("http://localhost:3000/events");
  const res2 = await fetch("http://localhost:5000/eventcategories");
  const events = await res1.json()
  const categories = await res2.json()
  return {
    props: {
      events,
      categories
    },
  };
};

export default function Home({ categories, events }) {
  
  return (
    <div>
      <Head>
        <title>Bomboclat Events</title>
      </Head>
      <Row >
        <Col span={24}>
          <NextImage src={img} height="1040" />
        </Col>
      </Row>

      <br />

      <Row>
        <Col span={24}>
          <div style={{fontWeight: "bolder", marginLeft: 40, fontSize: "30px"}}>
            <p>Check out trending categories</p>
          </div>
        </Col>
      </Row>

      <Row >
        <CategoryList events={categories}/>
      </Row>

      <br />

      <Row>
        <Col span={24}>
          <div style={{fontWeight: "bolder", marginLeft: 40, fontSize: "30px"}}>
            <p>Events available</p>
          </div>
        </Col>
      </Row>

      <Row justify="center" align="middle">
        <HomePageEvents events={events}/>
      </Row>

      <br />

    </div>
  );
}


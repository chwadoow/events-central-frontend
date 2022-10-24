import Head from "next/head";
import Link from "next/link";
import NextImage from "next/image";
import CategoryList from "../components/CategoryList";
import { Col, Row, Card, Typography} from "antd";
import img from "../public/redd-qMFSP1xYVTQ-unsplash.jpg";
const { Title } = Typography;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/eventcategories");
  const events = await res.json();
  return {
    props: {
      events,
    },
  };
};

export default function Home({ events }) {
  
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
        <CategoryList events={events}/>
      </Row>

      <br />

      <Row>
        <Col span={24}>
          <div style={{fontWeight: "bolder", marginLeft: 40, fontSize: "30px"}}>
            <p>Events available</p>
          </div>
        </Col>
      </Row>

    </div>
  );
}


import Head from "next/head";
import Link from "next/link";
import NextImage from "next/image";
import CategoryList from "../components/CategoryList";
import { Col, Row, Card, Typography, Button } from "antd";
import img from "../public/redd-qMFSP1xYVTQ-unsplash.jpg";
import { useState } from "react";
const { Title } = Typography;
export default function Home({ events }) {
  const [event, setEvent] = useState({})
  
  return (
    <div>
      <Head>
        <title>ThunderTicks</title>
      </Head>
      <Row style={{ marginTop: "1rem" }}>
        <Col span={24}>
          <NextImage src={img} height="1050px" />
        </Col>
      </Row>
      <Row style={{ marginTop: "1rem" }}>
        <Col style={{ marginLeft: "4rem" }}>
          <Card bordered={true} style={{ borderRadius: "5rem" }}>
            <Title level={4}>Check out trending categories</Title>
          </Card>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ marginLeft: "2rem", marginTop: "0.5rem" }}>
        <CategoryList events={events}/>
      </Row>
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/eventcategories");
  const events = await res.json();
  return {
    props: {
      events,
    },
  };
};

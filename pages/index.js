import Navbar from '../components/Navbar'
import Head from 'next/head'
import { Col,Row, Card ,Typography, Button} from 'antd'
import NextImage from "next/image"
import img from "../public/redd-qMFSP1xYVTQ-unsplash.jpg"
const {Title} = Typography
const style = {
  background: '#0092ff',
  padding: '8px 0',
};
export default function Home() {
  return (
      <div>
          <Head>
            <title>ThunderTicks</title>
          </Head>
          <Row style={{marginTop:"1rem"}}>
            <Col span={24}>
            <NextImage src={img} height="1050px"/>
            </Col>
          </Row>
          <Row style={{marginTop:"1rem"}}>
      <Col style={{marginLeft:"4rem"}}>
        <Card bordered={true} style={{borderRadius:"5rem"}}>
          <Title level={4}>Check out trending categories</Title>
        </Card>
      </Col>
          </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginLeft:"2rem", marginTop:"0.5rem"}}>
      <Col className="gutter-row" span={6}>
        <Button shape="round" style={{width:"11rem"}}>Music</Button>
      </Col>
      <Col className="gutter-row" span={6}>
        <Button style={{width:"11rem"}} shape="round">Hobbies</Button>
      </Col>
      <Col className="gutter-row" span={6}>
        <Button style={{width:"11rem"}} shape="round">Business</Button>
      </Col>
      <Col className="gutter-row" span={6}>
        <Button style={{width:"11rem"}} shape="round">Games</Button>
      </Col>
      <Col className="gutter-row" span={6}>
        <Button style={{width:"11rem"}} shape="round">Food & Drink</Button>
      </Col>
      <Col className="gutter-row" span={6}>
        <Button style={{width:"11rem"}} shape="round">Performing Arts</Button>
      </Col> 
      <Col className="gutter-row" span={6}>
        <Button style={{width:"11rem"}} shape="round">Science</Button>
      </Col>
      <Col className="gutter-row" span={6}>
        <Button style={{width:"11rem"}} shape="round">Sports & Fitness</Button>
      </Col>
    </Row>
    </div>
  )
}

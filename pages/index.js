import Navbar from '../components/Navbar'
import Head from 'next/head'
import { Col,Row, Card ,Typography} from 'antd'
import NextImage from "next/image"
import img from "../public/redd-qMFSP1xYVTQ-unsplash.jpg"
const {Title} = Typography
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
    </div>
  )
}

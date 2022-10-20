import Head from 'next/head'
import NextImage from "next/image"
import { Col, Row, Card, Typography, Button} from 'antd'
import img from "../public/redd-qMFSP1xYVTQ-unsplash.jpg"
import { useEffect } from 'react'
const {Title} = Typography
export default function Home({events}) {
  useEffect(()=>{
    fetch("http://localhost:5000/eventcategories").then((resp)=> resp.json()).then((data)=> console.log(data))
  })
  function handleClick(){
    console.log("Hello guys")
  }
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
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginLeft:"2rem", marginTop:"0.5rem",}}>
          {
               events.map((event) => 
               { return(
                <Col className="gutter-row" span={6} style={{marginBottom:"1.5rem"}}>
                   <Button shape="round" style={{width:"11rem"}}onClick={handleClick}>{event.category}</Button>
                </Col>
               )})
          }
    </Row>
    </div>
  )
}
export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/eventcategories")
    const events = await res.json()
    return {
      props: {
        events
      }
    }
}


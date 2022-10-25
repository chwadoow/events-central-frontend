import { Col, Row } from "antd";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";

const SpecificEvent = () => {
  const [event, setEvent] = useState({});
  const router = useRouter();
  const {id} = router.query;

  return (
    <Row>
      <Col span={24}>
        <img 
        src="https://static.vecteezy.com/system/resources/previews/000/677/302/non_2x/abstract-technology-banner-background.jpg"
        alt="Tech"
        style={{
          width: "100%",
          height: "405px",
          display: "block"
        }}
        />
      </Col>

      <br />

      <Col span={24}>
        <Row>
          <Col span={12}>
            <div style={{ marginLeft: 40, width: "100%"}}>
              <h1 style={{fontWeight: "bolder", fontSize: 60}}>The Big 5 Construct Kenya</h1>
            </div>    
          </Col>
          <Col span={12}>
            <br />
            <div style={{textAlign: "center", width: "100%"}}>
              <p>Timer section</p>
            </div>
          </Col>
        </Row>
      </Col>

      <br />

      <Col span={24}>
        <Row>
          <Col span={12}>
            <Row >
              <Col span={6}>
                <div style={{ textAlign: "left", marginLeft: 40, fontFamily: "nunito", width: "100%"}}>
                  <h4 style={{fontWeight: "regular", fontSize: 30}}>Date</h4>
                  <p>19-12-2022</p>
                </div>
              </Col>
              <Col span={6}>
                <div style={{textAlign: "center", marginLeft: 100, fontFamily: "nunito", width: "100%"}}>
                  <h4 style={{fontWeight: "regular", fontSize: 30}}>Location</h4>
                  <p>Westgate Shopping Mall</p>
                </div> 
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <div style={{textAlign: "center", width: "100%"}}>
              <p>Ticket section</p>
            </div>
          </Col>
        </Row>
      </Col>

      <br />

      <Col span={24}>
        <br />
        <Row>
          <Col span={12}>
            <div style={{textAlign: "center", width: "100%"}}>
              <h2 style={{fontWeight: "bold", fontSize: 30}}>Event Details</h2>
            </div>
          </Col>
          <Col span={12}>
          <div style={{display: "inline-flex", width: "100%", justifyContent: "center", textAlign: "center"}}>
            <p>images section</p>
          </div>
        </Col>
        </Row>
      </Col>

    </Row>
  )
}

export default SpecificEvent;
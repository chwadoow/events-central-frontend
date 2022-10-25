import { Col, Row, Button, Modal } from "antd";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import BuyTicketForm from "../../../components/BuyTicketForm";

const SpecificEvent = () => {
  const [event, setEvent] = useState({});
  const router = useRouter();
  const {id} = router.query;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 500);
  };

  const handleCancel = () => {
    setOpen(false);
  };

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
              <h1 style={{fontWeight: "bolder", fontFamily: "nunito", fontSize: 60}}>The Big 5 Construct Kenya</h1>
            </div>    
          </Col>
          <Col span={12}>
            <br />
            <div style={{textAlign: "center", width: "100%" }}>
              <Row justify="center" align="middle" style={{marginTop: 30}}>
                <div style={{ border: 1, borderStyle: "solid", cursor: "pointer", borderRadius: 10, width: "40%"}}>
                  <h3 style={{fontWeight: "bold"}}>Early Booking Timer</h3>
                  <p>4m : 50s</p>
                </div>
              </Row>
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
          <div style={{textAlign: "center", width: "100%" }}>
              <Row justify="center" align="middle">
                <div style={{ border: 1, borderStyle: "solid", cursor: "pointer", borderRadius: 10, width: "40%"}}>
                  <h3 style={{fontWeight: "bold"}}>Attend Event</h3>
                  <button
                  style={{backgroundColor: "#d1410a", cursor: "pointer", width: "70%", margin: 20, color: "#fff", borderRadius: 10, height: 40, border: "none"}}
                  onClick={showModal}
                  >
                    Buy Ticket
                  </button>
                  <Modal
                    title="Pay with Mpesa"
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    footer="Bomboclat Events"
                  >
                    <BuyTicketForm loading={confirmLoading} onClick={handleOk}/>
                  </Modal>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Col>

      <br />

      <Col span={24}>
        <br />
        <Row>
          <Col span={12}>
            <div style={{textAlign: "center", width: "100%", fontFamily: "nunito"}}>
              <h2 style={{fontWeight: "bold", fontSize: 30}}>Event Details</h2>
              <br />
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
          </Col>
          <Col span={12}>
          <div style={{display: "inline-flex", fontFamily: "nunito", width: "100%", justifyContent: "center", textAlign: "center"}}>
            <Row justify="center" align="middle">
              <Col span={24}>
                <img 
                src="https://p4.wallpaperbetter.com/wallpaper/669/914/562/mobile-legends-mobile-legend-mlbb-hd-wallpaper-preview.jpg"
                alt="Tech"
                style={{
                  width: "100%",
                  height: "405px",
                  display: "block"
                }}
                />
              </Col>
            </Row>
          </div>
         </Col>
        </Row>
      </Col>

      <Col span={12}>
        <div style={{width: "100%"}}>
        <img 
          src="https://p4.wallpaperbetter.com/wallpaper/442/515/764/mobile-legends-moskov-twilight-dragon-hd-wallpaper-preview.jpg"
          alt="Tech"
          style={{
            width: "100%",
            height: "405px",
            display: "block"
          }}
          />
        </div>
      </Col>

    </Row>
  )
}

export default SpecificEvent;
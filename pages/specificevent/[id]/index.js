import { Col, Row, Modal, Divider, Button } from "antd";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import BuyTicketForm from "../../../components/BuyTicketForm";
import Script from "next/script";
import { gapi } from "gapi-script";

const SpecificEvent = () => {
  const session = JSON.parse(localStorage.getItem("session"));
  var CLIENT_ID = "447222188463-85lhlk9i68pmspkinnergh07j228n2i7.apps.googleusercontent.com";
  var API_KEY = "AIzaSyDSu0IfbznPAlKhL8LKY6YZuwItkfLwLvE";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const [eventOne, setEventOne] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [myTimer, setMyTimer] = useState({});
  
  useEffect(()=>{
      fetch(`http://localhost:3000/events/${id}`).then((response)=> response.json()).then((data)=> {
        setEventOne(data)
        setIsLoading(false)
      })
  },[]);

  useEffect(() => {
    startIt();
  });

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 300);
  };

  const handleAdd = () => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3");

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          var event = {
            summary: eventOne.title,
            location: eventOne.location,
            description: eventOne.description,
            colorId: "6",
            start: {
              dateTime: new Date(eventOne.event_start_date).toJSON(),
              timeZone: "Africa/Nairobi",
            },
            end: {
              dateTime: new Date(eventOne.event_end_date).toJSON(),
              timeZone: "Africa/Nairobi",
            },
          };

        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event
        })

        request.execute(event => {
          window.open(event.htmlLink)
        })
      })
    })
  }

  const startIt = () => {
    const myfunc = setInterval(function() {
      const countDownDate = new Date(eventOne.early_booking_end_date).getTime();
      var now = new Date().getTime();
      const timeleft = countDownDate - now;
          
      let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  
      setMyTimer({days: days, hours: hours, minutes: minutes, seconds: seconds})

      if (timeleft < 0){
        clearInterval(myfunc)
      }
  
    }, 1000)
    
  }
  

  const handleCancel = () => {
    setOpen(false);
  };

  if(isLoading === true) return (
    <Row justify="center" align="middle">
      <div style={{marginTop: "25%"}}>
        <div className="loader"></div>
      </div>
    </Row>
  )
  function handleBuyTicket(){
    if (session === null){
      message.info("Log in, to buy tickets")
      router.push("/login")
    }else{
      showModal()
    }
  }

  return (
    <>
      <Script src="https://apis.google.com/js/api.js" type="text/javascript" />

      <Row justify="center" align="middle">
        <Col span={24}>
          <img
            src={eventOne.banner_img_url}
            alt="Tech"
            style={{
              width: "100%",
              height: "405px",
              display: "block",
            }}
          />
        </Col>

        <br />

        <Col span={24}>
          <Row justify="center" align="middle">
            <Col span={24}>
              <Row justify="center" align="middle">
                <div>
                  <h1
                    style={{
                      fontWeight: "bolder",
                      fontFamily: "nunito",
                      fontSize: 60,
                    }}
                  >
                    {eventOne.title}
                  </h1>
                </div>
              </Row>
            </Col>
          </Row>
          <br />
        </Col>

        <Col span={24}>
            <Row justify="center" align="middle">
            <Col span={12}>
                <Row justify="center" align="middle">
                  {eventOne.early_timer > 0 ?
                  (<div style={{ textAlign: "left", fontFamily: "nunito" }}>
                    <h1 style={{ fontWeight: "bold", fontSize: 25 }}>Early Bird Tickets</h1>
                    <p style={{fontSize: 20,}}><b>Regular Tickets Price ($):</b> {eventOne.early_booking_price_regular}</p>
                    <p style={{fontSize: 20,}}><b>Vip Tickets Price ($):</b> {eventOne.early_booking_price_vip}</p>
                  </div>
                  ) : (
                    <div style={{ textAlign: "center", fontFamily: "nunito" }}>
                      <h1 style={{ fontWeight: "bold", fontSize: 25 }}>Regular Tickets</h1>
                      <p style={{fontSize: 20,}}>Regular Tickets ($): {eventOne.regular_price}</p>
                      <p style={{fontSize: 20,}}>Vip Tickets ($): {eventOne.vip_price}</p>
                    </div>
                  )
                  }
                </Row>
              </Col>
              <Col span={12}>
                <Row justify="center" align="middle" style={{ marginTop: 30 }}>
                  <div
                    style={{
                      textAlign: "center",
                      border: 1,
                      borderStyle: "solid",
                      cursor: "pointer",
                      borderRadius: 10,
                      width: "60%",
                    }}
                  >
                    <i><h3 style={{ fontWeight: "bold" }}>Early Booking Timer</h3></i>
                    <p style={{fontSize: 20}}><b>Date:</b> {new Date(eventOne.early_booking_end_date).toDateString()}</p>
                    <br />
                    <p style={{ color: "#d1410a", fontSize: 30 }}>
                      <b>
                        <i>
                          {eventOne.time_diff < 0 ? (
                            <p>Event has passed</p>
                          ) : (
                            `${myTimer.days}days ${myTimer.hours}hours ${myTimer.minutes}mins ${myTimer.seconds}secs`
                          )}
                        </i>
                      </b>
                    </p>
                  </div>
                </Row>
                <br />
              </Col>
              
            </Row>
            
          </Col>

        <br />

        <Col span={24}>
          <Row justify="center" align="middle">
            <Col span={12}>
              <Row justify="center" align="middle">
                <Col span={6}>
                  <Row justify="start" align="middle">
                    <div style={{ textAlign: "center", fontFamily: "nunito" }}>
                      <h4 style={{ fontWeight: "bold", fontSize: 25 }}>
                        Date
                      </h4>
                      <p style={{fontSize: 20,}}>
                        {new Date(eventOne.event_start_date).toDateString()}
                      </p>
                    </div>
                  </Row>
                </Col>
                &nbsp; &nbsp; &nbsp;
                <Col span={6}>
                  <Row justify="end" align="middle">
                    <div style={{ textAlign: "center", fontFamily: "nunito" }}>
                      <h4 style={{ fontWeight: "bold", fontSize: 25 }}>
                        Location
                      </h4>
                      <p style={{fontSize: 20,}}>{eventOne.location}</p>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <Row justify="center" align="middle">
                <br />
                <div
                  style={{
                    textAlign: "center",
                    border: 1,
                    borderStyle: "solid",
                    cursor: "pointer",
                    borderRadius: 10,
                    width: "40%",
                  }}
                >
                  <h3 style={{ fontWeight: "bold" }}>Add To Calendar</h3>
                  <Button
                  className="eventBtns"
                  style={{
                    backgroundColor: "#d1410a",
                    cursor: "pointer",
                    width: "70%",
                    margin: 20,
                    color: "#fff",
                    fontWeight: "bold",
                    borderRadius: 10,
                  }}
                  onClick={handleAdd}
                  >
                    Add
                  </Button>
                </div>
              </Row>
              <Row justify="center" align="middle">
                <div>
                  <p style={{ fontWeight: "bold" }}>
                    <i>
                      Allow Pop ups on your browser to add events to calendar
                    </i>
                  </p>
                </div>
              </Row>
            </Col>
          </Row>
        </Col>

        <br />

        <Col span={24}>
          <br />
          <Row>
            <Col span={12}>
              <div
                style={{
                  textAlign: "center",
                  marginLeft: 40,
                  width: "100%",
                  fontFamily: "nunito",
                }}
              >
                <h2 style={{ fontWeight: "bold", fontSize: 30 }}>
                  Event Details
                </h2>
                <br />
                <p>{eventOne.description}</p>
              </div>
            </Col>

            <Col span={12}>
              <div style={{ textAlign: "center", width: "100%" }}>
                <Row justify="center" align="middle">
                  <div
                    style={{
                      border: 1,
                      borderStyle: "solid",
                      cursor: "pointer",
                      borderRadius: 10,
                      width: "40%",
                    }}
                  >
                    <h3 style={{ fontWeight: "bold" }}>Attend Event</h3>
                    <Button
                      className="eventBtns"
                      style={{
                        backgroundColor: "#d1410a",
                        cursor: "pointer",
                        width: "70%",
                        margin: 20,
                        color: "#fff",
                        fontWeight: "bold",
                        borderRadius: 10,
                      }}
                      onClick={handleBuyTicket}
                    >
                      Buy Ticket
                    </Button>
                    <Modal
                      title="Pay with Mpesa"
                      open={open}
                      onOk={handleOk}
                      confirmLoading={confirmLoading}
                      onCancel={handleCancel}
                      footer="Bomboclat Events"
                    >
                      <BuyTicketForm
                        loading={confirmLoading}
                        onClick={handleOk}
                        event={eventOne}
                      />
                    </Modal>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>

        <Row>
          <Col span={24}>
            <Row>
              <div
                style={{
                  borderRadius: 20,
                  gap: 20,
                  justifyContent: "center",
                  display: "inline-flex",
                  flexDirection: "row",
                }}
              >
                <Col span={12}>
                  <div
                    style={{
                      display: "inline-flex",
                      fontFamily: "nunito",
                      width: "100%",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Row justify="center" align="middle">
                      <img
                        src={eventOne.first_img_url}
                        alt="Tech"
                        style={{
                          width: "100%",
                          height: "405px",
                          display: "block",
                          paddingTop: 30,
                        }}
                      />
                    </Row>
                  </div>
                </Col>

                <Col span={12}>
                  <div
                    style={{
                      display: "inline-flex",
                      fontFamily: "nunito",
                      width: "100%",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Row justify="center" align="middle">
                      <Col>
                        <img
                          src={eventOne.second_img_url}
                          alt="Tech"
                          style={{
                            width: "100%",
                            height: "405px",
                            display: "block",
                            paddingTop: 30,
                          }}
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </div>
            </Row>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default SpecificEvent;

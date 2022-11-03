import Link from "next/link";
import { Col, Card, Row } from "antd";

const HomePageEvents = ({events}) => {
  const filteredDates = events.filter((event)=> 
     (parseInt(event.time_diff) > 0)
    )

  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <div style={{ marginRight: 10, marginLeft: 10, borderRadius: 20, gap: 20, justifyContent: "center", flexWrap: "wrap", display: "inline-flex", flexDirection: 'row' }}>
          {filteredDates.map((event) => {
              return (
                <div key={event.id}>
                
                  <Link href={`/specificevent/${event.id}`}>
                      <div >

                        <Card className="homeCard" style={{ 
                          textAlign: "left", 
                          width: 280, 
                          height: 500, 
                          padding: 2, 
                          cursor: "pointer",
                          overflowY: "scroll"
                          }}

                          cover={<img alt={event.title} src={event.banner_img} height="200px"/>}
                          hoverable
                        >
                          <div>
                            <h1 style={{fontWeight: "bolder", fontSize: "15"}}>{event.title}</h1>
                            <p style={{fontSize: 15}}><b><i>Date</i></b></p>
                            <p>{new Date(event.event_start_date).toDateString()}</p>
                            <p style={{color: "#d1410a"}}>{event.time_diff < 0 ?
                              (<p>Event has passed</p>)
                              : (
                                <i>{event.time_diff + " days remaining"}</i>
                              )
                              }
                            </p>
                            <p style={{fontSize: 15}}><b><i>Location</i></b></p>
                            <p>{event.location}</p>
                          </div>
                          
                        </Card>

                      </div>
                  </Link>
                  &nbsp;
                  
                </div>
              );
          })}
        </div>
      </Col>
    </Row>
  );
};
export default HomePageEvents;


import Link from "next/link";
import { Col, Card, Row } from "antd";

const HomePageEvents = ({events}) => {
  var date = new Date()
  var currentDate = date.getTime()
  const filteredDates = events.filter((event)=> 
     (parseInt(((new Date(`${event.event_date}`.split("-").join("/")).getTime()) - currentDate )/(1000 * 60 * 60 * 24)) > 0)
    )

return (
    <Row>
      <Col span={24}>
        <div style={{ marginRight: 10, marginLeft: 10, borderRadius: 20, gap: 10, justifyContent: "center", flexWrap: "wrap", display: "inline-flex", flexDirection: 'row' }}>
          {filteredDates.map((event) => {
              return (
                <>
                  <Link href={`/events/${event.id}`}>
                    <div>

                      <Card style={{ textAlign: "center", width: 280, height: 50, padding: 2, cursor: "pointer", borderRadius: 10}}
                        cover={<img alt="example" src={event.image_url1} />}>
                      <p><b>{event.title}</b></p>
                      <p><b>{event.location}</b></p>
                      <p><b>{event.event_date}</b></p>
                      <p><b>{parseInt(((new Date(`${event.event_date}`.split("-").join("/")).getTime()) - currentDate )/(1000 * 60 * 60 * 24)) + " days remaining"}</b></p>
                      </Card>

                    </div>
                  </Link>
                  &nbsp;
                  &nbsp;
                </>
              );
          })}
        </div>
      </Col>
    </Row>
)
}
export default HomePageEvents;
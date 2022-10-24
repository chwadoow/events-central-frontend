import { Col, Card, Row } from "antd";
import Link from "next/link";

const HomePageEvents = ({events}) => {

return (
    <Row>
      <Col span={24}>
        <div style={{ marginRight: 10, marginLeft: 10, borderRadius: 20, gap: 10, justifyContent: "center", flexWrap: "wrap", display: "inline-flex", flexDirection: 'row' }}>
          {events.map((event) => {
              return (
                <>
                  <Link href={`/events/${event.id}`}>
                    <div>
                      <Card style={{ textAlign: "center", width: 280, height: 50, padding: 2, cursor: "pointer", borderRadius: 10}}>
                      <p><b>{event.title}</b></p>
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
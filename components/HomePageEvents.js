import { Col, Card, Row } from "antd";
import Link from "next/link";
import NextImage from "next/image";
import img from "../public/redd-qMFSP1xYVTQ-unsplash.jpg";
const HomePageEvents = ({events}) => {
console.log(events)
return (
    <Row>
      <Col span={24}>
        <div style={{ marginRight: 10, marginLeft: 10, borderRadius: 20, gap: 10, justifyContent: "center", flexWrap: "wrap", display: "inline-flex", flexDirection: 'row' }}>
          {events.map((event) => {
              return (
                <>
                  <Link href={`/events/${event.id}`}>
                    <div>
                    <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
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
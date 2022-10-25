import { Col,  Row } from "antd";
import Link from "next/link";
// import NextImage from "next/image";
// import img from "../public/redd-qMFSP1xYVTQ-unsplash.jpg";
import styles from '../styles/HomePage.module.css'



import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;
const HomePageEvents = ({events}) => {
// console.log(events)
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
      className={styles.tag}
    style={{
      width: 200,
   
      
      
    }}
    cover={
      <img
        alt="example"
        src={event.banner_img}
      />
    }
    // actions={[
    //   <SettingOutlined key="setting" />,
    //   <EditOutlined key="edit" />,
    //   <EllipsisOutlined key="ellipsis" />,
    // ]}
  >
    {event.id}
    <Meta
      // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={event.title}
      description= {event.location}
    />
   
    {event.event_date}
    
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
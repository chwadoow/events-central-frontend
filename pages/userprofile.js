import { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { Image } from "antd";
import { Carousel } from "antd";
import { Descriptions } from "antd";
import { Layout } from "antd";
import { Button } from "antd";

const { Header, Footer, Sider, Content } = Layout;
import { Empty } from "antd";

import { Table } from "antd";

import "antd/dist/antd.css";
const { Meta } = Card;

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
~function UserProfile(homebanners) {
  const [userProfile, setUserProfile] = useState([]);

  const [userData, setUserData] = useState("");
  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("session"));

    fetch(`http://localhost:3000/users/${session}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  console.log(userData);

  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <div style={{ float: "left" }}>{`Welcome  ${userData.username}`}</div>
          <div style={{ float: "right" }}>
            <EditOutlined />
            edit
          </div>
        </Header>

        <Layout>
          <Content style={{ backgroundColor: "#ffffff" }}>
            <Row>
              <Col
                span={12}
                style={{ textAlign: "center", columnRuleStyle: "dotted" }}
              >
                <Image src={userData.user_profile?.avatar_img} />
              </Col>

              <Col span={12} style={{ boxShadow: "  1px" }}>
                <Row>
                  <Col span={12}>
                    <Card
                      title={`Name: ${userData.user_profile?.full_name}`}
                      bordered={true}
                    >{`Email: ${userData.email}`}</Card>
                  </Col>

                  <Col span={12}>
                    <Card
                      title={`Phone Number: ${userData.user_profile?.phone_number}`}
                      bordered={true}
                    >{`Gender: ${userData.user_profile?.gender}`}</Card>
                  </Col>
                </Row>
                <Row style={{ marginTop: "3rem", justifyContent: "center" }}>
                  <Card
                    span={24}
                    bordered={true}
                  >{`Bio : ${userData.user_profile?.bio}`}</Card>
                </Row>
              </Col>
            </Row>
          </Content>
        </Layout>

        <Footer style={{ textAlign: "center", backgroundColor: "#ffffff" }}>
          <Button type="dashed" block>
            View attended events
          </Button>

          <br></br>

          <Row justify="center" align="middle">
            <Col span={24}>
              <div
                style={{
                  marginRight: 10,
                  marginLeft: 10,
                  borderRadius: 20,
                  gap: 20,
                  justifyContent: "center",
                  flexWrap: "wrap",
                  display: "inline-flex",
                  flexDirection: "row",
                }}
              >
                {userData ? (
                  userData.events.map((event) => {
                    return (
                      <div key={event.id}>
                        <div>
                          <Card
                            style={{
                              textAlign: "left",
                              width: 280,
                              maxHeight: 600,
                              padding: 2,
                              cursor: "pointer",
                            }}
                            cover={
                              <img
                                alt={event.title}
                                src={event.banner_img}
                                height="200px"
                              />
                            }
                            hoverable
                          >
                            <div>
                              <h1
                                style={{ fontWeight: "bolder", fontSize: "15" }}
                              >
                                {event.title}
                              </h1>

                              <p>{event.location}</p>
                            </div>
                          </Card>
                        </div>
                        &nbsp;
                      </div>
                    );
                  })
                ) : (
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                )}
              </div>
            </Col>
          </Row>
        </Footer>
      </Layout>
    </>
  );
};

export default UserProfile;

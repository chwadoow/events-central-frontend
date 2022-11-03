import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';

const About  = () => {
  const [communityData, setCommunityData] = useState([]);
  const [aboutUsData, setAboutUsData] = useState([]);
  const [randomIndexCommunity, setRandomIndex] = useState();
  const [randomIndexAbout, setRandomIndexAbout] = useState();

  useEffect(() => {
    changeCommunityImage()
  }, []);

  useEffect(() => {
    changeAboutImage()
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/api/communities`)
    .then(r => r.json())
    .then(data => setCommunityData(data))
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/api/abouts`)
    .then(r => r.json())
    .then(data => setAboutUsData(data))
  }, []);

  function changeAboutImage(){
    const randomNumber = Math.floor(Math.random() * aboutUsData.length);
    setRandomIndexAbout(randomNumber)
  }

  function changeCommunityImage(){
    const randomNumber = Math.floor(Math.random() * communityData.length);
    setRandomIndex(randomNumber)
  }

  return (
    <>
    
    <Row justify='center' align='middle'>

      <Col span={24}>
        <Col span={12}>
          <br />
          <div style={{
            display: "flex", justifyContent: "center", alignItems: "center", fontSize: 30, fontFamily: "nunito", fontWeight: "bolder"
            }}>
              <p>
                About Us
              </p>
          </div>
        </Col>
      </Col>
            
      <Col span={24}>
        <Row justify='center' align='middle'>
          <Col span={12}>
            <Row justify="center" align="middle">
              <img 
                src={aboutUsData[randomIndexAbout]?.about_img}
                alt={aboutUsData[randomIndexAbout]?.id}
                style={{
                  width: "70%",
                  height: "405px",
                  display: "block",
                  padding: 10,
                  borderRadius: 20
                }}
              />
            </Row>
          </Col>
          <Col span={12}>
            <Row justify='center' align='middle'>
              <p>{aboutUsData[randomIndexAbout]?.about_description}</p>

              <br />

              <button
              style={{backgroundColor: "#d1410a", cursor: "pointer", width: "50%", margin: 20, color: "#fff", borderRadius: 10, height: 40, border: "none"}}
              onClick={changeAboutImage}
              >
                See More
              </button>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Col span={12}>
          <br />
          <div style={{
            display: "flex", justifyContent: "center", alignItems: "center", fontSize: 30, fontFamily: "nunito", fontWeight: "bolder"
            }}>
              <p>
                Community Impact
              </p>
          </div>
        </Col>
      </Col>

      <Col span={24}>
        <Row justify='center' align='middle'>
          <Col span={12}>
            <Row justify="center" align="middle">
              <img 
              src={communityData[randomIndexCommunity]?.community_img}
              alt={communityData[randomIndexCommunity]?.id}
              style={{
                width: "70%",
                height: "405px",
                display: "block",
                padding: 10,
                borderRadius: 20
              }}
              />
            </Row>
          </Col>
          <Col span={12}>
            <Row justify='center' align='middle'>
              <p>{communityData[randomIndexCommunity]?.community_description}</p>

              <br />

              <button
              style={{backgroundColor: "#d1410a", cursor: "pointer", width: "50%", margin: 20, color: "#fff", borderRadius: 10, height: 40, border: "none"}}
              onClick={changeCommunityImage}
              >
                See More
              </button>
            </Row>
          </Col>
        </Row>
      </Col>

    </Row>
    </>
  );
};

export default About;
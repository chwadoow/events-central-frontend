import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';

const about  = () => {
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
    fetch(`/community`)
    .then(r => r.json())
    .then(data => setCommunityData(data))
  }, []);

  useEffect(() => {
    fetch(`/aboutus`)
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
                src="https://p4.wallpaperbetter.com/wallpaper/326/156/986/mobile-legends-hanzo-akuma-ninja-hd-wallpaper-preview.jpg"
                alt="Tech"
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
            description
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row justify='center' align='middle'>
          <Col span={12}>
            <Row justify="center" align="middle">
              <img 
              src="https://p4.wallpaperbetter.com/wallpaper/326/156/986/mobile-legends-hanzo-akuma-ninja-hd-wallpaper-preview.jpg"
              alt="Tech"
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
            description
          </Col>
        </Row>
      </Col>

    </Row>
  );
};

export default about;
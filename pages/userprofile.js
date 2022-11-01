import {useEffect,useState} from 'react'
import { Row, Col } from 'antd';
import { Image } from 'antd';
import { Carousel } from 'antd';
import { Descriptions } from 'antd';




import 'antd/dist/antd.css';
const { Meta} = Card;

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';


function UserProfile() {
const [user,setUser]=useState(null)
const [userProfile,setUserProfile]=useState([])
    useEffect(() => {
      // getter
 setUser(  JSON.parse(window.localStorage.getItem('session')));   

{user ?
 fetch(`http://localhost:3000/user_profiles/${user.id}`)
 .then(response => response.json())
 .then((data)=> {
setUserProfile(data)
 })
 :console.log("not yet")}
 

    }, [])




  






  return (
    <>
    <Row>
    <Col 
    style={{width: "100%"}}  >
  <Card
    style={{
      width: '100%' ,
    }}

  >
    <Avatar src="https://joeschmoe.io/api/v1/random" />
    
  </Card>
    </Col>
   
    
  </Row>

  <Row
    style={{
      width: "100%",
      textAlign: 'center'
      
  
    }}
  >
  <Descriptions
      title="Hello,welcome to your profile info"
      bordered
      column={{
        xxl: 6,
        xl: 3,
        lg: 3,
        md: 3,
        sm: 2,
        xs: 1,
      }}
      style={{
        width: "130%"
      }}
    >
      <Descriptions.Item label="name">{userProfile.full_name} </Descriptions.Item>
      <Descriptions.Item label="gender">{userProfile.gender}</Descriptions.Item>
      <Descriptions.Item label="phone">{userProfile.phone_number}</Descriptions.Item>
      <Descriptions.Item label='email'>{userProfile.email}</Descriptions.Item>
      <Descriptions.Item label="bio">{userProfile.bio}</Descriptions.Item>
     
 
    </Descriptions>


  </Row>
     <Row>
     {/* <Col xs={20} sm={20} md={20} lg={20} xl={20}
 >
   <Card
    //  style={{
    //    width: '70%' ,
    //  }}
 
   >
   Edit
     
   </Card>
     </Col> */}
     <Col xs={24} sm={24} md={24} lg={24} xl={24}
    >
   <Card
     style={{
       textAlign: "center"
     }}
 
   >
   <EditOutlined/>
   Edit
     
   </Card>
     </Col>
    
     
   </Row>


   <Row
  //     style={{
  //   textAlign: "center"
  // }}
   >
<Col   


>
    <p>past Events</p>














    
    </Col>
   </Row>
   </>
  )
}

export default UserProfile
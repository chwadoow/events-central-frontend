// import {useEffect,useState} from 'react'
// import { Row, Col } from 'antd';
// import { Image } from 'antd';
// import { Carousel } from 'antd';
// import { Descriptions } from 'antd';
// import { Layout } from 'antd';
// import { Button } from 'antd';

// const { Header, Footer, Sider, Content } = Layout;
// import { Empty } from 'antd';

// import { Table } from "antd";


// import 'antd/dist/antd.css';
// const { Meta} = Card;

// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
// import { Avatar, Card } from 'antd';


// function UserProfile( homebanners) {

// const [userProfile,setUserProfile]=useState([])

// const[userData,setUserData]=useState('')

  
// const [user, setUser] = useState({})
// useEffect(()=>{
//   const session = JSON.parse(localStorage.getItem("session"))



//   fetch(`http://localhost:3000/user_profiles/${session}`)
//  .then(response => response.json())
//  .then((data)=> {
// setUserProfile(data)
//  })

// },[])

// useEffect(()=>{

//   const session = JSON.parse(localStorage.getItem("session"))

// fetch(`http://localhost:3000/users/${session}`)
// .then(response => response.json())
// .then((data)=> {
// setUserData(data)})},[])



// console.log(userData.events)

//   return (
//     <>

// <Layout  >
//       <Header  style={{backgroundColor: "white"}}>

// <div    style={{float: "left"}}>

//   Welcome 
// </div>

// <div   style={{float: "right"}}>

// <EditOutlined/>
// edit

// </div>


//       </Header>


//       <Layout>


//  <Content   style={{backgroundColor: "#ffffff"}}>

//  {/* <Row >
//         <Col span={24}>
//           <Carousel 
//           autoplay
//           autoplaySpeed={3000}
//           easing
//           effect="scrollx"
//           dots={false}
//           draggable
//           pauseOnHover={true}
//           >
              
             
//                   <>
//                     <img 
//                       src={'https://p4.wallpaperbetter.com/wallpaper/562/719/645/bar-club-dance-dancing-wallpaper-preview.jpg'}
                   
//                       style={{
//                         width: "100%",
//                         height: "50vh",
//                         padding: '10px'
//                       }}
//                     />
//                   </>
                
//           </Carousel>
//         </Col>
//       </Row> */}

//       <Row >

// <Col span={24} style={{textAlign:'center',columnRuleStyle: 'dotted'}}>
 
// <Image src={userProfile.avatar_img}/>

// </Col>

// <Col span={24}  style={{  boxShadow:'  1px'}}>

//     <Row>
//         <Col span={12}>
//             <Card title="name" bordered={true}   >
//                        {userProfile.full_name}
//             </Card>

//         </Col>
       
//         <Col span={12}>
//             <Card title="phone" bordered={true}>
//                        {userProfile.phone_number}
//             </Card>

//         </Col>
//       </Row>
//       <Row>
//         <Col span={12}>
//             <Card title="gender" bordered={true}>
//                        {userProfile.gender}
//             </Card>

//         </Col>

//         <Col span={12}>
//             <Card title="bio" bordered={true}>
//                        {userProfile.bio}
//             </Card>

//         </Col>
//       </Row>




// </Col>



// </Row> 

  

//  </Content>
//       </Layout>


//       <Footer
//         style={{textAlign:'center', 
//         backgroundColor: '#ffffff' }}>

// <Button type="dashed" block  >
//       View attended events
//     </Button>

// <br></br>



//     <Row justify="center" align="middle">
//       <Col span={24}>
//         <div style={{ marginRight: 10, marginLeft: 10, borderRadius: 20, gap: 20, justifyContent: "center", flexWrap: "wrap", display: "inline-flex", flexDirection: 'row' }}>
//           {userData? userData.events.map((event) => {
//               return (
//                 <div key={event.id}>
                
                 
//                       <div >

//                         <Card style={{ 
//                           textAlign: "left", 
//                           width: 280, 
//                           maxHeight: 600, 
//                           padding: 2, 
//                           cursor: "pointer",
//                           }}

//                           cover={<img alt={event.title} src={event.banner_img} height="200px"/>}
//                           hoverable
//                         >
//                           <div>
//                             <h1 style={{fontWeight: "bolder", fontSize: "15"}}>{event.title}</h1>
                         
                           
                              
                           
//                             <p>{event.location}</p>
//                           </div>
                          
//                         </Card>

//                       </div>
               
//                   &nbsp;
                  
//                 </div>
//               );
//           }) :  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
//         </div>
//       </Col>
//     </Row>
      
//       </Footer>
//     </Layout>
  

//     </>
//   )
// }

// export default UserProfile



// {/* 
//  <Row >

//       <Col span={7} style={{textAlign:'center'}}>
//       <Image src={userProfile.avatar_img}/>
      
//       </Col>

//       <Col span={14}  style={{  boxShadow:'  2px 2px 2px 2px'}}>

//           <Row>
//               <Col span={12}>
//                   <Card title="name" bordered={true}   >
//                              {userProfile.full_name}
//                   </Card>

//               </Col>
             
//               <Col span={12}>
//                   <Card title="phone" bordered={true}>
//                              {userProfile.phone_number}
//                   </Card>

//               </Col>
//             </Row>
//             <Row>
//               <Col span={12}>
//                   <Card title="gender" bordered={true}>
//                              {userProfile.gender}
//                   </Card>

//               </Col>

//               <Col span={12}>
//                   <Card title="bio" bordered={true}>
//                              {userProfile.bio}
//                   </Card>

//               </Col>
//             </Row>




//       </Col>


      
// </Row> */}

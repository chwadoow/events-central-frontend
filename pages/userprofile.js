import {useEffect,useState} from 'react'
import { Row, Col } from 'antd';
import { Image } from 'antd';
import { Carousel } from 'antd';
import { Descriptions } from 'antd';
import { Layout } from 'antd';
import { Button } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
import { Empty } from 'antd';

import { Table,Form , Input} from "antd";


import 'antd/dist/antd.css';
const { Meta} = Card;

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';


function UserProfile( homebanners) {

  const [showForm,setShowForm]= useState(true)

const [userProfile,setUserProfile]=useState([])

const[userData,setUserData]=useState('')

const [formData, setFormData] = useState({
full_name:"",
phone_number:'',
gender:"",
avatar_img:"",
bio:"",
user_id:""
})

  
const [user, setUser] = useState({})
useEffect(()=>{
  const session = JSON.parse(localStorage.getItem("session"))



  fetch(`http://localhost:3000/user_profiles/${session}`)
 .then(response => response.json())
 .then((data)=> {
setFormData(data)
 })

},[])

useEffect(()=>{

  const session = JSON.parse(localStorage.getItem("session"))

fetch(`http://localhost:3000/users/${session}`)
.then(response => response.json())
.then((data)=> {
setUserData(data)})},[])



console.log(formData)

function handleChange(e){
  setFormData({
      ...formData, [e.target.name]: e.target.value,
  });
}


function handleSubmit(e){
  e.preventDefault();
 
		fetch(`http://localhost:3000/user_profiles/${userData.id}`, {
			method: 'PUT',
			body: JSON.stringify({
full_name: formData.full_name,
gender: formData.gender,
phone_number: formData.phone_number,
bio: formData.bio,
user_id: formData.user_id,
avatar_img: formData.avatar_img
			}),
			headers: {
			  "Content-type": "application/json"
			}
		}).then(response => {
						return response.json()
		}).then(json => {
			console.log(json)
		setFormData(json)
    setShowForm(!showForm)
			});
		}
  





  return (
    <>

{   showForm ?
<>

<Layout  >
      <Header  style={{backgroundColor: "white"}}>

<div    style={{float: "left"}}>

  Welcome 
</div>

<div   style={{float: "right"}}>
<Button  onClick={e=>setShowForm(!showForm)}> 
<EditOutlined/>
edit
</Button>

</div>


      </Header>


      <Layout>


 <Content   style={{backgroundColor: "#ffffff"}}>


      <Row >

<Col span={24} style={{textAlign:'center',columnRuleStyle: 'dotted'}}>
 
<Image src={formData.avatar_img} />

</Col>

<Col span={24}  style={{  boxShadow:'  1px'}}>

    <Row>
        <Col span={12}>
            <Card title="name" bordered={true}   >
                       {formData.full_name}
            </Card>

        </Col>
       
        <Col span={12}>
            <Card title="phone" bordered={true}>
                       {formData.phone_number}
            </Card>

        </Col>
      </Row>
      <Row>
        <Col span={12}>
            <Card title="gender" bordered={true}>
                       {formData.gender}
            </Card>

        </Col>

        <Col span={12}>
            <Card title="bio" bordered={true}>
                       { formData.bio}
            </Card>

        </Col>
      </Row>




</Col>



</Row> 

  

 </Content>
      </Layout>


      <Footer
        style={{textAlign:'center', 
        backgroundColor: '#ffffff' }}>

<Button type="dashed" block  >
      View attended events
    </Button>

<br></br>



    <Row justify="center" align="middle">
      <Col span={24}>
        <div style={{ marginRight: 10, marginLeft: 10, borderRadius: 20, gap: 20, justifyContent: "center", flexWrap: "wrap", display: "inline-flex", flexDirection: 'row' }}>
          {userData? userData.events.map((event) => {
              return (
                <div key={event.id}>
                
                 
                      <div >

                        <Card style={{ 
                          textAlign: "left", 
                          width: 280, 
                          maxHeight: 600, 
                          padding: 2, 
                          cursor: "pointer",
                          }}

                          cover={<img alt={event.title} src={event.banner_img} height="200px"/>}
                          hoverable
                        >
                          <div>
                            <h1 style={{fontWeight: "bolder", fontSize: "15"}}>{event.title}</h1>
                         
                           
                              
                           
                            <p>{event.location}</p>
                          </div>
                          
                        </Card>

                      </div>
               
                  &nbsp;
                  
                </div>
              );
          }) :  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        </div>
      </Col>
    </Row>
      
      </Footer>
    </Layout>
    </>

    : 
    
<>





<Form
            layout="vertical"
            size='default'
            onSubmit={(e) => handleSubmit(e)}
            style={{width: "100%", marginLeft: "30%", marginRight: "30%"}}
            >

                <Form.Item
                  label="full Name"
                  style={{width: "100%"}}
                  required
                >
                  <Input onChange={handleChange} value={formData.full_name} name="full_name" placeholder="eg. Joe Doe"/>
                </Form.Item>



                <Form.Item
                  label="phone"
                  style={{width: "100%"}}
                  required
                >
                  <Input onChange={handleChange} value={formData.phone_number} name="phone_number" placeholder="eg. Joe Doe"/>
                </Form.Item>

                <Form.Item
                  label="bio"
                  style={{width: "100%"}}
                  required
                >
                  <Input onChange={handleChange} value={formData.bio} name="bio" placeholder="enter your bio"/>
                </Form.Item>


                <Form.Item 
                label="gender"
                style={{width: "100%"}}
                required
                >
                  <select
                  name='gender'
                  onChange={handleChange}
                  style={{width: "100%"}}
                  >
                    <option value="">--Please choose your gender--</option>
                    
                        <option value='male' >male</option>
                        <option value='female' >female</option>
                  
                  </select>
                </Form.Item>

                    <Form.Item 
                    style={{width: "30%"}}
                    >
                      <Button 
                      type='submit'
                      onClick={(e) => handleSubmit(e)}
                      style={{width: "100%", 
                      backgroundColor: "#d1410a", 
                      color: "#fff",
                      height: 50,
                      borderRadius: 10
                      }}>
                        Submit
                      </Button>
                    </Form.Item>













            </Form>


</>



    
    
    
    
    
    
    
    
    }
  

    </>
  )
}

export default UserProfile





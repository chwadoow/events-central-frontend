import { useRouter } from 'next/router'
import {Button,Cascader,Checkbox,DatePicker,TimePicker,Form,Input,InputNumber,Radio,Select,Switch,TreeSelect} from 'antd';
import  { useEffect, useState } from 'react';
//import {Button,Cascader,DatePicker,TimePicker,Form,Input,InputNumber,Radio,Select,Switch,TreeSelect} from 'antd';
import moment from 'moment';
const { option } = Select;
import { Col, Row } from 'antd';

function event() {

  let router= useRouter()
  // condition base redirecting
 //   function redirect() {
 //     router.push('/login')
 //   }

  const [formData, setFormData] = useState({
    event_date: '',
    event_time: '',
    early_booking_end_date: '',
    early_booking_end_time: '',
    early_booking_price_regular: '',
    early_booking_price_vip: '',
    location: '',
    regular_price: '',
    vip_price: '',
    vip_no_of_tickets: '',
    regular_no_of_tickets: '',
    banner_img: '',
    description:'',
    image_url1:'',
    image_url2:'',
    category_id:'',
    title:''
    })

//  useEffect(()=>{
//    fetch('http://localhost:3000/auth')
//    .then(res=>{
//      if(res.status === 401){
//        router.push('/login')
//      }
//    })
//  });
 function handleSubmit(e){
       e.preventDefault()
       fetch(`http:localhost:3000/events`, {
           method: "POST",
           headers: {
               "Content-Type" : "application/json"
           },
           body: JSON.stringify(formData),
       })
       .then((r) => r.json())
       .then((data) => console.log(data))
       setFormData(
           {
             event_date: '',
             event_time: '',
             early_booking_end_date: '',
             early_booking_end_time: '',
             early_booking_price_regular: '',
             early_booking_price_vip: '',
             location: '',
             regular_price: '',
             vip_price: '',
             vip_no_of_tickets: '',
             regular_no_of_tickets: '',
             banner_img: '',
             description:'',
             image_url1:'',
             image_url2:'',
             category_id:'',
             title:''
           }
       )
   }
        // function for handling input of data.
       function handleChange(e){
         setFormData({...formData, [e.target.name]: e.target.value});
     }


  return (
    <>
      <div style={{ maxWidth: '1200px', margin: 'auto' }}>
          <Row gutter={[48, 8]} align="left" justify='space-around'>
              <Col span={12}>
                  <img src="https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" style={{ width: '300px' }} />
              </Col>
              </Row>
              </div>

              <Form.Item
              label="category_id"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
              
            </Form.Item>
            <Form.Item
              label="event_date"
              name=""
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <input type='date' onChange={handleChange}name='event_date' value={formData.event_date}/>
      
            </Form.Item>
            <Form.Item
            label="event_time"
            name="set time"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
            <input type='time' value={formData.event_time} size="large" onChange={handleChange}name='event_time' />
            
      
            </Form.Item>
      
            <Form.Item
            label="ticket_format"
            name="set format"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
            <Input.Password />
            
      
            </Form.Item>
            <Form.Item
            label="earling_booking_end_date"
            name="set date"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
            <input type='date'  onChange={handleChange}name='early_booking_end_date' />
            
      
            </Form.Item>
      
            <Form.Item
            label="early_booking_price_vip"
            name="price"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
            <input  type='integer' value={formData.early_booking_price_regular}  onChange={handleChange}name='early_booking_price_regular'/>
            
      
            </Form.Item>
      
            <Form.Item
            label="location"
            name="set location"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
            <Input.Password />
            
      
            </Form.Item>
      
            <Form.Item
            label="regular_price"
            name="set time"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
            <Input.Password />
            
      
            </Form.Item>
      
            <Form.Item
            label="vip_price"
            name="vip_price"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
            <Input.Password />
            
      
            </Form.Item>
      
      
            <Form.Item
            label="vip_no_of_tickets"
            name="vip_no_of_tickets"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
            <Input.Password />
            
      
            </Form.Item>
      
      
            <Form.Item
            label="regular_no_of_tickets"
            name="regular_no_of_tickets"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
            <Input.Password />
            
      
            </Form.Item>
      
      
            <Form.Item
            label="banner_image"
            name="banner_image"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
            <Input.Password />
            </Form.Item>
      
            <Form.Item
            label="description"
            name="description"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
            <Input.Password />
            </Form.Item>
      
            <Form.Item
            label="image_url1"
            name="image_url1"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
            <Input.Password />
            </Form.Item>
      
            <Form.Item
            label="image_url2"
            name="image_url2"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
            <Input.Password />
      
            
      
            </Form.Item>
      
      
            
      
      
            <Form.Item
              name="remember"
              valuePropName="checked"
              // wrapperCol={{
              //   offset: 8,
              //   span: 16,
              // }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item
              // wrapperCol={{
              //   offset: 8,
              //   span: 16,
              // }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>


</>
  )}
export default event;
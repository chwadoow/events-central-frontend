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
    <div className='containerr'>
      <div className='row1'>
        <img src="https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" style={{ width: '300px' }} />
      </div>
      <div className='row2'>

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
        <select onChange={handleChange}name="category_id" >
        <option value="1">Music</option>
        <option value="2">Business</option>
        <option value="3">Games</option>
        <option value="4">Hobbies</option>
        <option value="5">Food & Drink</option>
        <option value="6">Performing Arts</option>
        <option value="7">Sciences</option>
        <option value="8">Sport & Fitness</option>
      </select>
          
          
          
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
        label="early_booking_price_regular"
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
        label="early_booking_price_vip"
        name="price"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
        <input value={formData.early_booking_price_vip}  onChange={handleChange} name='early_booking_price_vip'/>
        
      
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
        <Input value={formData.location} onChange={handleChange} name='location'/>
        
        
      
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
        <input value={formData.regular_price} onChange={handleChange}name='regular_price' />
        
      
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
        <input value={formData.vip_price} onChange={handleChange}name='vip_price' />
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
        <input value={formData.vip_no_of_tickets} onChange={handleChange}name='vip_no_of_tickets' />
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
        <input value={formData.regular_no_of_tickets} onChange={handleChange}name='regular_no_of_tickets'  />
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
        <Input  value={formData.banner_img}onChange={handleChange}name='banner_img' />
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
        <Input  value={formData.description}onChange={handleChange} name='description' />
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
        <Input  value={formData.image_url1}onChange={handleChange}name='image_url1' />
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
        <Input value={formData.image_url2} onChange={handleChange}name='image_url2'/>
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
      </div>
    </div>
    
    // <row>
    //   <div style={{ maxWidth: '1200px', margin: 'auto' }}>
    //       <Row gutter={[48, 8]} align="middle" justify='space-around'>
    //           <Col span={12}>
    //           </Col>
    //           </Row>
    //           </div>
    //           </row>
              
              // display:flex
              // column:

              // <div>
              

            </div>
</>
  )}
export default event;
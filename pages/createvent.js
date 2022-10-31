import { Col, Row, DatePicker, Form, Input, Select, Button } from 'antd'
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect, useState } from 'react'

const createvent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryData, setCategoryData] = useState({});

  useEffect(()=>{
    fetch(`http://localhost:3000/categories`)
    .then(response => response.json())
    .then((data)=> {
      setCategoryData(data)
      setIsLoading(false)
    })
  },[])

  if(isLoading === true) return (
    <Row justify="center" align="middle">
      <div style={{marginTop: "25%"}}>
        <div className="loader"></div>
      </div>
    </Row>
  )

  return (
    <div>
      <Col span={24}>
        <Row justify='center' align='middle'>
          <div style={{ textAlign: "center"}}>
            <h1 style={{ fontWeight: "bolder", fontSize: 15}}><i>Register your Event</i></h1>
          </div>
        </Row> 
      </Col>
      <Col span={24}>
        <Form 
        layout="vertical"
        size='small'
        >
          <Row justify='center' align='middle'>

            <Col span={12}>
              <Row justify='center' align='middle'>
                <Form.Item 
                label="Category"
                style={{width: "70%"}}
                required
                name="category_id"
                >
                  <Select>
                    {categoryData.map((category) => {
                      return (
                        <Select.Option value={category.id}>{category.title}</Select.Option>
                      )
                    })}
                  </Select>
                </Form.Item>
                <br />
                <Form.Item
                  label="Event Title"
                  name="title"
                  style={{width: "70%"}}
                  rules={[
                    {
                      required: true,
                      message: 'Please input the Event Title',
                    },
                  ]}
                >
                  <Input placeholder="eg. BDO tournament"/>
                </Form.Item>
                <br />
                <Form.Item 
                label="Event Starting Date"
                style={{width: "70%"}}
                required
                name="event_start_date"
                >
                  <DatePicker style={{width: "100%"}} showTime/>
                </Form.Item>
                <br />
                <Form.Item 
                label="Event Ending Date"
                style={{width: "70%"}}
                required
                name="event_end_date"
                >
                  <DatePicker style={{width: "100%"}} showTime/>
                </Form.Item>
                <br />
                <Form.Item 
                label="Early Booking End Date"
                style={{width: "70%"}}
                required
                name="early_booking_end_date"
                >
                  <DatePicker style={{width: "100%"}} showTime/>
                </Form.Item>
                <br />
                <Form.Item 
                label="Early Regular Booking Ticket Price ($)"
                style={{width: "70%"}}
                required
                name="early_booking_price_regular"
                >
                  <Input type='number'/>
                </Form.Item>
                <br />
                <Form.Item 
                label="Early Vip Booking Ticket Price ($)"
                style={{width: "70%"}}
                required
                name="early_booking_price_vip"
                >
                  <Input type='number'/>
                </Form.Item>
                <br />
                <Form.Item 
                label="Regular Price ($)"
                style={{width: "70%"}}
                required
                name="regular_price"
                >
                  <Input type='number'/>
                </Form.Item>

              </Row>
            </Col>

            <Col span={12}>
              <Row justify='center' align='middle'>
                <Form.Item 
                  label="Vip Price ($)"
                  style={{width: "70%"}}
                  required
                  name="vip_price"
                  >
                    <Input type='number'/>
                </Form.Item>
                <br />
                <Form.Item 
                label="Vip Ticket Number"
                style={{width: "70%"}}
                required
                name="vip_no_of_tickets"
                >
                  <Input type='number'/>
                </Form.Item>
                <br />
                <Form.Item 
                label="Regular Ticket Number"
                style={{width: "70%"}}
                required
                name="regular_no_of_tickets"
                >
                  <Input type='number'/>
                </Form.Item>
                <br />
                <Form.Item 
                label="Description"
                style={{width: "70%"}}
                required
                name="description"
                >
                  <TextArea rows={4} />
                </Form.Item>
                <br />
                <Form.Item 
                label="Banner Image"
                style={{width: "70%"}}
                required
                name="banner_img"
                >
                  <Input type='text'/>
                </Form.Item>
                <br />
                <Form.Item 
                label="Image Url"
                style={{width: "70%"}}
                required
                name="image_url1"
                >
                  <Input type='text'/>
                </Form.Item>
                <br />
                <Form.Item 
                label="Second Image Url"
                style={{width: "70%"}}
                required
                name="image_url2"
                >
                  <Input type='text'/>
                </Form.Item>

              </Row>
            </Col>

          </Row>
          <Col span={24}>
            <Row justify='center' align='middle'>
              <Form.Item 
              style={{width: "30%"}}
              >
                <Button style={{width: "100%", 
                backgroundColor: "#d1410a", 
                color: "#fff",
                height: 30,
                borderRadius: 10
                }}>
                  Submit
                </Button>
              </Form.Item>
            </Row>
          </Col>

        </Form>
      </Col>
    </div>
  )
}

export default createvent
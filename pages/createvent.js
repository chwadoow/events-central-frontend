import React from 'react'
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import image from "next/image";



function text() {
    return (
        <div style={{ maxWidth: '5000px', margin: 'auto' }}>
            <Row gutter={[78, 40]} align="middle" justify='space-around'>
                <Col span={12}>
                    <img src="https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" style={{ width: '300px' }} />
                </Col>
                <Col span={12}>
                    <Form
    layout='vertical'
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
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
        <Input.Password />

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
      <Input.Password />
      

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
      <Input.Password />
      

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
      <Input.Password />
      

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
    </Form>
                </Col>
            </Row>
        </div>
    )
}
export default text
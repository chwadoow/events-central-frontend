import React from 'react'
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
function text() {
    return (
        <div style={{ maxWidth: '1200px', margin: 'auto' }}>
            <Row gutter={[48, 8]} align="middle" justify='space-around'>
                <Col span={12}>
                    <img src="https://picsum.photos/200" alt="" style={{ width: '300px' }} />
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
        label="Username"
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
        label="Password"
        name="password"
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
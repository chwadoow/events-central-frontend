import Link from "next/link"
import { Col, Row, Form, Input, Button, Checkbox } from 'antd';
import React, { useState } from "react";
import {router} from "next/router"


function Login(){

  //defining states 
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }; 


// will handle POST
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };


    return <Row>
      <Col xs={24} md={12}>
      <div className="illustration-wrapper">
          <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login"/>
        </div>
        
      </Col>

      <Col xs={24} md={12}>
      <Form 
          name="login-form"
        >
          <p className="form-title">LOG IN</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder="Username"
              // value={formData.username}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password 
              placeholder="Password"
              // value={formData.password}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button  
             onClick={handleSubmit}
             type="submit"
            // htmlType="submit" 
            className="login-form-button">
              LOGIN
            </Button>
          </Form.Item>
          <p>Dont have an account?<Link href="/signup">Sign Up</Link></p>
        </Form>
      </Col>
    </Row>
    }
    export default Login
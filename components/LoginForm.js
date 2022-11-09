import { Button, Col, Form, Input, message, Row } from 'antd'
import React, { useState } from 'react'
import { useRouter } from 'next/router';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const router = useRouter();

  function handleChange(e){
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:3000/users/sign_in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: formData.email,
          password: formData.password,
        }
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          window.localStorage.setItem('jti', JSON.stringify(user.status.data.jti));
          window.localStorage.setItem('session', JSON.stringify(user.status.data.id));

          message.success("successfully logged in!")

          router.push("/");
        });
      } else {
        res.json().then((err) => setErrors(err.status.errors));
      }
    });
    
  }
  
  return (
    <div>
      <Col span={24}>
        <Row justify='center' align='middle'>
          <Form
          layout="vertical"
          size='default'
          // onSubmit={(e) => handleSubmit(e)}
          style={{width: "100%"}}
          >
            <p style={{fontWeight: "bolder", fontSize: 50}}>Login</p>
            <p style={{fontWeight: "bold", color: "#545563", fontSize: 14}}>Sign in with the data you entered during your registration</p>

            <Form.Item 
            label="Email"
            style={{width: "100%"}}
            required
            >
              <Input name="email" onChange={handleChange} 
              value={formData.email} 
              placeholder='example@gmail.com' type='email'/>
            </Form.Item>

            <Form.Item 
            label="Password"
            style={{width: "100%"}}
            required
            >
              <Input.Password name="password" onChange={handleChange} 
              value={formData.password} 
              />
            </Form.Item>

            <Col span={24}>
              <Row justify='center' align='middle'>
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
              </Row>
            </Col>

          </Form>
        </Row>
      </Col>
    </div>
  )
}

export default LoginForm
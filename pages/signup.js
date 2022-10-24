import Link from "next/link"
import { Form, Input, Button, Checkbox } from 'antd';
import React, {useState} from 'react';
import { useRouter } from "next/router";


function SignUp(){
    
  // setting states
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  //defining onclick function 
  const handleChange = (e) => { 
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  function handleSubmit(e) {
    e.preventDefault();

    const userCreds = { ...formData };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    }).then((res) => {
      if (res.ok) {
        res.json().then(
          (user) => {
          setCurrentUser(user);
        }
        );
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

    return (
        <> 
       <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login"/>
        </div>
        <Form
          name="login-form"
        >
          <p className="form-title">SIGN UP </p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            
          >
            <Input
              placeholder="Username" 
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            name="email" 
            rules={[{ required: true, message: 'Please input your email address!' }]} 
            
          >
            <Input
              placeholder="Email Address" 
              onChange={handleChange} 
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            
          >
            <Input.Password 
              placeholder="Password"
              onChange={handleChange}  
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button  
               onClick={handleSubmit} 
              type="submit" className="login-form-button">
              SIGN UP 
            </Button>
          </Form.Item>
          <p>If you have an account?<Link href="/login">Log in</Link></p>
        </Form>
      </div>
    </div>
            
        </>      
    )
    }
    export default SignUp
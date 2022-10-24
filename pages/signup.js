import Link from "next/link"
import { Form, Input, Button, Checkbox } from 'antd';
import React, {useRef} from 'react';
import { useRouter } from "next/router";


function SignUp(){
    
  // setting states
  const router = useRouter();
  const usernameInput = useRef();
  const passwordInput = useRef();

  //defining the handle submit function 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = usernameInput.current.value;
    const password = passwordInput.current.value;

    //the users table in the backend has a create action that will act as a sign up 
    const response = await fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }) 
    });

    if (response.ok) {
      return router.push("/login");
    }
  };


    return (
        <> 
       <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login"/>
        </div>
        <Form
          onSubmit={handleSubmit} 
          name="login-form"
        >
          <p className="form-title">SIGN UP </p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            
          >
            <Input
              placeholder="Username"
              ref={usernameInput}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            
          >
            <Input.Password 
              placeholder="Password"
              ref={passwordInput} 
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button  htmlType="submit" className="login-form-button">
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
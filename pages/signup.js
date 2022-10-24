import Link from "next/link"
import { Form, Input, Button, Checkbox } from 'antd';
import React, {useRef} from 'react';
import { useRouter } from "next/router";


function SignUp(){
    
  // setting states
  const router = useRouter();
  const emailInput = useRef();
  const passwordInput = useRef();


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
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password 
              placeholder="Password"
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
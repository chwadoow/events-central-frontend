import Link from "next/link"
import { Form, Input, Button, Checkbox } from 'antd';
import React, {useRef} from 'react';
import { useRouter } from "next/router";


function SignUp(){
    
  // setting states
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 

  //handlesubmit function definition

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((r) => r.json())
      .then(r => console.log(r));
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
            <Button  
               onSubmit={handleSubmit} 
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
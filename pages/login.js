import Link from "next/link"
import {useState} from "react"
import { Form, Input, Button, Col } from 'antd';


function Login(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState([])
  const loginData = { email: email, password: password}

  function handleSubmit(){
    fetch("http://localhost:3000/users/sign_in",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body :JSON.stringify(loginData)
    }).then((res)=> {
      if(res.ok){
        res.json().then((user)=>console.log(user)).finally(setEmail(""),setPassword(""))
      } else{
        res.json().then((e)=> setError([e.error])).finally(setEmail(""),setPassword(""))
      }
    })
}
    return (
        <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login"/>
        </div>
        
     

      <Col xs={24} md={12}>
      <Form 
          name="login-form"
        >
          <p className="form-title">LOG IN</p>
          <Form.Item
            name="email"
            rules={[{required: true, message: 'Please input your email!'}]}
          >
            <Input
              placeholder="Input email"
              name="email"
              value={loginData.username}
              onChange={(event)=> setEmail(event.target.value)}
            />
          </Form.Item>

          <Form.Item
          placeholder="input password"
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}
          >
            <Input.Password 
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={(event)=> setPassword(event.target.value)}
            />
          </Form.Item>

          {error.length > 0 && (
                                <ul style={{color:"red"}}className="fs-5">
                                    {error.map(error => <li key={error}>{error}</li>)}
                                </ul>
                            )}

          <Form.Item>
            <Button className="login-form-button" onClick={handleSubmit}>
              LOGIN
            </Button>
          </Form.Item>
          <p>If you dont have an account? <Link href="/signup">SignUp</Link> </p>
        </Form>
      </Col>
      </div>
      </div>
    )
    }
    export default Login
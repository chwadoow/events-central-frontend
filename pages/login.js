import Link from "next/link"
import {useState} from "react"
import { useRouter } from 'next/router'
import { Form, Input, Button, Checkbox , notification} from 'antd';
import { NoStyleItemContext } from "antd/lib/form/context";




function Login({user, setUser}){
  let router= useRouter()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState([])
  // const [user, setUser] = useState({})


  function handleSubmit(event){
    // event.preventDefault();
    console.log(username,password) 

    fetch("http://localhost:3000/login",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body :JSON.stringify({
        username: username,
        password: password 
      })
    }).then((res)=> {
      if(res.ok){
        res.json().then((data)=>
        {
          window.localStorage.setItem('session', JSON.stringify(data.id));
          console.log("logged in ? ", data.id) 
          router.push('/')
          // alert("You have loggged in successfully")
        } 
         
        )

      } else{
        res.json().then((e)=> 
        setError([e.error]))
      }
    })
}



    return (
        <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login"/>
        </div>
        
     

      {/* <Col xs={24} md={12}> */}
      <Form onFinish={handleSubmit} name="login-form">
          <p className="form-title">LOG IN</p>
          <Form.Item
            name="username"
            rules={[{required: true, message: 'Please input your username!'}]}
          >
            <Input
              placeholder="Input username"
              name="username"
              value={username}
              onChange={(event)=> setUsername(event.target.value)}
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
              value={password}
              onChange={(event)=> setPassword(event.target.value)}
            />
          </Form.Item>

          {error.length > 0 && (
                                <ul style={{color:"red"}}className="fs-5">
                                    {error.map(error => <li key={error}>{error}</li>)}
                                </ul>
                            )}

          <Form.Item>
            <Button 
            // onClick={handleSubmit}
            onClick={() => {
              notification.open({
                message: 'Login Status',
                description:
                  'Login Successfully!',
                duration: 1.5,
              });
            }}
            htmlType="submit" className="login-form-button" >
              LOGIN
            </Button>
          </Form.Item>
          <p>If you dont have an account? <Link href="/signup">SignUp</Link> </p>
        </Form>
      {/* </Col> */}
      </div>
      </div>
    )
    }
    export default Login
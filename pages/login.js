import Link from "next/link"
import {useState} from "react"
import { useRouter } from 'next/router'
import { Form, Input, Button, Checkbox , notification} from 'antd';
import { NoStyleItemContext } from "antd/lib/form/context"


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
<<<<<<< HEAD
<<<<<<< HEAD
          router.push('/')
=======
>>>>>>> dc294abed56c4ab32c8c6a68a141ed25b03c34c0
          alert("You have loggged in successfully")
=======
>>>>>>> c6ee02aa9bc4a32bb53bacec56abd7d1c23d965c
          router.push('/')
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
          <img src="https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg?cs=srgb&dl=pexels-salah-alawadhi-382297.jpg&fm=jpg" alt="Login"/>
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
import { Alert, Button, Col, Form, Input, message, Row } from 'antd'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState({});
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email,
          password,
          password_confirmation: passwordConfirmation,
        }
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          message.success("successfully logged in!")
          router.push("/");
        });
      } else {
        r.json().then((err) => setErrors(err.status.errors));
      }
    });
  }

  console.log(user)
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
            <p style={{fontWeight: "bolder", fontSize: 50}}>Sign Up</p>
            <p style={{fontWeight: "bold", color: "#545563", fontSize: 14}}>Sign in with the data you entered during your registration</p>

            <Form.Item 
            label="Email"
            style={{width: "100%"}}
            required
            >
              <Input name="email" onChange={(e) => setEmail(e.target.value)} 
              value={email}
              placeholder='example@gmail.com' type='email'/>
            </Form.Item>

            <Form.Item 
            label="Password"
            style={{width: "100%"}}
            required
            >
              <Input.Password name="password" onChange={(e) => setPassword(e.target.value)} 
              value={password}
              />
            </Form.Item>

            <Form.Item 
            label="Confirm Password"
            style={{width: "100%"}}
            required
            >
              <Input.Password name="password_confirmation" onChange={(e) => setPasswordConfirmation(e.target.value)}
              value={passwordConfirmation}
              type='password'/>
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

          <Col span={24}>
              <Row justify='center' align='middle'>
                <div>
                  {errors.map((err) => (
                  <>
                    <Alert message={err} type="error" showIcon />
                  </>
                  ))}
                </div>
              </Row>
          </Col>
        </Row>
      </Col>
    </div>
  )
}

export default SignUpForm
import { Button, Col, Image, Row } from 'antd';
import React, { useState } from 'react';
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import LoginImage from "../public/events.jpeg";

const login = () => {

    const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
        <Col span={24}>
            <Row justify='center' align='middle'>

                <Col span={12}>
                    <Row justify='start' align='middle'>
                        
                        <div>
                            {showLogin ? (
                                <Col span={24}>
                                    <Row justify='center' align='middle'>
                                        <div className='loginForm'
                                        style={{width: "100%"}}
                                        >
                                            <LoginForm />
                                        </div>
                                        <div className='loginForm'>
                                        <p>
                                            Don't have an account? &nbsp;
                                            <Button style={{backgroundColor: "transparent", border: "none", color: "#d1410a", fontFamily: "Nunito", fontWeight: "bold", fontSize: 14, textTransform: "none" }} onClick={() => setShowLogin(false)}>
                                            Sign Up
                                            </Button>
                                        </p>
                                        </div>
                                    </Row> 
                                </Col>
                            ): (
                                <>
                                <Col span={24}>
                                    <Row justify='center' align='middle'>
                                        <div 
                                        className='loginForm'
                                        style={{width: "100%"}}
                                        >
                                            <SignUpForm />
                                            </div>
                                        
                                            <div className='loginForm'>
                                            <p>
                                                Already have an account? &nbsp;
                                                <Button style={{backgroundColor: "transparent", border: "none", color: "#d1410a", fontFamily: "Nunito", fontWeight: "bold", fontSize: 14, textTransform: "none" }} onClick={() => setShowLogin(true)}>
                                                Log In
                                                </Button>
                                            </p>
                                        </div>
                                    </Row>
                                </Col>
                                
                                </>
                            )}
                        </div>
                    </Row>
                </Col>

                <Col span={12}>
                    <Row justify='center' align='middle'>
                        <div>
                            <Image height="100vh" width="100%" src={LoginImage.src} alt="loginImage"/>
                        </div>
                    </Row>
                </Col>

            </Row>
        </Col>
    </div>
  )
}

export default login
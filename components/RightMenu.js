import { useRouter } from 'next/router'
import { UserOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Menu, Avatar, Grid, Dropdown, Row } from 'antd';

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const [userData, setUserData] = useState({});
  const [userJti, setUserJti] = useState('');
  
  let router= useRouter()

  useEffect(()=>{

    fetch(`http://localhost:3000/member_details`)
    .then(response => response.json())
    .then(data => {
      setUserData(data)
      setUserJti(data.jti)
      setHeaders(headers)
      setIsLoading(false)
    })

  },[])

  console.log(userData)

  const handleLogout = () => {
    fetch("http://localhost:3000/users/sign_out", {
      headers: {
        Authorization: "Bearer " + userJti,
      },
      method: "DELETE",
    })
    .then((res) => {
      if (res.ok) {
        window.localStorage.clear();
      }
    });
  };

  const { md } = useBreakpoint();
  
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/userprofile">
          <b>My Profile</b>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/viewevents">
            <b>My Events</b>
          </a>
        </Menu.Item>

        <Menu.Item>
          <a
          onClick={() => {
            handleLogout();
          }}
          >
            <b>Logout</b>
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
    <Menu overflowedIndicator mode={md ? "horizontal" : "inline"}>

    <Menu.Item >
      <a href="/">
        <b>Home</b>
      </a>
    </Menu.Item>
    
    {userData.role === ("admin" || "organizer") ?
    (
      <Menu.Item>
        <a href="/createvent">
          <b>Create an Event</b>
        </a>
      </Menu.Item>
    ) : (
      " "
    )}

    <Menu.Item >
        <a href="/about">
          <b>About Us</b>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/login">
          <b>Login</b>
        </a>
      </Menu.Item>
      <Menu.Item>
        <div>
          <Dropdown overlay={menu} trigger={["click"]} placement="bottomLeft">
            <Avatar size={35} icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </Menu.Item>
    </Menu>
  );
}

export default RightMenu;
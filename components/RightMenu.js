import { useRouter } from 'next/router'
import { UserOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Menu, Avatar, Grid, Dropdown, notification} from 'antd';


const { useBreakpoint } = Grid;

const RightMenu = () => {
  
let router= useRouter()

function redirect() {
  router.push('/')
}

const openNotification = () => {
  notification.open({
    message: 'LogOut Status',
    description:
      'Logged Out Successfully!',
    duration: 1.5,
  });
}
    const { md } = useBreakpoint();

    const menu = (
      <Menu>

        <Menu.Item>
          <a href="/userprofile">
            <b>View Profile</b>
          </a>
        </Menu.Item>

        <Menu.Item>
          <a href="/viewevents">
            <b>View Events</b>
          </a>
        </Menu.Item>

        <Menu.Item>
          <a>
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
        
        <Menu.Item>
          <a href="/createvent">
            <b>Create an Event</b>
          </a>
        </Menu.Item>

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
import React, { Component } from 'react';
import { Menu, Icon, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class RightMenu extends Component {
  render() {
    return (
    <Menu mode="horizontal">
       <Menu.Item >
          <a href="/">Home</a>
        </Menu.Item>
        <Menu.Item >
          <a href="/createvent">Create an Event</a>
        </Menu.Item>
        <Menu.Item >
          <a href="/about">About Us</a>
        </Menu.Item>
        <Menu.Item >
          <a href="/login">Login</a>
        </Menu.Item>
        <Menu.Item>
            <div>
                <Avatar size={64} icon={<UserOutlined />} />
            </div>
        </Menu.Item>
    </Menu>
    );
  }
}
export default RightMenu;
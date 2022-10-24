import React from 'react';
import { Menu, Avatar, Grid } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { useBreakpoint } = Grid;

const RightMenu = () => {
    
    const { md } = useBreakpoint();

    return (
    <Menu mode={md ? "horizontal" : "inline"}>
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
                <Avatar size={30} icon={<UserOutlined />} />
            </div>
        </Menu.Item>
    </Menu>
    );
}

export default RightMenu;
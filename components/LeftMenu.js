import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import Link from 'next/link';

class LeftMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item >
            <Link href="/">
                <div className='headerLogo' >
                    <p style={{fontWeight: "bolder", fontSize: 14, color: 'black', cursor: "pointer"}}>
                    Events
                    <br />
                    <span style={{ color: "#d1410a", cursor: "pointer" }}>Bomboclat</span>
                    </p>
                </div>
            </Link>
        </Menu.Item>
        <Menu.Item >
            <Search placeholder="search by tag" allowClear style={{ width: "20%", borderRadius: 10 }} />
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;
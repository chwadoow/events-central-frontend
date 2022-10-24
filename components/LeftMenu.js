import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';

const LeftMenu = () => {

    return (
      <>
      <div style={{display: "inline-flex"}}>
      <Link href="/" style={{textDecoration: "none"}}>
            <div className='headerLogo' >
                <p style={{fontWeight: "bolder", fontSize: 14, color: 'black', cursor: "pointer"}}>
                Events
                <br />
                <span style={{ color: "#d1410a", cursor: "pointer" }}>Bomboclat</span>
                </p>
            </div>
        </Link>
        <div style={{marginLeft: 80 }}>
            <Input size="large" placeholder="search by tag ..." suffix={<SearchOutlined />} style={{width: 400, borderRadius: 10}}/>
        </div>
      </div>
      </>
    );
}

export default LeftMenu;
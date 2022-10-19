import {Menu} from "antd"
import { MailOutlined, HomeTwoTone} from '@ant-design/icons';
import Link from "next/link"
function Navbar(){
return (
    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
    <Menu.Item key="mail" icon={<HomeTwoTone /> }>
      <Link href="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="mail">
      <Link href="/createvent">Create Event</Link>
    </Menu.Item>
    <Menu.Item key="mail">
      <Link href="/about">About us</Link>
    </Menu.Item>
    </Menu>
)
}
export default Navbar
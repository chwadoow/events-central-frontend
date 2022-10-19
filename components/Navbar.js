import {Menu} from "antd"
import { MailOutlined} from '@ant-design/icons';
import Link from "next/link"
function Navbar(){
return (
    <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
    <Menu.Item key="mail" icon={<MailOutlined />}>
      <Link href="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="mail" icon={<MailOutlined />}>
      <Link href="/createvent">Create Event</Link>
    </Menu.Item>
    <Menu.Item key="mail" icon={<MailOutlined />}>
      <Link href="/about">About us</Link>
    </Menu.Item>
    </Menu>
)
}
export default Navbar
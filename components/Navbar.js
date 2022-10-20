import {Typography, Menu, Row, Col, Input, Space} from "antd"
import { MailOutlined, HomeTwoTone} from '@ant-design/icons';
const { Title } = Typography
const {Search} = Input
import Link from "next/link"
function Navbar(){
return (
  <Row style={{marginTop:"1rem"}}>
      <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
      <Col span={8} style={{marginLeft:"1rem"}}>
      <Title level={2}>ThunderTicks</Title>
      </Col>
      <Col span={6} style={{marginTop:"1rem", marginLeft:"2rem"}}>
      <Search placeholder="search by tag" enterButton/>
      </Col>
    <Menu.Item  icon={<HomeTwoTone /> }>
      <Link href="/">Home</Link>
    </Menu.Item>
    <Menu.Item >
      <Link href="/about">About us</Link>
      </Menu.Item>
      <Menu.Item >
      <Link href="/login">Login</Link>
      </Menu.Item>
      <Menu.Item >
      <Link href="/signup">SignUp</Link>
      </Menu.Item>
      <Menu.Item >
      <Link href="/createvent">Create Event</Link>
    </Menu.Item>
    </Menu>
    </Row>
)
}
export default Navbar
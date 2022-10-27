import { Col, Row ,Card} from 'antd';
import { AntDesignOutlined,LogoutOutlined } from '@ant-design/icons';
import { Avatar,Button } from 'antd';
import {LeftSquareOutlined} from  '@ant-design/icons';
import UserCard from '../components/UserCard';

function userprofile() {
  return (
  <div
  style={{width: "100%" ,
  textAlign: "center",
  }}
  >



  
<Row 
style={{width: "100%" ,
textAlign: "center",
justifyContent:"center"
}}> 
 <Card
    hoverable
    style={{
      background: "grey",
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      }}>
        avatar image
     </Card>
     

</Row>
<Row
style={{width: "100%" ,
textAlign: "center",
justifyContent:"center"
}}> 
  user username
</Row>
<Row>
  <UserCard/>
</Row>

<Row>
<Button 

style={{width: "100%" ,
textAlign: "center",
justifyContent:"center"
}}

type="primary" icon={<LogoutOutlined />} size="large"/>

</Row>
</div>
    
  )
}

export default userprofile
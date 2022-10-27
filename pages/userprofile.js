import { Col, Row ,Card} from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import {LeftSquareOutlined} from  '@ant-design/icons';

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

</div>
    
  )
}

export default userprofile
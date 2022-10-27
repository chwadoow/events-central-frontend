import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import { Avatar, Card, Skeleton, Switch } from 'antd';

const { Meta } = Card;
function  UserCard  ()  {
  return (
 <>

   <Card
      style={{
        marginTop: 16,
        width: "100%",
        boxShadow: "1px 1px 1px #888" 
      }}
   
    >
      <div
      style={{ float:"left"}}
      >
      full name
      </div>
<div
style={{ float:"right"}}
>
moz
</div>
   
    </Card>



   <Card
      style={{
        marginTop: 16,
        width: "100%",
        boxShadow: "1px 1px 1px #888" 
      }}
   
    >
      <div
      style={{ float:"left"}}
      >
    phone
      </div>
<div
style={{ float:"right"}}
>
0799999999
</div>
   
    </Card>



   <Card
      style={{
        marginTop: 16,
        width: "100%",
        boxShadow: "1px 1px 1px #888" 
      }}
   
    >
      <div
      style={{ float:"left"}}
      >
   gender
      </div>
<div
style={{ float:"right"}}
>
male
</div>
   
    </Card>




   <Card
      style={{
        marginTop: 16,
        width: "100%",
        boxShadow: "1px 1px 1px #888" 
      }}
   
    >
      <div
      style={{ float:"left"}}
      >
      bio
      </div>
<div
style={{ float:"right"}}
>
life is short party fast
</div>
   
    </Card>
</>
  )

}
export default UserCard
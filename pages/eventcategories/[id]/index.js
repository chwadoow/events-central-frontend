import {useRouter} from "next/router"
import { useEffect,useState } from "react"
import {Row,Col, Divider,Card} from "antd"
import NextImage from "next/image"
import img from "../../../public/redd-qMFSP1xYVTQ-unsplash.jpg";

const { Meta } = Card;

function event(){
    const [categoryData, setCategoryData] = useState([])
    const router = useRouter()
    const {id} = router.query


    useEffect(()=>{
    fetch(`http://localhost:3000/categories/${id}`)
    .then(response => response.json())
    .then((data)=> setCategoryData(data))
    },[id])

  console.log(categoryData)
    return (

        <>
        <Row style={{ marginTop: "1rem"}}>
      
        <Col span={12}>
            
         {categoryData.title}
            
        </Col>
        <Col span={12} >
            
            <img src={categoryData.banner_img} height="360"/>
            
        </Col>
      </Row>
       <br></br>
     <Row>
    
   { categoryData.events ?
    categoryData.events.map((element)=>( 
 

        <Card
    style={{
      width: 300,
      
    }}
    cover={
      <img
        alt="example"
        src={element.image_url1}
      />
    }
  
  >
    <Meta
      // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={element.title}
      description={element.location}
    />
     {element.event_date}
  </Card>





  
   ) ): <div>no events</div>
  }
</Row>
  
        </>      
    )
    }
export default event
// Container >  Row > Col > Box > img >
import {useRouter} from "next/router"
import { useEffect,useState } from "react"
import {Row,Col, Divider} from "antd"
import Image from "next/image"
function event(){
    const [categoryData, setCategoryData] = useState({})
    const router = useRouter()
    const {id} = router.query
    useEffect(()=>{
    fetch(`http://localhost:5000/eventcategories/${id}`)
    .then(response => response.json())
    .then((data)=> setCategoryData(data))
    },[])
    return (

        <>
        <Row style={{ marginTop: "1rem"}}>
        <Col span={12} style={{backgroundColor:"blue",padding:"5rem"}}>
            <Divider orientation="center" style={{color:"white"}}>{categoryData.category}</Divider>
        </Col>
        <Col span={12}>
            <div>
            <img src={categoryData.image_url}/>
            </div>
        </Col>
      </Row>
      <Row>
      </Row>
        </>      
    )
    }
export default event
// Container >  Row > Col > Box > img >
import {useRouter} from "next/router"
import { useEffect,useState } from "react"
import {Row,Col, Divider} from "antd"
import Image from "next/image"
function event(){
    const [categoryData, setCategoryData] = useState({})
    const router = useRouter()
    const {id} = router.query
    useEffect(()=>{
        // http://localhost:3000/categories/${id}
    fetch(`http://localhost:3000/categories/${id}`)
    .then(response => response.json())
    .then((data)=> setCategoryData(data))
    },[])
    return (

        <>
        <Row style={{ marginTop: "1rem"}}>
        {/* <Col span={12} style={{backgroundColor:"blue",padding:"5rem"}}>
            <Divider orientation="center" style={{color:"white"}}>{categoryData.category}</Divider>
        </Col> */}
        <Col span={24}>
            <div>
                {/* categoryData.banner_img */}
            <img src={categoryData.banner_img}/>
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
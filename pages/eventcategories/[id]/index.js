import {useRouter} from "next/router"
import { useEffect,useState } from "react"
import {Row,Col} from "antd"
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
    console.log(categoryData)

    return (
        <>
        <Row style={{ marginTop: "1rem" }}>
        <h1>{categoryData.category}</h1>
        <Col span={24}>
          <Image src={categoryData.image_url} height="600" width="1000"/>
        </Col>
      </Row>
        </>      
    )
    }
export default event
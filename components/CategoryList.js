import NextImage from "next/image";
import { Col, Button } from "antd";
import CategoryData from "./CategoryData"
import Link from "next/link";
function CategoryList({events}){
return (
    <>
     {events.map((event) => {
        return (
          <Col
            className="gutter-row"
            span={6}
            style={{ marginBottom: "1.5rem" }}
          >
            <Button
              shape="round"
              style={{width: "11rem"}}>
             <Link href="/eventcategories/[id]" as={`/eventcategories/${event.id}`}>{event.category}</Link>
            </Button>
          </Col>
        );
      })}
    </>
)
}
export default CategoryList
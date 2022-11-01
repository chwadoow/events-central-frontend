import {useEffect,useState } from "react"
import { Col, Card, Row } from "antd";
function Viewevent() {
     var date = new Date();
     var currentDate = date.getTime();
    const [user, setUser] = useState('')
    const [obj, setObj] = useState({})
    
    useEffect(()=>
    {
      setUser(window.localStorage.session)
  },[]);

  useEffect(()=>{
    if(user){
      console.log(user);
      fetch(`http://localhost:3000/users/${user}`)
      .then(res=>{
        if(res.ok){
          res.json().then(setObj)
        }
      })
    }
  }, [])
  const mappedEvents = obj.events?.map((event) => {
    console.log(event);
  })
    console.log(obj?.events)
  return (
    <>
      <h1>Hello Guys</h1>
      {/* {mappedEvents} */}
      {/* {user?.events.map((event) =>
            {
             <Card
          style={{
            textAlign: "left",
            width: 280,
            height: 420,
            padding: 2,
            cursor: "pointer",
          }}
          cover={
            <img alt={event.title} src={event.image_url1} height="200px" />
          }
          hoverable
        >
          <div>
            <h1 style={{ fontWeight: "bolder", fontSize: "15" }}>
              {event.title}
            </h1>
            <p>{event.event_date}</p>
            <p style={{ color: "#d1410a" }}>
              {parseInt(
                (new Date(
                  `${event.event_date}`.split("-").join("/")
                ).getTime() -
                  currentDate) /
                  (1000 * 60 * 60 * 24)
              ) + " days remaining"}
            </p>
            <p>{event.location}</p>
          </div>
        </Card> 
            }
        )} */}
    </>
  );
}
export default Viewevent;
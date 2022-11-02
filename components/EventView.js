import React, {useState, useEffect} from 'react'

function eventview() {
    const [events, setEvents] = useState([])

    useEffect(()=>{
       fetch(`http://localhost:3000/users/2`)
        .then(response => response.json())
        .then((data)=> {
      setEvents(data)
         
       })
       },[])

       

    //    function handleSubmit(e){
    //     e.preventDefault()
    //     fetch(`http://localhost:3000/user_profiles/2`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type" : "application/json"
    //         },
    //         body: JSON.stringify({
    //           full_name,
    //           gender,
    //           phone_number,
    //           bio
    //         }),
    //     })
    //     .then((r) => r.json())
    //     .then((data) => console.log(data))
      
        
    //   

    //   <Card
    //   style={{
    //     marginTop: 16,
    //     width: "100%",
    //     boxShadow: "1px 1px 1px #888" ,
    //     borderTopStyle: "dashed"
    //   }}
   
    // ></Card>
      
        

    
  return ( 
    <>eventview
    {events.map((event,index) => {
        return (
          
            <Link href={`/specificevent/${event.id}`} key={index}>
              <div>
                <Card
                  style={{
                    textAlign: "left",
                    width: 280,
                    height: 420,
                    padding: 2,
                    cursor: "pointer",
                  }}
                  cover={
                    <img
                      alt={event.title}
                      src={event.image_url1}
                      height="200px"
                    />
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
              </div>
            </Link>
        )
                        }
  )}
            </>
                        )
  
                }

export default eventview
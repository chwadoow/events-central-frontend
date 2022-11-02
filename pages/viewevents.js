import React, { useState, useEffect } from "react";

function eventview() {
  const [events, setEvents] = useState([]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // getter
    const session = JSON.parse(localStorage.getItem("session"));

    fetch(`http://localhost:3000/users/1`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  console.log(events);
  // useEffect(()=>{
  //    fetch(`http://localhost:3000/events`)
  //     .then(response => response.json())
  //     .then((data)=> {
  //   setEvents(data)

  //    })
  //    },[])

  return (
    <>
      
      {events.events?.map((event) => {
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
          </div>
        // );
      })}
    </>
  );
}

export default eventview;

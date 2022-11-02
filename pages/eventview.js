import React, {useState, useEffect} from 'react'

function eventview() {
    const [events, setEvents] = useState([])

    //useEffect(()=>{
       // fetch(`http://localhost:3000/users/2`)
        //.then(response => response.json())
        //.then((data)=> {
     // setUserData(data)
         
      //  })
       // },[])

       function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:3000/user_profiles/2`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
              full_name,
              gender,
              phone_number,
              bio
            }),
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
      
        
      }

      <Card
      style={{
        marginTop: 16,
        width: "100%",
        boxShadow: "1px 1px 1px #888" ,
        borderTopStyle: "dashed"
      }}
   
    ></Card>
      
        

    
  return ( 
    <div>eventview</div>
  )
}

export default eventview
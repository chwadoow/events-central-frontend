 import { LinearProgress, Typography, Box, Button, FormControl, FormHelperText, Input, InputLabel, ThemeProvider, } from '@antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const updateuserprofile = () => {

  const { id } = useParams();
  const [formData, setFormData] = useState({
    user_id: '',
    full_name: '',
    avatar_img: '',
    phone_number: '',
    bio:'',
    gender:'',

  })
  const [, setUserProfile] = useState([]);
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  useEffect(() => {
    fetch(`http://localhost:3000/user_profiles`)
    .then(r => r.json())
    .then(data => setUpdateUser(data))
  }, [])

  function handleChange(e){
    setFormData({
        ...formData, [e.target.name]: e.target.value,
    });
  }

  function handleUpdateUserPRofile() {
    fetch(`http://localhost:3000/user_profiles/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: formData.user_id,
        full_name: formData.full_name,
        avatar_img: formData.avatar_img,
        phone_number: formData.phone_number,
        bio: formData.bio
    }),
  })
    .then((r) => r.json())
    .then((updatedItem) => {
      setuserprofile(updatedItem)
      setFormData({
        use_id: '',
        full_name: '',
        avatar_img: '',
        phone_number: '',
        bio:'',
    })
    });
  }

  
  return (
    
      <div>
            <div>
            <Container className='formContainer'>
            <div 
            style={{ fontSize: "20px", fontWeight: "bold", marginTop: "50px" }}
            >
                Edit User Details
            </div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <FormControl sx={{ m: 1, width: '35ch' }}>
                    <InputLabel>username</InputLabel>
                    <Input name="username" value={formData.username} onChange={handleChange}/>
                    <FormHelperText>Please Enter Full Name</FormHelperText>
                </FormControl>
            </div>
            <div>
            <FormControl sx={{ m: 1, width: '35ch' }}>
                <InputLabel></InputLabel>
                <Input name="age" value={formData.age} onChange={handleChange}/>
                <FormHelperText>Please enter User Profile</FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ m: 1, width: '35ch' }}>
                    <InputLabel>User profile</InputLabel>
                    <Input name="user _profile" value={formData.role_played} onChange={handleChange}/>
                    <FormHelperText>Please Enter User Profile</FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ m: 1, width: '35ch' }}>
                    <InputLabel>User_id</InputLabel>
                    <Input name="user_id" value={formData.team_id} onChange={handleChange}/>
                    <FormHelperText>Please Enter User id</FormHelperText>
                </FormControl>
            </div>
            </Box>
            <div>
            <FormControl sx={{ display: "flex", flexWrap: "wrap", m: 1, width: '10ch' }}>
                <Button variant='contained' type='submit' onClick={handleUpdateUserPRofile}>
                    EDIT
                </Button>
            </FormControl>
          </div>
        </Container>
        </div>
        <Box>
        <section className="">
          <h2 className="">{th}</h2>
            <div className="">
            <div className="">
              <div className=''>
                <div className=''>
                  <img src={t} alt=''/>
                </div>
              </div>
            </div>
                <div className="aboutText">
                    <h5>user_id: {User.id}</h5>
                    <h5>full_name: {user.full_name}</h5>
                    <h5>avatar_img: {User.avatar_img}</h5>
                    <h5>phone_number{User.phone_number}:</h5>
                    <h5>bio{User.bio}:</h5>
                    <h5>gender{User.gender}:</h5>

                    
                </div>
            </div>
          </section>
        </Box>
      </div>
   
  )
}

export default updateuserprofile
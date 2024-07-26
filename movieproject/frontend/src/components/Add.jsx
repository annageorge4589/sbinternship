import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';

const Add = () => {

const [form,setform]=useState({
  "movieName":'',
  "category":'',
  "director":'',
  "releasingyear":''
})

useEffect(()=>{
  if(location.state!=null){
    setform({...form,
      movieName:location.state.movie.movieName,
      category:location.state.movie.category,
      director:location.state.movie.director,
      releaseYear:location.state.movie.releaseYear
  })
}
},[])
const location=useLocation();
  var navigate=useNavigate();
let postData=()=>{
  if(location.state!=null){
    axios.put('http://localhost:4000/movie-updation/'+location.state.movie._id,form)
    .then((res)=>{
      alert('Data updated');
      Navigate('/')
    }).catch((error)=>{
      console.log(error);
    })
    
  }
  else{
    //console.log(form);
    axios.post('http://localhost:4000/new-movie',form).then((res)=>{
      alert('Movie data posted')
      navigate('/');
    })
  }
  
  //console.log(form);
  axios.post('http://localhost:4000/new-movies',form) .then((res)=>{alert('movie data posted')})
}
function valueCap(e)
{
  //console.log(e)
  setform({...form,[e.target.name]:e.target.value})
}

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField id="outlined-basic"
       label="Required"
       textcolor="primary"
      name="movieName"
       onChange={valueCap}
       variant="outlined" />
       <br/>

      <TextField id="filled-basic"
       label="Required"
       textcolor="primary"
       name="category"
       onChange={valueCap}
       variant="filled" />
       <br/>


      <TextField id="standard-basic" 
      label="Required"
      textcolor="primary"
      name="director"
     onChange={valueCap}
       variant="standard" />
       <br/>


       <TextField id="standard-basic" 
      label="Required"
      textcolor="primary"
       name="releaseYear"
    onChange={valueCap}
       variant="standard" />
       <br/>
       </div>
        <Button variant="contained" onClick={postData}>Confirm Booking</Button><br/>
       


    </Box>
  )
}

export default Add


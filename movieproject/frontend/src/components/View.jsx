import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// const rows=[{"moviename":"joji","category":"thriller","Director":"dileesh pothan","releasingyear":"2022"},
//             {"moviename":"vettam","category":"comedy","director":"priyadarshan","releasingyear":"2002"},
//];
const View = () => {
  const [rows,setRows]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/list-movies').then((res)=>{
      setRows(res.data);
    })
  
    },[])

    //edit
    var navigate=useNavigate()
    let updateMovie=(movie)=>{
      navigate('/add',{state:{movie}})
    }

    let deletemovie=(p)=>{
    axios.delete('http://localhost:4000/movieremoval/'+p).then((res)=>{
      alert('Deleted')
      window.location.reload()
    })
    .catch((error)=>{
      alert('error')
    })
  }
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>movieName</TableCell>
          <TableCell align="right">category</TableCell>
          <TableCell align="right">director</TableCell>
          <TableCell align="right">releasingyear</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.firstName}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.movieName}
            </TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">{row.director}</TableCell>
            <TableCell align="right">{row.releaseYear}</TableCell>
            <Button variant='contained' color="secondary" onClick={()=>{updateMovie(row)}}>Edit</Button>
            <Button variant='contained' color="error"
            onClick={()=>{deletemovie(row._id)}}>Delete</Button>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default View
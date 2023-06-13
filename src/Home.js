import React, { useState } from 'react'
import './app.css'
import Button from '@mui/material/Button'
import  TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom';
function Home() {
    const[roomID, setRoomID]=useState();
    const navigate=useNavigate();
    const handleJoin=()=>{
        navigate(`/room/${roomID}`)
    }
  return (
    <>
    <div className='App'>
        <TextField 
        id="outlined-basic"
        placeholder="Enter Room ID" 
        type="text"
        label="Room ID" 
        variant="outlined"
        size='small'
        value={roomID}
        onChange={(e)=>setRoomID(e.target.value)}
         />
        <Button
        onClick={handleJoin}
        variant='contained'
        color='primary' 
        >Join</Button>
    </div>
    

    </>
  )
}

export default Home
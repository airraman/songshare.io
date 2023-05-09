import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function SubscriptionCard(){

    const [artistName, setArtistName] = useState("")
    const [trackName, setTrackName] = useState("")
    const [trackDescription, setTrackDescription] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    let songObj ={
        artistName,
        trackName, 
        trackDescription, 
        email, 
        phoneNumber
    }

    function sendClick(e){
        console.log("Hi from Submit")
        console.log(songObj)
    }

    function handleArtistName(event){
        console.log(event.target.value)
        setArtistName(event.target.value)
    }

    function handleTrackName(event){
        console.log(event.target.value)
        setTrackName(event.target.value)
    }

    function handleTrackDescription(event){
        console.log(event.target.value)
        setTrackDescription(event.target.value)
    }

    function handleEmail(event){
        console.log(event.target.value)
        setEmail(event.target.value)
    }

    function handlePhoneNumber(event){
        console.log(event.target.value)
        setPhoneNumber(event.target.value)
    }

    return(
        <div className='subcriptionmain'>
                        <div className='doublebutton'>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button color="secondary" >MUSICIAN</Button>
                <Button color="secondary" >LISTENER</Button>
                </ButtonGroup>
            </div>
            <div className='cardtext'>
                <h3>The best music on the internet, sent to you via Text </h3>
            </div>

            <div className='subcriptioninputs'>
                <div>
                    <Box component="form" sx={{ '& > :not(style)': { m: .5, width: '32ch' }}} noValidate autoComplete="off" >
                        <TextField id="outlined-basic" label="Subscriber Name" variant="outlined" sx={{ width: '20vw', input: { color: 'white' }}} color="secondary"  border = "1px solid white" focused/>
                        <TextField id="outlined-basic" label="Subscriber Phone Number" variant="outlined" sx={{ width: '50vw', input: { color: 'white' } }}  color="success" focused />
                    </Box>
                </div>
            </div>

            <div className='subscriptioncontainer'>
                <Button color="secondary" variant="contained" className='submitbutton' onClick={sendClick} sx={{width: 300,color: '5bb2bf'}}>Subscribe</Button>
            </div>
        </div>
    )
}

export default SubscriptionCard
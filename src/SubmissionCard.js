import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function SubmissionCard(){

    const [artistName, setArtistName] = useState("")
    const [trackName, setTrackName] = useState("")
    const [trackDescription, setTrackDescription] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const theme = createTheme({
        status: {
          danger: '#e53e3e',
        },
        palette: {
          primary: {
            main: '#0971f1',
            darker: '#053e85',
          },
          neutral: {
            main: '#64748B',
            contrastText: '#fff',
          },
        },
      });

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
        <div className='submissionmain'>
            <div className='doublebutton'>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button color="secondary" >MUSICIAN</Button>
                <Button color="secondary" >LISTENER</Button>
                </ButtonGroup>
            </div>
            <div className='cardtext'>
                <h3>A community for music producers to share their music with a global audience via SMS </h3>
            </div>

            <div className='submissioninputs'>
                <div>
                    <Box component="form" sx={{ '& > :not(style)': { m: .5, width: '32ch' }}} noValidate autoComplete="off" >
                        <TextField id="outlined-basic" label="Artist Name" variant="outlined" sx={{ width: '20vw', input: { color: 'white' }}} color="secondary"  border = "1px solid white" focused onChange={handleArtistName}/>
                        <TextField id="outlined-basic" label="Song Name" variant="outlined" sx={{ width: '50vw', input: { color: 'white' } }}  color="success" focused onChange={handleTrackName} />
                        <TextField id="outlined-basic" label="Song Description" variant="outlined" sx={{ width: '80vw', input: { color: 'white' } }} color="secondary" focused onChange={handleTrackDescription} />
                        <TextField id="outlined-basic" label="Artist Email" variant="outlined" sx={{ width: '80vw', input: { color: 'white' } }} color="success" focused onChange={handleEmail}/>
                    </Box>
                </div>
            </div>
            <div className='submitcontainer'>
                <ThemeProvider theme={theme}>
                    <Button  color="secondary" variant="contained" className='submitbutton' onClick={sendClick} sx={{width: 300}}>Submit</Button>
                </ThemeProvider>
            </div>

        </div>      
    )
}

export default SubmissionCard
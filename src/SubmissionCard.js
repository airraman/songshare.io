import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormHelperText from '@mui/material/FormHelperText';
import { Input } from '@chakra-ui/react'

function SubmissionCard(){

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
        <div className='submissionmain'>
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>MUSICIAN</Button>
        <Button>LISTENER</Button>
      </ButtonGroup>
            <div className='cardtext'>
                <h3>A community for music producers to share their music with a global audience via SMS </h3>
            </div>
            <form>

            <div className='submissioninputs'>
                <div>

<Box
      component="form"
      sx={{
        '& > :not(style)': { m: .5, width: '32ch' },
      }}
      noValidate
      autoComplete="off"
>

<TextField classname = "test" id="outlined-basic" label="Artist Name" variant="outlined" sx={{ width: '20vw', input: { color: 'white' }}} color="secondary"  border = "1px solid white" focused/>
                    {/* <FormHelperText id="component-helper-text">
          Some important helper text
        </FormHelperText> */}
                    <TextField id="outlined-basic" label="Song Name" variant="outlined" sx={{ width: '50vw', input: { color: 'white' } }}  color="success" focused />
                    <TextField id="outlined-basic" label="Artist Email" variant="outlined" sx={{ width: '80vw', input: { color: 'white' } }} color="secondary" focused />
                    <TextField id="outlined-basic" label="Song Name" variant="outlined" sx={{ width: '80vw', input: { color: 'white' } }} color="success" focused />

</Box>


                </div>
                {/* <div>
                    <TextField id="outlined-textarea" label="Song Description" placeholder="Placeholder" multiline sx={{ width: '80vw' }} color="secondary" focused />
                </div> */}
                {/* <div className='submissionhold'>
                    <input type="text" id="fname" name="fname" placeholder="Artist Name:" className='submissionspace' onChange={handleArtistName}></input>
                </div>
                <div className='submissionhold'>
                    <input type="text" id="fname" name="fname" placeholder="Track Name:" className='submissionspace' onChange={handleTrackName}></input>
                </div>
                <div className='submissiondescription'>
                    <input type="text" id="fname" name="fname" placeholder="Track Description:" className='descriptionspace' onChange={handleTrackDescription}></input>
                </div> */}
                {/* <div className='submissionhold'>
                    <input type="text" id="fname" name="fname" placeholder="Email:" className='submissionspacesmall' onChange={handleEmail}></input><br></br>
                    <input type="text" id="fname" name="fname" placeholder="Phone Number:" className='submissionspacesmall'onChange={handlePhoneNumber}></input>
                </div> */}
            </div>
            <div className='submitcontainer'>
                <Button gi variant="contained" className='submitbutton' onClick={sendClick} sx={{width: 300,color: '5bb2bf'}}>Submit</Button>
            </div>
            </form>



            {/* <div>
                <Input placeholder='Basic usage' />
            </div>
            <div>
                <Input placeholder='Basic usage' />
            </div> */}



        </div>
        

        
        
        
    )
}

export default SubmissionCard
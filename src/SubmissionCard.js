import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
            
            <div className='playlistinstructions'>
            <h1>SongShare.io V 1.0</h1>
                <h3>
                    Instructions:
                </h3>
                <h4>
                    Follow playlist: Lofi (only for vibing)
                </h4>
                <h4>
                    Follow @songshare.io
                </h4>
                <h4>
                    Submit your song below
                </h4>
            </div>
            <div className='submissioninputs'>
                <div className='submissionhold'>
                    <input type="text" id="fname" name="fname" placeholder="Artist Name:" className='submissionspace' onChange={handleArtistName}></input>
                </div>
                <div className='submissionhold'>
                    <input type="text" id="fname" name="fname" placeholder="Track Name:" className='submissionspace' onChange={handleTrackName}></input>
                </div>
                <div className='submissiondescription'>
                    <input type="text" id="fname" name="fname" placeholder="Track Description:" className='descriptionspace' onChange={handleTrackDescription}></input>
                </div>
                <div className='submissionhold'>
                    <input type="text" id="fname" name="fname" placeholder="Email:" className='submissionspacesmall' onChange={handleEmail}></input><br></br>
                    <input type="text" id="fname" name="fname" placeholder="Phone Number:" className='submissionspacesmall'onChange={handlePhoneNumber}></input>
                </div>
            </div>
            <div className='submitcontainer'>
                <Button variant="contained" className='submitbutton' onClick={sendClick} sx={{width: 300,color: '5bb2bf'}}>Submit</Button>
            </div>
        </div>
        
        
    )
}

export default SubmissionCard
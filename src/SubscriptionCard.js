import React, { useState } from 'react';
import Button from '@mui/material/Button';

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
            <div className='cardtext'>
                <h3>The best music on the internet, sent to you via Text </h3>
            </div>
            <form>
            <div className='submissioninputs'>
                <div className='submissionhold'>
                    <input type="text" id="fname" name="fname" placeholder="First Name:" className='submissionspace' onChange={handleArtistName}></input>
                </div>
                <div className='submissionhold'>
                    <input type="text" id="fname" name="fname" placeholder="Phone Number:" className='submissionspace' onChange={handleTrackName}></input>
                </div>
                {/* <div className='submissiondescription'>
                    <input type="text" id="fname" name="fname" placeholder="Track Description:" className='descriptionspace' onChange={handleTrackDescription}></input>
                </div> */}
                {/* <div className='submissionhold'>
                    <input type="text" id="fname" name="fname" placeholder="Email:" className='submissionspacesmall' onChange={handleEmail}></input><br></br>
                    <input type="text" id="fname" name="fname" placeholder="Phone Number:" className='submissionspacesmall'onChange={handlePhoneNumber}></input>
                </div> */}
            </div>
            </form>

            <div className='submitcontainer'>
                <Button variant="contained" className='submitbutton' onClick={sendClick} sx={{width: 300,color: '5bb2bf'}}>Subscribe</Button>
            </div>
        </div>
    )
}

export default SubscriptionCard
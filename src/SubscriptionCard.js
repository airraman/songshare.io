import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function SubscriptionCard(){



    const [userName, setUserName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    let userObj ={
        userName,
        phoneNumber
    }

    function sendClick(e){
        console.log("Hi from Submit")
        console.log(userObj)

        // alert('form submitted')

        axios.post('https://sheet.best/api/sheets/b11b2939-7e20-4683-bb7a-e5e1b0294f2a', userObj)
        .then(response => {
          console.log(response);
        })

        setUserName('')
        setPhoneNumber('')
    }

    function handleUserName(event){
        console.log(event.target.value)
        setUserName(event.target.value)
        console.log(userName)
    }

    function handlePhoneNumber(event){
        console.log(event.target.value)
        setPhoneNumber(event.target.value)
        console.log(phoneNumber)
    }


    return(
        <div className='subcriptionmain'>
            <div className='cardtext'>
                <h3>The best music, globally.</h3>
            </div>

            <div className='subcriptioninputs'>
                <div>
                    <Box component="form" sx={{ '& > :not(style)': { m: .5, width: '32ch' }}} noValidate autoComplete="off" >
                        <TextField id="outlined-basic" label="Subscriber Name" variant="outlined" sx={{ width: '20vw', input: { color: 'white' }}} color="secondary"  border = "1px solid white" focused onChange={handleUserName}/>
                        <TextField id="outlined-basic" label="Subscriber Phone Number" variant="outlined" sx={{ width: '50vw', input: { color: 'white' } }}  color="success" focused onChange={handlePhoneNumber}/>
                    </Box>
                </div>
            </div>
            <div>
                <h3>One text, every Friday.</h3>
                <h3>One song, one playlist, one album.</h3>
            </div>
            <div className='subscriptioncontainer'>
                <Button color="secondary" variant="contained" className='submitbutton' onClick={sendClick} sx={{width: 300,color: '5bb2bf'}}>Subscribe</Button>
            </div>
        </div>
    )
}

export default SubscriptionCard
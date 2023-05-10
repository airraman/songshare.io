import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SubmissionCard from './SubmissionCard';
import Button from '@mui/material/Button';
import SubscriptionCard from './SubscriptionCard';
import Logo from './Logo';
import ButtonGroup from '@mui/material/ButtonGroup';


function App() {


  const [musician, setMusician] = useState(false)

  function handleMusicianChange(e){
    console.log(e)
    setMusician(!musician)
    console.log(musician)
}

function handleListenerChange(e){
    console.log(e)
    setMusician(!musician)
    console.log(musician)
}

  return (
    <div className="App">
            {/* <div className='doublebutton'>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button color="secondary" onClick={handleMusicianChange} >MUSICIAN</Button>
                <Button color="secondary" onClick={handleListenerChange} >LISTENER</Button>
                </ButtonGroup>
      </div> */}
      <Logo />
      <div className= {musician ? "showmusician" : "hidemusician"}>
        <SubmissionCard />
      </div>

      <div className={musician ? "hidelistener" : "showlistener"}>
        <SubscriptionCard />
      </div>

    </div>
  );
}

export default App;

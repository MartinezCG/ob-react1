import React, { useState } from 'react';
import { getJoke } from '../../services/axiosService';
import { Button } from '@mui/material'

const JokeVotes = () => {

    const [joke, setJoke] = useState(null);
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);

    const obtainJoke = () => {
        getJoke()
            .then((response) => {
                if(response.status === 200) {
                    setJoke(response.data.value)
                }
                console.log(response)
            })
            .catch((error) => {
                alert(`Sorry, something happen: ${error}`)
            })
            .finally(console.log("We're done here")) 
    }

    return (
        <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <Button style={{margin:'50px'}} onClick={obtainJoke} variant='contained'>
                {
                    joke === null ?
                    ('Give me a Joke!')
                    :
                    ('Give me another Joke!')
                }
            </Button>
            
            <h3 style={{color:'black'}}> Your today's joke is: </h3>
            <p style={{color:'black', marginLeft: '200px', marginRight: '200px'}}>{joke}</p>
            
            <div>
                <h4 style={{color:'black', margin:'25px'}}>Rate it!</h4>
            </div>

            <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <div style={{color:'black', clear:'none', float: 'left'}}>
                    <Button variant='contained' color='success' onClick={() => setGood(good+1)}>Good Joke</Button>
                    <div>Good Jokes counter: {good}</div>
                </div>
                <div style={{color:'black' , clear:'none', float: 'left', marginLeft:'100px'}}>
                    <Button variant='contained' color='error' onClick={() => setBad(bad+1)}>Bad Joke</Button>
                    <div>Bad Jokes counter: {bad}</div>
                </div>
            </div>
            
        </div>
    );
}

export default JokeVotes;

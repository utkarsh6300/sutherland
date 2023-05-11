
import React, { useState } from 'react';
import axios from 'axios'; 

const CreateTest = () => {

      const [duration, setDuration] = useState(0);
      const [numQuestions, setNumQuestions] = useState(0);
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        // Do something with the duration and number of questions
        try {
            const config = {
                headers: {
                  'Content-Type': 'application/json'
                }
              };
              const formData={
                testDuration:duration,
                
                numQuestions
    
              }
                      const res = await axios.post('http://localhost:5000/api/createTest', formData, config);
                      console.log(res);
    
        } catch (error) {
            console.log(error);
        }
      }
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Test Duration (minutes):
            <input type="number" value={duration} onChange={event => setDuration(parseInt(event.target.value))} />
          </label>
          <br />
          <label>
            Number of Questions:
            <input type="number" value={numQuestions} onChange={event => setNumQuestions(parseInt(event.target.value))} />
          </label>
          <br />
          <button type="submit">Create Test</button>
        </form>
      );
    }
    

export default CreateTest
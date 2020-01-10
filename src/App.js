import React from 'react';
import Input from './components/input'
import Particles from 'react-particles-js';
 

import './App.css';

const App = props => {
  return (
    <div className="App">
     <Particles 
     className="particles"
        params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}}
     />
    <Input/>
    </div>
  );
}

export default App;

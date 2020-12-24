import './App.css';
import './components/component.css'
import React, { Component } from 'react';
import RingLoader from './components/RingLoader';
import TextRainBow from './components/TextRainBow';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
          <div className="text-destroy-container">
            <TextRainBow text="MY REACT COMPONENTS" fontSize="5rem" fontWeight="900"/>
          </div>
          <div className="loading-container">
             <h1>PRE-LOADERS</h1>
            <div>
               <RingLoader />
            </div>  
          </div>
      </div>
     );
  }
}
 
export default App;
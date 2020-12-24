import './App.css';
import './components/component.css'
import React, { Component } from 'react';
import RingLoader from './components/RingLoader';
import TextRainBow from './components/TextRainBow';
import WaveRingLoader from './components/WaveRingLoader';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
          <div className="text-destroy-container">
            <TextRainBow text="MY REACT COMPONENTS" fontSize="5rem" fontWeight="900"/>
          </div>
          <div className="loader-container">
           <h1 className="pre-loader">PRE-LOADERS</h1>
            <div className="ring-loader-container">
            <div>
               <RingLoader />
            </div>
            </div>
            <div className="wave-ring-loader-container">
            <div>
              <WaveRingLoader />
            </div>
            </div>
          </div>
      </div>
     );
  }
}
 
export default App;
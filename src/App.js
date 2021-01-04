import './App.css';
import './components/component.css'
import React, { Component } from 'react';
import RingLoader from './components/RingLoader';
import TextRainBow from './components/TextRainBow';
import PreWaveRingLoader from './components/WaveRingLoader/pre-loader-aniwavering';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
          <div className="text-destroy-container">
            <TextRainBow text="MY REACT COMPONENTS"/>
          </div>
          <div className="loader-container">
           <h1 className="pre-loader">PRE-LOADERS</h1>
            <div className="ring-loader-container">
            <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
               <RingLoader />
            </div>
            </div>
            <div>
            <PreWaveRingLoader />
          </div>
          </div>
          <div className="footer-container">
             <TextRainBow text="Other components will be available very soon..." fontSize="3rem" fontWeight="900"/>
          </div>
          <div className="coded">
            <h1 >Coded with love by Aniket Kumar Verma.</h1>
          </div>
      </div>
     );
  }
}
 
export default App;
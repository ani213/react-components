import './App.css';
import './components/component.css'
import React, { Component } from 'react';
import RingLoader from './components/RingLoader';
import TextDestroy from './components/TextDestroy';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
          <div>
            
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
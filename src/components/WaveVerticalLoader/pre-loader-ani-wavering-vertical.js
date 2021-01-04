import React, { Component } from 'react'
import "./preloaderwavevartical.css"
class PreLoaderwaveVertical extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="wave-container">
               <div className="wave-ring-ver-loader">
                   <span style={{"--i":"1"}}></span>
                   <span style={{"--i":"2"}}></span>
                   <span style={{"--i":"3"}}></span>
                   <span style={{"--i":"4"}}></span>
                   <span style={{"--i":"5"}}></span>
                   <span style={{"--i":"6"}}></span>
               </div>
            </div>
         );
    }
}
 
export default PreLoaderwaveVertical;
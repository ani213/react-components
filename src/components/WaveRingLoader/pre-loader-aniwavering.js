import React, { Component } from 'react'
import "./preloaderaniwave.css"
class PreWaveRingLoader extends Component {
    state = {  }
    render() { 
        let style=this.props.style
        return ( 
            <div className="wave-container" style={style}>
            <div className="wave-ring-loader">
                <span ></span>
                <span ></span>
                <span ></span>
            </div>
            </div>
         );
    }
}
 
export default PreWaveRingLoader;
import React, { Component } from 'react';
import "./preloaderaniring.css"
class PreLoaderAniRing extends Component {
    state = {  }
    render() { 
          let style=this.props.style
        return ( 
            <div>
                <div className="ani-ring" style={this.props.style}>
                    {this.props.text||"LOADING"}
                    <span className="ani-ring-content"></span>
                </div>
            </div>
         );
    }
}
 
export default PreLoaderAniRing;
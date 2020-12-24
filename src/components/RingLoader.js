import React, { Component } from 'react'
class RingLoader extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="ring">
                    Loading
                    <span className="ring-content"></span>
                </div>
            </div>
         );
    }
}
 
export default RingLoader;
import React, { Component } from 'react'
class TextDestroy extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {this.props.text && <h1>{this.props.text}</h1>}
            </div>
         );
    }
}
 
export default TextDestroy;
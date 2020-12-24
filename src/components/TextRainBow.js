import React, { Component } from 'react'
class TextRainBow extends Component {
    state = {  }
    render() { 
        let style={
            fontSize:this.props.fontSize,
            fontWeight:this.props.fontWeight
        }
        return ( 
            <div>
                {this.props.text && <div className="ani-text-rainBow" style={style}>{this.props.text}</div>}          
            </div>
         );
    }
}
 
export default TextRainBow;
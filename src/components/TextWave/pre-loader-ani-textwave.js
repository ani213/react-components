import React, { Component } from 'react'
import "./textwave.css"
class TextWave extends Component {
    state = {  }
    render() { 
        let text=this.props.text||"Loading";
        let style=this.props.style
        return ( 
            <div className="text-wave-container" style={style}>
                {
                    text.split("").map((ele,index)=>{
                        return(
                            <React.Fragment>
                            {(ele!==" ") && <div className=" loader loader-1" style={{"--i":index+1,"--bubbleColor":`${(style && style.bubbleColor)?style.bubbleColor:"blue"}`}}>
                             <span>{ele}</span>
                            </div>}
                            </React.Fragment>
                        )
                    })
                }
            </div>
         );
    }
}
 
export default TextWave;
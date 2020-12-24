import React, { Component } from 'react'
class TextDestroy extends Component {
    state = {  }
    render() { 
        let textArr=this.props.text && this.props.text.split(" ")
        return ( 
            <div>
                {this.props.text && <div>
                        {textArr && textArr.map((ele,index)=>{
                            return(
                                <span key={index}>{ele}</span>
                            )
                        })}
                </div>}
            </div>
         );
    }
}
 
export default TextDestroy;
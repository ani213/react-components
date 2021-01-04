import React, { Component } from 'react'
import "./blockrotate.css"
class BlockRotate extends Component {
    state = {  }
    render() { 
        let style=this.props.style
        return ( 
            <div className="ani-box-contatiner" style={style}>
            <div className="ani-box">
                <div>
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    <span ></span>

                </div>
            </div>
            </div>
         );
    }
}
 
export default BlockRotate;
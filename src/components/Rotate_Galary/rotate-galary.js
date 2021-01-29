import React, { Component } from 'react'
import "./rotate-galary.css";
import img1 from "./images/ashu_pic1.jpeg";
import img2 from "./images/ashu_pic2.jpeg"
import img3 from "./images/ashu_pic3.jpeg"
import img4 from "./images/ashu_pic4.jpeg"
import img5 from "./images/ashu_pic5.jpeg"
import img6 from "./images/ashu_pic6.jpeg"
import img7 from "./images/ashu_pic7.jpeg"
import img8 from "./images/ashu_pic8.jpeg"

class RotateGalary extends Component {
    state = {  }
    render() { 
        return ( 
            <div>    
            <div className="rotate-main-container">
            <div className="box">
                <span style={{"--i":"1"}}><img src={img1} className="rotate-img"/></span>
                <span style={{"--i":"2"}}><img src={img2} className="rotate-img"/></span>
                <span style={{"--i":"3"}}><img src={img3} className="rotate-img"/></span>
                <span style={{"--i":"4"}}><img src={img4} className="rotate-img"/></span>
                <span style={{"--i":"5"}}><img src={img5} className="rotate-img"/></span>
                <span style={{"--i":"6"}}><img src={img6} className="rotate-img"/></span>
                <span style={{"--i":"7"}}><img src={img7} className="rotate-img"/></span>
                <span style={{"--i":"8"}}><img src={img8} className="rotate-img"/></span>
            </div>
            </div>
            </div>
         );
    }
}
 
export default RotateGalary;
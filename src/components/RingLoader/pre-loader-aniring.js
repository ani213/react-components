import React from 'react';
import "./preloaderaniring.css"
function PreLoaderAniRing (props) {
        return ( 
            <div>
                <div className="ani-ring" style={props.style}>
                    {props.text||"LOADING"}
                    <span className="ani-ring-content"></span>
                </div>
            </div>
         );
    }

 
export default PreLoaderAniRing;
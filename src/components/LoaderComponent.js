import React from "react";
import loader from "../static/img/loader.gif";
const LoaderComponent = ({ isVisible }) => {
    return(
        <>
           <div className="loader_wrapper" style={isVisible?{width:"0px"}:{width:"auto"}}>
              <div className="background_transparent" style={isVisible?{display:"block"}:{display:"none"}}></div>
              <div className="background_loader" style={isVisible?{left:"47%", opacity:1}:{left:"-500%",  opacity:0}}>
                    <img src={loader} alt="loader"/>
              </div>
           </div>
        </>
    );

}

export default LoaderComponent;
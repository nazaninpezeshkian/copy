import "./Video.css"
import React, { Component } from "react";
import video from "../assets/1.mp4"
import {useEffect} from "react"
import {useRef} from "react"
function Video(){
  const vidRef=useRef();
  useEffect(() => { vidRef.current.play(); },[]);

    return(
<>
<div  className="video">
<video
     
      id="background-video"
        src={video}
        ref={ vidRef }
        muted
        autoPlay
        loop 
      />
</div>

<div dir="rtl" className="margintop">
  <div className="videotext">
  <p >طرحت را بپوش متفاوت باش</p>
  </div>


</div>
<div dir="rtl" >
<div className="backwidth">
<div  className="textback">
<p >همین الان شروع کن</p>
  </div>
</div>
</div>


</>
      



   
    )
}
export default Video;
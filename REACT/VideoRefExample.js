import React, {useEffect, useRef, useState} from 'react';
// import VIDEO from "./video.mp4"

const VideoRefExample =()=>{
    const [play,setPlay] = useState(true);
    let videoRef = useRef();
    console.log(videoRef);
    let PlayOrPause=()=>{
        if(play == true){
            videoRef.current.play();
            setPlay(false);
            console.log(play);
        }else{
            videoRef.current.pause();
            setPlay(true);
            console.log(play);
        }
    }
    return(
        <div>
            <video src={video} ref={videoRef} onClick={PlayOrPause}></video>
        </div>
    )
}

export default VideoRefExample
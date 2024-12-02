import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/video.mp4'

const ViedoPlayer = ({playState, setPlayState}) => {
    const player = useRef(null)
    const close = (e)=>{
        if(e.target === player.current){
            setPlayState(false)
        }
    }
  return (
    <div className={` ${playState? '':'hide'}`} >
       <div className='video-player'ref={player}
    onClick={close}>
       <video src={video} autoPlay muted controls></video>
       </div>
      
    </div>
  )
}

export default ViedoPlayer

import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

import './video.css'

export default function Video() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className='videos'>
      <Link to='/'>
        <div className="back">
          <ArrowBackOutlined />
          Acceuil
        </div>
      </Link>
       
       <video className='video'
        autoPlay
        progress
        controls
        src="https://player.vimeo.com/external/395456384.hd.mp4?s=7846052c28054da646f2cb7a735f2030ce4da6ee&profile_id=174"/>
    </div>
  )
}

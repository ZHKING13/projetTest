import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import "./iteme.css"
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../config';
import axios from 'axios';

export default function Iteme({index, item}) {
  const [isHover, setIsHover] = useState(false)
  const [movie, setMovie] = useState({})
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get('movie/' + item);
        setMovie(res.data.movie);
      } catch (err) {
        console.log(err);
      }
    }; 
    getMovie();
  }, [item]);
  
  return (
    <Link to={{ pathname:"/watch", movie: movie }}>
      <div className='iteme'
        style={{ left: isHover && index * 230 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)
        }>
        <img src={movie.imgSm} alt="" />
        {
          isHover && (
            <>
              <video src={movie.trailer} autoPlay={true} loop />
              <div className="itemInfo">
                <div className="icons">
                  <PlayArrow className='icon' />
                  <Add className='icon' />
                  <ThumbUpAltOutlined className='icon' />
                  <ThumbDownAltOutlined className='icon' />
                </div>
                <div className="infoTop">
                  <span>1 heure 43 min</span>
                  <span className='limit'>+{item.limit}</span>
                  <span>{movie.year}</span>
                </div>
                <div className="desc">
                  {movie.desc}
                </div>
                <div className="genre">{movie.genre}</div>
              </div>
            </>
          )
        }

      </div>
    </Link>
    
  )
}

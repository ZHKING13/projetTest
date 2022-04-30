import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import Iteme from '../listItem/Iteme'
import './list.css'

export default function List({list}) {
  const [slideIndex, setSlideIndex] = useState(0)
  const [isMove, setIsMove] = useState(false)
  const lisRef = useRef()
  const handleClick = (direction) => {
    setIsMove(true)
    let curentDistance = lisRef.current.getBoundingClientRect().x -50
    if (direction === 'left' && slideIndex > 0) {
      setSlideIndex(slideIndex - 1)
    lisRef.current.style.transform = `translateX(${230 + curentDistance}px)`
  }
    if (direction === 'right' && slideIndex<5) {
      setSlideIndex(slideIndex + 1)
      lisRef.current.style.transform = `translateX(${-230 + curentDistance}px)`
    }
  }
  return (
   
    <div className='list'>
      <span className='listTitle'>
           {list.title}
         </span>
         <div className="wrapper">
           <ArrowBackIosOutlined className='slider left' onClick={() => handleClick("left")} style={{display: !isMove && "none"}} />
           <div className="container" ref={lisRef}>
          {list.content.map((item, i) => (
            <Iteme index={i} item={item} />
            ))}
                
           </div>
        <ArrowForwardIosOutlined className='slider right' onClick={() => handleClick("right")} />
         </div>
    </div>
  
  )
}

import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import './feature.css'
export default function Feature({ type}) {
  return (
    <div className='feature'>
      {type && (
        <div className="categorie">
          <span>
            {type === "films" ? "Films" : "Series"}
          </span>
          <select name="genre" id="genre" >
            <option value="tout">Tout</option>
            <option value="action">Action</option>
            <option value="aventure">Aventure</option>
            <option value="Nolywood">Nolywood</option>
            <option value="Comedie">Comedie</option>
            <option value="documentaire">Documentaire</option>
          </select>
        </div>
      )}
      <img src="https://lifemag-ci.com/wp-content/uploads/2020/09/ndr4.jpg" alt="img" />
      <div className="info">
        <img src="https://text2image.com/user_images/202204/text2image_M4567087_20220428_121111.png" alt="" />
        <span className='desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquid hic eveniet, in pariatur ratione, ut impedit accusantium sint porro totam, aperiam omnis laudantium. Corporis quas illo quibusdam explicabo obcaecati.
        </span>
        <div className="button">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="infos">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

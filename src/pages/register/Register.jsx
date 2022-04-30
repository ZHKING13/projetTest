import React from 'react'
import './register.css'
export default function Register() {
  return (
    <div className='register'>
       <div className="top">
         <div className="wrapper">
          <img src="" alt="" />
          <button className='loginButton'>Sign in</button>
         </div>
       </div>
       <div className="container">
         <h1> reagrder des film en illimite</h1>
         <h2>Regarder quand et ou vous voulez</h2>
         <p>Pres pour l'aventur? entrez votre address email pour vous abonner.</p>
         <div className="input">
            <input type="email" placeholder="Email" />
            <button className='registerButton'>S'Abonner</button>
         </div>
       </div>
    </div>
  )
}

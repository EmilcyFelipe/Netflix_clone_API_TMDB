import React from 'react'
import './Header.css'
import logo from '../img/logo.png'
import user from '../img/user.png'

export default ({black})=>{
    return(
        <header className={black? 'black':''}>
           <div className="header--logo">
           <a href="/">
                   <img src={logo} alt="netflix logo"/>
            </a>
           </div>
           <div className="header--user">
                <a>
                    <img src={user} alt ="user"/>
                </a>
           </div>
        </header>
    );
}

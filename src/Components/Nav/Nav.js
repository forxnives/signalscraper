import React from 'react'
import illumelogo from '../../img/illumenotext.png'

const Nav = () => {
    return(

        <div className='header__logo-box'>
            <a className=''>
                <img src={illumelogo} className="header__logo" alt="Illume Logo"/>
            </a>
        </div>


    )
}

export default Nav
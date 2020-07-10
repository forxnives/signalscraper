import React from 'react'
import illumelogo from '../../img/illumenotext.png'

const Nav = () => {
    return(
        <nav className="">
            <div className='logo-box'>
                <a className=''>
                    <img src={illumelogo} className="logonotext" alt="Illume Logo"/>
                </a>
            </div>

        </nav>
    )
}

export default Nav
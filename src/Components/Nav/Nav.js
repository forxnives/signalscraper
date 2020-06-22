import React from 'react'
import illumelogo from './illumelogo.png'

const Nav = () => {
    return(
        <nav class="dt w-100 border-box pa3 ph5-ns">
            <a class="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
                <img src={illumelogo} class="dib w3 h3" alt="Site Name"/>
            </a>
            <div class="dtc v-mid w-75 tr">
                <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="About">Services</a>
                <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">Blog</a>
                <a class="link dim dark-gray f6 f5-ns dib" href="#" title="Contact">Join Us</a>
            </div>
        </nav>
    )
}

export default Nav
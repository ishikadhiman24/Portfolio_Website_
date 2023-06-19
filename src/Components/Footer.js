import React from 'react'
import './Footer.css';

export default function Footer(props) {
    return (
        <div className='footersection' style={{backgroundColor:props.mode==='dark'?'#212529':'white' , color : props.mode==='dark'?'white':'black'}}>

            <div class="footer">
                <div class="footer-first">
                    <h3>Ishika's Portfolio</h3>
                </div>
                <div class="footer-second">

                </div>
                <div class="footer-third">
                <ul>
                        <li><a style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} className='footer-info' href='https://www.linkedin.com/in/ishika-dhiman-58a02825a'>LinkedIn</a></li>
                        <li><a style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} className='footer-info' href='https://github.com/ishikadhiman24/Portfolio_Website.git'>Github</a></li>
                        
                    </ul>
                </div>
                <div class="footer-fourth">
                    <ul>
                        <li>Thank You for visiting my website</li>
                       
                    </ul>
                </div>
            </div>
            <div class="footer-rights" >
                Copyright © ishikaportfolio.com  | All rights reserved
            </div>

        </div>
    )
}

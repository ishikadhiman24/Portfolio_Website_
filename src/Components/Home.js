import React from 'react';
import './Home.css';
import profilecircle from '../images/profilecircle.png'
import About from './About';



export default function Home(props) {
  return (
    <>
      <div className="homebox"  >
        <img src={profilecircle} className="profile-img" alt="profile-img" />
        <p className='homename' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Ishika Dhiman</p>
        <p className='homequote'>I am a student at Thapar,India.</p>

      </div>
      <div className="button">
        <button class='btn  btn-primary mx-1'>
          <a className='b' href='https://www.linkedin.com/in/ishika-dhiman-58a02825a'>Connect</a>
        </button>
        <button className="btn  btn-primary mx-1" >
          <a className='b' href='https://docs.google.com/document/d/1XM9m9rZJsyMGCtjmEwXJfwCqRScMEIKz/edit?usp=sharing&ouid=114459357434791701131&rtpof=true&sd=true'>Portfolio</a>
        </button>
      </div>
      <div className="horizontal-line" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
        <hr />
      </div>
      <div className="row" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="col col-lg-4">
          <h5>About me</h5>
        </div>
        <div className="col col-lg-8">
          <p className='about'>
            I am a student of computer Science with Business Systems at Thapar Institute of Engineering and Technology. I am from Faridabad.
            I specialize in web development, coding. I am always striving to learn and grow more as a person and
            I do take myself too seriously and I tend to overthink :) .
          </p>
          <p className="about">
            I am passionate of adventuring and exploring more in the field of software
          </p>
          <a href='https://docs.google.com/document/d/1e1zxkBGcr9JkRN3sK1ZxP1zxwe4YzdgRIIR_eIwxaew/edit?usp=sharing'>Read More</a>
          <p> </p>
          <About />
        </div>

      </div>
    </>

  )
}

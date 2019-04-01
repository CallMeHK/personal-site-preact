/** @jsx h */

import { h, render } from "preact";
import profile from '../assets/profile.png'

const About = props => {
  return (
    <div className="about fade">
      <div className='card'>
        <div className='pic'>
            <img src={profile} alt='profile-picture'/>
        </div>
        <div className='about-text'>
        <p>I'm a self taught full stack dev, specializing in javascript and node.js.  
            Whatever I lack, I make up for in persistence.  Check out my favorite tech,
            linkedIn, and github below.  
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;

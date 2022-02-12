import React from 'react';
import '../../App.css';

import { Button } from '../Button';
import '../../components/HeroSection.css';

export default function SignUp() {
  return (
    
    <div className="hero-container">
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>AUCKLAND UNIVERSITY CHINESE STUDENT SOCIETY</h1><br/><br/><br/><br/>
      <h1>QING MIAO PLAN</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
          <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'onClick={console.log('hey')}>Get Start </Button>
          <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'onClick={console.log('hey')}>About Us<i className='far fa-play-circle' /></Button>
      </div>
    </div>
    
    
    
  );
}


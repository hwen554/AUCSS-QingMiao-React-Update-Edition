import React from 'react';
import '../../App.css';

import {FaUser} from 'react-icons/fa';
import {FaLock} from 'react-icons/fa';
import { Button } from '@douyinfe/semi-ui';

export default function SignUp() {
  return (
    <>
    <video src='/videos/video-1.mp4' autoPlay loop unmuted />
    <div className='container'>
      <div className='title'>Member Login</div>
      <form action='#'>
        <div className='input_box'>
          <input type='text' placeholder='Email or phone number'required/>
          <div className='icon'><FaUser/></div>
        </div>
        <div className='input_box'>
          <input type='text' placeholder='Enter your password' required/>
          <div className='icon'><FaLock/></div>
        </div>
      </form>
    </div>
    
    </>
    
    
  );
}

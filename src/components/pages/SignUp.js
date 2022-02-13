import React from 'react';
import '../../App.css';
import '../SignUp.css';
import {FaUser} from 'react-icons/fa';
import {FaLock} from 'react-icons/fa';
import { Button } from '@douyinfe/semi-ui';

export default function SignUp() {
  return (
    <>
    <video src='/videos/video-1.mp4' autoPlay loop unmuted />
    <div className='body'>
    <div className='main_div'>
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
        <div className='option_div'>
          <div className='check_box'>
            <input type='checkbox'/>
            <span>Remember me</span>
          </div>
          <div className='forgot_div'>
            <a href='#'>Forgot Password</a>
          </div>
        </div>
        <div className='input_box button'>
          <input type='submit' value='Login'/>
        </div>
        <div className='sign_up'>
          Not a member?<a href='#'>Sign Up Now</a>
        </div>
      </form>
    </div>
    </div>
    </>
    
    
  );
}

import React from 'react';
import '../../App.css';
import '../SignUp.css';
import { Button } from '@douyinfe/semi-ui';

export default function SignUp() {
  return (
    <>
    <video src='/videos/video-1.mp4' autoPlay loop unmuted />
    <div className='all'>
    <div className='container'>
      <div className='title'>Registration</div>
      <div className='content'>
        <form action='#'>
          <div className='member-details'>
            <div className='input-box'>
              <span className='details'>Full Name</span>
              <input type='text' placeholder='Enter your name' required></input>
            </div>
            <div className='input-box'>
              <span className='details'>Email</span>
              <input type='text' placeholder='Enter your email' required></input>
            </div>
            <div className='input-box'>
              <span className='details'>Phone Number</span>
              <input type='text' placeholder='Enter your number' required></input>
            </div>
            <div className='input-box'>
              <span className='details'>Password</span>
              <input type='text' placeholder='Enter your password' required></input>
            </div>
            <div className='input-box'>
              <span className='details'>Confirm Password</span>
              <input type='text' placeholder='Enter your password again' required></input>
            </div>
          </div>
          <div className='gender-details'>
            <input type='radio' name='gender' id='dot-1'></input>
            <input type='radio' name='gender' id='dot-1'></input>
            <input type='radio' name='gender' id='dot-1'></input>
            <span className='gender-title'>Gender</span>
            <div className='category'>
              <label for='dot-1'>
                <span className='dot one'></span>
                <span className='gender'>male</span>
              </label>
              <label for='dot-2'>
                <span className='dot two'></span>
                <span className='gender'>female</span>
              </label>
              <label for='dot-3'>
                <span className='dot three'></span>
                <span className='gender'>not to say</span>
              </label>
            </div>
          </div>
          <div className='button'>
            <input type='submit' value='Register'/>
          </div> 
        </form>
      </div>
    </div>
    </div>
    </>
    
    
  );
}

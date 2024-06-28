import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthenticated,setCurrentLogger,resetCurrentLogger } from '../slices/LoginSlice';
import {Navigate} from 'react-router';

const Login = () => {

  const [mode,setMode] = useState('login');
  const [userBox,setUserBox] = useState('');
  const [pass,setPass] = useState('');
  const [repass,setRepass] = useState('');

  const userData = useSelector((state) => state.login.userData);
  const dispatch = useDispatch();

  const loginBtnRef = useRef();
  const signupBtnRef = useRef();

  const create = (e) => {
    for(let i=0;i<userData.length;i++){
      if(userData[i].username==userBox){
        window.alert('User Already exists');
      }
    }
    if(repass!=pass){
      window.alert('Passwords do not match');
    }
    dispatch(isAuthenticated({username:userBox,password:pass}));
    e.preventDefault();
    setMode('login');
  };

  const verify = () => {
      for(let i=0;i<userData.length;i++){
        if(userData[i].username==userBox){
          if(userData[i].username==pass){
            dispatch(setCurrentLogger());
          }
        }
      }
  };

  const varyMode = (val) => {
    if(val=='login'){
      signupBtnRef.current.style.paddingBottom = "1%";
      loginBtnRef.current.style.paddingBottom = "2%";
    } else {
      signupBtnRef.current.style.paddingBottom = "2%";
      loginBtnRef.current.style.paddingBottom = "1%";
    }
    setMode(val);
  }

  return (
    <div className='App'>
      <div className='box'>
      <div className='modeButtons'>
        <button onClick={()=>{varyMode('login')}} ref={loginBtnRef} className='login'>Login</button>
        <input style={{visibility:"hidden"}} value="gapbetweenbuttons"></input>
        <button onClick={()=>{varyMode('signup')}} ref={signupBtnRef} className='signup'>Sign Up</button>
      </div>
      <div className='modeFields'>
        {(mode==="login")?
          (<form data-testid="loginForm" name='loginForm' className='loginForm'>
            <label for="login-username" >Username: </label>
            <input type='text' name='login-username' onChange={(e)=>setUserBox(e.target.value)}/>
            <label for="login-password">Password: </label>
            <input type='text' name='login-password' onChange={(e)=>{setPass(e.target.value)}}/>
            <button type='submit' name='login-submitBtn' onClick={()=>{verify()}}>Submit</button>
          </form>):
          (<form data-testid="signupForm" name='signupForm' className='signupForm'>
            <label for="singup-username">Username: </label>
            <input type='text' name='signup-username' onChange={(e)=>setUserBox(e.target.value)}/>
            <label for="signup-password">Password: </label>
            <input type='text' name='signup-password' onChange={(e)=>{setPass(e.target.value)}}/>
            <label for="signup-reenter-password">Re-Enter Password: </label>
            <input type='text' name='signup-reenter-password' onChange={(e)=>{setRepass(e.target.value)}}/>
            <button type='submit' name='signup-submitBtn' onClick={(e)=>{create(e)}}>Submit</button>
          </form>)
        }
      </div>
      </div>
    </div>
  )
};

export default Login;
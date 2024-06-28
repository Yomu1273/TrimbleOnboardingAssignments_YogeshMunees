import React from 'react';
import {Link, Outlet} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { isAuthenticated,setCurrentLogger,resetCurrentLogger } from '../slices/LoginSlice';

const NavPage = () => {

  const canweallow = useSelector((state)=>state.login.currentLogger);
  const dispatch = useDispatch();

  return (
    <>
        <nav className='navbar'>
            <li className='listitem'>
                <Link to="/">Home</Link>
            </li>
            <li className='listitem'>
                <Link to="contact">Contact Us</Link>
            </li>
            <button onClick={()=>{dispatch(resetCurrentLogger())}} className='logout'>LogOut</button>
        </nav>
        <Outlet/>
    </>
  )
}

export default NavPage
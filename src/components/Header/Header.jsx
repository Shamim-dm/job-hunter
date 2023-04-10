import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
      
        // <div className='flex flex-cols-3 justify-between items-center'>
        //     <div>
        //         <h2 className='text-3xl font-bold'>CareerHub</h2>
        //     </div>
        //     <div className=''>
        //     <Link className='' to='/home'>Home</Link>
        //     <Link className='ml-4' to='/statistics'>Statistics</Link>
        //     <Link className='ml-4' to='/applied-job'>Applied Jobs</Link>
        //     <Link className='ml-4' to='/blog'>Blogs</Link>
        //     </div>
        //     <div>
        //         <button className='btn btn-active btn-primary'>Start Applying</button>
        //     </div>
            
        // </div>










<div className="navbar bg-base-100  w-10/12 lg:w-8/12 mx-auto mb-11 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link className='' to='/home'>Home</Link></li>
        <li tabIndex={0}>
        <Link className='' to='/statistics'>Statistics</Link>  
        </li>
        <li> <Link className='' to='/applied-job'>Applied Jobs</Link></li>
        <li><Link className='' to='/blog'>Blogs</Link></li>
      </ul>
    </div>
    <a className=" font-bold normal-case text-3xl">CareerHub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link className='' to='/home'>Home</Link></li>
      <li tabIndex={0}>
      <Link className='' to='/statistics'>Statistics</Link>  
      </li>
      <li> <Link className='' to='/applied-job'>Applied Jobs</Link></li>
      <li><Link className='' to='/blog'>Blogs</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Start Applying</a>
  </div>
</div>












    );
};

export default Header;
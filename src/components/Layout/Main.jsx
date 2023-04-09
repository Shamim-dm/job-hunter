import React from 'react';
import Header from '../Header/Header';
import App from '../../App';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <App></App>
        </div>
    );
};

export default Main;
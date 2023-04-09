import React from 'react';
import Header from '../Header/Header';
import App from '../../App';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='w-9/12 mx-auto mb-11'>
            <Header></Header>
            <Outlet></Outlet>
            <App></App>
        </div>
    );
};

export default Main;
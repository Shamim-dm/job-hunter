import React from 'react';
import Header from '../Header/Header';
import App from '../../App';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <App></App>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;
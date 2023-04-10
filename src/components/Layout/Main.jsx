import React from 'react';
import Header from '../Header/Header';
import App from '../../App';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';

const Main = () => {
    return (
        <div>
            {/* <div className=' w-10/12 lg:w-8/12 mx-auto mb-11'> */}
            <Header></Header>
            <Outlet></Outlet>
            <App></App>
            

        {/* </div> */}
        </div>
    );
};

export default Main;
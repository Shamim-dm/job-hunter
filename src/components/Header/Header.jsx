import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <h2>CareerHub</h2>
            </div>
            <div>
            <Link to='/home'>Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/applied-job'>Applied Jobs</Link>
            <Link to='/blog'>Blogs</Link>
            </div>
            <div>
                <button>Start Applying</button>
            </div>
            
        </div>
    );
};

export default Header;
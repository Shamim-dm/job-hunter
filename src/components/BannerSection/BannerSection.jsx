import React from 'react';

const BannerSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-between mt-10 items-center '>
            <div className='align-middle'>
                <h2 className='text-5xl font-bold leading-tight tracking-wider'>One Step <br /> <span>Closer To Your </span> <br />
                    <span className='text-indigo-500'>Dream Job</span> </h2>

                <p className='mt-8 text-slate-400'>Explore thousands of job opportunitiesa with all the <br /> information you need. its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button class="btn-primary mt-10">Get Start</button>
            </div>
            <div className=''>
                <img className='' src='../../../public/assets/All Images/P3OLGJ1 copy 1.png' />
            </div>

        </div>
    );
};

export default BannerSection;
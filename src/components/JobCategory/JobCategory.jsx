import React from 'react';

const JobCategory = () => {
    return (
        <div className='mt-12 pt-8'>
            <h2 className='text-2xl font-bold text-center'>Job Category List</h2>
            <p className='text-center text-slate-400 mt-3'>Explore thousands of job opportunities with all information you need. Its your future</p>

            <div className='flex flex-cols-4 justify-between gap-5 mt-10'>
                <div className='bg-indigo-100'>
                    <img src='../../../public/assets/Icons/accounts 1.png' />
                    <p></p>
                </div>
                <div>
                    <img src='../../../public/assets/Icons/business 1.png' />
                </div>
                <div>
                    <img src='../../../public/assets/Icons/social-media 1.png' />
                </div>
                <div>
                    <img src='../../../public/assets/Icons/chip 1.png' />
                </div>
            </div>

        </div>
    );
};

export default JobCategory;
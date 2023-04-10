import React from 'react';

const JobCategory = () => {
    return (
        <div className='mt-12 pt-8'>
            <h2 className='text-3xl font-bold text-center'>Job Category List</h2>
            <p className='text-center text-slate-400 mt-3'>Explore thousands of job opportunities with all information you need. Its your future</p>



            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-5 mt-10 '>
                <div className='bg-indigo-50 p-9 rounded-lg'>
                    <img className='bg-indigo-200 p-2 rounded-md' src='../../../public/assets/Icons/accounts 1.png' />
                    <h4 className='text-xl font-semibold mt-5 '>Account & Finance</h4>
                    <p className='text-slate-400 mt-1'>300 Jobs Available</p>
                </div>              
                <div className='bg-indigo-50 p-9 rounded-lg'>
                    <img className='bg-indigo-200 p-2 rounded-md' src='../../../public/assets/Icons/business 1.png' />
                    <h4 className='text-xl font-semibold mt-5 '>Creative Design</h4>
                    <p className='text-slate-400 mt-1'>100+ Jobs Available</p>
                </div>
                <div className='bg-indigo-50 p-9 rounded-lg'>
                    <img className='bg-indigo-200 p-2 rounded-md' src='../../../public/assets/Icons/social-media 1.png'  />
                    <h4 className='text-xl font-semibold mt-5 '>Marketting & Sales</h4>
                    <p className='text-slate-400 mt-1'>150 Jobs Available</p>
                </div>
                <div className='bg-indigo-50 p-9 rounded-lg'>
                    <img className='bg-indigo-200 p-2 rounded-md' src='../../../public/assets/Icons/social-media 1.png'  />
                    <h4 className='text-xl font-semibold mt-5 '>Engineering Job</h4>
                    <p className='text-slate-400 mt-1'>300 Jobs Available</p>
                </div>
               
            </div>

        </div>
    );
};

export default JobCategory; 
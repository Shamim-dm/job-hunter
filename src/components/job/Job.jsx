import React from 'react';
import Footer from '../Footer/Footer';

const Job = ({ product }) => {

    const { name, picture, category, address, company } = product

    return (
        <div>
            <div className='w-10/12 lg:w-8/12 mx-auto'>

                <div className='border-2 mb-8 rounded-md px-4 py-3 flex gap-5 items-center leading-9 '>

                    <div className=' w-48  rounded-md p-2 '>
                        <img className='' src={picture} />
                    </div>

                    <div className='grow'>
                        <h3 className='font-bold text-xl'>{name}</h3>
                        <p className='text-slate-400'>{company}</p>
                        <span className='text-blue-500 '>
                            <button>{category[0]}</button> <button>{category[1]}</button>
                        </span>
                        <p className='text-slate-400'>{address}</p>
                    </div>

                    <div className=''>
                        <button className='btn-primary'>View Datails</button>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Job;
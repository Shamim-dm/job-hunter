import React from 'react';
import Footer from '../Footer/Footer';
import {MapPinIcon } from '@heroicons/react/24/solid'

const Job = ({ product }) => {

    const { name, picture, category, address, company } = product

    return (
        <div>
            <div className=''>
               

                <div className='border-2 mb-8 rounded-md px-4 py-3 md:flex gap-5 items-center leading-9 '>

                    <div className=' w-48  rounded-md p-2 '>
                        <img className='' src={picture} />
                    </div>

                    <div className='grow'>
                        <h3 className='font-bold text-xl'>{name}</h3>
                        <p className='text-slate-400'>{company}</p>
                        <span className='text-blue-500 '>
                            <button>{category[0]}</button> <button>{category[1]}</button>
                        </span>
                        <span className='flex items-center'>
                        <MapPinIcon className="h-5 w-5 text-blue-500" />
                        <p className='text-slate-400'>{address}</p>
                        </span>
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
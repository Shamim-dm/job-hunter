import React from 'react';
import { Link } from 'react-router-dom';
import Job from '../job/Job';
import Jobdatails from '../JobDatails/JobDatails';
import {MapPinIcon } from '@heroicons/react/24/solid'

const Products = ({data}) => {
   
    const {id, name, address, company, picture, salary, category } = data;
    
    return (
        <div className='border-solid border-2 rounded-md p-8'>
            <img className='w-32 h-14' src={picture}/>
            <h2 className='text-2xl font-semibold mt-5'>{name}</h2>
            <p className='text-slate-400 my-3'>{company}</p>
            <button className='border-2 text-blue-400'>{category[0]}</button> <button className='text-blue-400'>{category[1]}</button>
           
            <div className='flex items-center gap-1 mt-5'>
            <MapPinIcon className="h-5 w-5 text-blue-500" />
            <p className='text-slate-400 my-1'>{address}</p>
            </div>
            <p className='text-slate-400 mb-5'>Salary: {salary}</p>
            <Link to={`home/${id}`} className='border-2 px-3 py-2 rounded-md bg-indigo-400 text-white ' >Datails</Link>

           {/* <Link to='/job-datails'> <button cart={cart} onClick={()=> addToCart(data)} className='btn-primary mt-4'>datails</button></Link> */}
       
        </div>
    );
}


export default Products;
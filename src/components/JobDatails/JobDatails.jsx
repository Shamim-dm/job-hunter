import React, { useContext } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { RingContext } from '../Home/Home';
import { CurrencyDollarIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'

const Jobdatails = () => {
    const fakeDataAll = useLoaderData()
    let {id} = useParams()
    const job = fakeDataAll.find(jobs => jobs.id === id)
   
    // console.log(fakeDataAll, )
    // console.log(id)

    // console.log(id)
    // console.log(job)


    return (
       <div>
         <div className='flex gap-10  w-10/12 lg:w-8/12 mx-auto mb-12 '>
            <div className='w-7/12 leading-8 p-2'>
                <p className='mb-6'><span className='font-bold text-2xl '>Job Description: </span><span className='text-slate-400'> {job.jobDscription}</span></p>
                <p className='mb-6'><span className='font-bold text-2xl '>Job Responsibility: </span><span className='text-slate-400'> {job.jobReponsibilty}</span></p>
                <p className='mb-6'><span className='font-bold text-2xl '>Educational Requarments: </span><span className='text-slate-400'> {job.educational}</span></p>
                <p className='mb-6'><span className='font-bold text-2xl '>Experiences: </span><span className='text-slate-400'> {job.Exprience}</span></p>
               
                

            </div>
           
           <div className='w-5/12 border-2 pt-5 px-7 leading-8 rounded-md bg-indigo-200'>
                <h2 className='text-2xl font-bold mb-2'>Jobs Datails</h2>
                <hr/>
                <p className='mt-2 flex items-center gap-1'> <CurrencyDollarIcon className="h-5 w-5 text-blue-500" />  <span className='font-bold'>Salary: </span> <span className='text-slate-500'>{job.salary} (Per Month)</span> </p>
                <p className='mt-2'> <span className='font-bold'>Job Title: </span> <span className='text-slate-500'>{job.name}</span> </p>
                
               <h4 className='text-2xl font-bold mb-2 mt-6'> Contact Information</h4>
               <hr />
               <p className='mt-2 flex items-center gap-1'><PhoneIcon className="h-5 w-5 text-blue-500" /> <span className='font-bold'>Phone: </span> <span className='text-slate-500'>{job.phone}</span> </p>
               <p className='mt-2'> <span className='font-bold'>Email: </span> <span className='text-slate-500'>{job.email}</span> </p>
               <p className='mt-2 flex items-center gap-1'><MapPinIcon className="h-5 w-5 text-blue-500" /> <span className='font-bold'>Adress: </span> <span className='text-slate-500'>{job.address}. </span> </p>
              
            </div>

           
           
        </div>
         <span className='mr-auto bg-indigo-600 border-2 p-2 rounded-md text-white '>
         <Link to={`applyJob/${job.id} `} >Apply Now</Link>
         </span>
       </div>
    );
};

export default Jobdatails;
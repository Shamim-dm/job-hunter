import React, { useContext } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { RingContext } from '../Home/Home';
import { CurrencyDollarIcon, PhoneIcon, MapPinIcon, DocumentTextIcon, IdentificationIcon } from '@heroicons/react/24/solid'
import Footer from '../Footer/Footer';
import { addToDb } from '../../utilities/fakedb';
import toast, { Toaster } from 'react-hot-toast';
import { setItem } from 'localforage';

const Jobdatails = () => {
    const fakeDataAll = useLoaderData()
    let { id } = useParams()
    const job = fakeDataAll.find(jobs => jobs.id === id)

    
    const applaidJob = (id) => {
        toast.success('Your Job is Applaied!')
        addToDb(id)
        // localStorage.setItem('id')
    }

    // console.log(fakeDataAll, )
    // console.log(id)

    // console.log(id)
    // console.log(job)


    return (
        <div className='mt-12 pt-12   '>
            <h2 className='text-4xl text-center font-bold pb-12 pt-12'>Job Datails</h2>
            <div className='  md:flex gap-10 mt-12 w-10/12 lg:w-8/12 mx-auto mb-12 '>
                <div className=' w-12/12 md:w-7/12 leading-8 p-2'>

                    <p className='mb-6'><span className='font-bold text-2xl '>Job Description: </span><span className='text-slate-400'> {job.jobDscription}</span></p>

                    <p className='mb-6'><span className='font-bold text-2xl '>Job Responsibility: </span><span className='text-slate-400'> {job.jobReponsibilty}</span></p>

                    <p className='mb-6'><span className='font-bold text-2xl '>Educational Requarments: </span><span className='text-slate-400'> {job.educational}</span></p>

                    <p className='mb-6'><span className='font-bold text-2xl '>Experiences: </span><span className='text-slate-400'> {job.Exprience}</span></p>



                </div>

                <div className=' w-12/12 md:w-5/12 border-2 pt-5 px-7 leading-8 rounded-md bg-indigo-200'>
                    <h2 className='text-2xl font-bold mb-2'>Jobs Datails</h2>
                    <hr />

                    <p className='mt-2 flex items-center gap-1'> <CurrencyDollarIcon className="h-5 w-5 text-blue-500" />  <span className='font-bold'>Salary: </span> <span className='text-slate-500'>{job.salary} (Per Month)</span> </p>

                    <p className='mt-2 flex items-center gap-1'> <IdentificationIcon className="h-5 w-5 text-blue-500" />  <span className='font-bold'>Job Title: </span> <span className='text-slate-500'>{job.name}</span> </p>

                    <h4 className='text-2xl font-bold mb-2 mt-6'> Contact Information</h4>
                    <hr />

                    <p className='mt-2 flex items-center gap-1'><PhoneIcon className="h-5 w-5 text-blue-500" /> <span className='font-bold'>Phone: </span> <span className='text-slate-500'>{job.phone}</span> </p>

                    <p className='mt-2 flex items-center gap-1'><DocumentTextIcon className="h-5 w-5 text-blue-500" /> <span className='font-bold'>Email: </span> <span className='text-slate-500'>{job.email}</span> </p>

                    <p className='mt-2 flex items-center gap-1'><MapPinIcon className="h-5 w-5 text-blue-500" /> <span className='font-bold'>Adress: </span> <span className='text-slate-500'>{job.address}. </span> </p>

                </div>



            </div>
            <div className=' w-5/12  lg:ml-auto md:mx-auto text-center mt-2 bg-indigo-600 border-2  p-2 rounded-md text-white '>
                {/* <Link to= >Apply Now</Link> */}
                <button onClick={() => applaidJob(job.id)} >Apply Now</button>
            </div>
            <div className='bg-zinc-900 '>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Jobdatails;
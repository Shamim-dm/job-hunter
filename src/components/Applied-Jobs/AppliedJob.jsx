import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getJobCart } from '../../utilities/fakedb';
import Footer from '../Footer/Footer';
import Job from '../job/Job';

const AppliedJob = () => {

    const [jobs, setJob] = useState([])
    const [cart, setCart] = useState([])
    const [carts, setCarts] = useState([])
    console.log(carts)


    const onsite = (onsite) => {
        const sort = carts.filter(pd => pd.category[0] == 'Onsite')
        console.log(sort)
        setCart(sort)

    }
    const remote = (remote) => {
        const sort = carts.filter(pds => pds.category[0] == 'Remote')
        console.log(sort)
        setCart(sort)

    }


    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setJob(data))

    }, [])


    useEffect(() => {
        const storeCart = getJobCart()
        const saveCart = [];

        for (const id in storeCart) {
            const addJob = jobs.find(job => job.id === id);

            if (addJob) {
                const quantity = storeCart[id];
                addJob.quantity = quantity
                saveCart.push(addJob)
            }
        }
        setCart(saveCart)
        setCarts(saveCart)

    }, [jobs])


    return (
        <div>
            <div className='w-10/12 lg:w-8/12 mx-auto'>
                <h3 className='text-center text-4xl font-bold mb-12 text-sky-400'>Applied Job</h3>
                <div className='text-right mb-3 '>
                    <button onClick={() => onsite(cart)} className='btn-warning' >Onsite</button>
                    <button onClick={() => remote(cart)} className='btn-warning ml-2' >Remote</button>
                </div>

                {
                    cart.map(product => <Job product={product} key={product.id}></Job>)

                }

            </div>
            <div className='bg-zinc-900 '>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AppliedJob;
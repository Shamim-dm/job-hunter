import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import Footer from '../Footer/Footer';
import Job from '../job/Job';

const AppliedJob = () => {
   
    const [jobs, setJob] = useState([]) 
    const [cart, setCart] = useState([])
    console.log(jobs)
    console.log(cart)


useEffect( ()=> {
    fetch('/fakeData.json')
    .then(res => res.json())
    .then(data => setJob(data))

} ,[])


useEffect( ()=>{

    const storeCart = getShoppingCart()
    const saveCart =[];

    for (const id in storeCart ){
        const addJob = jobs.find(job => job.id === id);

        if(addJob){
            const quantity = storeCart[id];
            addJob.quantity = quantity
            saveCart.push(addJob)
        // console.log(addedProduct)
        }
     

        // if(addedajob){
        //     const quantity = storeCart[id];
        //     addedajob.qu
        // }
    }
    setCart(saveCart)




} ,[jobs])






    return (
        <div>
            

            {
                cart.map( product => <Job product={product} key={product.id}></Job>)
            }
          <div className='bg-zinc-900 '>
          <Footer></Footer>
          </div>



        </div>
    );
};

export default AppliedJob;
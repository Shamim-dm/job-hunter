import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getJobCart } from '../../utilities/fakedb';
import Footer from '../Footer/Footer';
import Job from '../job/Job';

const AppliedJob = () => {

    const [jobs, setJob] = useState([])
    const [cart, setCart] = useState([])


//    const remoteData = cart.map(function(elem){
//     return elem;
        
//     })
//     console.log(remoteData)

   

    const onsite = (onsite) => {

          onsite.storeCart = getJobCart(id)
            const sort = onsite.filter(pd => pd.categories == 'onsite' )
            console.log(sort)
            setCart(sort)
         

    }
    const remote = (remote) => {

       remote.storeCart = getJobCart(id)
           const sort = remote.filter(pds => pds.categories == 'Remote')
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
                // console.log(addedProduct)
            }
        }
        setCart(saveCart)

    }, [jobs])

// const carter = cart.filter(pd => {return (pd)} )
// console.log(carter)



// const remote = (carts)=>{

//     let data = []
//     console.log(data)
//     for ( const name of carts){
        
//     return name
        
//         // const remoteData = cart.filter(product => product.id === name.id)
//         // console.log(name)
//         // console.log(remoteData)
//     }
//     // console.log(carts)
// }
// console.log()

    // const [isFilter, setIsFilter] = (false)



    // const handleChange = ()=>{
    //     setIsFilter(true)

    // }


    // const remotes = cart.map(remote => { return remote })

    // console.log(remotes.categorieso)

    // const remote = (id) => {
    //     console.log(id)




    //     const datas = remotes.filter(data => data.categorieso == id)




    //     return datas

    // }

    // console.log(datas)




    return (
        <div>
            <div className='w-10/12 lg:w-8/12 mx-auto'>

                <h3 className='text-center text-4xl font-bold mb-12 text-sky-400'>Applied Job</h3>

                {/* <button onClick={() => handleChange(remotes.categorieso)}>Remote</button> */}
                {/* <select className="select select-bordered w-full max-w-xs  ">
                    <option disabled selected>Filter</option>
                    <option >Remote</option>
                    <option>Onsite</option>
                </select> */}
              <button onClick={() => onsite(cart)}>Onsite</button>
              <button onClick={() => remote(cart)}>Remote</button>


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
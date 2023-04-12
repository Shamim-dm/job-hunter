import React, { createContext, useState } from 'react';
import BannerSection from '../BannerSection/BannerSection';
import JobCategory from '../JobCategory/JobCategory';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import Products from '../Products/Products';


export const RingContext = createContext('cart')
const Home = () => {
    const fakeData = useLoaderData();
    const [showAll, setShowAll] = useState(false)
    const [cart, setCart] = useState([])

    const handleShowAll = () => {
        setShowAll(true)
    }

    return (
        <div>
            <div className=' w-10/12 lg:w-8/12 mx-auto mb-12'>
                <BannerSection></BannerSection>
                <JobCategory></JobCategory>
            </div>

            <h2 className='text-3xl font-bold text-center pt-12'>Futured Jobs</h2>
            <p className='text-center text-slate-400 mt-3 mb-8'>Explore thousands of job opportunities with all information you need. Its your future</p>
            <div className='grid md:grid-cols-2 w-10/12 lg:w-8/12 mx-auto mb-11 gap-4 '>
                {
                    fakeData.slice(0, showAll ? 8 : 4).map(data => <Products data={data} key={data.id} ></Products>)
                }
            </div>
            <div className='mx-auto text-center'>
                {!showAll && (
                    <button onClick={() => handleShowAll()} className=' btn-primary'>See All jobs </button>
                )
                }
            </div>
            <div className='bg-zinc-900'>
                <Footer></Footer>

            </div>
        </div>
    );


};

export default Home;
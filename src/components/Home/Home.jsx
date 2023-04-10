import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import JobCategory from '../JobCategory/JobCategory';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import Products from '../Products/Products';

const Home = () => {
    const fakeData = useLoaderData();
    console.log(fakeData)
    return (
        <div>
            <div className=' w-10/12 lg:w-8/12 mx-auto mb-11'>
                <BannerSection></BannerSection>
                <JobCategory></JobCategory>
            </div>



            { 
            fakeData.map(data => <Products data={data} key={data.id}></Products> )
            }
























            <div className='bg-zinc-900'>
                <Footer></Footer>

            </div>


        </div>
    );
};

export default Home;
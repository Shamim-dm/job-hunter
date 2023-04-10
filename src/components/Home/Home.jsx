import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import JobCategory from '../JobCategory/JobCategory';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <div className=' w-10/12 lg:w-8/12 mx-auto mb-11'>
                <BannerSection></BannerSection>
                <JobCategory></JobCategory>
            </div>



























            
            <div className='bg-zinc-900'>
                <Footer></Footer>

            </div>


        </div>
    );
};

export default Home;
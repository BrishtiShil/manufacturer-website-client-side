import React from 'react';
import Tools from '../Tools/Tools';
import Banner from './Banner';
import Footer from './Footer';
import Reviews from './Reviews';
import Services from './Services';
import Summaries from './Summaries';
import Worker from './Worker';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Tools></Tools>
            <Worker></Worker>
            <Services></Services>
            <Summaries></Summaries>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
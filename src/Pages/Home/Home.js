import React from 'react';
import Tools from '../Tools/Tools';
import Banner from './Banner';
import Footer from './Footer';
import Services from './Services';
import Worker from './Worker';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Tools></Tools>
            <Worker></Worker>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;
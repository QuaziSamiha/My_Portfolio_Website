import React from 'react';
import './Home.css';
import Introduction from '../Introduction/Introduction';
import MyImage from '../MyImage/MyImage';

const Home = () => {
    return (
        <section className='home' id='home'>
            <Introduction />
            <MyImage />
        </section>
    );
};

export default Home;
import React from 'react';
import './Home.css';
import Introduction from '../Introduction/Introduction';
import MyImage from '../MyImage/MyImage';
import ParticleStyle from '../ParticleStyle/ParticleStyle';

const Home = () => {
    return (
        <section className='home' id='home'>
            <Introduction />
            <MyImage />
            <ParticleStyle />
        </section>
    );
};

export default Home;
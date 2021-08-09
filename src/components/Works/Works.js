import React from 'react';
import Work from './Work';
import './Works.css';
import bloodDonation from '../../images/bloodDonation.png';
import foodDelivery from '../../images/foodDelivery.png';
import travel from '../../images/travel.png';

const worksDetail = [
    {
        image: bloodDonation,
        title: 'Blood Donation System',
        link: 'https://blood-donation-7fb25.web.app/',
        materials: 'HTML, CSS, Bootstrap, ReactJS, NodeJS, MongoDB, FontAwesome Icon'
    },
    {
        image: foodDelivery,
        title: 'HomeMade Food Delivery',
        link: 'https://yummy-tummy-9e35d.web.app/',
        materials: 'HTML, CSS, Bootstrap, ReactJS, NodeJS, MongoDB, FontAwesome Icon'
    },
    {
        image: travel,
        title: 'Travelling Agency',
        link: 'https://assignment-9-201ad.web.app/',
        materials: 'HTML, CSS, Bootstrap, ReactJS, NodeJS, MongoDB'
    }
]

const Works = () => {
    return (
        <section className='works_section' id='work'>
            <h2>Some of My Works</h2>
            <p>I have done these projects recently</p>
            <div className='all_works'>
                {
                    worksDetail.map((workInfo, index) =>
                        <Work
                            key={index}
                            image={workInfo.image}
                            title={workInfo.title}
                            link={workInfo.link}
                            materials={workInfo.materials}
                        />
                    )
                }
            </div>
        </section>
    );
};

export default Works;
import React from 'react';
import './Work.css';

const Work = ({ image, title, link, materials }) => {
    return (
        <div className='work_info'>
            <h6>{title}</h6>
            <div className='work_img'>
                <img src={image} alt="" />
                <div className='img_animation'>
                    <h6>Technologies</h6>
                    <p>{materials}</p>
                </div>
            </div>
            <div className='link_feature'>
                <a target='_blank' href={link} rel="noopener noreferrer">Go To Site</a>
                <br /> <br />
            </div>
        </div>
    );
};

export default Work;
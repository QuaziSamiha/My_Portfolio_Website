import React from 'react';
import './Work.css';

const Work = ({ image, title, link, materials, features }) => {
    return (
        <div className='work_info'>
            <h6>{title}</h6>
            <div className='work_img'>
                <img src={image} alt="" />
            </div>
            <div className='link_feature'>
                <a target='_blank' href={link}>Go To Site</a>
                <button>Features</button>
            </div>
        </div>
    );
};

export default Work;
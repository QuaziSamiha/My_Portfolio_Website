import React from 'react';
import './MyImage.css';
import proPic from '../../../images/introImage.png';

const MyImage = () => {
    return (
        <div className='intro_image'>
            <div className='img_frame'>
                <img className='' src={proPic} alt="" />
            </div>
        </div>
    );
};

export default MyImage;
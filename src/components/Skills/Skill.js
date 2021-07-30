import React from 'react';
import './Skill.css';

const Skill = ({ image, name, description }) => {
    return (
        <div className='skill_info'>
            <div className="skill_img">
                <img src={image} alt="" /> <br />
            </div>
            <h5>{name}</h5>
            <p>{description}</p>
        </div>
    );
};

export default Skill;
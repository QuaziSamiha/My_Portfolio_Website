import React from 'react';
import './Skills.css';
import html from '../../images/html logo.jpg';
import css from '../../images/css logo.png';
import js from '../../images/js logo.png';
import react from '../../images/react logo.png';
import node from '../../images/node js logo.jpg';
import mongo from '../../images/mongo db logo.jpg';
import Skill from './Skill';

// import skillsDetail from '../../SkillData/SkillData';
const skillsDetail = [
    {
        skillIcon: html,
        skillName: 'HTML',
        skillDescription: 'I have a good knowledge of HTML and HTML5 tags.'
    },
    {
        skillIcon: css,
        skillName: 'CSS',
        skillDescription: 'I have learned CSS and CSS3. I have also learned Bootstrap, an open source CSS framework. I have done a good number of projects using CSS and Bootstrap.'
    },
    {
        skillIcon: js,
        skillName: 'JavaScript',
        skillDescription: 'I have a good knowledge and experience in JavaScript and ES6.'
    },
    {
        skillIcon: react,
        skillName: 'ReactJS',
        skillDescription: 'I have knowledge of ReactJS as a JavaScript library. I have completed almost 7 projects using ReactJS. I have also a primary level knowledge of React-Bootstrap and MaterialUI for styling ReactJS components'
    },
    {
        skillIcon: node,
        skillName: 'NodeJs',
        skillDescription: 'I have a primary level knowledge of NodeJS and done 4 projects using NodeJS till now.'
    },
    {
        skillIcon: mongo,
        skillName: 'MongoDB',
        skillDescription: 'I have a basic knowledge about MongoDb. I have done 4 projects using MongoDB database.'
    }
]

const Skills = () => {
    return (
        <section className='skills_section' id='skills'>
            <h2 className=''>My Skills</h2>
            <div className='all_skills'>
                {
                    skillsDetail.map((skillInfo, index) =>
                        <Skill
                            key={index}
                            image={skillInfo.skillIcon}
                            name={skillInfo.skillName}
                            description={skillInfo.skillDescription}
                        />
                    )
                }
            </div>
        </section>
    );
};


export default Skills;
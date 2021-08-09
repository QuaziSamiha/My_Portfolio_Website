import React from 'react';
import './Introduction.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Introduction = () => {
    return (
        <div className='intro_text'>
            <h1>
                Hello
                <br />
                I'm Samiha
            </h1>
            <h4>Learner | Frontend Developer</h4>

            <div>
                <button className='link_btn'>
                    <span id='github_icon'>
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </span>
                    <a href="https://github.com/QuaziSamiha" target="_blank" rel="noopener noreferrer">
                        Visit Github
                    </a>
                </button>

                <button className='link_btn'>
                    <a target='_blank' href="https://drive.google.com/file/d/1v_03PlEvOjbEIQgDZlOdiVXlAo1T--Du/view?usp=sharing" rel="noopener noreferrer">
                        Download CV
                    </a>
                </button>
            </div>

        </div>
    );
};

export default Introduction;
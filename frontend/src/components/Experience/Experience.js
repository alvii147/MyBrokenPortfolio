import React from 'react';
import './Experience.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Typewriter } from 'react-simple-typewriter';

import UbuntuLogo from '../../images/ubuntu_logo.png';
import DownwardArrows from '../../images/downward_arrows.png';

import data from './data';

function Experience(props, ref) {
    return (
        <div id="experience-main-container">
            <div ref={ref} id="experience-container" className="section-container">
                <div id="experience-heading-container">
                    <span id="experience-heading-styles">
                        <Typewriter
                            words={['Experience']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={50}
                            deleteSpeed={10}
                            delaySpeed={3000}
                        />
                    </span>
                </div>
                <div id="experience-main-block">
                    <div id="experience-thumbnail-list-container">
                        {data.map(exp => {
                            return (
                                <div className="experience-thumbnail-container">
                                    <div className="experience-interval-container">
                                        {exp.interval}
                                    </div>
                                    <div className="experience-thumbnail-ubuntu-logo-container">
                                        <img alt="Company Ubuntu Logo" src={UbuntuLogo} className="experience-thumbnail-ubuntu-logo" />
                                    </div>
                                    <div className="experience-thumbnail-img-container">
                                        <img alt="Company Thumbnail" src={exp.thumbnail} className="experience-thumbnail-img" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div id="experience-list-container">
                        Hello
                    </div>
                </div>
                <div id="experience-next-page-container-container">
                    <div id="experience-next-page-container">
                        <img alt="Experience Section Ubuntu Logo" src={UbuntuLogo} style={{animation: 'experience-spin 3s linear infinite'}} width={30}></img>
                        &nbsp;&nbsp;Endorse me&nbsp;&nbsp;
                        <img alt="Experience Section Downward Arrows" src={DownwardArrows} width={10}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.forwardRef(Experience);
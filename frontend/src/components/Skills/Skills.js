import React, { useEffect } from 'react';
import './Skills.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Typewriter } from 'react-simple-typewriter';

import Aos from 'aos';
import 'aos/dist/aos.css';

import data from './data';

function Skills(props, ref) {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    return (
        <div id="skills-main-container">
            <div ref={ref} id="skills-container" className="section-container">
                <div id="skills-heading-container">
                    <span id="skills-heading-styles">
                        <Typewriter
                            words={['Skills']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={50}
                            deleteSpeed={10}
                            delaySpeed={3000}
                        />
                    </span>
                </div>
                <div id="skills-main-block">
                    <div data-aos="fade-up" className="skills-card-container">
                        <Card className="skills-card">
                            <Card.Header as="h5" className="skills-card-header">Languages</Card.Header>
                            <Card.Body style={{height: '410px'}} className="skills-card-body">
                                <ListGroup variant="flush">
                                    {data.languages.map(lang => {
                                        return (
                                            <ListGroup.Item className="skills-list-item">
                                                <div className="skills-card-label-container">
                                                    <div className="skills-card-label">
                                                        <Card.Img className="skills-card-img" variant="top" style={{width: '35px'}} src={lang.logo} />
                                                        &nbsp;&nbsp;
                                                        <Card.Title className="skills-card-text-container">{lang.name}</Card.Title>
                                                    </div>
                                                    <div className="progress-bar-container">
                                                        <div className="progress-bar" style={{backgroundImage: lang.color, width: lang.strength}}></div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        );
                                    })}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="300" className="skills-card-container">
                        <Card className="skills-card">
                            <Card.Header as="h5" className="skills-card-header">Tools/Frameworks</Card.Header>
                            <Card.Body style={{height: '470px'}} className="skills-card-body">
                                <ListGroup variant="flush">
                                    {data.frameworks.map(frame => {
                                        return (
                                            <ListGroup.Item className="skills-list-item">
                                                <div className="skills-card-label-container">
                                                    <div className="skills-card-label">
                                                        <Card.Img className="skills-card-img" variant="top" style={{width: '35px'}} src={frame.logo} />
                                                        &nbsp;&nbsp;
                                                        <Card.Title className="skills-card-text-container">{frame.name}</Card.Title>
                                                    </div>
                                                    <div className="progress-bar-container">
                                                        <div className="progress-bar" style={{backgroundImage: frame.color, width: frame.strength}}></div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        );
                                    })}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600" className="skills-card-container">
                        <Card className="skills-card">
                            <Card.Header as="h5" className="skills-card-header">Databases/Data Science</Card.Header>
                            <Card.Body style={{height: '470px'}} className="skills-card-body">
                                <ListGroup variant="flush">
                                    {data.data.map(ds => {
                                        return (
                                            <ListGroup.Item className="skills-list-item">
                                                <div className="skills-card-label-container">
                                                    <div className="skills-card-label">
                                                        <Card.Img className="skills-card-img" variant="top" style={{width: '35px'}} src={ds.logo} />
                                                        &nbsp;&nbsp;
                                                        <Card.Title className="skills-card-text-container">{ds.name}</Card.Title>
                                                    </div>
                                                    <div className="progress-bar-container">
                                                        <div className="progress-bar" style={{backgroundImage: ds.color, width: ds.strength}}></div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        );
                                    })}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="900" className="skills-card-container">
                        <Card className="skills-card">
                            <Card.Header as="h5" className="skills-card-header">Soft Skills</Card.Header>
                            <Card.Body style={{height: '340px'}} className="skills-card-body">
                                <ListGroup variant="flush">
                                    {data.soft.map(ss => {
                                        return (
                                            <ListGroup.Item className="skills-list-item">
                                                <div className="skills-card-label-container">
                                                    <div className="skills-card-label">
                                                        <Card.Img className="skills-card-img" variant="top" style={{width: '35px'}} src={ss.logo} />
                                                        &nbsp;&nbsp;
                                                        <Card.Title className="skills-card-text-container">{ss.name}</Card.Title>
                                                    </div>
                                                    <div className="progress-bar-container">
                                                        <div className="progress-bar" style={{backgroundImage: ss.color, width: ss.strength}}></div>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        );
                                    })}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.forwardRef(Skills);
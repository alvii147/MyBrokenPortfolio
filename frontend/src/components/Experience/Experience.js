import React, { useState, useEffect } from 'react';
import './Experience.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';

import { Typewriter } from 'react-simple-typewriter';

import Aos from 'aos';
import 'aos/dist/aos.css';

import UbuntuLogo from '../../images/ubuntu_logo.png';

import data from './data';

const TimelineUbuntuIconStyles = {
    active: {
        animation: 'experience-spin 5s linear infinite',
        filter: 'none',
    },
    completed: {
        animation: 'none',
        filter: 'grayscale(100%)',
    },
}

function TimelineUbuntuIcon(props) {
    const { active, completed } = props;

    return (
        <img alt="Timeline Ubuntu Icon" src={UbuntuLogo} onClick={props.setter} className="experience-timeline-ubuntu-img" style={active ? TimelineUbuntuIconStyles.active : completed ? TimelineUbuntuIconStyles.completed : TimelineUbuntuIconStyles.completed} />
    );
}

const TimelineConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: '#FF9999',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#FF9999',
        },
    },
    line: {
        borderColor: '#FF9999',
        borderTopWidth: 1,
        borderRadius: 1,
    },
})(StepConnector);

function Experience(props, ref) {
    const expData = data.filter(exp => exp.active);
    const [activeExp, setActiveExp] = useState(expData.length - 1);

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

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
                        <Stepper data-aos="fade-down" alternativeLabel activeStep={activeExp} id="experience-main-stepper" connector={<TimelineConnector />}>
                            {expData.reverse().map((exp, index) => {
                                return (
                                    <Step key={index}>
                                        <StepLabel StepIconComponent={TimelineUbuntuIcon} StepIconProps={{
                                            setter: () => {setActiveExp(index)}}}>
                                        </StepLabel>
                                        <div className="experience-thumbnail-container">
                                            <img alt="Company Thumbnail" src={exp.thumbnail} className={"experience-thumbnail-img" + (activeExp === index ? "" : " experience-thumbnail-img-inactive")} onClick={() => setActiveExp(index)} />
                                        </div>
                                        {activeExp === index &&
                                        <div className="experience-interval-text-container">
                                            <p dangerouslySetInnerHTML={{__html: exp.interval.replace('-', '-<br />')}} className="experience-interval-text" />
                                        </div>}
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </div>
                    <div id="experience-list-container">
                        <Card data-aos="flip-left" data-aos-delay="300" bg="dark" className="experience-card">
                            <Card.Header as="h3" className="experience-card-header">
                                <div className="experience-card-header-text">{expData[activeExp].company}</div>
                                {expData[activeExp].evaluation &&
                                <div className="experience-card-header-badge">
                                    <div className="experience-badge-container">
                                        <Badge className="experience-badge-left" style={{borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}}>Intern Evaluation</Badge>
                                        <Badge className="experience-badge-right" style={{borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'}}>{expData[activeExp].evaluation}</Badge>
                                    </div>
                                </div>}
                            </Card.Header>
                            <Card.Body className="experience-card-body">
                                <div className="experience-card-top-container">
                                    <div className="experience-card-title-container">
                                        <Card.Title>{expData[activeExp].role}</Card.Title>
                                        <Card.Text style={{fontSize: '10pt'}}>{expData[activeExp].interval}</Card.Text>
                                    </div>
                                    <div className="experience-card-img-container">
                                        <img alt="Experience Company" src={expData[activeExp].logo} className="experience-card-img" />
                                    </div>
                                </div>
                                <Card.Text className="experience-card-text">
                                    <ListGroup variant="flush" className="experience-list-group">
                                        {expData[activeExp].description.map(desc => {
                                            return(
                                                <ListGroup.Item style={{color: 'inherit', borderColor: 'inherit', backgroundColor: 'transparent'}} dangerouslySetInnerHTML={{__html: desc}}></ListGroup.Item>
                                            );
                                        })}
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.forwardRef(Experience);
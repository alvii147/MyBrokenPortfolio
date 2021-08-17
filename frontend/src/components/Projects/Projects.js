import React, { useEffect } from 'react';
import './Projects.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

import { Typewriter } from 'react-simple-typewriter';

import { Github, Devpost } from '@icons-pack/react-simple-icons';
import Carousel from 'react-material-ui-carousel';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';

import Aos from 'aos';
import 'aos/dist/aos.css';

import data from './data';

function shuffle(arr) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
}

function Projects(props, ref) {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    shuffle(data);

    return (
        <div id="projects-main-container">
            <div ref={ref} id="projects-container" className="section-container">
                <div id="#projects-heading-container">
                    <span id="projects-heading-styles">
                        <Typewriter
                            words={['Projects']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={50}
                            deleteSpeed={10}
                            delaySpeed={3000}
                        />
                    </span>
                </div>
                <Carousel animation="slide" interval={8000} timeout={700} navButtonsAlwaysVisible="true" navButtonsProps={{style: {color: '#111111', backgroundImage: 'linear-gradient(to right, #B3D9FF, #8080FF)'}}}>
                    {data.map(prj => {
                        return (
                            <div className="projects-card-parent-container" href="">
                                <Card data-aos="fade-left" className="projects-card-container">
                                    <Card.Header as="h1" className="display-6 projects-card-header">{prj.title}</Card.Header>
                                    <div className="projects-card-content-container">
                                        <Card.Img className="projects-card-img" style={{padding: '40px', width: '50%'}} variant="top" src={prj.image} />
                                        <Card.Img className="projects-card-img-mobile" style={{padding: '40px', width: '100%'}} variant="top" src={prj.image} />
                                        <Card.Body className="projects-card-body">
                                            <Card.Title><i>{prj.caption}</i></Card.Title>
                                            <div className="projects-milestones-container">
                                                {prj.milestones.map(ms => {
                                                    return (
                                                        <div className="projects-milestone">
                                                            <Badge className="projects-milestone-badge-left" style={{borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}}>{ms[0]}</Badge>
                                                            <Badge className="projects-milestone-badge-right" style={{borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'}}>{ms[1]}</Badge>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <Card.Text className="projects-card-text-container">
                                                <ListGroup variant="flush">
                                                    {prj.description.map(desc => {
                                                        return (
                                                            <ListGroup.Item style={{backgroundColor: 'transparent'}} className="list-group-item" dangerouslySetInnerHTML={{__html: desc}}></ListGroup.Item>
                                                        );
                                                    })}
                                                </ListGroup>
                                            </Card.Text>
                                            <div className="projects-footer-container">
                                                <div className="projects-footer-technologies-container">
                                                    {prj.technologies.map(Tech => {
                                                        return (
                                                            <div className="projects-footer-technology">
                                                                <Tech></Tech>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className="projects-footer-links-container">
                                                    <div className="projects-footer-links-spacing">
                                                        <a className="projects-footer-link" href={prj.github} target="_blank" rel="noopener noreferrer">
                                                            <div className="projects-github-badge-container">
                                                                <Github className="projects-github-footer-link-icon" size={30} />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="projects-footer-links-spacing">
                                                        {prj.devpost ?
                                                        <a className="projects-footer-link" href={prj.devpost} target="_blank" rel="noopener noreferrer">
                                                            <div className="projects-devpost-badge-container">
                                                                <Devpost className="projects-devpost-footer-link-icon" size={30} />
                                                            </div>
                                                        </a> : null}
                                                    </div>
                                                    <div className="projects-footer-links-spacing">
                                                        {prj.website ?
                                                        <a className="projects-footer-link" href={prj.website} target="_blank" rel="noopener noreferrer">
                                                            <div className="projects-website-badge-container">
                                                                <LanguageOutlinedIcon className="projects-website-footer-link-icon" style={{fontSize: 30}} />
                                                            </div>
                                                        </a> : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
}

export default React.forwardRef(Projects);
import React, { useEffect } from 'react';
import './Writings.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import { Typewriter } from 'react-simple-typewriter';

import Carousel from 'react-material-ui-carousel';

import Aos from 'aos';
import 'aos/dist/aos.css';

import data from './data';

function Writings(props, ref) {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    return (
        <div id="writings-main-container">
            <div ref={ref} id="writings-container" className="section-container">
                <div id="#writings-heading-container">
                    <span id="writings-heading-styles">
                        <Typewriter
                            words={['Writings']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={50}
                            deleteSpeed={10}
                            delaySpeed={3000}
                        />
                    </span>
                </div>
                <Carousel
                    animation="fade"
                    autoPlay={false}
                    fullHeightHover={false}
                    navButtonsAlwaysVisible="true"
                    navButtonsProps={{style: {color: '#E6E6E6', backgroundImage: 'linear-gradient(to right, #004D4D, #003300)'}}}>
                    {data.map(wr => {
                        return (
                            <div className="writings-card-parent-container" href="">
                                <Card data-aos="fade-right" className="writings-card-container">
                                    <Card.Title className="writings-card-title"><strong>{wr.title}</strong></Card.Title>
                                    <div className="writings-tags-container">
                                        <div className="writings-tags-left">
                                            {wr.tags.map(tg => {
                                                return (
                                                    <div className="writings-tag">
                                                        <Badge className="writings-tag-badge">{tg}</Badge>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="writings-tags-right">
                                            <Badge className="writings-link-badge" onClick={(e) => {e.preventDefault(); window.open(wr.link, '_blank');}}>Go To Page &#10166;</Badge>
                                        </div>
                                    </div>
                                    <div className="writings-iframe-container">
                                        <iframe src={wr.link} width='95%' height='95%' title={wr.title}></iframe>
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

export default React.forwardRef(Writings);
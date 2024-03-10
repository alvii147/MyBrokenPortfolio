import React, { useEffect, useState } from 'react';
import './About.css';

import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';

import Switch from "react-switch";

import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { Typewriter } from 'react-simple-typewriter';

import { Linkedin, Github, /*Devpost,*/ Gmail/*, Leetcode*/ } from '@icons-pack/react-simple-icons';

import Aos from 'aos';
import 'aos/dist/aos.css';

import data from './data';

import AvatarRound from '../../images/About/avatar_round.png';
import Waterloo from '../../images/About/waterloo.png';
// import TurkeySyria from '../../images/About/turkeysyria.png';
import Palestine from '../../images/About/palestine.png';
import SigmoidAcademy from '../../images/About/sigmoid_academy.png';

function Projects(props, ref) {
    const [showAvatar, setShowAvatar] = useState(false);
    const handleShowAvatar = () => setShowAvatar(true);
    const handleHideAvatar = () => setShowAvatar(false);

    const [showTranscripts, setShowTranscripts] = useState(false);
    const handleShowTranscripts = () => setShowTranscripts(true);
    const handleHideTranscripts = () => setShowTranscripts(false);

    const darkModeStyles = {
        mainContainerStyle: {
            color: 'rgb(235, 235, 235)',
        },
        linkWrap: {
            color: 'rgb(235, 235, 235)',
            textDecoration: 'none',
        },
        titlebarStyle: {
            backgroundImage: 'linear-gradient(rgb(63, 72, 90), rgb(40, 46, 57))',
        },
        sidebarStyle: {
            backgroundColor: 'rgb(54, 65, 83)',
            border: '2px solid rgb(52, 52, 52)',
            borderRightColor: 'rgb(42, 42, 42)',
        },
        sidebarComponentContainerStyle: {
            borderBottom: '1px solid rgb(90, 90, 90)',
        },
        sidebarComponentContainerStyleSpecial: {
            borderTop: '1px solid rgb(90, 90, 90)',
        },
        contentsContainerStyle: {
            backgroundColor: 'rgb(43, 53, 70)',
        },
        descriptionBlockStyle: {
            backgroundColor: 'rgb(54, 65, 83)',
            border: '1px solid rgb(90, 90, 90)',
        },
        electricalIconColor: '#FFFF99',
        AIIconColor: '#00E600',
        schoolIconColor: '#00e6e6',
        linkedinIconColor: '#0A66C2',
        githubIconColor: '#FFFFFF',
        devpostIconColor: '#0083B3',
        gmailIconColor: '#EA4335',
        resumeIconColor: '#99E6E6',
        leetcodeIconColor: '#FFA116',
    }

    const lightModeStyles = {
        mainContainerStyle: {
            color: 'rgb(30, 30, 30)',
        },
        linkWrap: {
            color: 'rgb(30, 30, 30)',
            textDecoration: 'none',
        },
        titlebarStyle: {
            backgroundImage: 'linear-gradient(rgb(62, 62, 62), rgb(44, 44, 44))',
        },
        sidebarStyle: {
            backgroundColor: 'rgb(242, 230, 255)',
            border: '2px solid rgb(115, 115, 115)',
            borderRightColor: 'rgb(153, 153, 153)',
        },
        sidebarComponentContainerStyle: {
            borderBottom: '1px solid rgb(130, 130, 130)',
        },
        sidebarComponentContainerStyleSpecial: {
            borderTop: '1px solid rgb(130, 130, 130)',
        },
        contentsContainerStyle: {
            backgroundColor: 'rgb(230, 230, 255)',
        },
        descriptionBlockStyle: {
            backgroundColor: 'rgb(242, 230, 255)',
            border: '1px solid rgb(130, 130, 130)',
        },
        electricalIconColor: '#0044CC',
        AIIconColor: '#339966',
        schoolIconColor: '#333333',
        linkedinIconColor: '#0A66C2',
        githubIconColor: '#000000',
        devpostIconColor: '#003E54',
        gmailIconColor: '#EA4335',
        resumeIconColor: '#009999',
        leetcodeIconColor: '#FFA116',
    }

    const [UIStyles, setUIStyles] = useState(darkModeStyles);
    const [modeChecked, setModeChecked] = useState(false);

    const departmentColors = {
        BET: '#D93F00',
        CS: '#DF2498',
        CHEM: '#0033BE',
        EARTH: '#0033BE',
        ECON: '#D93F00',
        ECE: '#8100B4',
        GENE: '#8100B4',
        MATH: '#DF2498',
        MSCI: '#8100B4',
        PD: '#8100B4',
        STAT: '#DF2498'
    };

    const getGradeColor = (grade) => {
        const green = {
            r: 0,
            g: 204,
            b: 102
        };
        const yellow = {
            r: 255,
            g: 204,
            b: 0
        };
        const red = {
            r: 255,
            g: 51,
            b: 0
        };

        if (grade === 'Credit Granted') {
            return `rgb(${green.r}, ${green.g}, ${green.b})`;
        }

        const interpolateNumbers = (num1, num2, fraction) => {
            return num1 + Math.floor((num2 - num1) * fraction);
        };

        if (grade < 50) {
            return `rgb(${interpolateNumbers(red.r, yellow.r, grade / 50)}, ${interpolateNumbers(red.g, yellow.g, grade / 50)}, ${interpolateNumbers(red.b, yellow.b, grade / 50)})`;
        }

        return `rgb(${interpolateNumbers(yellow.r, green.r, (grade - 50) / 50)}, ${interpolateNumbers(yellow.g, green.g, (grade - 50) / 50)}, ${interpolateNumbers(yellow.b, green.b, (grade - 50) / 50)})`;
    };

    const handleModeChange = (checked) => {
        setModeChecked(checked);
        if (checked) {
            setUIStyles(lightModeStyles);
        }
        else {
            setUIStyles(darkModeStyles);
        }
    };

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    return (
        <div id="about-main-container">
            <div ref={ref} id="about-container" className="section-container">
                <div id="#about-heading-container">
                    <span id="about-heading-styles">
                        <Typewriter
                            words={['About Me']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={50}
                            deleteSpeed={10}
                            delaySpeed={3000}
                        />
                    </span>
                </div>
                <div data-aos="flip-up" id="about-main-block">
                    <div id="about-title-bar" style={UIStyles.titlebarStyle}>
                        <div id="about-title-text-container">
                            About Me
                        </div>
                        <div id="about-terminal-title-actions-container">
                            &nbsp;<div className="about-terminal-title-action about-cross">x</div>
                            &nbsp;<div className="about-terminal-title-action">
                                <div id="ubuntu-maximize-square"></div>
                            </div>
                            &nbsp;<div className="about-terminal-title-action">
                                <div id="about-minimize-line"></div>
                                </div>
                        </div>
                    </div>
                    <div id="about-contents-container" style={UIStyles.mainContainerStyle}>
                        <div id="about-sidebar" style={UIStyles.sidebarStyle}>
                            <div data-aos="custom-fade-in" data-aos-delay="1000" id="about-sidebar-animation-container">
                                <div id="about-sidebar-education">
                                    <div className="about-sidebar-component-container" style={UIStyles.sidebarComponentContainerStyle} onClick={handleShowTranscripts}>
                                        <div className="about-sidebar-component">
                                            <div className="about-sidebar-component-icon-container">
                                                <img alt="Waterloo Icon" src={Waterloo} style={{width: '17px'}} />
                                            </div>
                                            <div className="about-sidebar-component-text">
                                                U. Waterloo<br />
                                            </div>
                                        </div>
                                        <div className="about-sidebar-component">
                                            <div className="about-sidebar-component-icon-container">
                                                <EmojiObjectsOutlinedIcon style={{color: UIStyles.electricalIconColor}} size={17} />
                                            </div>
                                            <div className="about-sidebar-component-text about-sidebar-component-text-small">
                                                Electrical Eng.<br />
                                            </div>
                                        </div>
                                        <div className="about-sidebar-component">
                                            <div className="about-sidebar-component-icon-container">
                                                <BarChartOutlinedIcon style={{color: UIStyles.AIIconColor}} size={17} />
                                            </div>
                                            <div className="about-sidebar-component-text about-sidebar-component-text-small">
                                                A.I. Option<br />
                                            </div>
                                        </div>
                                        <div className="about-sidebar-component">
                                            <div className="about-sidebar-component-icon-container">
                                                <SchoolOutlinedIcon style={{color: UIStyles.schoolIconColor}} size={17} />
                                            </div>
                                            <div className="about-sidebar-component-text about-sidebar-component-text-small">
                                                {data.average}% Average<br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="about-sidebar-socials">
                                    <a href="https://github.com/alvii147/Resume/raw/master/ZahinZaman.pdf" target="_blank" rel="noopener noreferrer" style={UIStyles.linkWrap}>
                                        <div className="about-sidebar-component-container" style={UIStyles.sidebarComponentContainerStyle}>
                                            <div className="about-sidebar-component">
                                                <div className="about-sidebar-component-icon-container">
                                                    <AccountBoxIcon style={{color: UIStyles.resumeIconColor, fontSize: 23}} />
                                                </div>
                                                <div className="about-sidebar-component-text">
                                                    Resume
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/zahin-zaman/" target="_blank" rel="noopener noreferrer" style={UIStyles.linkWrap}>
                                        <div className="about-sidebar-component-container" style={UIStyles.sidebarComponentContainerStyle}>
                                            <div className="about-sidebar-component">
                                                <div className="about-sidebar-component-icon-container">
                                                    <Linkedin color={UIStyles.linkedinIconColor} size={17} />
                                                </div>
                                                <div className="about-sidebar-component-text">
                                                    LinkedIn
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://github.com/alvii147" target="_blank" rel="noopener noreferrer" style={UIStyles.linkWrap}>
                                        <div className="about-sidebar-component-container" style={UIStyles.sidebarComponentContainerStyle}>
                                            <div className="about-sidebar-component">
                                                <div className="about-sidebar-component-icon-container">
                                                    <Github color={UIStyles.githubIconColor} size={17} />
                                                </div>
                                                <div className="about-sidebar-component-text">
                                                    Github
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    {/* <a href="https://devpost.com/alvii147" target="_blank" rel="noopener noreferrer" style={UIStyles.linkWrap}>
                                        <div className="about-sidebar-component-container" style={UIStyles.sidebarComponentContainerStyle}>
                                            <div className="about-sidebar-component">
                                                <div className="about-sidebar-component-icon-container">
                                                    <Devpost color={UIStyles.devpostIconColor} size={17} />
                                                </div>
                                                <div className="about-sidebar-component-text">
                                                    Devpost
                                                </div>
                                            </div>
                                        </div>
                                    </a> */}
                                    {/* <a href="https://github.com/alvii147/leetcode" target="_blank" rel="noopener noreferrer" style={UIStyles.linkWrap}>
                                        <div className="about-sidebar-component-container" style={UIStyles.sidebarComponentContainerStyle}>
                                            <div className="about-sidebar-component">
                                                <div className="about-sidebar-component-icon-container">
                                                    <Leetcode color={UIStyles.leetcodeIconColor} size={17} />
                                                </div>
                                                <div className="about-sidebar-component-text">
                                                    Leetcode
                                                </div>
                                            </div>
                                        </div>
                                    </a> */}
                                    <div className="about-sidebar-component-container" style={UIStyles.sidebarComponentContainerStyle} onClick={props.scrollToContact}>
                                        <div className="about-sidebar-component">
                                            <div className="about-sidebar-component-icon-container">
                                                <Gmail color={UIStyles.gmailIconColor} size={17} />
                                            </div>
                                            <div className="about-sidebar-component-text">
                                                Email
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://sigmoid-academy.netlify.app" target="_blank" rel="noopener noreferrer" style={UIStyles.linkWrap}>
                                        <div className="about-sidebar-component-container" style={UIStyles.sidebarComponentContainerStyle}>
                                            <div className="about-sidebar-component">
                                                <div className="about-sidebar-component-icon-container">
                                                    <img alt="Sigmoid Academy Icon" src={SigmoidAcademy} style={{width: '17px'}} />
                                                </div>
                                                <div className="about-sidebar-component-text">
                                                    Sigmoid Academy
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div id="about-modeselect-container">
                                    <Switch
                                        checked={modeChecked}
                                        onChange={handleModeChange}
                                        offColor="#000066"
                                        onColor="#80bfff"
                                        onHandleColor="#465f86"
                                        offHandleColor="#465f86"
                                        checkedIcon={
                                            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '4px', paddingLeft: '5px', color: 'rgb(255, 255, 153)'}}>
                                                <WbSunnyIcon fontSize='small' />
                                            </div>
                                        }
                                        uncheckedIcon={
                                            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '5px', color: 'rgb(255, 255, 153)'}}>
                                                <NightsStayIcon fontSize='small' />
                                            </div>
                                        }>
                                    </Switch>
                                </div>
                                <div id="about-sidebar-socials">
                                    {/* <a href="https://www.islamicreliefcanada.org/emergencies/turkey-syria-earthquake-appeal/" target="_blank" rel="noopener noreferrer" style={UIStyles.linkWrap}>
                                        <div className="about-sidebar-component-container about-sidebar-component-container-special" style={UIStyles.sidebarComponentContainerStyleSpecial}>
                                            <div className="about-sidebar-component">
                                                <div className="about-sidebar-component-icon-container">
                                                    <img alt="Turkey Syria Icon" src={TurkeySyria} style={{width: '17px'}} />
                                                </div>
                                                <div className="about-sidebar-component-text-small">
                                                    Donate to Turkey & Syria
                                                </div>
                                            </div>
                                        </div>
                                    </a> */}
                                    <a href="https://www.pcrf.net/" target="_blank" rel="noopener noreferrer" style={UIStyles.linkWrap}>
                                        <div className="about-sidebar-component-container about-sidebar-component-container-special" style={UIStyles.sidebarComponentContainerStyleSpecial}>
                                            <div className="about-sidebar-component">
                                                <div className="about-sidebar-component-icon-container">
                                                    <img alt="Palestine Icon" src={Palestine} style={{width: '17px'}} />
                                                </div>
                                                <div className="about-sidebar-component-text">
                                                    Support Palestine
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="about-contents" style={UIStyles.contentsContainerStyle}>
                            <div data-aos="zoom-in" data-aos-delay="1000" id="about-avatar-container" onClick={handleShowAvatar}>
                                <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip>
                                        View Image
                                    </Tooltip>
                                }>
                                    <img id="about-avatar" alt="Avatar" src={AvatarRound} />
                                </OverlayTrigger>
                            </div>
                            <div id="about-description-container">
                                <div id="about-description-block" style={UIStyles.descriptionBlockStyle}>
                                    <p data-aos="custom-fade-in" data-aos-delay="1000">
                                        {data.bio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal id="about-avatar-modal" show={showAvatar} onHide={handleHideAvatar} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header id="about-avatar-modal-header" closeButton>
                    <Modal.Title style={{fontFamily: 'Ubuntu'}}>My cousin, Muhammad, and me.<br />Can you guess who's who?</Modal.Title>
                </Modal.Header>
                <Modal.Body id="about-avatar-modal-body">
                    <img style={{width: '100%'}} alt="Avatar" src={AvatarRound} />
                </Modal.Body>
            </Modal>

            <Modal id="about-transcript-modal" show={showTranscripts} onHide={handleHideTranscripts} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header id="about-transcript-modal-header" closeButton>
                    <Modal.Title>Academic Transcript</Modal.Title>
                </Modal.Header>
                <Modal.Body id="about-transcript-modal-body">
                    <h6 style={{textAlign: 'center'}}>
                        <img alt="Waterloo Icon" src={Waterloo} style={{width: '25px'}} />
                        &nbsp;University of Waterloo
                    </h6>
                    <h5 style={{textAlign: 'center'}}>B.A.Sc. Electrical Engineering</h5>
                    <h6 style={{textAlign: 'center'}}>with Artificial Intelligence Option</h6>
                    <h6 style={{textAlign: 'center'}}>
                        Overall Grade:&nbsp;
                        <Badge
                            style={{
                                backgroundColor: getGradeColor(data.average)
                            }}
                        >
                            {data.average}
                        </Badge>
                    </h6>
                    {data.transcript.map((t, index) => (
                        <div key={index} id="about-transcript-modal-term-container">
                            <h5 style={{textAlign: 'center'}}>{t.term ? `${t.term}, ` : ''}{t.season} {t.year}</h5>
                            <Table striped hover bordered>
                                <thead>
                                    <tr>
                                        <th>Course Code</th>
                                        <th>Course Title</th>
                                        <th>Grade</th>
                                    </tr>
                                </thead>
                                {t.courses.map((course, index) => (
                                    <tbody key={`${course.department} ${course.number}`}>
                                        <tr>
                                            <td>
                                                <Badge
                                                    style={{
                                                        backgroundColor: departmentColors[course.department]
                                                    }}
                                                >
                                                    {`${course.department} ${course.number}`}
                                                </Badge>
                                            </td>
                                            <td>{course.title}</td>
                                            <td>
                                                <Badge
                                                    style={{
                                                        backgroundColor: getGradeColor(course.grade)
                                                    }}
                                                >
                                                    {course.grade}
                                                </Badge>
                                            </td>
                                        </tr>
                                    </tbody>
                                ))}
                            </Table>
                        </div>
                    ))}
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default React.forwardRef(Projects);
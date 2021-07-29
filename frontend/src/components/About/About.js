import React, { useEffect, useState } from 'react';
import './About.css';

import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Switch from "react-switch";

import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';

import { Typewriter } from 'react-simple-typewriter';

import { Linkedin, Github, Devpost, Gmail } from '@icons-pack/react-simple-icons';

import Aos from 'aos';
import 'aos/dist/aos.css';

import data from './data';

import AvatarRound from '../../images/About/avatar_round.png';
import Waterloo from '../../images/About/waterloo.png';
import UbuntuLogo from '../../images/ubuntu_logo.png';
import DownwardArrows from '../../images/downward_arrows.png';

function Projects(props, ref) {
    const [showAvatar, setShowAvatar] = useState(false);
    const handleShowAvatar = () => setShowAvatar(true);
    const handleHideAvatar = () => setShowAvatar(false);

    const darkModeStyles = {
        mainContainerStyle: {
            color: 'rgb(235, 235, 235)',
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
    }

    const lightModeStyles = {
        mainContainerStyle: {
            color: 'rgb(30, 30, 30)',
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
        contentsContainerStyle: {
            backgroundColor: 'rgb(230, 230, 255)',
        },
        descriptionBlockStyle: {
            backgroundColor: 'rgb(242, 230, 255)',
            border: '1px solid rgb(130, 130, 130)',
        },
        electricalIconColor: '#0044CC',
        AIIconColor: '#00E600',
        schoolIconColor: '#333333',
        linkedinIconColor: '#0A66C2',
        githubIconColor: '#000000',
        devpostIconColor: '#003E54',
        gmailIconColor: '#EA4335',
    }

    const [UIStyles, setUIStyles] = useState(darkModeStyles);
    const [modeChecked, setModeChecked] = useState(false);

    const handleModeChange = (checked) => {
        setModeChecked(checked);
        if (checked) {
            setUIStyles(lightModeStyles);
        }
        else {
            setUIStyles(darkModeStyles);
        }
    }

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
                <div data-aos="fade-left" id="about-main-block">
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
                            <div id="about-sidebar-education">
                                <div className="about-sidebar-component-container" style={UIStyles.sidebarComponentContainerStyle} onClick={(e) => {e.preventDefault(); window.open('https://uwaterloo.ca/', '_blank');}}>
                                    <div className="about-sidebar-component">
                                        <div data-aos="custom-fade-in" data-aos-delay="1000" className="about-sidebar-component-icon-container">
                                            <img alt="Waterloo Icon" src={Waterloo} style={{width: '17px'}} />
                                        </div>
                                        <div data-aos="custom-fade-in" data-aos-delay="1000" className="about-sidebar-component-text">
                                            U. Waterloo<br />
                                        </div>
                                    </div>
                                    <div className="about-sidebar-component">
                                        <div data-aos="custom-fade-in" data-aos-delay="1000" className="about-sidebar-component-icon-container">
                                            <EmojiObjectsOutlinedIcon style={{color: UIStyles.electricalIconColor}} size={17} />
                                        </div>
                                        <div data-aos="custom-fade-in" data-aos-delay="1000" className="about-sidebar-component-text about-sidebar-component-text-small">
                                            Electrical Eng.<br />
                                        </div>
                                    </div>
                                    <div className="about-sidebar-component">
                                        <div data-aos="custom-fade-in" data-aos-delay="1000" className="about-sidebar-component-icon-container">
                                            <BarChartOutlinedIcon style={{color: UIStyles.AIIconColor}} size={17} />
                                        </div>
                                        <div data-aos="custom-fade-in" data-aos-delay="1000" className="about-sidebar-component-text about-sidebar-component-text-small">
                                            A.I. Specialization<br />
                                        </div>
                                    </div>
                                    <div className="about-sidebar-component">
                                        <div data-aos="custom-fade-in" data-aos-delay="1000" className="about-sidebar-component-icon-container">
                                            <SchoolOutlinedIcon style={{color: UIStyles.schoolIconColor}} size={17} />
                                        </div>
                                        <div data-aos="custom-fade-in" data-aos-delay="1000" className="about-sidebar-component-text about-sidebar-component-text-small">
                                            83.9% Average<br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="about-sidebar-socials">
                                <div className="about-sidebar-component-container" style={UIStyles.sidebarComponentContainerStyle} onClick={(e) => {e.preventDefault(); window.open('https://www.linkedin.com/in/zahin-zaman/', '_blank');}}>
                                    <div className="about-sidebar-component">
                                        <div data-aos="custom-fade-in" data-aos-delay="1000" className="about-sidebar-component-icon-container">
                                            <Linkedin color={UIStyles.linkedinIconColor} size={17} />
                                        </div>
                                        <div data-aos="custom-fade-in" data-aos-delay="1000" className="about-sidebar-component-text">
                                            LinkedIn
                                        </div>
                                    </div>
                                </div>
                                <div className="about-sidebar-component-container" style={UIStyles.sidebarComponentContainerStyle} onClick={(e) => {e.preventDefault(); window.open('https://github.com/alvii147', '_blank');}}>
                                    <div className="about-sidebar-component">
                                        <div data-aos="custom-fade-in" data-aos-delay="1000" className="about-sidebar-component-icon-container">
                                            <Github color={UIStyles.githubIconColor} size={17} />
                                        </div>
                                        <div data-aos="custom-fade-in" data-aos-delay="1000" className="about-sidebar-component-text">
                                            Github
                                        </div>
                                    </div>
                                </div>
                                <div className="about-sidebar-component-container" style={UIStyles.sidebarComponentContainerStyle} onClick={(e) => {e.preventDefault(); window.open('https://devpost.com/alvii147', '_blank');}}>
                                    <div className="about-sidebar-component">
                                        <div data-aos="custom-fade-in" data-aos-delay="1000" className="about-sidebar-component-icon-container">
                                            <Devpost color={UIStyles.devpostIconColor} size={17} />
                                        </div>
                                        <div data-aos="custom-fade-in" data-aos-delay="1000" className="about-sidebar-component-text">
                                            Devpost
                                        </div>
                                    </div>
                                </div>
                                <div className="about-sidebar-component-container" style={UIStyles.sidebarComponentContainerStyle} onClick={(e) => {e.preventDefault(); window.open('https://google.com', '_blank');}}>
                                    <div className="about-sidebar-component">
                                        <div data-aos="custom-fade-in" data-aos-delay="1000" className="about-sidebar-component-icon-container">
                                            <Gmail color={UIStyles.gmailIconColor} size={17} />
                                        </div>
                                        <div data-aos="custom-fade-in" data-aos-delay="1000" className="about-sidebar-component-text">
                                            Email
                                        </div>
                                    </div>
                                </div>
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
                <div id="about-next-page-container-container">
                    <div id="about-next-page-container" onClick={props.scrollToProjects}>
                        <img alt="About Section Ubuntu Logo" src={UbuntuLogo} style={{animation: 'about-spin 3s linear infinite'}} width={30}></img>
                        &nbsp;&nbsp;Check out my projects&nbsp;&nbsp;
                        <img alt="About Section Downward Arrows" src={DownwardArrows} width={10}></img>
                    </div>
                </div>
            </div>

            <Modal id="avatar-modal" show={showAvatar} onHide={handleHideAvatar} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header id="avatar-modal-header" closeButton>
                    <Modal.Title>My cousin Muhammad and I.<br />Can you guess who's who?</Modal.Title>
                </Modal.Header>
                <Modal.Body id="avatar-modal-body">
                    <img style={{width: '100%'}} alt="Avatar" src={AvatarRound} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default React.forwardRef(Projects);
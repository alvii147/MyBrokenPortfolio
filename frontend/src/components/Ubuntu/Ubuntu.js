import React, { useState, useRef } from 'react';
import './Ubuntu.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

import { Typewriter } from 'react-simple-typewriter';

import ColoredCharizardImage from '../../images/Ubuntu/charizard.png';
import EvolvedCharizardImage from '../../images/Ubuntu/evolved_charizard.png';
import UbuntuLogo from '../../images/ubuntu_logo.png';
import DownwardArrows from '../../images/downward_arrows.png';

import { CodeBlock, hybrid } from "react-code-blocks";

const opencvCode = "import cv2\n" +
"import numpy as np\n" +
"from PIL import Image\n\n" +
"# read image from path\n" +
"img = cv2.imread('charizard.png')\n" +
"# apply canny edge detection algorithm to find edges\n" +
"img = cv2.Canny(img, 100, 200)\n" +
"# apply dilation morphological transform to dilate edges\n" +
"img = cv2.dilate(img, np.ones((2, 2), np.uint8), iterations=1)\n\n" +
"# construct empty rgba array\n" +
"img_arr = np.zeros(img.shape + (4,), dtype=np.uint8)\n\n" +
"# rgba color to apply to edges\n" +
"edge_color = np.array([173, 53, 104, 255])\n" +
"# rgba color for a transparent background\n" +
"bg_color = np.array([0, 0, 0, 0])\n\n" +
"# iterate through every pixel\n" +
"for i in range(img_arr.shape[0]):\n" +
"  for j in range(img_arr.shape[1]):\n" +
"    # if the pixel is bright\n" +
"    if img[i][j] > 127:\n" +
"      # apply edge color\n" +
"      img_arr[i][j] = edge_color\n" +
"    # otherwise, if the pixel is dark\n" +
"    else:\n" +
"      # apply transparent background\n" +
"      img_arr[i][j] = bg_color\n\n" +
"# construct PIL image from array\n" +
"img = Image.fromarray(img_arr)\n" +
"# save PIL image to PNG\n" +
"img.save('evolved_charizard.png')"

function Ubuntu({scrollToAbout, scrollToProjects, scrollToSkills, scrollToExperience, scrollToEndorsements, scrollToContact}) {
    const [showOpencvModal, setShowOpencvModal] = useState(false);
    const handleShowOpencvModal = () => setShowOpencvModal(true);
    const handleHideOpencvModal = () => setShowOpencvModal(false);

    const terminalTextArea = useRef(null);
    
    const sections = ['about', 'projects', 'skills', 'experience', 'endorsements', 'contact'];

    const [terminalContent, setTerminalContent] = useState([
        {
            class: 'ubuntu-terminal-text-default',
            text: 'Try running ',
            newline: false,
        },
        {
            class: 'ubuntu-terminal-text-blue',
            text: '"ls" ',
            newline: false,
        },
        {
            class: 'ubuntu-terminal-text-default',
            text: 'or ',
            newline: false
        },
        {
            class: 'ubuntu-terminal-text-blue',
            text: '"cd projects/"',
            newline: true,
        },
    ]);

    const handleTerminalTabs = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            sections.forEach(section => {
                var cmd = 'cd ' + section;
                if (cmd.startsWith(event.target.value)) {
                    event.target.value = cmd + '/';
                    event.target.setSelectionRange(cmd.length + 1, cmd.length + 1);
                    return;
                }
            });
        }
    }

    const handleTerminalCommand = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            terminalTextArea.current.scrollTop = terminalTextArea.current.scrollHeight;
            var output = [];

            if (event.target.value === 'cd about' || event.target.value === 'cd about/') {
                scrollToAbout();
            }
            else if (event.target.value === 'cd projects' || event.target.value === 'cd projects/') {
                scrollToProjects();
            }
            else if (event.target.value === 'cd skills' || event.target.value === 'cd skills/') {
                scrollToSkills();
            }
            else if (event.target.value === 'cd experience' || event.target.value === 'cd experience/') {
                scrollToExperience();
            }
            else if (event.target.value === 'cd endorsements' || event.target.value === 'cd endorsements/') {
                scrollToEndorsements();
            }
            else if (event.target.value === 'cd contact' || event.target.value === 'cd contact/') {
                scrollToContact();
            }
            else if (event.target.value === 'ls') {
                sections.forEach((item, index) => {
                    output.push({
                        class: 'ubuntu-terminal-text-blue',
                        text: item + '/ ',
                        newline: index === sections.length - 1,
                    })
                });
            }
            else if (event.target.value.startsWith('rm -rf')) {
                output.push({
                    class: 'ubuntu-terminal-text-yellow',
                    text: 'Lol nice try, you really think this is a real terminal?',
                    newline: true,
                });
            }
            else if (event.target.value === 'help') {
                output.push({
                    class: 'ubuntu-terminal-text-default',
                    text: 'Try running ',
                    newline: false,
                });
                output.push({
                    class: 'ubuntu-terminal-text-blue',
                    text: '"ls" ',
                    newline: false,
                });
                output.push({
                    class: 'ubuntu-terminal-text-default',
                    text: 'or ',
                    newline: false
                });
                output.push({
                    class: 'ubuntu-terminal-text-blue',
                    text: '"cd projects/"',
                    newline: true,
                });
            }
            else if (event.target.value === 'clear') {
                setTerminalContent([]);
                event.target.value = '';
                return;
            }
            else {
                output.push({
                    class: 'ubuntu-terminal-text-red',
                    text: 'Unknown command',
                    newline: true,
                });
                output.push({
                    class: 'ubuntu-terminal-text-default',
                    text: 'Try running ',
                    newline: false,
                });
                output.push({
                    class: 'ubuntu-terminal-text-blue',
                    text: '"ls" ',
                    newline: false,
                });
                output.push({
                    class: 'ubuntu-terminal-text-default',
                    text: 'or ',
                    newline: false
                });
                output.push({
                    class: 'ubuntu-terminal-text-blue',
                    text: '"cd projects/"',
                    newline: true,
                });
            }

            setTerminalContent([
                ...terminalContent,
                {
                    class: 'ubuntu-terminal-text-green',
                    text: 'zahin@ubuntucharizard',
                    newline: false,
                },
                {
                    class: 'ubuntu-terminal-text-default',
                    text: ':',
                    newline: false,
                },
                {
                    class: 'ubuntu-terminal-text-blue',
                    text: '~ ',
                    newline: false,
                },
                {
                    class: 'ubuntu-terminal-text-default',
                    text: '$ ',
                    newline: false,
                },
                {
                    class: 'ubuntu-terminal-text-default',
                    text: event.target.value,
                    newline: true,
                },
                ...output,
            ]);
            event.target.value = '';
        }
    };

    return (
        <div id="ubuntu-main-section-container" className="section-container">
            <div id="ubuntu-main-container">
                <div id="ubuntu-terminal-column">
                    <div id="ubuntu-typewriter-container">
                        <span id="ubuntu-typewriter-styles">
                            <Typewriter
                                words={['Greetings, Zahin here!', 'I\'m a software developer', 'Let me show you around...', 'Try running "cd projects/"']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={50}
                                deleteSpeed={10}
                                delaySpeed={3000}
                            />
                        </span>
                    </div>
                    <div id="ubuntu-terminal-container">
                        <div id="ubuntu-terminal-title">
                            <div id="ubuntu-terminal-title-text">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                zahin@ubuntucharizard: ~
                            </div>
                            <div id="ubuntu-terminal-title-actions-container">
                                <div className="ubuntu-terminal-title-action ubuntu-cross">x</div>
                                <div className="ubuntu-terminal-title-action">
                                    <div id="ubuntu-maximize-square"></div>
                                </div>
                                <div className="ubuntu-terminal-title-action">
                                    <div id="ubuntu-minimize-line"></div>
                                    </div>
                            </div>
                        </div>
                        <div id="ubuntu-terminal-menu">
                            &nbsp;
                            File&nbsp;&nbsp;
                            Edit&nbsp;&nbsp;
                            View&nbsp;&nbsp;
                            Search&nbsp;&nbsp;
                            Terminal&nbsp;&nbsp;
                            Help
                        </div>
                        <div ref={terminalTextArea} id="ubuntu-terminal-content">
                            {terminalContent.map(content => {
                                if (content.newline) {
                                    return (
                                        <span className={content.class}>{content.text}<br /></span>
                                    );
                                }
                                return (
                                    <span className={content.class}>{content.text}</span>
                                );
                            })}
                        </div>
                        <div id="ubuntu-terminal-command-line">
                            <span className="ubuntu-terminal-text-green">zahin@ubuntucharizard</span>
                            <span className="ubuntu-terminal-text-default">:</span>
                            <span className="ubuntu-terminal-text-blue">~&nbsp;</span>
                            <span className="ubuntu-terminal-text-default">$&nbsp;</span>
                            <input id="ubuntu-terminal-command-line-textarea" spellCheck="false" contentEditable="true" onKeyPress={handleTerminalCommand} onKeyDown={handleTerminalTabs}></input>
                        </div>
                    </div>
                </div>
                <div id="ubuntu-charizard-column" onClick={handleShowOpencvModal}>
                    <div id="ubuntu-charizard-img">
                        <img id="ubuntu-evolved-charizard-img" alt="Ubuntu Charizard" src={EvolvedCharizardImage} />
                    </div>
                    <div id="ubuntu-charizard-img-text">Learn how I created this image</div>
                </div>
            </div>
            <div id='ubuntu-next-page-container-container'>
                <div id="ubuntu-next-page-container" onClick={scrollToAbout}>
                    <img alt="Ubuntu Section Ubuntu Logo" src={UbuntuLogo} style={{animation: 'ubuntu-spin 3s linear infinite'}} width={30}></img>
                    &nbsp;&nbsp;Learn about me&nbsp;&nbsp;
                    <img alt="Ubuntu Section Downward Arrows" src={DownwardArrows} width={10}></img>
                </div>
            </div>

            <Modal id="ubuntu-opencv-modal" size='xl' show={showOpencvModal} onHide={handleHideOpencvModal} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header id="ubuntu-opencv-modal-header" closeButton>
                    <Modal.Title>OpenCV Edge Detection</Modal.Title>
                </Modal.Header>
                <Modal.Body id="ubuntu-opencv-modal-body">
                    <p>This image of Charizard was created using <a href="https://opencv.org/" target="_blank" rel="noopener noreferrer"><strong>OpenCV</strong></a> by applying <a href="https://docs.opencv.org/3.4/da/d22/tutorial_py_canny.html" target="_blank" rel="noopener noreferrer"><strong>canny edge detection algorithm</strong></a> to a colored <a href="https://static.wikia.nocookie.net/iso33private/images/9/95/Charizard.png" target="_blank" rel="noopener noreferrer"><strong>Charizard image</strong></a>, followed by a <a href="https://docs.opencv.org/4.5.2/d9/d61/tutorial_py_morphological_ops.html" target="_blank" rel="noopener noreferrer"><strong>morphological transformation.</strong></a></p>
                    <div style={{height: '250px', overflowY: 'scroll', fontFamily: 'monospace'}}>
                        <CodeBlock
                            text={opencvCode}
                            language='python'
                            theme={hybrid}
                            showLineNumbers={true}
                        />
                    </div><br />
                    <div id='ubuntu-charizard-transformation-container'>
                        <img id="ubuntu-charizard-transformation-img" alt="Ubuntu Charizard Before" src={ColoredCharizardImage} />
                        <img id="ubuntu-charizard-transformation-img" alt="Ubuntu Charizard After" src={EvolvedCharizardImage} />
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Ubuntu;
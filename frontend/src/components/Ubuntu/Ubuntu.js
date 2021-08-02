import React, { useState } from 'react';
import './Ubuntu.css';

import { Typewriter } from 'react-simple-typewriter';

import CharizardImage from '../../images/Ubuntu/ubuntu_charizard.png';
import UbuntuLogo from '../../images/ubuntu_logo.png';
import DownwardArrows from '../../images/downward_arrows.png';

function Ubuntu({scrollToAbout, scrollToProjects, scrollToSkills, scrollToExperience}) {
    const sections = ['about', 'projects', 'skills', 'experience'];

    const [terminalContent, setTerminalContent] = useState([]);

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
            else if (event.target.value === 'ls') {
                sections.forEach((item, index) => {
                    output.push({
                        class: 'ubuntu-terminal-text-blue',
                        text: item + '/ ',
                        newline: index === sections.length - 1,
                    })
                })
            }
            else if (event.target.value.startsWith('rm -rf')) {
                output.push({
                    class: 'ubuntu-terminal-text-yellow',
                    text: 'Lol nice try, you really think this is a real terminal?',
                    newline: true,
                });
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
                    text: '`cd projects`',
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
                    <div id="ubuntu-typerwriter-container">
                        <span id="ubuntu-typewriter-styles">
                            <Typewriter
                                words={['Greetings, Zahin here!', 'I\'m a software developer', 'Let me show you around...', 'Try running `cd projects/`']}
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
                        <div id="ubuntu-terminal-content">
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
                            <input id="ubuntu-terminal-command-line-textarea" contentEditable="true" onKeyPress={handleTerminalCommand} onKeyDown={handleTerminalTabs}></input>
                        </div>
                    </div>
                </div>
                <div id="ubuntu-charizard-column">
                    <img id="ubuntu-charizard-img" alt="Ubuntu Charizard" src={CharizardImage} />
                </div>
            </div>
            <div id='ubuntu-next-page-container-container'>
                <div id="ubuntu-next-page-container" onClick={scrollToAbout}>
                    <img alt="Ubuntu Section Ubuntu Logo" src={UbuntuLogo} style={{animation: 'ubuntu-spin 3s linear infinite'}} width={30}></img>
                    &nbsp;&nbsp;Learn about me&nbsp;&nbsp;
                    <img alt="Ubuntu Section Downward Arrows" src={DownwardArrows} width={10}></img>
                </div>
            </div>
        </div>
    );
}

export default Ubuntu;
import React, { useState, useEffect } from 'react';
import './Endorsements.css';

import axios from 'axios';
import validator from 'validator';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import HelpIcon from '@material-ui/icons/Help';
import { CodeBlock, hybrid } from "react-code-blocks";

import Carousel from 'react-material-ui-carousel';

import { Typewriter } from 'react-simple-typewriter';

import UbuntuLogo from '../../images/ubuntu_logo.png';
import DownwardArrows from '../../images/downward_arrows.png';

const { REACT_APP_API_KEY, REACT_APP_API_BASE, REACT_APP_ENDORSEMENTS_GET, REACT_APP_ENDORSEMENTS_POST } = process.env;
const axios_config = {
    headers: {
        'Authorization': 'Api-Key ' + REACT_APP_API_KEY,
    },
}

function Endorsements(props, ref) {
    const [showModalForm, setShowModalForm] = useState(false);
    const handleShowModalForm = () => setShowModalForm(true);
    const handleHideModalForm = () => {
        setShowModalForm(false);
        setShowFormMessage(false);
    }

    const [endorsementsData, setEndorsementsData] = useState([]);
    useEffect(() => {
        axios.get(
            REACT_APP_API_BASE + REACT_APP_ENDORSEMENTS_GET,
            axios_config,
        ).then((response) => {
            setEndorsementsData(response.data);
        });
    }, []);

    const [endorsementFormData, setEndorsementFormData] = useState({
        email: '',
        first_name: '',
        last_name: '',
        role: '',
        relationship: '',
        message: '',
    });

    const formMessageOptions = {
        none: {
            variant: 'secondary',
            message: '',
        },
        success: {
            variant: 'success',
            message: 'Thanks for your endorsement! Your request is being processed.',
        },
        alreadyexists: {
            variant: 'info',
            message: 'You\'ve already submitted an endorsement. If you wish to update it, please contact Zahin.',
        },
        toomany: {
            variant: 'info',
            message: 'You\'ve already submitted too many endorsements. Please try again later.',
        },
        error: {
            variant: 'danger',
            message: 'Something went wrong. Please try again.',
        },
        invalidemail: {
            variant: 'danger',
            message: 'Invalid email. Please use a valid email address.',
        },
        incomplete: {
            variant: 'danger',
            message: 'Please fill out all required fields.',
        },
    }

    const [showNLPHelp, setShowNLPHelp] = useState(false);
    const handleShowNLPHelp = () => setShowNLPHelp(true);
    const handleHideNLPHelp = () => setShowNLPHelp(false);
    const nlpCode = 'from textblob import TextBlob\n\nanalysis = TextBlob(my_text)\n# sentiment\nprint(analysis.sentiment)\n# parts of speech tags\nprint(analysis.tags)';

    const [showFormMessage, setShowFormMessage] = useState(false);
    const [formMessage, setFormMessage] = useState(formMessageOptions.none);

    const handleFormChange = (event, property) => setEndorsementFormData(prevData => {return {...prevData, [property]: event.target.value}});
    const handleFormSubmit = () => {
        if (! validator.isEmail(endorsementFormData.email)) {
            setShowFormMessage(true);
            setFormMessage(formMessageOptions.invalidemail);
            return;
        }
        else if (
            validator.isEmpty(endorsementFormData.email)
            || validator.isEmpty(endorsementFormData.first_name)
            || validator.isEmpty(endorsementFormData.last_name)
            || validator.isEmpty(endorsementFormData.role)
            || validator.isEmpty(endorsementFormData.relationship)
            || validator.isEmpty(endorsementFormData.message)
        ) {
            setShowFormMessage(true);
            setFormMessage(formMessageOptions.incomplete);
            return;
        }

        var formdata = new FormData();
        for (var key in endorsementFormData) {
            formdata.append(key, endorsementFormData[key]);
        }

        axios.post(
            REACT_APP_API_BASE + REACT_APP_ENDORSEMENTS_POST,
            formdata,
            axios_config,
        ).then((response) => {
            if (response.data.status === 'alreadyexists') {
                setShowFormMessage(true);
                setFormMessage(formMessageOptions.alreadyexists);
                return;
            }
            else if (response.data.status === 'toomany') {
                setShowFormMessage(true);
                setFormMessage(formMessageOptions.toomany);
                return;
            }
            else if (response.data.status === 'success') {
                setShowFormMessage(true);
                setFormMessage(formMessageOptions.success);
                setEndorsementFormData(
                    {
                        email: '',
                        first_name: '',
                        last_name: '',
                        role: '',
                        relationship: '',
                        message: '',
                    }
                );
            }
            else {
                setShowFormMessage(true);
                setFormMessage(formMessageOptions.error);
            }
        }).catch((error) => {
            setShowFormMessage(true);
            setFormMessage(formMessageOptions.error);
        });
    }

    return (
        <div id="endorsements-main-container">
            <div ref={ref} id="endorsements-container" className="section-container">
                <div id="endorsements-heading-container">
                    <span id="endorsements-heading-styles">
                        <Typewriter
                            words={['Endorsements']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={50}
                            deleteSpeed={10}
                            delaySpeed={3000}
                        />
                    </span>
                </div>
                <Carousel animation="fade" interval={8000} timeout={700} navButtonsAlwaysVisible="true">
                    {endorsementsData.map(endorsement => {
                        return (
                            <div className="endorsements-main-card-container">
                                <div className="endorsements-main-card">
                                    <div className="endorsements-title-container">
                                        <div className="endorsements-title">
                                            <div className="endorsements-avatar-container">
                                                <img alt="avatar" src={`https://avatars.dicebear.com/api/bottts/${endorsement.id}.svg`} className="endorsements-avatar"/>
                                            </div>
                                            <div className="endorsements-name-container">
                                                <h5>{endorsement.first_name} {endorsement.last_name}</h5>
                                                <h6>{endorsement.role} 	&bull; {endorsement.relationship}</h6>
                                            </div>
                                        </div>
                                        <div className="endorsements-button-container">
                                            <Button variant="outline-warning" onClick={handleShowModalForm}>Endorse Me</Button>
                                        </div>
                                    </div>
                                    <div className="endorsements-msg-container">
                                        <i><h1 dangerouslySetInnerHTML={{__html: '"' + endorsement.message + '"'}} className="display-6 endorsements-msg"></h1></i>
                                    </div>
                                    <div className="endorsements-nlp-container">
                                        <div className="endorsements-nlp-text-container">Polarity:</div>
                                        <ProgressBar variant="success" animated now={endorsement.polarity * 100} style={{width: '70px', height: '10px'}}/>
                                        <div className="endorsements-nlp-text-container">Subjectivity:</div>
                                        <ProgressBar variant="primary" animated now={endorsement.subjectivity * 100} style={{width: '70px', height: '10px'}}/>
                                        <div className="endorsements-nlp-help-container">
                                            <HelpIcon className="endorsements-nlp-help" color="secondary" onClick={handleShowNLPHelp} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
                <div id="endorsements-next-page-container-container">
                    <div id="endorsements-next-page-container" onClick={props.scrollToContact}>
                        <img alt="Endorsements Section Ubuntu Logo" src={UbuntuLogo} style={{animation: 'endorsements-spin 3s linear infinite'}} width={30}></img>
                        &nbsp;&nbsp;Contact me&nbsp;&nbsp;
                        <img alt="Endorsements Section Downward Arrows" src={DownwardArrows} width={10}></img>
                    </div>
                </div>
            </div>

            <Modal id="endorsements-form-modal" show={showModalForm} onHide={handleHideModalForm} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header id="endorsements-form-modal-header" closeButton>
                    <Modal.Title>Endorse me!</Modal.Title>
                </Modal.Header>
                <Alert show={showFormMessage} variant={formMessage.variant}>
                    {formMessage.message}
                </Alert>
                <Modal.Body id="endorsements-form-modal-body">
                    <Form>
                        <Form.Group className="mb-3" controlId="endorsementForm.email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control size="sm" type="email" placeholder="name@example.com" value={endorsementFormData.email} onChange={(event) => handleFormChange(event, 'email')} />
                            <Form.Text className="endorsements-form-modal-small-text">
                                This is only collected for the purpose of avoiding spammers, your email will never be shared with anyone.
                            </Form.Text>
                        </Form.Group>
                        <Row className="g-2">
                            <Col md>
                                <Form.Group className="mb-3" controlId="endorsementForm.first_name">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="Begum" value={endorsementFormData.first_name} onChange={(event) => handleFormChange(event, 'first_name')} />
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group className="mb-3" controlId="endorsementForm.last_name">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="Rokeya" value={endorsementFormData.last_name} onChange={(event) => handleFormChange(event, 'last_name')} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="g-2">
                            <Col md>
                                <Form.Group className="mb-3" controlId="endorsementForm.role">
                                    <Form.Label>Position</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="e.g. Team Lead at XYZ" value={endorsementFormData.role} onChange={(event) => handleFormChange(event, 'role')} />
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group className="mb-3" controlId="endorsementForm.relationship">
                                    <Form.Label>How do you know me?</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="e.g. Colleague, mentor" value={endorsementFormData.relationship} onChange={(event) => handleFormChange(event, 'relationship')} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="endorsementForm.message">
                            <Form.Label>Recommendation message</Form.Label>
                            <Form.Control as="textarea" rows={4} value={endorsementFormData.message}  onChange={(event) => handleFormChange(event, 'message')} />
                        </Form.Group>
                        <Button variant="outline-info" onClick={handleFormSubmit}>Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal id="endorsements-nlp-help-modal" show={showNLPHelp} onHide={handleHideNLPHelp} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header id="endorsements-nlp-help-modal-header" closeButton>
                    <Modal.Title>Sentiment Analysis</Modal.Title>
                </Modal.Header>
                <Modal.Body id="endorsements-form-modal-body">
                    <p>Sentiment analysis is performed using NLP Python library, <a href="https://textblob.readthedocs.io/en/dev/" target="_blank" rel="noopener noreferrer"><strong>TextBlob</strong></a>.</p>
                    <div style={{fontFamily: 'monospace'}}>
                        <CodeBlock
                            text={nlpCode}
                            language='python'
                            theme={hybrid}
                            showLineNumbers={true}
                        />
                    </div><br />
                    <p><code>analysis.sentiment</code> was used to find the polarity and subjectivity of a piece of text. The parts of speech tags in <code>analysis.tags</code> were used to identify positive adjectives which are highlighted in green.</p>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default React.forwardRef(Endorsements);
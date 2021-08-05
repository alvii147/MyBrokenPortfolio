import React, { useState } from 'react';
import './Contact.css';

import axios from 'axios';
import validator from 'validator';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { Typewriter } from 'react-simple-typewriter';

const { REACT_APP_API_KEY, REACT_APP_API_BASE, REACT_APP_CONTACT_POST } = process.env;
const axios_config = {
    headers: {
        'Authorization': 'Api-Key ' + REACT_APP_API_KEY,
    },
}

function Contact(props, ref) {
    const formMessageOptions = {
        none: {
            variant: 'secondary',
            message: '',
        },
        success: {
            variant: 'success',
            message: 'Thanks for your message! Your request is being processed.',
        },
        toomany: {
            variant: 'info',
            message: 'You\'ve already submitted too many messages. Please try again later.',
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

    const [contactFormData, setContactFormData] = useState({
        email: '',
        subject: '',
        body: '',
    });

    const [showFormMessage, setShowFormMessage] = useState(false);
    const [formMessage, setFormMessage] = useState(formMessageOptions.none);

    const handleFormChange = (event, property) => setContactFormData(prevData => {return {...prevData, [property]: event.target.value}});
    const handleFormSubmit = () => {
        if (! validator.isEmail(contactFormData.email)) {
            setShowFormMessage(true);
            setFormMessage(formMessageOptions.invalidemail);
            return;
        }
        else if (
            validator.isEmpty(contactFormData.email)
            || validator.isEmpty(contactFormData.body)
        ) {
            setShowFormMessage(true);
            setFormMessage(formMessageOptions.incomplete);
            return;
        }

        var formdata = new FormData();
        for (var key in contactFormData) {
            formdata.append(key, contactFormData[key]);
        }

        axios.post(
            REACT_APP_API_BASE + REACT_APP_CONTACT_POST,
            formdata,
            axios_config,
        ).then((response) => {
            if (response.data.status === 'toomany') {
                setShowFormMessage(true);
                setFormMessage(formMessageOptions.toomany);
                return;
            }
            else if (response.data.status === 'success') {
                setShowFormMessage(true);
                setFormMessage(formMessageOptions.success);
                setContactFormData(
                    {
                        email: '',
                        subject: '',
                        body: '',
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
        <div id="contact-main-container">
            <div ref={ref} id="contact-container" className="section-container">
                <div id="contact-heading-container">
                    <span id="contact-heading-styles">
                        <Typewriter
                            words={['Contact Me']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={50}
                            deleteSpeed={10}
                            delaySpeed={3000}
                        />
                    </span>
                </div>
                <div id="contact-main-block">
                    <div id="contact-main-form-container">
                        <Form>
                            <Alert show={showFormMessage} variant={formMessage.variant}>
                                {formMessage.message}
                            </Alert>
                            <Form.Group className="mb-3" controlId="contactForm.email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" value={contactFormData.email} onChange={(event) => handleFormChange(event, 'email')} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="contactForm.subject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" value={contactFormData.subject} onChange={(event) => handleFormChange(event, 'subject')} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="contactForm.body">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={6} value={contactFormData.body} onChange={(event) => handleFormChange(event, 'body')} />
                            </Form.Group>
                            <Button variant="primary" onClick={handleFormSubmit}>Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.forwardRef(Contact);
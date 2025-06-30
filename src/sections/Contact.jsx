import React from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '../components/Alert';
import { Particles } from '../components/ui/Particles';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('success');
    const [alertMessage, setAlertMessage] = useState('')

    const [formData, setFormData] = useState({
        name: '', email: '', message: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const showAlertMessage = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false)
        }, 5000)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await emailjs.send('service_t8nldr2', 'template_p0vrhbr', {
                from_name: formData.name,
                to_name: 'Saviour',
                from_email: formData.email,
                to_email: 'saviour.eking.official@gmail.com',
                message: formData.message
            }, "OYm9Q_PrryWB4vSrk");

            showAlertMessage('success', 'Your message has been sent!')
            setFormData({
                name: '', email: '', message: ''
            })
        } catch (e) {
            console.log(e)
            showAlertMessage('danger', 'Something went wrong!')
        } finally {
            setIsLoading(false);
        }

    }
    //     Contact Us
    // Template ID:template_p0vrhbr

    return (
        <section className='relative flex items-center c-space section-spacing'>
            <Particles
                className="absolute inset-0 -z-50"
                quantity={100}
                ease={80}
                color={'#fff'}
                refresh
            />
            {
                showAlert && (
                    <Alert type={alertType} text={alertMessage} />
                )
            }
            <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
                <div className='flex flex-col items-start w-full gap-5 mb-10'>
                    <h2 className="text-heading">Let's Talk</h2>
                    <p>Whether you're looking to build a new website, improve your existing platform or bring a unique project to life, I'm here to help</p>
                </div>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className="mb-5">
                        <label htmlFor="name" className='field-label'>Full Name</label>
                        <input onChange={handleChange} value={formData.name} type="text" id='name' name='name' className='field-input field-input-focus'
                            placeholder='John Doe' autoComplete='name' required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className='field-label'>Email</label>
                        <input onChange={handleChange} value={formData.email} type="text" id='email' name='email' className='field-input field-input-focus'
                            placeholder='john.doe@email.com' autoComplete='email' required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="message" className='field-label'>Full Name</label>
                        <textarea onChange={handleChange} value={formData.message} type="text" id='message' name='message' className='field-input field-input-focus'
                            placeholder='Share your thoughts...' rows="4" autoComplete='message' required
                        />
                    </div>

                    <button type='submit' className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation'>
                        {
                            !isLoading ? 'Send' : 'Sending...'
                        }
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;

// service_t8nldr2
// template_0uhha1h
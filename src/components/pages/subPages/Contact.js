import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const sendIt = { name, email, message }
    const resetForm = () => {   
        setName('')
        setEmail('')
        setMessage('')
    }
    let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || null,
        validColor = validEmail ? "green" : "red",
        validText = validEmail ? "Email is valid" : "Please enter a valid email" 

    const handleSubmit = e => {
        e.preventDefault()
        axios({
            method: "POST", 
            url: "http://localhost:3000/contact", 
            data: sendIt
          }).then((response)=>{
            if (response.data.status === 'success'){
              alert("Message Sent."); 
              resetForm()
            }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
            }
          })
    }

    return (
            <div className="contact">
                <div className="contact-intro">
                    <h3 className="contact-intro__header">Contact</h3>
                    <p className="contact-intro__text"> 
                        <span className="contact-intro__text-item">Reach out to Food on Film for any enquiries.</span>
                        <span className="contact-intro__text-item">We'd love to hear from you!</span>
                        {/* <span className="contact-intro__text-item">celia@foodonfilm.net.au</span> */}
                        <span className="contact-intro__text-item">Celia 0419 557 128</span>
                    </p>
                </div>
                <div className="contact-form">
                    <form className="form" onSubmit={handleSubmit} method="POST">
                        <div className="form-item">
                            <label className="form-item__label" htmlFor="name">Name</label>
                            <input 
                                required
                                className="form-item__name" 
                                type="text" value={name} 
                                placeholder="Your name" 
                                onChange={e => setName(e.target.value)} 
                            />
                        </div>
                        <div className="form-item">
                            <label className="form-item__label" htmlFor="email">Email</label>
                            <input 
                                required
                                className="form-item__email" 
                                type="text" value={email} 
                                placeholder="Your email" 
                                onChange={e => setEmail(e.target.value)}  
                            />
                            { 
                                email.length 
                                ?   <div 
                                        className="validEmail"
                                        style={{ color: validColor}}
                                    >
                                        {validText}
                                    </div> 
                                : null 
                            }
                        </div>
                        <div className="form-item">
                            <label className="form-item__label" htmlFor="message">Message</label>
                            <textarea 
                                required
                                className="form-item__message" 
                                value={message} 
                                placeholder="Type your message here..." 
                                onChange={e => setMessage(e.target.value)} 
                            ></textarea>
                        </div>
                        <button disabled={!validEmail} className="form-item__submit" type="submit">Submit</button>
                    </form>
                </div>
            </div>
    )
}

export default Contact
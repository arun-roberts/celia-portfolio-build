import React, { useEffect, useState, useLayoutEffect } from 'react'
import axios from 'axios'

const Contact = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ message, setMessage ] = useState('')
    const sendIt = [ name, email, subject, message ]
    const resetForm = () => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios({
            method: "POST", 
            url:"http://localhost:3000/contact", 
            data:  sendIt
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
        <>
            <div className="contact">
                <h3 className="contact-header">Contact</h3>
                <p className="contact-text"> 
                    Reach out to Food on Film for any enquiries.
                    <br/>
                    <br/>
                    We'd love to hear from you!
                    <br/>
                    <br/>
                    celia@foodonfilm.net.au
                    <br/>
                    Celia 0419 557 128
                    <br/>
                </p>
                <form className="form" method="POST">
                    <div className="form-item">
                        <label htmlFor="name">Name</label>
                        <input 
                            required
                            className="form-item__name" 
                            type="text" value={name} 
                            placeholder="Your name" 
                            onChange={e => setName(e.target.value)} 
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Email</label>
                        <input 
                            required
                            className="form-item__email" 
                            type="text" value={email} 
                            placeholder="Your email" 
                            onChange={e => setEmail(e.target.value)}  
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="subject">Subject</label>
                        <input 
                            required
                            className="form-item__subject" 
                            type="text" value={subject} 
                            placeholder="Email subject" 
                            onChange={e => setSubject(e.target.value)}  
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            required
                            className="form-item__message" 
                            value={message} 
                            placeholder="Type your message here..." 
                            onChange={e => setMessage(e.target.value)} 
                        ></textarea>
                    </div>
                    <input className="form__submit" type="submit" value="Submit" onSubmit={handleSubmit} />
                </form>
            </div>
        </>
    )
}

export default Contact
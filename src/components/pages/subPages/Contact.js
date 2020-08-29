import React, { useEffect, useState, useLayoutEffect } from 'react'

const Contact = () => {
    const [ ghostContact, clearGhostContact ] = useState(true) 
    useLayoutEffect(() => clearGhostContact(true), [ghostContact])
    useEffect(() => {
        clearGhostContact(false);
        return () => clearGhostContact(true);
    }, [ghostContact]);
    
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
            </div>
            <div className="ghost-div ghost-div--contact" style={{ background: `${ ghostContact === true ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)'}` }}></div>
        </>
    )
}

export default Contact
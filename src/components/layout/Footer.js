import React from 'react'
import { Icon } from 'react-icons-kit' 
import { envelopeO } from 'react-icons-kit/fa/envelopeO'
import { instagram } from 'react-icons-kit/fa/instagram'
import {linkedin} from 'react-icons-kit/fa/linkedin'

const Footer = () => {
    return (
        <>
            <ul className="social-links">
                <li className="social-links__item">
                    <a className="social-links__link" href="mailto:celiadowzer@bigpond.com" target="_blank" rel="noopener noreferrer">
                        <Icon className="social-links__icon email" icon={envelopeO} size={11} />
                    </a>
                </li>
                <li className="social-links__item">
                    <a className="social-links__link" href="https://www.linkedin.com/in/celia-dowzer-40a12554/" target="_blank" rel="noopener noreferrer">
                        <Icon className="social-links__icon linked-in" icon={linkedin} size={12} />
                    </a>
                </li>
                <li className="social-links__item">
                    <a className="social-links__link" href="https://www.instagram.com/celiadowzer/" target="_blank" rel="noopener noreferrer">
                    <Icon className="social-links__icon insta" icon={instagram} size={13} />
                    </a>
                </li>
            </ul>
            <p className="acknowledgement">FOOD ON FILM acknowledges the Wurundjeri people as the traditional owners and custodians of the land on which this site was made and pays respect to their Elders past and present.</p>
        </>
    )
}

export default Footer
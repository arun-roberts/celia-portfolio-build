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
                    <a className="social-links__link" href="mailto:celiaulrik@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Icon className="social-links__icon" icon={envelopeO} size={12} />
                    </a>
                </li>
                <li className="social-links__item">
                    <a className="social-links__link" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <Icon className="social-links__icon" icon={linkedin} size={12} />
                    </a>
                </li>
                <li className="social-links__item">
                    <a className="social-links__link" href="https://www.instagram.com/foodonfilm_melbourne/" target="_blank" rel="noopener noreferrer">
                    <Icon className="social-links__icon" icon={instagram} size={12} />
                    </a>
                </li>
            </ul>
            <p className="acknowledgement">FOOD ON FILM acknowledges the Wurundjeri people as the traditional owners and custodians of the land on which this site was made and pays respect to their Elders past and present.</p>
        </>
    )
}

export default Footer
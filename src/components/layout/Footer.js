import React from 'react'
import { Icon } from 'react-icons-kit' 
import { envelopeO } from 'react-icons-kit/fa/envelopeO'
import { tumblr } from 'react-icons-kit/fa/tumblr'
import { instagram } from 'react-icons-kit/fa/instagram'

const Footer = () => {
    return (
        <>
            <ul className="social-links">
                <li className="social-links__item">
                    <a className="social-links__link" href="https://www.facebook.com/">
                        <Icon className="social-links__icon" icon={envelopeO} size={12} />
                    </a>
                </li>
                <li className="social-links__item">
                    <a className="social-links__link" href="https://www.tumblr.com/">
                        <Icon className="social-links__icon" icon={tumblr} size={12} />
                    </a>
                </li>
                <li className="social-links__item">
                    <a className="social-links__link" href="https://www.instagram.com/">
                    <Icon className="social-links__icon" icon={instagram} size={12} />
                    </a>
                </li>
            </ul>
            <p className="acknowledgement">FOOD ON FILM acknowledges the Wurundjeri people as the traditional owners and custodians of the land on which this site was made and pays respect to their Elders past and present.</p>
        </>
    )
}

export default Footer
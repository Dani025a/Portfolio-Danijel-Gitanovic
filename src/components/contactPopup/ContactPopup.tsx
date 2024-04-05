import React from 'react';
import './contactPopup.css';
import phoneIcon from '../../assets/phoneIcon.png';
import emailIcon from '../../assets/emailIcon.png';

interface ContactPopupProps {
    onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ onClose }) => {
    return (
        <div className="contact-popup">
            <div className="contact-content">
                <h2>Contact Information</h2>
                <div className="contact-info">
                    <div className="contact-info-item">
                        <div className="contact-icon-container">
                            <img src={phoneIcon} alt="Phone Icon" className="contact-icon phone-icon" />
                        </div>
                        <p><a href={`tel: +45 23 32 19 17`}>+45 23 32 19 17</a></p>
                    </div>
                    <div className="contact-info-item">
                        <div className="contact-icon-container">
                            <img src={emailIcon} alt="Email Icon" className="contact-icon email-icon" />
                        </div>                    
                        <p><a href="mailto:danijelgitanovic@gmail.com">danijelgitanovic@gmail.com</a></p>
                    </div>
                </div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ContactPopup;

import React from 'react';

function Contact() {
    return (
        <>
            <div className="section-card contact-card">
                <img src="/coach.jpg" alt="Contact" />
                <div className="section-card-content">
                    <h1>Contact Us</h1>
                    <p>Get in touch to start your coaching journey. We’d love to hear from you!</p>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', marginTop: '1.5rem' }}>
                        <li><strong>Email:</strong> <a href="mailto:info@rccoaching.co.uk">info@rccoaching.co.uk</a></li>
                        <li><strong>Phone:</strong> <a href="tel:+441234567890">+44 1234 567890</a></li>
                        <li><strong>Address:</strong> 123 Fitness Lane, London, UK</li>
                    </ul>
                    <div style={{ marginTop: '2rem', fontStyle: 'italic', color: '#555' }}>
                        Or use the form below to send us a message!
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
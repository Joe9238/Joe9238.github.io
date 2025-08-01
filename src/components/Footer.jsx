import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} RC Coaching. All rights reserved.</p>
            <div style={{ marginTop: '0.5rem', fontSize: '1rem' }}>
                <span>Email: <a href="mailto:info@rccoaching.co.uk" style={{ color: '#61dafb' }}>info@rccoaching.co.uk</a></span> |{' '}
                <span>Phone: <a href="tel:+441234567890" style={{ color: '#61dafb' }}>+44 1234 567890</a></span>
            </div>
        </footer>
    );
}

export default Footer;
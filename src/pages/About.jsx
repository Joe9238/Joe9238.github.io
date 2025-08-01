import React from 'react';

function About() {
    return (
        <>
            {/* Banner Section */}
            <div
                style={{
                    width: '100%',
                    minHeight: '300px',
                    background: "url('/coach.jpg') center/cover no-repeat",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    position: 'relative',
                    marginBottom: '2rem',
                }}
            >
                <div
                    style={{
                        background: 'rgba(34,34,34,0.6)',
                        padding: '2rem 3rem',
                        borderRadius: '1.5rem',
                        boxShadow: '0 2px 16px rgba(0,0,0,0.18)',
                        textAlign: 'center',
                    }}
                >
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About PLC Coaching</h1>
                    <p style={{ fontSize: '1.2rem' }}>
                        Empowering you to reach your full potential—physically and mentally.
                    </p>
                </div>
            </div>

            {/* Philosophy Section */}
            <div className="section-card" style={{ flexDirection: 'row' }}>
                <img src="/coach.jpg" alt="Philosophy" />
                <div className="section-card-content">
                    <h2>Our Philosophy</h2>
                    <p>
                        We believe in holistic coaching, focusing on both body and mind. Our programs are designed to build confidence, resilience, and lifelong healthy habits.
                    </p>
                    <blockquote style={{ fontStyle: 'italic', color: '#555', marginTop: '1rem' }}>
                        "Success is not just about physical strength, but the strength of your mindset."
                    </blockquote>
                </div>
            </div>

            {/* Meet the Team Section (image right) */}
            <div className="section-card" style={{ flexDirection: 'row-reverse' }}>
                <img src="/coach.jpg" alt="Team" />
                <div className="section-card-content">
                    <h2>Meet the Team</h2>
                    <p>
                        Our certified coaches, nutritionists, and wellness experts are passionate about helping you succeed. Each brings unique skills and a commitment to your growth.
                    </p>
                    <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
                        <li>Certified Personal Trainers</li>
                        <li>Nutrition Specialists</li>
                        <li>Mental Wellness Coaches</li>
                    </ul>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="section-card" style={{ flexDirection: 'row' }}>
                <img src="/coach.jpg" alt="Story" />
                <div className="section-card-content">
                    <h2>Our Story</h2>
                    <p>
                        Founded in 2015, PLC Coaching has helped hundreds transform their lives. Our commitment to excellence and community drives everything we do.
                    </p>
                    <div style={{
                        background: '#f0f4fa',
                        borderRadius: '1rem',
                        padding: '1rem',
                        marginTop: '1rem',
                        color: '#333',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>
                        500+ Success Stories • 10+ Expert Coaches • 8 Years of Impact
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
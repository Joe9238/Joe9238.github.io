import React from 'react';

function Home() {
    return (
        <>
            <div className="hero">
                Welcome to PLC Coaching
            </div>
            <div className="section-card">
                <img src="/coach.jpg" alt="Coach" />
                <div className="section-card-content">
                    <h2>Your journey to better health and fitness starts here.</h2>
                    <p>We provide expert coaching and support to help you reach your goals. Scroll down to learn more!</p>
                </div>
            </div>
            <div className="section-card">
                <img src="/coach.jpg" alt="Coach" />
                <div className="section-card-content">
                    <h2>Personalized Training Plans</h2>
                    <p>Our coaches design custom training plans tailored to your unique needs, experience level, and goals. Whether you're a beginner or a seasoned athlete, we have the right program for you.</p>
                </div>
            </div>
            <div className="section-card">
                <img src="/coach.jpg" alt="Coach" />
                <div className="section-card-content">
                    <h2>Supportive Community</h2>
                    <p>Join a vibrant community of like-minded individuals who motivate and inspire each other. Participate in group sessions, online forums, and local meetups to stay engaged and accountable.</p>
                </div>
            </div>
        </>
    );
}

export default Home;
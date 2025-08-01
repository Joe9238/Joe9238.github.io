import React from 'react';

function Services() {
    return (
        <>
            <div className="service-block-vertical">
                <img src="/coach.jpg" alt="Personal Coaching" className="service-img-vertical" />
                <div className="service-content-vertical">
                    <h1>Personal Coaching</h1>
                    <p>
                        Work one-on-one with our expert coaches to develop a personalized fitness and wellness plan. We focus on your unique goals, strengths, and challenges to help you achieve lasting results.
                    </p>
                </div>
            </div>
            <div className="service-block-vertical">
                <img src="/coach.jpg" alt="Group Training" className="service-img-vertical" />
                <div className="service-content-vertical">
                    <h1>Group Training</h1>
                    <p>
                        Join our dynamic group sessions for motivation, accountability, and fun. Our group programs are designed to foster community and push you to new heights alongside others.
                    </p>
                </div>
            </div>
            <div className="service-block-vertical">
                <img src="/coach.jpg" alt="Nutrition Guidance" className="service-img-vertical" />
                <div className="service-content-vertical">
                    <h1>Nutrition Guidance</h1>
                    <p>
                        Receive expert advice and meal planning from our certified nutritionists. We help you fuel your body for performance, recovery, and overall health.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Services;
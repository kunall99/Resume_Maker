import React from 'react';
import aboutUs from "../../static/images/aboutus.jpg";

const AboutUs = () => {
    return (
        <div className=" container med   about-page">
            <div className="section contact-section">
                <div className="  contact-left-section ">
                    <p>
                        Do you have any query related to our site or related to resume. You can reach us by this email.
                    </p>

                    <h2 className="email text-large">
                        support@gmail.com
                    </h2>

                    <p className="happy-to-help">
                        We are here to answer any questions regarding our resume generator, do not hesitate to contact us for
                        any reason. We will respond in less than 24 hours from receipt of the email. Thanks for trusting us
                    </p>
                </div>
                <div className="contact-right-section">
                    <img src={aboutUs} className=" full-width about-us-img" alt="logo" />
                </div>
            </div>
        </div>

    );
}

export default AboutUs;
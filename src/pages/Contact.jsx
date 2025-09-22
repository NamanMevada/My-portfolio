import React from "react";
import "./Contact.css";
import { FaUser } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="Contact" className="contact">
            {/* Heading with person icon */}
            <div className="contact-header">
                <FaUser className="contact-header-icon" />
                <h2>Contact</h2>
            </div>

            {/* Small description */}
            <p className="contact-intro">
                Let’s connect! I’m eager to learn, collaborate, and contribute to new opportunities.<br />
                Please fill out the form below and I will get back to you!
            </p>

            {/* Contact form */}
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="5" required></textarea>
                </div>

                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact(){
    const form = useRef();
    const serviceKey = process.env.SERVICE_KEY;
    const template = process.env.TEMPLATE;
    const token = process.env.TOKEN;

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm(serviceKey, template, form.current, token)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();

    }

    return <section id="contact">
        <h2 className="contact">Contact</h2>
        <div className="contactContainer">
            <div className="col-lg-6">
                <div className="contact-wrap">
                    <div id="form-message-warning" className="mb-4 w-100 text-center"></div>
                    <form method="POST" id="contactForm" name="contactForm" className="contactForm"
                          noValidate="novalidate" ref={form} onSubmit={sendEmail}>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <h4 className="mail">Send PP any message</h4>
                                    <textarea name="message" className="form-control" id="message" cols="30" rows="8"
                                              placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <button type="submit" className="btn">Send Message</button>
                                        <div className="submitting"></div>
                                </div>
                            </div>
                    </form>
                </div>
            </div>

        </div>
    </section>
}

export default Contact;
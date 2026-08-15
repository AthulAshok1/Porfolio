import { useState } from 'react';
import { createPortal } from 'react-dom';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Save the form before the async operation
    const form = event.currentTarget;

    setSending(true);
    setSubmitted(false);

    try {
      // Send email using EmailJS
      const response = await emailjs.sendForm(
        'service_cq58fzi',
        'template_ofiih3r',
        form,
        'fIimN-GTT7uUmZIha'
      );

      console.log('Email sent successfully:', response);

      // Show success popup
      setSubmitted(true);

      // Clear form
      form.reset();

      // Hide popup after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);

    } catch (error) {
      console.error('Email sending failed:', error);

      alert('Failed to send message. Please try again.');

    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* ==================================================
          CONTACT SECTION
      ================================================== */}

      <section id="contact" className="section">

        <div className="container">

          {/* Section Title */}

          <h2 className="section-title">
            Get In <span>Touch</span>
          </h2>

          {/* Section Subtitle */}

          <p className="section-subtitle">
            I'm always open to discussing software development opportunities,
            internships, and exciting projects. Feel free to reach out—I'd love
            to connect and build something meaningful together.
          </p>


          {/* ==================================================
              CONTACT GRID
          ================================================== */}

          <div className="contact-grid">

            {/* ==================================================
                LEFT SIDE
            ================================================== */}

            <div className="contact-left">

              {/* Contact Heading */}

              <div className="contact-heading">

                <span className="contact-badge">
                  <i className="fas fa-circle"></i>
                  Open to Work
                </span>

                <h3>
                  Let's Build Something Amazing
                </h3>

                <p>
                  Whether you're hiring, collaborating, or just want to say hello,
                  I'm always happy to connect.
                </p>

              </div>


              {/* ==================================================
                  EMAIL
              ================================================== */}

              <div className="info-item glass-card">

                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>

                <div>

                  <h4>
                    Email
                  </h4>

                  <a href="mailto:athul3400@gmail.com">
                    athul3400@gmail.com
                  </a>

                </div>

              </div>


              {/* ==================================================
                  PHONE
              ================================================== */}

              <div className="info-item glass-card">

                <div className="info-icon">
                  <i className="fas fa-phone"></i>
                </div>

                <div>

                  <h4>
                    Phone
                  </h4>

                  <a href="tel:+918089167589">
                    +91 8089167589
                  </a>

                </div>

              </div>


              {/* ==================================================
                  LOCATION
              ================================================== */}

              <div className="info-item glass-card">

                <div className="info-icon">
                  <i className="fas fa-location-dot"></i>
                </div>

                <div>

                  <h4>
                    Location
                  </h4>

                  <p>
                    Alappuzha, Kerala, India
                  </p>

                </div>

              </div>

            </div>


            {/* ==================================================
                CONTACT FORM
            ================================================== */}

            <form
              className="contact-form glass-card"
              id="contact-form"
              onSubmit={handleSubmit}
            >

              <h3>
                Send a Message
              </h3>


              {/* Name */}

              <div className="form-group">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />

              </div>


              {/* Email */}

              <div className="form-group">

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />

              </div>


              {/* Subject */}

              <div className="form-group">

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />

              </div>


              {/* Message */}

              <div className="form-group">

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                ></textarea>

              </div>


              {/* ==================================================
                  SEND BUTTON
              ================================================== */}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={sending}
              >

                <i className="fas fa-paper-plane"></i>

                <span>
                  {sending
                    ? 'Sending...'
                    : submitted
                      ? 'Message Sent!'
                      : 'Send Message'}
                </span>

              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ==================================================
          SUCCESS POPUP
          
          React Portal puts this directly inside document.body.
          This allows position: fixed to use the browser viewport.
      ================================================== */}

      {submitted &&
        createPortal(

          <div className="email-success-toast">

            {/* Success Icon */}

            <div className="email-success-icon">

              <i className="fas fa-circle-check"></i>

            </div>


            {/* Success Text */}

            <div className="email-success-content">

              <strong>
                Message Sent!
              </strong>

              <p>
                Thank you for reaching out. I'll get back to you soon.
              </p>

            </div>

          </div>,

          document.body
        )
      }

    </>
  );
}
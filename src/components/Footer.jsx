export default function Footer({ currentYear }) {
  return (
    <footer className="footer">

    <div className="container footer-content">

        <h3 className="footer-logo">

            Athul <span>Ashok</span>

        </h3>

        <p className="footer-text">

            Thank you for visiting my portfolio. I'm always excited to connect,
            collaborate, and contribute to innovative software projects.

        </p>

        <div className="footer-socials">

            <a href="https://github.com/AthulAshok1"
               target="_blank"
               aria-label="GitHub">

                <i className="fab fa-github"></i>

            </a>

            <a href="https://linkedin.com/in/athul-ashok-16aa962ab"
               target="_blank"
               aria-label="LinkedIn">

                <i className="fab fa-linkedin-in"></i>

            </a>

            <a href="mailto:athul3400@gmail.com"
               aria-label="Email">

                <i className="fas fa-envelope"></i>

            </a>

               <a href="https://wa.me/918089167589" target="_blank" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>

        <p className="footer-copy">

            © {currentYear} Athul Ashok. All Rights Reserved.

        </p>

    </div>

</footer>
  );
}

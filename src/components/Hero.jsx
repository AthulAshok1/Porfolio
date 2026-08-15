import { useRef } from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';

const roles = [
  'Software Developer',
  'Full Stack Developer',
  'Python Developer',
  'Backend Developer',
];

export default function Hero() {
  const typingRef = useRef(null);
  useTypingEffect(typingRef, roles);

  return (
    <header id="home" className="hero">

    {/* Background */}

    <div className="hero-overlay"></div>

    <div className="hero-background">

        <div className="gradient gradient-1"></div>
        <div className="gradient gradient-2"></div>
        <div className="gradient gradient-3"></div>

    </div>

    <div className="container">

        <div className="hero-wrapper">

            {/* Left Content */}

            <div className="hero-content">

                <div className="hero-badge">

                    <span className="badge-dot"></span>

                    Available for Full-Time Opportunities

                </div>

                <h1 className="hero-name">

                     I'm

                    <span>Athul Ashok</span>

                </h1>

                <h2 className="hero-title">

                    <span id="typing-text" ref={typingRef}>

                        Python Full Stack Developer

                    </span>

                    <span className="cursor">|</span>

                </h2>
<p className="hero-description">
    MCA graduate and Software Developer specializing in Python Full Stack Development, focused on building secure, scalable, and high-performance web applications.
</p>
                <div className="hero-buttons">

                    <a href="/images/ATHUL__RESUME __.pdf"
                       download
                       className="btn btn-primary">

                        <i className="fas fa-download"></i>

                        Download CV

                    </a>

                    <a href="#projects"
                       className="btn btn-outline">

                        <i className="fas fa-code"></i>

                        View Projects

                    </a>

                </div>

                <div className="hero-social">

                    <a href="https://github.com/AthulAshok1"
                       target="_blank">

                        <i className="fab fa-github"></i>

                    </a>

                    <a href="https://linkedin.com/in/athul-ashok-16aa962ab"
                       target="_blank">

                        <i className="fab fa-linkedin-in"></i>

                    </a>

                    <a href="mailto:athul3400@gmail.com">

                        <i className="fas fa-envelope"></i>

                    </a>

                     <a href="https://wa.me/918089167589" target="_blank">

    <i className="fab fa-whatsapp"></i>

</a>

                </div>

            </div>
</div>

    </div>
    <a href="#about" className="scroll-indicator">

        <span></span>

    </a>

</header>
  );
}

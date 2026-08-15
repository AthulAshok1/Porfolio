export default function About() {
  return (
    <section id="about" className="section">

    <div className="container">

        <h2 className="section-title">
            About <span>Me</span>
        </h2>

        <p className="section-subtitle">
            Passionate software developer with a strong foundation in full-stack web development,
            dedicated to building secure, scalable, and user-focused applications using modern
            technologies and industry best practices.
        </p>

        <div className="about-container">

            {/* Left */}

            <div className="about-left fade-in">

                <div className="about-image-card">

                    <img src="/images/profile 1.png"
                         alt="Athul Ashok" />

                    <div className="developer-badge">

                        <i className="fas fa-code"></i>

                          Software Developer

                    </div>

                </div>

            </div>

            {/* Right */}

            <div className="about-right fade-in">

                <span className="about-role">

                    <i className="fas fa-circle"></i>

                    Software Developer

                </span>

                <h3>

                    Passionate About Building

                    <span>Scalable</span>

                    Software Solutions

                </h3>

                <div className="title-line"></div>

                <p>

                    I am an <strong>MCA graduate</strong> with hands-on experience
                    in <strong>Python</strong>, <strong>Django</strong>,
                    <strong>React</strong>, and Full Stack Development.
                    I enjoy creating secure, scalable, and user-friendly web
                    applications while continuously exploring modern technologies
                    and software engineering best practices.

                </p>

                <p>

                    Through internships and academic projects, I have developed
                    responsive web applications, RESTful APIs, and database-driven
                    solutions using Python, Django, MySQL, MongoDB, and React.
                    I am currently seeking opportunities to contribute my technical
                    skills, solve real-world problems, and grow as a professional
                    Software Developer.

                </p>

            </div>

        </div>

        {/* Cards */}

        <div className="about-cards">

            <div className="about-card glass-card">

                <i className="fas fa-user-graduate"></i>

                <h4>Education</h4>

                <h3>MCA Graduate</h3>

            </div>

            <div className="about-card glass-card">

                <i className="fas fa-briefcase"></i>

                <h4>Experience</h4>

                <h3>3 Professional Internships</h3>

            </div>
<div className="about-card glass-card">

    <i className="fas fa-laptop-code"></i>

    <h4>Projects</h4>

    <h3>4+</h3>

</div>

            <div className="about-card glass-card">

                <i className="fas fa-rocket"></i>

                <h4>Availability</h4>

                <h3>Open to Full-Time Opportunities</h3>

            </div>

        </div>

    </div>

</section>
  );
}

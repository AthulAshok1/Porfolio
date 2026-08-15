export default function Projects() {
  return (
    <section id="projects" className="section">
            
            <div className="container">
                <h2 className="section-title fade-in">Featured <span>Projects</span></h2>
<p className="section-subtitle">
    Explore a selection of projects that showcase my problem-solving abilities, technical expertise, and hands-on experience in building full-stack web applications, RESTful APIs, and responsive user interfaces using modern technologies.
</p>
                <div className="projects-grid">
                    {/* Project 1 */}
                    <article className="project-card glass-card fade-in">
                        <div className="project-img">
                            <img
                                src="/images/phishing-scam-.jpg"
                                alt="Phishing Website Detection project"
                                loading="lazy" />
                        </div>

                        <div className="project-content">
                            <h3>Phishing Website Detection System</h3>

                            <p>
                                Machine learning-based web application to identify phishing
                                websites through real-time URL analysis.
                            </p>

                            <div className="tech-badges">
                                <span>Python</span>
                                <span>Django</span>
                                <span>Machine Learning</span>
                                <span>MySQL</span>
                            </div>

                        </div>
                    </article>

                    {/* Project 2 */}
                    <article className="project-card glass-card fade-in">
                        <div className="project-img">
                            <img
                                src="/images/grama.jpg"
                                alt="E-Gramaportal project"
                                loading="lazy" />
                        </div>

                        <div className="project-content">
                            <h3>E-Gramaportal</h3>

                            <p>
                                Web-based e-governance platform with role-based authentication,
                                complaint registration, application management, and AI chatbot support.
                            </p>

                            <div className="tech-badges">
                                <span>Python</span>
                                <span>Django</span>
                                <span>MySQL</span>
                                <span>HTML/CSS/JS</span>
                            </div>

                        </div>
                    </article>

                    {/* Project 3 */}
                    <article className="project-card glass-card fade-in">
                        <div className="project-img">
                            <img
                                src="/images/turf.jpg"
                                alt="Turf Booking System project"
                                loading="lazy" />
                        </div>

                        <div className="project-content">
                            <h3>Turf Booking System</h3>

                            <p>
                                Full-stack online turf booking application with real-time
                                scheduling, booking management, and payment management.
                            </p>

        <div className="tech-badges">
    <span>Python</span>
    <span>Django</span>
    <span>HTML</span>
    <span>CSS</span>
    <span>MySQL</span>
</div>
                         
                        </div>
                    </article>
                </div>
            </div>
        </section>
  );
}

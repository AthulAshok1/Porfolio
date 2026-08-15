export default function Experience() {
  return (
    <section id="experience" className="section">

    <div className="container">

        <h2 className="section-title">
            Professional <span>Experience</span>
        </h2>
        <p className="section-subtitle">
    Practical industry experience gained through internships and collaborative projects, where I applied software development principles, strengthened my technical knowledge, and worked effectively within professional development environments.
</p>

        <div className="experience-grid">

            {/* Experience 1 */}

            <div className="experience-card glass-card fade-in">

                <div className="experience-icon">
                    <i className="fas fa-laptop-code"></i>
                </div>

                <span className="experience-year">
                    2024
                </span>

                <h3>Python Web Development Intern</h3>

                <h4>Luminar Technolab, Kochi</h4>
<p>
    Completed a Python Web Development internship focused on building secure web applications using Python, Django, and MySQL, with hands-on experience in RESTful API development, authentication, and responsive user interface design.
</p>

            </div>

            {/* Experience 2 */}

            <div className="experience-card glass-card fade-in">

                <div className="experience-icon">
                    <i className="fas fa-code"></i>
                </div>

                <span className="experience-year">
                    2025
                </span>

                <h3>MERN Stack Developer Intern</h3>

                <h4>Capital Infotech, Thiruvalla</h4>
<p>
    Completed a MERN Stack Development internship by developing responsive full-stack web applications using MongoDB, Express.js, React, and Node.js, with experience in REST API integration and modern frontend development.
</p>

            </div>

            {/* Experience 3 */}

            <div className="experience-card glass-card fade-in">

                <div className="experience-icon">
                    <i className="fas fa-briefcase"></i>
                </div>

                <span className="experience-year">
                    2025
                </span>

                <h3>Industry Practice Trainee</h3>

                <h4>Faith Infotech Academy</h4>
<p>
    Successfully completed an Industry Practice Program, contributing to real-world software development projects while gaining practical experience in Agile methodologies, debugging, problem-solving, and the Software Development Life Cycle (SDLC).
</p>

            </div>

        </div>

    </div>

</section>
  );
}

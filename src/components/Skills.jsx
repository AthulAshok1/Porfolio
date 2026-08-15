export default function Skills() {
  return (
    <section id="skills" className="section">

    <div className="container">

        <h2 className="section-title">
            Technical <span>Skills</span>
        </h2>

      <p className="section-subtitle">
    A diverse collection of programming languages, frameworks, databases, and development tools that I use to design, develop, and deploy secure, scalable, responsive, and high-performance web applications following modern software development best practices.
</p>

        {/* Tabs */}

        <div className="skill-tabs">

            <button className="tab-btn active" data-tab="programming">
                <i className="fas fa-code"></i>
                Programming
            </button>

            <button className="tab-btn" data-tab="frontend">
                <i className="fas fa-laptop-code"></i>
                Frontend
            </button>

            <button className="tab-btn" data-tab="backend">
                <i className="fas fa-server"></i>
                Backend
            </button>

            <button className="tab-btn" data-tab="dbtools">
                <i className="fas fa-database"></i>
                Database & Tools
            </button>

        </div>

        <div className="skills-box glass-card">

            {/* ================= Programming ================= */}

            <div className="tab-content active" id="programming">

                <div className="skill-card">
                    <i className="fab fa-python"></i>
                    <h4>Python</h4>
                    <span>Advanced</span>
                </div>

                <div className="skill-card">
                    <i className="fab fa-js"></i>
                    <h4>JavaScript</h4>
                    <span>Intermediate</span>
                </div>

                <div className="skill-card">
                    <i className="fas fa-code"></i>
                    <h4>C</h4>
                    <span>Intermediate</span>
                </div>

                 <div className="skill-card">
                    <i className="fas fa-code"></i>
                    <h4>Java</h4>
                    <span>Intermediate</span>
                </div>

            </div>

            {/* ================= Frontend ================= */}

            <div className="tab-content" id="frontend">

                <div className="skill-card">
                    <i className="fab fa-html5"></i>
                    <h4>HTML5</h4>
                    <span>Advanced</span>
                </div>

                <div className="skill-card">
                    <i className="fab fa-css3-alt"></i>
                    <h4>CSS3</h4>
                    <span>Advanced</span>
                </div>

                <div className="skill-card">
                    <i className="fab fa-bootstrap"></i>
                    <h4>Bootstrap</h4>
                    <span>Advanced</span>
                </div>

                <div className="skill-card">
                    <i className="fab fa-react"></i>
                    <h4>React.js</h4>
                    <span>Intermediate</span>
                </div>

            </div>

            {/* ================= Backend ================= */}

            <div className="tab-content" id="backend">

                <div className="skill-card">
                    <i className="fas fa-leaf"></i>
                    <h4>Django</h4>
                    <span>Advanced</span>
                </div>

                <div className="skill-card">
                    <i className="fas fa-fire"></i>
                    <h4>Flask</h4>
                    <span>Intermediate</span>
                </div>

                <div className="skill-card">
                    <i className="fab fa-node-js"></i>
                    <h4>Node.js</h4>
                    <span>Intermediate</span>
                </div>

                <div className="skill-card">
                    <i className="fas fa-network-wired"></i>
                    <h4>Express.js</h4>
                    <span>Intermediate</span>
                </div>

            </div>

            {/* ================= Database & Tools ================= */}

            <div className="tab-content" id="dbtools">

                <div className="skill-card">
                    <i className="fas fa-database"></i>
                    <h4>MySQL</h4>
                    <span>Relational Database</span>
                </div>

                <div className="skill-card">
                    <i className="fas fa-server"></i>
                    <h4>MongoDB</h4>
                    <span>NoSQL Database</span>
                </div>

                <div className="skill-card">
                    <i className="fab fa-git-alt"></i>
                    <h4>Git</h4>
                    <span>Version Control</span>
                </div>

                <div className="skill-card">
                    <i className="fab fa-github"></i>
                    <h4>GitHub</h4>
                    <span>Repository Hosting</span>
                </div>

                <div className="skill-card">
                    <i className="fas fa-code-branch"></i>
                    <h4>REST APIs</h4>
                    <span>API Development</span>
                </div>

                <div className="skill-card">
                    <i className="fas fa-paper-plane"></i>
                    <h4>Postman</h4>
                    <span>API Testing</span>
                </div>

                <div className="skill-card">
                    <i className="fas fa-terminal"></i>
                    <h4>VS Code</h4>
                    <span>Code Editor</span>
                </div>
      
</div>

            </div>

        </div>

</section>
  );
}

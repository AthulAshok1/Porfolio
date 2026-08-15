import { useState } from 'react';

export default function Skills() {

  // Keep track of which skill category is currently selected
  const [activeTab, setActiveTab] = useState('programming');

  return (
    <section id="skills" className="section">

      <div className="container">

        {/* ==================================================
            SECTION TITLE
        ================================================== */}

        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>


        {/* ==================================================
            SECTION DESCRIPTION
        ================================================== */}

        <p className="section-subtitle">
          A diverse collection of programming languages, frameworks,
          databases, and development tools that I use to design,
          develop, and deploy secure, scalable, responsive, and
          high-performance web applications following modern
          software development best practices.
        </p>


        {/* ==================================================
            SKILL TABS
        ================================================== */}

        <div className="skill-tabs">

          {/* Programming */}

          <button
            type="button"
            className={`tab-btn ${
              activeTab === 'programming' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('programming')}
          >
            <i className="fas fa-code"></i>
            Programming
          </button>


          {/* Frontend */}

          <button
            type="button"
            className={`tab-btn ${
              activeTab === 'frontend' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('frontend')}
          >
            <i className="fas fa-laptop-code"></i>
            Frontend
          </button>


          {/* Backend */}

          <button
            type="button"
            className={`tab-btn ${
              activeTab === 'backend' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('backend')}
          >
            <i className="fas fa-server"></i>
            Backend
          </button>


          {/* Database & Tools */}

          <button
            type="button"
            className={`tab-btn ${
              activeTab === 'dbtools' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('dbtools')}
          >
            <i className="fas fa-database"></i>
            Database & Tools
          </button>

        </div>


        {/* ==================================================
            SKILLS BOX
        ================================================== */}

        <div className="skills-box glass-card">


          {/* ==================================================
              PROGRAMMING
          ================================================== */}

          {activeTab === 'programming' && (

            <div className="tab-content active">

              <div className="skill-card">

                <i className="fab fa-python"></i>

                <h4>
                  Python
                </h4>

                <span>
                  Advanced
                </span>

              </div>


              <div className="skill-card">

                <i className="fab fa-js"></i>

                <h4>
                  JavaScript
                </h4>

                <span>
                  Intermediate
                </span>

              </div>


              <div className="skill-card">

                <i className="fas fa-code"></i>

                <h4>
                  C
                </h4>

                <span>
                  Intermediate
                </span>

              </div>


              <div className="skill-card">

                <i className="fas fa-code"></i>

                <h4>
                  Java
                </h4>

                <span>
                  Intermediate
                </span>

              </div>

            </div>

          )}


          {/* ==================================================
              FRONTEND
          ================================================== */}

          {activeTab === 'frontend' && (

            <div className="tab-content active">

              <div className="skill-card">

                <i className="fab fa-html5"></i>

                <h4>
                  HTML5
                </h4>

                <span>
                  Advanced
                </span>

              </div>


              <div className="skill-card">

                <i className="fab fa-css3-alt"></i>

                <h4>
                  CSS3
                </h4>

                <span>
                  Advanced
                </span>

              </div>


              <div className="skill-card">

                <i className="fab fa-bootstrap"></i>

                <h4>
                  Bootstrap
                </h4>

                <span>
                  Advanced
                </span>

              </div>


              <div className="skill-card">

                <i className="fab fa-react"></i>

                <h4>
                  React.js
                </h4>

                <span>
                  Intermediate
                </span>

              </div>

            </div>

          )}


          {/* ==================================================
              BACKEND
          ================================================== */}

          {activeTab === 'backend' && (

            <div className="tab-content active">

              <div className="skill-card">

                <i className="fas fa-leaf"></i>

                <h4>
                  Django
                </h4>

                <span>
                  Advanced
                </span>

              </div>


              <div className="skill-card">

                <i className="fas fa-fire"></i>

                <h4>
                  Flask
                </h4>

                <span>
                  Intermediate
                </span>

              </div>


              <div className="skill-card">

                <i className="fab fa-node-js"></i>

                <h4>
                  Node.js
                </h4>

                <span>
                  Intermediate
                </span>

              </div>


              <div className="skill-card">

                <i className="fas fa-network-wired"></i>

                <h4>
                  Express.js
                </h4>

                <span>
                  Intermediate
                </span>

              </div>

            </div>

          )}


          {/* ==================================================
              DATABASE & TOOLS
          ================================================== */}

          {activeTab === 'dbtools' && (

            <div className="tab-content active">

              <div className="skill-card">

                <i className="fas fa-database"></i>

                <h4>
                  MySQL
                </h4>

                <span>
                  Relational Database
                </span>

              </div>


              <div className="skill-card">

                <i className="fas fa-server"></i>

                <h4>
                  MongoDB
                </h4>

                <span>
                  NoSQL Database
                </span>

              </div>


              <div className="skill-card">

                <i className="fab fa-git-alt"></i>

                <h4>
                  Git
                </h4>

                <span>
                  Version Control
                </span>

              </div>


              <div className="skill-card">

                <i className="fab fa-github"></i>

                <h4>
                  GitHub
                </h4>

                <span>
                  Repository Hosting
                </span>

              </div>


              <div className="skill-card">

                <i className="fas fa-code-branch"></i>

                <h4>
                  REST APIs
                </h4>

                <span>
                  API Development
                </span>

              </div>


              <div className="skill-card">

                <i className="fas fa-paper-plane"></i>

                <h4>
                  Postman
                </h4>

                <span>
                  API Testing
                </span>

              </div>


              <div className="skill-card">

                <i className="fas fa-terminal"></i>

                <h4>
                  VS Code
                </h4>

                <span>
                  Code Editor
                </span>

              </div>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}
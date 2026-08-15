import { useState } from 'react';

export default function Navbar({ activeSection, scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav
        className={`navbar${scrolled ? ' sticky' : ''}`}
        aria-label="Main navigation"
        style={scrolled ? {
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          background: 'rgba(11,17,32,.85)',
        } : undefined}
      >
        <div className="container nav-container">
          <a href="#home" className="logo">A<span>A.</span></a>
          <div className={`nav-links${mobileOpen ? ' show' : ''}`} id="nav-links">
            {[
              ['Home', '#home', 'home'],
              ['About', '#about', 'about'],
              ['Education', '#education', 'education'],
              ['Contact', '#contact', 'contact'],
            ].map(([label, href, id]) => (
              <a
                key={id}
                href={href}
                className={activeSection === id ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                {label}
              </a>
            ))}
          </div>
          {/* <button
            className="mobile-menu-btn"
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="nav-links"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button> */}
          {/* Mobile Menu Button */}
<button
  className="mobile-menu-btn"
  type="button"
  aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
  aria-controls="nav-links"
  aria-expanded={mobileOpen}
  onClick={() => setMobileOpen((open) => !open)}
>
  <i
    className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}
  ></i>
</button>


{/* Mobile Navigation Menu */}
{mobileOpen && (
  <div className="mobile-nav-menu" id="nav-links">

    <a href="#home" onClick={() => setMobileOpen(false)}>
      Home
    </a>

    <a href="#about" onClick={() => setMobileOpen(false)}>
      About
    </a>

    <a href="#education" onClick={() => setMobileOpen(false)}>
      Education
    </a>

    <a href="#skills" onClick={() => setMobileOpen(false)}>
      Skills
    </a>

    <a href="#projects" onClick={() => setMobileOpen(false)}>
      Projects
    </a>

    <a href="#experience" onClick={() => setMobileOpen(false)}>
      Experience
    </a>

    <a href="#certifications" onClick={() => setMobileOpen(false)}>
      Certifications
    </a>

    <a href="#contact" onClick={() => setMobileOpen(false)}>
      Contact
    </a>

  </div>
)}
        </div>
      </nav>
  );
}

export default function BackToTop() {
  const handleBackToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a href="#home" className="back-to-top glass-card" aria-label="Back to top" onClick={handleBackToTop}>
      <i className="fas fa-arrow-up" aria-hidden="true"></i>
    </a>
  );
}

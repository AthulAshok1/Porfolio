import { useEffect, useState } from 'react';

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 120) current = section.id;
      });

      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setActiveSection(current);
      setScrolled(window.scrollY > 40);
      setScrollProgress(scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { activeSection, scrolled, scrollProgress };
}

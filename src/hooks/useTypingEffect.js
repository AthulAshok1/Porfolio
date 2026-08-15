import { useEffect } from 'react';

export function useTypingEffect(typingRef, roles) {
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const typeEffect = () => {
      if (!typingRef.current) return;
      const word = roles[roleIndex];
      typingRef.current.textContent = deleting
        ? word.substring(0, charIndex--)
        : word.substring(0, charIndex++);

      if (!deleting && charIndex > word.length) {
        deleting = true;
        timer = setTimeout(typeEffect, 1500);
        return;
      }

      if (deleting && charIndex < 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      timer = setTimeout(typeEffect, deleting ? 60 : 120);
    };

    typeEffect();
    return () => clearTimeout(timer);
  }, [roles, typingRef]);
}

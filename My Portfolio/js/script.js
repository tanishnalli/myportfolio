// script.js
document.addEventListener('DOMContentLoaded', function() {
  const descriptions = [
    'Cupertino High Student',
    '3D Modeler',
    'Software Developer',
    'Web Developer',
    'VFX Artist',
    'Animator'
  ];

  const descriptionElement = document.querySelector('.description');
  let currentIndex = 0;
  let currentText = '';
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const fullText = descriptions[currentIndex];
    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }
    descriptionElement.textContent = currentText + (isDeleting ? '|' : '|');

    if (isDeleting && currentText === '') {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % descriptions.length;
      typingSpeed = 100; // Adjusted speed after deletion
    } else if (!isDeleting && currentText === fullText) {
      typingSpeed = 50; // Faster deletion speed
      isDeleting = true;
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, 500);

  // Smooth scroll to anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scroll({
          top: offsetTop,
          behavior: 'smooth' // Smooth scroll behavior
        });
      }
    });
  });
});

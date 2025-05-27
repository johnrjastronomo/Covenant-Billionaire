


  // Mobile nav toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  menuToggle.addEventListener('keypress', e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navLinks.classList.toggle('active');
    }
  });

  // Scroll to contact on hero button click
  const scrollBtn = document.getElementById('scroll-to-contact');
  scrollBtn.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
  });

  // Team members toggle bio expand/collapse
  const teamMembers = document.querySelectorAll('.team-member');
  teamMembers.forEach(member => {
    member.addEventListener('click', () => {
      // Toggle active class
      const isActive = member.classList.contains('active');
      // Collapse all first
      teamMembers.forEach(tm => {
        tm.classList.remove('active');
        tm.setAttribute('aria-expanded', 'false');
      });
      // If not already active, activate clicked member
      if (!isActive) {
        member.classList.add('active');
        member.setAttribute('aria-expanded', 'true');
      }
    });
    member.addEventListener('keypress', e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        member.click();
      }
    });
  });

  // Contact form validation and feedback
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    formMessage.textContent = '';
    formMessage.className = '';

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    // Basic validation
    if (!name) {
      showError('Please enter your name.');
      contactForm.name.focus();
      return;
    }
    if (!validateEmail(email)) {
      showError('Please enter a valid email address.');
      contactForm.email.focus();
      return;
    }
    if (!message) {
      showError('Please enter your message.');
      contactForm.message.focus();
      return;
    }

    // Simulated submission
    showSuccess('Thank you, your message has been sent!');
    contactForm.reset();
  });

  function showError(msg) {
    formMessage.textContent = msg;
    formMessage.className = 'form-message form-error';
  }
  function showSuccess(msg) {
    formMessage.textContent = msg;
    formMessage.className = 'form-message form-success';
  }
  function validateEmail(email) {
    // Simple email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

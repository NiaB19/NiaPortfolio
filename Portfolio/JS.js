// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form Validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formStatus = document.querySelector('.form-status');
    
    // Simple validation
    if (name.length < 2) {
      formStatus.className = 'form-status error';
      formStatus.textContent = 'Please enter your name';
      return;
    }
    
    if (!email.includes('@')) {
      formStatus.className = 'form-status error';
      formStatus.textContent = 'Please enter a valid email';
      return;
    }
    
    if (message.length < 10) {
      formStatus.className = 'form-status error';
      formStatus.textContent = 'Message must be at least 10 characters';
      return;
    }
    
    // Show success message
    formStatus.className = 'form-status success';
    formStatus.textContent = 'Thank you! Your message has been sent.';
    
    // Reset form
    setTimeout(() => {
      contactForm.reset();
      formStatus.style.display = 'none';
    }, 3000);
  });
}
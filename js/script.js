
// Sticky nav toggle & mobile menu
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#nav-menu');
if (toggle) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('open');
  });
}

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Newsletter fake submit
const nsForm = document.getElementById('newsletter-form');
if (nsForm) {
  nsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert('Please enter a valid email.');
      return;
    }
    nsForm.reset();
    alert('Thanks for subscribing!');
  });
}

// Contact form validation (demo)
const cForm = document.getElementById('contact-form');
if (cForm) {
  cForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if (!name) return alert('Please enter your name.');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return alert('Please enter a valid email.');
    cForm.reset();
    alert('Thanks! We will get back to you within 1 business day.');
  });
}

const cForm = document.getElementById('contact-form');
if (cForm) {
  cForm.addEventListener('submit', (e) => {
    const isMailto = (cForm.action || '').startsWith('mailto:');

    // Basic validation
    const name  = (document.getElementById('name')   || {}).value?.trim();
    const email = (document.getElementById('email')  || {}).value?.trim();
    const msg   = (document.getElementById('message')|| {}).value?.trim();

    if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !msg) {
      e.preventDefault(); // block only when invalid
      alert('Please fill Name, valid Email, and Message.');
      return;
    }

    // If using mailto, let the browser open the email client (do NOT preventDefault)
    if (!isMailto) {
      e.preventDefault();          // keep your non-mailto demo flow if any
      alert('Thanks! We will get back to you within 1 business day.');
      cForm.reset();
    }
  });
}

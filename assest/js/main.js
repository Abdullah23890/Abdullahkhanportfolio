// contact form  

  function sendMessage() {
    const email = document.getElementById('floatingInput').value.trim();
    const subject = document.getElementById('floatingtext').value.trim();
    const message = document.getElementById('floatingTextarea').value.trim();

    if (!email || !subject || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    const phoneNumber = '923333983684'; // WhatsApp number without '+'
    const text = `Email: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappURL, '_blank');
  }

  // Fade-in on scroll using IntersectionObserver
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Optional: only animate once
    }
  });
}, {
  threshold: 0.3 // element should be 30% visible
});

fadeElements.forEach(el => {
  fadeObserver.observe(el);
});
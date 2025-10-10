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

// slider

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000, // 3 seconds
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1, // Small devices
    },
    745: {
      slidesPerView: 2, // Medium devices
    },
    1024: {
      slidesPerView: 3, // Large devices
    }
  }
});

// canvas animation

  const canvas = document.getElementById('spaceCanvas');
    const ctx = canvas.getContext('2d');

    // Resize canvas
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Planets
    const planetCount = 30;
    const planets = [];

    for (let i = 0; i < planetCount; i++) {
      planets.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 2,
        color: getRandomColor(),
        dx: (Math.random() - 0.5) * 1,
        dy: (Math.random() - 0.5) * 1
      });
    }

    function getRandomColor() {
      const colors = ['red', 'lime', 'yellow', 'cyan', 'magenta', 'orange', 'white', 'lightblue', 'violet'];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function draw() {
      ctx.fillStyle = '#001f3f'; // Background color
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let p of planets) {
        p.x += p.dx;
        p.y += p.dy;

        // Bounce from walls
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }

    draw();

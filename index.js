const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

if (window.Typed) {
    new Typed('#text-typing', {
        strings: ['A Frontend Developer', 'A Backend Developer', 'A Full Stack Developer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
}

// Initialize EmailJS only when the DOM is fully loaded
// Dynamically load EmailJS SDK
function loadEmailJSSDK(callback) {
  const script = document.createElement('script');
  script.src = 'https://cdn.emailjs.com/sdk/3.2.0/email.min.js';
  script.onload = callback;
  document.head.appendChild(script);
}

function initEmailJS() {
  if (!window.emailjs) {
    console.error('EmailJS not loaded');
    return;
  }

  emailjs.init("wbZ9AQd_26WHD0vc7");

  const form = document.getElementById('contactForm');
  if (!form) {
    console.error("Form with ID 'contactForm' not found.");
    return;
  }

  console.log('Form found, attaching submit event');

  form.addEventListener('submit', function(event) {
    console.log('Form submit triggered');
    event.preventDefault();

    emailjs.sendForm('service_8ggw6he', 'template_5y1gvav', form)
      .then(() => {
        alert('Message sent successfully!');
        form.reset();
      }, (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      });
  });
}


// Wait for DOM loaded, then load EmailJS SDK and initialize
document.addEventListener('DOMContentLoaded', () => {
  loadEmailJSSDK(initEmailJS);
});

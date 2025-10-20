// ===============================
// PRODIGY TECH HUB — MAIN SCRIPT
// ===============================

// Sticky Header
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll Reveal
const reveals = document.querySelectorAll('.reveal, .animate-up, .specializations, .results, .connect-section');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('visible');
  });
});

// Nav Pills
const pills = document.querySelectorAll('.nav-pill');
const sections = document.querySelectorAll('.sections section');
pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    const target = pill.dataset.section;
    sections.forEach(sec => {
      sec.classList.remove('active');
      if (sec.id === target) sec.classList.add('active');
    });
  });
});

// Button Ripple
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
  });
});

// Chatbot
const chatToggle = document.querySelector('.chat-toggle');
const chatWindow = document.querySelector('.chat-window');
const chatSend = document.querySelector('.chat-send');
const chatBody = document.querySelector('.chat-body');
const chatInput = document.querySelector('.chat-input');

chatToggle.addEventListener('click', () => {
  chatWindow.classList.toggle('active');
});

chatSend.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (!message) return;

  const userMsg = document.createElement('div');
  userMsg.className = 'user-msg';
  userMsg.textContent = message;
  chatBody.appendChild(userMsg);

  const botMsg = document.createElement('div');
  botMsg.className = 'bot-msg';
  botMsg.textContent = "Thanks for your message! Our team will contact you shortly 🚀";
  setTimeout(() => chatBody.appendChild(botMsg), 500);

  chatInput.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;
});

// Orbit subtle scroll float
const orbitContainer = document.querySelector('.orbit-container');
if (orbitContainer) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    orbitContainer.style.transform = `translateY(${scrollY * 0.1}px)`;
  });
}

console.log('%c✅ Prodigy Tech Hub Loaded', 'color:#0077ff;font-weight:bold;');


console.log{
  document.getElementById('contact-wrap').innerHTML = "<p>contact-wrap...</p>";
co
}
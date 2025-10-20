/* =========================================================
   Prodigy Tech Hub — AI Chatbot (Refined)
   Built by: The One and Only Great Oracle 🧠⚡
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const chatToggle = document.querySelector('.chat-toggle');
  const chatWindow = document.querySelector('.chat-window');
  const chatBody = document.querySelector('.chat-body');
  const chatInput = document.querySelector('.chat-input');
  const chatSend = document.querySelector('.chat-send');

  // Toggle Chat Window
  chatToggle.addEventListener('click', () => {
    chatWindow.classList.toggle('active');
    if (chatWindow.classList.contains('active')) {
      setTimeout(() => chatInput.focus(), 400);
    }
  });

  // Send Message
  chatSend.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  function sendMessage() {
    const msg = chatInput.value.trim();
    if (!msg) return;
    appendMessage('user', msg);
    chatInput.value = '';
    setTimeout(() => botReply(msg), 600);
  }

  function appendMessage(sender, text, typing = false) {
    const message = document.createElement('div');
    message.className = `chat-msg ${sender}`;
    message.innerHTML = typing
      ? `<div class="typing-dots"><span></span><span></span><span></span></div>`
      : `<p>${text}</p>`;
    chatBody.appendChild(message);
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: 'smooth' });
  }

  function botReply(input) {
    appendMessage('bot', '', true);
    setTimeout(() => {
      const typing = chatBody.querySelector('.typing-dots');
      if (typing) typing.parentElement.remove();
      appendMessage('bot', getBotResponse(input.toLowerCase()));
    }, 1500);
  }

  function getBotResponse(msg) {
    const includes = (words) => words.some(w => msg.includes(w));

    if (includes(['hello', 'hi', 'hey']))
      return '👋 Hello Innovator! Welcome to <b>Prodigy Tech Hub</b>. How can I assist you today?';

    if (includes(['course', 'program', 'training']))
      return '💻 <b>Featured Courses:</b><br>Web Dev · AI · UI/UX · Cloud.<br><a href="courses.html" target="_blank">View More</a>';

    if (includes(['apply', 'enroll', 'admission']))
      return '🚀 Start your journey:<br><a href="apply.html" target="_blank">Apply Now</a>';

    if (includes(['contact', 'reach', 'call', 'email']))
      return '📞 Contact us:<br>info@prodigytechhub.com<br>+234 810 000 1234';

    if (includes(['help', 'assist', 'guide']))
      return '🤖 I can help you explore <b>courses</b>, <b>apply</b>, or <b>contact</b> info.<br>Try: "Show courses".';

    return `🤔 I'm not sure I got that. Try saying <b>help</b>!`;
  }
});

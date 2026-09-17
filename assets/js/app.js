(() => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const navToggle = $('.nav-toggle');
  const navLinks = $('.nav-links');
  navToggle?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  $$('.nav-links a').forEach(link => link.addEventListener('click', () => {
    navLinks?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }));

  $$('[data-answer-toggle]').forEach(button => {
    button.addEventListener('click', () => {
      const answer = document.getElementById(button.getAttribute('aria-controls'));
      if (!answer) return;
      const visible = answer.classList.toggle('visible');
      button.textContent = visible ? 'Hide Answer' : 'Show Answer';
      button.setAttribute('aria-expanded', String(visible));
    });
  });

  const panel = $('#ai-teacher-panel');
  const backdrop = $('.chat-backdrop');
  const closeButton = $('.chat-close');
  const chatInput = $('#chat-input');
  let previousFocus = null;

  function openChat(context = {}) {
    if (!panel) return;
    previousFocus = document.activeElement;
    const lesson = context.lesson || document.body.dataset.lesson || 'General English';
    const section = context.section || 'General help';
    const action = context.action || '';
    $('.chat-context').textContent = `Current lesson: ${lesson} · Current section: ${section}${action ? ` · Action: ${action}` : ''}`;
    if (action && chatInput) chatInput.value = action;
    panel.classList.add('open');
    backdrop?.classList.add('visible');
    document.body.classList.add('chat-open');
    panel.setAttribute('aria-hidden', 'false');
    closeButton?.focus();
  }

  function closeChat() {
    panel?.classList.remove('open');
    backdrop?.classList.remove('visible');
    document.body.classList.remove('chat-open');
    panel?.setAttribute('aria-hidden', 'true');
    previousFocus?.focus?.();
  }

  $$('[data-open-ai]').forEach(button => button.addEventListener('click', () => {
    openChat({
      lesson: button.dataset.lesson,
      section: button.dataset.section,
      action: button.dataset.action
    });
  }));
  closeButton?.addEventListener('click', closeChat);
  backdrop?.addEventListener('click', closeChat);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && panel?.classList.contains('open')) closeChat();
  });
  $$('.chat-quick button').forEach(button => button.addEventListener('click', () => {
    if (chatInput) {
      chatInput.value = button.textContent.trim();
      chatInput.focus();
    }
  }));
  $('.chat-form')?.addEventListener('submit', event => {
    event.preventDefault();
    const message = chatInput?.value.trim();
    if (!message) return;
    const messages = $('.chat-messages');
    const user = document.createElement('div');
    user.className = 'bubble user';
    user.textContent = message;
    messages?.append(user);
    const unavailable = document.createElement('div');
    unavailable.className = 'bubble';
    unavailable.textContent = 'The AI Teacher is being connected in a later milestone. You can continue studying the lesson and practice exercises.';
    messages?.append(unavailable);
    if (chatInput) chatInput.value = '';
    messages?.scrollTo({ top: messages.scrollHeight, behavior: 'smooth' });
  });
})();


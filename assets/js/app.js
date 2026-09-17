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
  let currentContext = {
    lesson: document.body.dataset.lesson || 'General English',
    section: 'General help',
    action: ''
  };

  function openChat(context = {}) {
    if (!panel) return;
    previousFocus = document.activeElement;
    const lesson = context.lesson || document.body.dataset.lesson || 'General English';
    const section = context.section || 'General help';
    const action = context.action || '';
    currentContext = { lesson, section, action };
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
  function appendMessage(text, className = 'bubble') {
    const message = document.createElement('div');
    message.className = className;
    message.textContent = text;
    $('.chat-messages')?.append(message);
    return message;
  }

  $('.chat-form')?.addEventListener('submit', async event => {
    event.preventDefault();
    const message = chatInput?.value.trim();
    if (!message) return;
    const messages = $('.chat-messages');
    const submitButton = $('.chat-form button[type="submit"]');
    const apiBaseUrl = window.DETLENG_CONFIG?.aiApiBaseUrl?.replace(/\/$/, '');
    const fallback = 'The AI Teacher is temporarily unavailable. You can continue studying the lesson and practice exercises.';

    appendMessage(message, 'bubble user');
    if (chatInput) chatInput.value = '';
    const waiting = appendMessage('Thinking…');
    waiting.setAttribute('role', 'status');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending…';
    }
    messages?.scrollTo({ top: messages.scrollHeight, behavior: 'smooth' });

    try {
      if (!apiBaseUrl) throw new Error('AI API is not configured');
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 30_000);
      let response;
      try {
        response = await fetch(`${apiBaseUrl}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...currentContext, message }),
          signal: controller.signal
        });
      } finally {
        clearTimeout(timeout);
      }

      const result = await response.json().catch(() => ({}));
      if (!response.ok || typeof result.answer !== 'string') {
        throw new Error('AI request failed');
      }
      waiting.textContent = result.answer;
    } catch (_error) {
      waiting.textContent = fallback;
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Send';
      }
      messages?.scrollTo({ top: messages.scrollHeight, behavior: 'smooth' });
      chatInput?.focus();
    }
  });
})();

(() => {
  const base = document.body.dataset.base || '';
  const lesson = document.body.dataset.lesson || 'General English';
  const header = document.querySelector('[data-site-header]');
  const footer = document.querySelector('[data-site-footer]');
  const ai = document.querySelector('[data-ai-shell]');
  if (header) header.innerHTML = `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header"><div class="container nav-wrap">
      <a class="brand" href="${base}index.html" aria-label="DeTLeng AI English home">
        <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4h9a4 4 0 0 1 4 4v12H9a4 4 0 0 1-4-4V4Z"/><path d="M9 8h5M9 12h6"/></svg></span>
        <span>DeTLeng AI English<small>Learn with clarity</small></span>
      </a>
      <button class="nav-toggle" aria-label="Open navigation" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
      <nav class="nav-links" aria-label="Main navigation">
        <a href="${base}index.html">Home</a>
        <a href="${base}index.html#lessons">12 Tenses</a>
        <a href="${base}lessons/present-simple/">Current Lesson</a>
        <a href="#ai-teacher" data-open-ai data-lesson="${lesson}" data-section="General help">AI Teacher</a>
        <a href="https://network.detleng.com" target="_blank" rel="noopener noreferrer">DeTLeng Network</a>
      </nav>
    </div></header>`;
  if (footer) footer.innerHTML = `
    <footer class="site-footer"><div class="container">
      <div class="footer-grid">
        <div><a class="brand" href="${base}index.html"><span class="brand-mark">D</span><span>DeTLeng AI English</span></a>
          <p class="footer-copy">Learn English. Understand the rules. Practice with AI. Structured lessons give you a clear path, and the AI Teacher is there whenever you need extra help.</p>
          <p class="footer-copy">Learn at your pace. Ask when you’re stuck. Practice until it clicks.</p>
        </div>
        <div class="footer-actions" aria-label="Contact DeTLeng">
          <p class="eyebrow" style="color:#7ce5d8">Contact and network</p>
          <a href="mailto:info@detleng.com?subject=AI%20English%20Enquiry&body=Hello%20DeTLeng%20Team%2C%0A%0AI%27m%20interested%20in%20DeTLeng%20AI%20English%20and%20would%20like%20more%20information.%0A%0AThank%20you.">Email Us</a>
          <a href="https://wa.me/34663430258?text=Hello%20DeTLeng%20Team%2C%20I%27m%20interested%20in%20DeTLeng%20AI%20English%20and%20would%20like%20to%20know%20more.%20Thank%20you." target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          <a href="https://network.detleng.com" target="_blank" rel="noopener noreferrer">Explore DeTLeng Network</a>
        </div>
      </div>
      <div class="footer-bottom"><span>© 2026 DeTLeng · AI English</span><span>Built for learning. Powered by practical AI.</span></div>
    </div></footer>`;
  if (ai) ai.innerHTML = `
    <button class="ai-fab" data-open-ai data-lesson="${lesson}" data-section="General help" aria-controls="ai-teacher-panel"><span class="bot" aria-hidden="true">AI</span><span class="label">Ask AI Teacher</span></button>
    <div class="chat-backdrop" aria-hidden="true"></div>
    <aside class="chat-panel" id="ai-teacher-panel" aria-label="AI Teacher" aria-hidden="true">
      <div class="chat-head"><div><strong>AI Teacher</strong><small>Context-aware English help</small></div><button class="icon-button chat-close" aria-label="Close AI Teacher">×</button></div>
      <div class="chat-context">Current lesson: ${lesson} · Current section: General help</div>
      <div class="chat-messages" aria-live="polite"><div class="chat-welcome">Hello! I already know which lesson you are studying. Choose an action or ask your own English question.<div class="chat-quick">
        <button type="button">Explain this simply</button><button type="button">Give me more examples</button><button type="button">Give me 5 questions</button><button type="button">Test me</button><button type="button">Check my sentence</button><button type="button">Why is this wrong?</button><button type="button">Compare with another tense</button><button type="button">I still don’t understand</button>
      </div></div></div>
      <form class="chat-form"><label for="chat-input" class="eyebrow">Your question</label><textarea id="chat-input" placeholder="Ask about this lesson…" maxlength="2000" required></textarea><div class="chat-form-row"><small>Your question is sent securely to the AI Teacher.</small><button class="button button-primary" type="submit">Send</button></div></form>
    </aside>`;
})();

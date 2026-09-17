(() => {
  const grid = document.querySelector('[data-tense-grid]');
  if (!grid || !window.DETLENG_LESSONS) return;
  const base = document.body.dataset.base || '';
  grid.innerHTML = window.DETLENG_LESSONS.map((lesson, index) => {
    const live = lesson.status === 'available';
    const tag = live ? 'a' : 'article';
    const link = live ? ` href="${base}lessons/${lesson.slug}/"` : '';
    return `<${tag}${link} class="tense-card ${live ? 'available' : ''}" ${live ? '' : 'aria-disabled="true"'}>
      <span class="number">LESSON ${String(index + 1).padStart(2, '0')} · ${lesson.family}</span>
      <span class="status ${live ? 'live' : ''}">${live ? 'Start lesson' : 'Coming soon'}</span>
      <h3>${lesson.title}</h3>
      <p>${lesson.summary || 'This lesson will be added after the reference lesson is approved.'}</p>
    </${tag}>`;
  }).join('');
})();


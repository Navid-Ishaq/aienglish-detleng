const LIMITS = Object.freeze({ lesson: 80, section: 120, action: 120, message: 2000 });

function cleanString(value, maximum, { required = false } = {}) {
  if (typeof value !== 'string') return required ? null : '';
  const cleaned = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim();
  if ((required && !cleaned) || cleaned.length > maximum) return null;
  return cleaned;
}

export function validateChatRequest(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;

  const lesson = cleanString(body.lesson, LIMITS.lesson, { required: true });
  const section = cleanString(body.section, LIMITS.section, { required: true });
  const action = cleanString(body.action, LIMITS.action);
  const message = cleanString(body.message, LIMITS.message, { required: true });

  if (lesson === null || section === null || action === null || message === null) return null;
  return { lesson, section, action, message };
}


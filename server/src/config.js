const productionOrigin = 'https://aienglish.detleng.com';

export const config = Object.freeze({
  port: Number.parseInt(process.env.PORT || '10000', 10),
  frontendOrigin: process.env.FRONTEND_ORIGIN || productionOrigin,
  openAiApiKey: process.env.OPENAI_API_KEY || '',
  openAiModel: process.env.OPENAI_MODEL || 'gpt-5-mini',
  openAiTimeoutMs: 25_000,
  maxOutputTokens: 700,
  requestLimit: '16kb'
});


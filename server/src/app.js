import cors from 'cors';
import express from 'express';
import { rateLimit } from 'express-rate-limit';
import { config } from './config.js';
import { loadKnowledge } from './knowledge.js';
import { createTeacherReply } from './openai-client.js';
import { buildLearnerInput, buildTeacherInstructions } from './prompt.js';
import { validateChatRequest } from './validation.js';

const unavailableMessage = 'The AI Teacher is temporarily unavailable. You can continue studying the lesson and practice exercises.';
const knowledge = loadKnowledge();
const instructions = buildTeacherInstructions(knowledge);

export function createApp({ replyProvider = createTeacherReply } = {}) {
  const app = express();
  app.set('trust proxy', 1);
  app.disable('x-powered-by');

  app.use((request, response, next) => {
    response.set({
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'no-referrer',
      'Cache-Control': 'no-store'
    });
    next();
  });

  app.use(cors({
    origin(origin, callback) {
      if (!origin || origin === config.frontendOrigin) return callback(null, true);
      return callback(new Error('Origin not allowed'));
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    maxAge: 86_400
  }));

  app.use(express.json({ limit: config.requestLimit, strict: true }));

  app.get('/health', (_request, response) => {
    response.status(200).json({ status: 'ok', service: 'detleng-ai-english-backend' });
  });

  app.use('/api', rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 30,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    message: { error: 'Please wait a little before asking the AI Teacher again.' }
  }));

  app.post('/api/chat', async (request, response) => {
    const context = validateChatRequest(request.body);
    if (!context) {
      return response.status(400).json({ error: 'Please enter a valid English-learning question.' });
    }

    try {
      const answer = await replyProvider({ instructions, input: buildLearnerInput(context) });
      return response.status(200).json({ answer });
    } catch (error) {
      const status = error?.code === 'OPENAI_NOT_CONFIGURED' ? 503 : 502;
      console.error('AI Teacher request failed', { code: error?.code || 'UPSTREAM_ERROR' });
      return response.status(status).json({ error: unavailableMessage });
    }
  });

  app.use((_request, response) => response.status(404).json({ error: 'Not found.' }));
  app.use((error, _request, response, _next) => {
    if (error?.message === 'Origin not allowed') {
      return response.status(403).json({ error: 'Origin not allowed.' });
    }
    if (error?.type === 'entity.too.large') {
      return response.status(413).json({ error: 'The request is too large.' });
    }
    if (error instanceof SyntaxError && 'body' in error) {
      return response.status(400).json({ error: 'Invalid request.' });
    }
    console.error('Unhandled server error', { name: error?.name || 'Error' });
    return response.status(500).json({ error: unavailableMessage });
  });

  return app;
}


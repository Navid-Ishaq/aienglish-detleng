import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { createApp } from '../src/app.js';

let server;
let baseUrl;

before(async () => {
  const app = createApp({ replyProvider: async ({ input }) => `Test reply for: ${input}` });
  server = app.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  const address = server.address();
  baseUrl = `http://127.0.0.1:${address.port}`;
});

after(() => new Promise(resolve => server.close(resolve)));

test('health endpoint reports ready', async () => {
  const response = await fetch(`${baseUrl}/health`);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: 'ok', service: 'detleng-ai-english-backend' });
});

test('chat endpoint validates required context', async () => {
  const response = await fetch(`${baseUrl}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: 'https://aienglish.detleng.com' },
    body: JSON.stringify({ lesson: 'Present Simple' })
  });
  assert.equal(response.status, 400);
});

test('chat endpoint passes lesson context to the provider', async () => {
  const response = await fetch(`${baseUrl}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: 'https://aienglish.detleng.com' },
    body: JSON.stringify({
      lesson: 'Present Simple',
      section: 'Common Mistakes',
      action: 'Explain this simply',
      message: "Why do we use doesn't instead of don't?"
    })
  });
  assert.equal(response.status, 200);
  const body = await response.json();
  assert.match(body.answer, /Current lesson: Present Simple/);
  assert.match(body.answer, /Current section: Common Mistakes/);
});

test('chat endpoint rejects an unapproved browser origin', async () => {
  const response = await fetch(`${baseUrl}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: 'https://example.com' },
    body: JSON.stringify({ lesson: 'Present Simple', section: 'Questions', message: 'Help me.' })
  });
  assert.equal(response.status, 403);
});


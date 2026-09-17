import OpenAI from 'openai';
import { config } from './config.js';

let client;

function getClient() {
  if (!config.openAiApiKey) return null;
  client ||= new OpenAI({
    apiKey: config.openAiApiKey,
    timeout: config.openAiTimeoutMs,
    maxRetries: 1
  });
  return client;
}

export async function createTeacherReply({ instructions, input }) {
  const openai = getClient();
  if (!openai) {
    const error = new Error('OpenAI is not configured');
    error.code = 'OPENAI_NOT_CONFIGURED';
    throw error;
  }

  const response = await openai.responses.create({
    model: config.openAiModel,
    instructions,
    input,
    max_output_tokens: config.maxOutputTokens,
    store: false,
    text: { verbosity: 'low' }
  });

  const answer = response.output_text?.trim();
  if (!answer) throw new Error('OpenAI returned an empty response');
  return answer;
}


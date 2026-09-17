import { readFileSync } from 'node:fs';

const knowledgeUrl = new URL('../knowledge/ai_teach_english_12_tenses_knowledge_v1.txt', import.meta.url);

export function loadKnowledge() {
  const knowledge = readFileSync(knowledgeUrl, 'utf8').trim();
  if (!knowledge) throw new Error('AI Teacher knowledge file is empty');
  return knowledge;
}


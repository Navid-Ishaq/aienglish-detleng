import { createApp } from './app.js';
import { config } from './config.js';

const app = createApp();

app.listen(config.port, '0.0.0.0', () => {
  console.log(`DeTLeng AI English backend listening on port ${config.port}`);
});


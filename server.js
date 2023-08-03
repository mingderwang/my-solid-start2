// server.js
import { start } from 'solid-start';
import { get } from '@vercel/edge-config';
import App from './App.solid.js';

start(() => {
  return async (req, res) => {
    if (req.url === '/welcome') {
      const greeting = await get('greeting');
      const response = { greeting };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response));
    } else {
      return {};
    }
  };
});


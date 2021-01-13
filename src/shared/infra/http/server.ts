import 'reflect-metadata';

import express from 'express';

import '@shared/infra/typeorm';

const app = express();

app.use(express.json());

app.get('', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(3333, () => console.log('Server started at port 3333'));

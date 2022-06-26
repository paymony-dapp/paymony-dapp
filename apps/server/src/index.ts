import express from 'express';

const app = express();
const port = 5000;

app.get('', (_req, res) => {
  res.json({ hello: 'world' });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

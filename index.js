const express = require('express');
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index', { text: "test data" });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Serve static files from the "public" directory
app.use(express.static('public'));

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
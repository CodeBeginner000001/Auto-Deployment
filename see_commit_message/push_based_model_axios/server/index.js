// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 4000 ;

app.use(cors());
app.use(bodyParser.json());

let latestCommits = []; // this will hold the latest commits

// GitHub Webhook Endpoint
app.post('/api/webhook', (req, res) => {
  const { commits } = req.body;

  if (commits && commits.length > 0) {
    latestCommits = commits.map(commit => ({
      message: commit.message,
      author: commit.author.name,
      timestamp: commit.timestamp,
      url: commit.url
    }));
    console.log('✅ New commits received!');
  }

  res.status(200).send('Webhook received');
});

// Frontend polling endpoint
app.get('/', (req, res) => {
  res.json(latestCommits);
});
app.get('/api/test',(req,res)=>{
  res.send("heelooo");
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

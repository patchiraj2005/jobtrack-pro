const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let jobs = [];

app.get('/jobs', (req, res) => {
  res.json(jobs);
});

app.post('/jobs', (req, res) => {
  const job = { id: Date.now(), ...req.body };
  jobs.push(job);
  res.json(job);
});

app.delete('/jobs/:id', (req, res) => {
  jobs = jobs.filter(j => j.id != req.params.id);
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
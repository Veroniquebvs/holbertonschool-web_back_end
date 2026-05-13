const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');

  let output = '';
  const originalLog = console.log;

  console.log = (msg) => {
    output += `${msg}\n`;
  };

  countStudents(process.argv[2])
    .then(() => {
      console.log = originalLog;
      res.send(`This is the list of our students\n${output.trim()}`);
    })
    .catch((err) => {
      console.log = originalLog;
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(1245);

module.exports = app;

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students');

  let output = '';
  const newLog = console.log;
  console.log = (msg) => { output += `${msg}\n`; };

  countStudents(process.argv[2])
    .then(() => {
      console.log = newLog;
      res.end(output.trim());
    })
    .catch((err) => {
      console.log = newLog;
      res.end(err.message);
    });
});

app.listen(1245);

module.exports = app;

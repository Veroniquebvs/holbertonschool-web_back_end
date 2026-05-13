const countStudents = require('./3-read_file_async');
const http = require('http');

const app = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/students') {
        res.write('This is the list of our students\n')

        let output = '';
        const newLog = console.log;
        console.log = (msg) => { output += msg + '\n'; };

        countStudents(process.argv[2])
            .then(() => {
                console.log = newLog;
                res.end(output.trim());
            })
            .catch((err) => {
                console.log = newLog;
                res.end(err.message);
            });
    } else {
        res.end('Hello Holberton School!');
    }
});
app.listen(1245);

module.exports = app;

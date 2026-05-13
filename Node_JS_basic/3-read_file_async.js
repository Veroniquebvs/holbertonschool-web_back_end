const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const newArray = data.split('\n');
        const students = newArray.slice(1).filter((line) => line.length > 0);
        const fields = {};
        students.forEach((line) => {
          const itemStudents = line.split(',');
          const firstname = itemStudents[0];
          const field = itemStudents[3].trim();

          if (!(field in fields)) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });

        console.log(`Number of students: ${students.length}`);

        const lastList = Object.keys(fields);
        lastList.forEach((field) => {
          const list = fields[field];
          console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        });
        resolve();
      }
    });
  });
}
module.exports = countStudents;

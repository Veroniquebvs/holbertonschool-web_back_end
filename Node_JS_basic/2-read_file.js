const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const newArray = data.split('\n');
    const students = newArray.slice(1).filter((line) => line.length > 0);
    const fields = {};
    students.forEach((line) => {
      const itemStudents = line.split(',');
      const firstname = itemStudents[0];
      const field = itemStudents[3];

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
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;

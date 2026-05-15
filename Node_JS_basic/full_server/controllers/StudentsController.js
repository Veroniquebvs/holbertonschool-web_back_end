import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        let output = 'This is the list of our students\n';
        const fields = Object.keys(data)
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        fields.forEach((field) => {
          const list = data[field];
          output += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
        });
        response.status(200).send(output.trim());
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(process.argv[2])
      .then((data) => {
        const list = data[major];
        let studentList = '';
        if (list) {
          studentList = list.join(', ');
        } else {
          studentList = '';
        }
        response.status(200).send(`List: ${studentList}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;

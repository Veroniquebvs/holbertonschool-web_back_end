export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const foundGrade = newGrades.find((grade) => grade.studentId === student.id);

      let rightGrade;

      if (foundGrade) {
        rightGrade = foundGrade.grade;
      } else {
        rightGrade = 'N/A';
      }

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: rightGrade,
      };
    });
}

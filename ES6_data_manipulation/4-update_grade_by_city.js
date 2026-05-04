import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentCity = getStudentsByLocation(students, city);
  return studentCity.map((student) => {
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
      grade: rightGrade
    };
  });
}

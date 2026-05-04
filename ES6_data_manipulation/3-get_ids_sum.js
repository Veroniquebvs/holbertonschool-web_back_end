import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(students) {
  const studentId = getListStudentIds(students);
  return studentId.reduce((acc, id) => acc + id, 0);
}

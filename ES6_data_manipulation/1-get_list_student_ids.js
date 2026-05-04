export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  const sameArray = array.every((array) =>
    array !== null &&
    typeof array === 'object' &&
    'id' in array &&
    'firstName' in array &&
    'location' in array
  );

  if (!sameArray) {
    return [];
  }

  else {
    return array.map((student) => student.id);
  }
}

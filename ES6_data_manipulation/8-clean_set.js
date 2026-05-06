export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const myNewArray = [];

  set.forEach((item) => {
    if (item.startsWith(startString)) {
      myNewArray.push(item.slice(startString.length));
    }
  });

  return [...myNewArray].join('-');
}

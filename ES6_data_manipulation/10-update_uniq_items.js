export default function updateUniqueItems(myMap) {
  if (!(myMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [fruit, quantity] of myMap) {
    if (quantity === 1) {
      myMap.set(fruit, 100);
    }
  }
  return myMap;
}

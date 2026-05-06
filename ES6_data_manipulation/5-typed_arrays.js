export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const view8 = new DataView(buffer);

  if (position >= length) {
    throw new Error('Position outside range');
  } else {
    view8.setInt8(position, value);
  }

  return view8;
}

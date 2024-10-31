export default function hasValuesFromArray(so, arr) {
  for (const x of arr) {
    if (!so.has(x)) {
      return false;
    }
  }
  return true;
}

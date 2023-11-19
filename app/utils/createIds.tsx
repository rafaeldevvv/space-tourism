export default function createIds(length: number, prefix = "id") {
  const ids = [];

  for (let i = 0; i < length; i++) {
    ids.push(`${prefix}-${i}`);
  }

  return ids;
}

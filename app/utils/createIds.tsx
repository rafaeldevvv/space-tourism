export default function createIds(length: number, prefix: string) {
  return new Array(length).map((_, i) => `${prefix}-${i}`);
}

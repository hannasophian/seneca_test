export default function shuffleArray(array: string[]): string[] {
  let newArray = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return newArray;
}

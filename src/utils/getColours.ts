export default function getColours(
  numCorrect: number,
  numAnswerSets: number
): string[] {
  const rgbWrong = [
    [246, 184, 104],
    [238, 107, 45],
  ];
  const rgbRight = [
    [118, 224, 194],
    [89, 202, 218],
  ];

  const frac = numCorrect / numAnswerSets;

  const rgbNew = [
    rgbWrong[0]
      .map((num, idx) => num + (rgbRight[0][idx] - num) * frac)
      .join(","),
    rgbWrong[1]
      .map((num, idx) => num + (rgbRight[1][idx] - num) * frac)
      .join(","),
  ];
  return rgbNew;
}

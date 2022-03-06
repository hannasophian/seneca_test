export default function newIsCorrect(
  isCorrect: boolean[],
  shuffledAnswers: string[][],
  selectedIdxArr: number[],
  answers: string[][]
) {
  const newIsCorrect = [...isCorrect].map((el, idx) => {
    return shuffledAnswers[idx][selectedIdxArr[idx]] === answers[idx][0]
      ? true
      : false;
  });

  return newIsCorrect;
}

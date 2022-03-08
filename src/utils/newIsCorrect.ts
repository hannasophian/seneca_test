// Returns an array (used to update isCorrect) when a change is made in selected answer
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

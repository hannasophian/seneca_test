export default function isCorrect(
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean[]>>,
  isCorrect: boolean[],
  correctAnswer: string,
  selectedAnswer: string,
  answerNum: number
) {
  setIsCorrect(
    [...isCorrect].map((element, idx) => {
      if (idx === answerNum) {
        return selectedAnswer === correctAnswer ? true : false;
      } else {
        return element;
      }
    })
  );
}

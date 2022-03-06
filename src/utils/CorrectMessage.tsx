interface Props {
  isCorrect: boolean[];
}

export default function CorrectMessage({ isCorrect }: Props) {
  const correctMessage = "The answer is correct";
  const incorrectMessage = "The answer is incorrect";
  return (
    <p id="correct-message">
      {isCorrect.every(Boolean) ? correctMessage : incorrectMessage}
    </p>
  );
}

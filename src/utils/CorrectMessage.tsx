interface Props {
  isCorrectArr: boolean[];
}

export default function CorrectMessage({ isCorrectArr }: Props) {
  const correctMessage = "The answer is correct";
  const incorrectMessage = "The answer is incorrect";
  return (
    <p id="correct-message">
      {isCorrectArr.every(Boolean) ? correctMessage : incorrectMessage}
    </p>
  );
}

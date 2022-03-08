interface Props {
  isCorrectArr: boolean[];
}

// Returns a message saying whether the answers are correct
export default function CorrectMessage({ isCorrectArr }: Props): JSX.Element {
  const correctMessage = "The answer is correct";
  const incorrectMessage = "The answer is incorrect";
  return (
    <p id="correct-message">
      {isCorrectArr.every(Boolean) ? correctMessage : incorrectMessage}
    </p>
  );
}

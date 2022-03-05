export default function handleSelect(
  idx: number,
  setSelected: React.Dispatch<React.SetStateAction<number>>,
  correctAnswer: string,
  selectedOption: string
): void {
  // set the selected option
  setSelected(idx);

  if (selectedOption === correctAnswer) {
    console.log(true);
  }
}

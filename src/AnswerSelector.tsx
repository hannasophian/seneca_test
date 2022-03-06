import { useEffect, useState } from "react";
import shuffleArray from "./utils/shuffleArray";
import updateIsCorrect from "./utils/updateIsCorrect";
import "./css/answerselector.css";

interface Props {
  options: [string, string] | [string, string, string];
  answerNum: number;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean[]>>;
  isCorrect: boolean[];
}

export default function AnswerSelector({
  options,
  answerNum,
  setIsCorrect,
  isCorrect,
}: Props): JSX.Element {
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<number>(0);

  // Shuffles options once and assigns to useState
  useEffect(() => {
    setShuffledOptions(shuffleArray(options));
  }, []);

  useEffect(() => {
    updateIsCorrect(
      setIsCorrect,
      isCorrect,
      options[0],
      shuffledOptions[selected],
      answerNum
    );
  }, [shuffledOptions, selected]);

  const answerSelectors = shuffledOptions.map((answer, idx) => (
    <div className="input" key={idx}>
      <input
        name={`${answer[0]}`}
        id={`${answer}`}
        type="radio"
        checked={idx === selected}
        // onClick={() => handleClick(idx)}
        onChange={() => {}}
      />
      <label htmlFor={`${answer}`} onClick={() => handleClick(idx)}>
        <span>{answer}</span>
      </label>
    </div>
  ));

  function handleClick(selectedIdx: number) {
    setSelected(selectedIdx);
  }

  return (
    <div className="answer-selector">
      <fieldset disabled={isCorrect.every(Boolean)}>{answerSelectors}</fieldset>
    </div>
  );
}

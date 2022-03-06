import { useEffect, useState } from "react";
import AnswerSelector from "./AnswerSelector";
import CorrectMessage from "../utils/CorrectMessage";
import "../css/toggleswitch.css";
import shuffleArray from "../utils/shuffleArray";
// When using this component, ensure that the correct answer is the first element in its array
interface Props {
  question: string;
  options: ([string, string] | [string, string, string])[];
}

export default function ToggleSwitch({
  question,
  options,
}: Props): JSX.Element {
  const [isCorrect, setIsCorrect] = useState<boolean[]>(
    [...Array(options.length)].map(() => false)
  );
  const [shuffledOptions, setShuffledOptions] = useState<string[][]>([]);

  useEffect(() => {
    setShuffledOptions(
      [...options].map((optionArr) => shuffleArray(optionArr))
    );
  }, []);

  useEffect(() => {
    console.log(isCorrect);
  }, [isCorrect]);
  return (
    <div className="toggle-switch">
      <h3 id="question">{question}</h3>
      <form>
        {shuffledOptions.map((optionSet, idx) => (
          <div key={idx}>
            <AnswerSelector
              options={optionSet}
              answerNum={idx}
              setIsCorrect={setIsCorrect}
              isCorrect={isCorrect}
            />
            <br />
          </div>
        ))}
      </form>
      <CorrectMessage isCorrect={isCorrect} />
    </div>
  );
}

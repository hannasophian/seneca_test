import { useEffect, useState } from "react";
import AnswerSelector from "./AnswerSelector";
import CorrectMessage from "../utils/CorrectMessage";
import "../css/toggleswitch.css";
import shuffleArray from "../utils/shuffleArray";
import newIsCorrect from "../utils/newIsCorrect";
// When using this component, ensure that the correct answer is the first element in its array
interface Props {
  question: string;
  options: ([string, string] | [string, string, string])[];
}

export default function ToggleSwitch({
  question,
  options,
}: Props): JSX.Element {
  const [isCorrectArr, setIsCorrectArr] = useState<boolean[]>(
    [...Array(options.length)].map(() => false)
  );
  const [shuffledAnswers, setShuffledAnswers] = useState<string[][]>(
    [...options].map((optionArr) => shuffleArray(optionArr))
  );

  const [selectedIdxArr, setSelectedIdxArr] = useState<number[]>(
    [...Array(options.length)].map(() => 0)
  );

  useEffect(() => {
    console.log(selectedIdxArr);
    setIsCorrectArr(
      newIsCorrect(isCorrectArr, shuffledAnswers, selectedIdxArr, options)
    );
  }, [selectedIdxArr]);

  useEffect(() => {
    console.log(isCorrectArr);
  }, [isCorrectArr]);

  return (
    <div className="toggle-switch">
      <h3 id="question">{question}</h3>
      <form>
        {shuffledAnswers.map((answerSet, idx) => (
          <div key={idx}>
            <AnswerSelector
              answers={answerSet}
              answerSetNum={idx}
              isCorrectArr={isCorrectArr}
              setSelectedIdxArr={setSelectedIdxArr}
              selectedIdxArr={selectedIdxArr}
            />
            <br />
          </div>
        ))}
      </form>
      <CorrectMessage isCorrectArr={isCorrectArr} />
    </div>
  );
}

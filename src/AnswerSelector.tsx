import { useEffect, useState } from "react";
import shuffleArray from "./utils/shuffleArray";
import handleSelect from "./utils/handleSelect";

interface Props {
  options: [string, string] | [string, string, string];
}

export default function AnswerSelector({ options }: Props): JSX.Element {
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  // Shuffles options once and assigns to useState
  useEffect(() => setShuffledOptions(shuffleArray(options)), []);

  const [selected, setSelected] = useState<number>(0);

  const answerSelectors = shuffledOptions.map((option, idx) => (
    <div key={idx}>
      <input
        name={`${options[0]}`}
        id={`${option}`}
        type="radio"
        checked={idx === selected}
        onClick={() => handleSelect(idx, setSelected, options[0], option)}
      />
      <label htmlFor={`${option}`}>{option}</label>
    </div>
  ));

  return (
    <div className="answer-selector">
      <fieldset>{answerSelectors}</fieldset>
      <span className="switch" />
    </div>
  );
}

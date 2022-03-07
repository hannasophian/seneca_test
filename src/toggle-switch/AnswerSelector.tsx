import { useEffect, useState } from "react";
import "../css/answerselector.css";
import newSelectedIdxArr from "../utils/newSelectedIdxArr";

interface Props {
  answers: string[];
  answerSetNum: number;
  isCorrectArr: boolean[];
  setSelectedIdxArr: React.Dispatch<React.SetStateAction<number[]>>;
  selectedIdxArr: number[];
}

export default function AnswerSelector({
  answers,
  answerSetNum,
  isCorrectArr,
  setSelectedIdxArr,
  selectedIdxArr,
}: Props): JSX.Element {
  const answerSelectors = answers.map((answer, idx) => (
    <div className="input" key={idx}>
      <input
        name={`${answer[0]}`}
        id={`${answer}`}
        type="radio"
        checked={idx === selectedIdxArr[answerSetNum]}
        onChange={() => {}}
      />
      <label
        htmlFor={`${answer}`}
        onClick={() => {
          if (!isCorrectArr.every(Boolean)) handleClick(idx);
        }}
      >
        <span>{answer}</span>
      </label>
    </div>
  ));

  function handleClick(newSelectedIdx: number) {
    setSelectedIdxArr(
      newSelectedIdxArr(selectedIdxArr, answerSetNum, newSelectedIdx)
    );
  }

  return (
    <div className={`answer-selector-${answers.length}`}>
      <fieldset>{answerSelectors}</fieldset>
    </div>
  );
}

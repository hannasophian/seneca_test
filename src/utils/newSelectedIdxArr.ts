export default function newSelectedIdxArr(
  selectedIdxArr: number[],
  answerSetNum: number,
  newSelectedIdx: number
) {
  if (answerSetNum > selectedIdxArr.length || answerSetNum < 0) {
    throw Error("Invalid answerSetNum when calling newSelectedIdxArr");
  }

  const newArr = [...selectedIdxArr].map((el, idx) => {
    if (idx === answerSetNum) {
      return newSelectedIdx;
    } else {
      return el;
    }
  });

  return newArr;
}

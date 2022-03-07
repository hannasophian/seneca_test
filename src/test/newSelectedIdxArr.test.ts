import { useState } from "react";
import newSelectedIdxArr from "../utils/newSelectedIdxArr";

test("Changes the selectedIdx for a given number", () => {
  expect(newSelectedIdxArr([1, 0, 2], 2, 1)).toStrictEqual([1, 0, 1]);
  expect(newSelectedIdxArr([1, 0, 2], 0, 2)).toStrictEqual([2, 0, 2]);
});

// test("When answerSetNum is out of range, returns original selectedIdxArr and gives an error", () => {
//     // expect(newSelectedIdxArr([1,0,2], 5, 2)).toStrictEqual([1,0,2])
//     expect(newSelectedIdxArr([1,0,2], 5, 2)).toThrowError();

// })

import { Exercise, FormulaResult, SheetData } from '../types';
import { evaluateFormula, isFormulaError, sameResult } from '../utils/formulaEval';

export function fx(
  id: number,
  question: string,
  questionEn: string,
  hint: string,
  hintEn: string,
  sheet: SheetData,
  formula: string,
): Exercise {
  const expected: FormulaResult = evaluateFormula(formula, sheet);
  if (isFormulaError(expected) || expected == null) {
    throw new Error(`Lesson formula ${id} failed: ${formula} => ${String(expected)}`);
  }
  return {
    id,
    type: 'formula',
    question,
    questionEn,
    hint,
    hintEn,
    sheet,
    solutionFormula: formula,
    expected,
    checkFunction: (result) => sameResult(result, expected),
  };
}

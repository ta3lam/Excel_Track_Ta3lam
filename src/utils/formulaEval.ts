import HyperFormula from 'hyperformula';
import { FormulaResult, SheetData } from '../types';

export function unwrapFormulaValue(value: unknown): FormulaResult {
  if (value == null) return null;
  if (typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean') return value;
  if (typeof value === 'object' && value && 'value' in value) {
    const inner = (value as { value: unknown }).value;
    if (typeof inner === 'number' || typeof inner === 'string' || typeof inner === 'boolean') return inner;
  }
  return String(value);
}

export function evaluateFormula(formula: string, sheet: SheetData): FormulaResult {
  const allData: (string | number | null)[][] = [sheet.headers, ...sheet.rows];
  const hf = HyperFormula.buildFromArray(allData, { licenseKey: 'gpl-v3' });
  const answerRow = allData.length;
  hf.setCellContents({ sheet: 0, row: answerRow, col: 0 }, [[formula]]);
  const result = hf.getCellValue({ sheet: 0, row: answerRow, col: 0 });
  hf.destroy();
  return unwrapFormulaValue(result);
}

export function sameResult(result: unknown, expected: unknown): boolean {
  const a = unwrapFormulaValue(result);
  const b = unwrapFormulaValue(expected);
  if (typeof a === 'number' && typeof b === 'number') {
    if (!Number.isFinite(a) || !Number.isFinite(b)) return false;
    return Math.abs(a - b) <= 0.02;
  }
  return a === b;
}

export function isFormulaError(value: FormulaResult): boolean {
  return typeof value === 'string' && value.startsWith('#');
}

/** Leading apostrophe marks text the way Excel does (dates and numbers stored as text). */
export function excelText(value: string | number): string {
  return `'${value}`;
}

export function displayCell(value: string | number | null): string {
  if (value === null) return '—';
  let text = String(value);
  if (text.startsWith("'")) text = text.slice(1);
  if (text.endsWith(' ')) return `${text.trimEnd()}␣`;
  if (text.startsWith(' ')) return `␣${text.trimStart()}`;
  return text;
}

export function isStoredAsText(value: string | number | null): boolean {
  return typeof value === 'string' && value.startsWith("'");
}

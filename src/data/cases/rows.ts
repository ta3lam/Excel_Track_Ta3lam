import { excelText } from '../../utils/formulaEval';

export type Cell = string | number | null;

/** Deterministic PRNG. Same seed always yields the same series. */
export function mulberry32(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6D2B79F5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function money(seed: number, index: number, min: number, max: number, step = 100): number {
  const rnd = mulberry32((seed * 1000 + index * 97) >>> 0);
  const value = min + rnd() * (max - min);
  return Math.max(step, Math.round(value / step) * step);
}

export function invoiceNo(seed: number, index: number): number {
  return 450000 + seed * 20 + index + 1;
}

export function dmy(day: number, month: number, year = 2024): string {
  const dd = String(day).padStart(2, '0');
  const mm = String(month).padStart(2, '0');
  return excelText(`${dd}/${mm}/${year}`);
}

export function asText(value: number): string {
  return excelText(String(value));
}

export function trail(value: string): string {
  return `${value} `;
}

export interface Grid {
  headers: string[];
  headersEn: string[];
  rows: Cell[][];
  n: number;
}

export function grid(headers: string[], headersEn: string[], rows: Cell[][]): Grid {
  rows.forEach((row, index) => {
    if (row.length !== headers.length) {
      throw new Error(`Row ${index} has ${row.length} cells, expected ${headers.length}`);
    }
  });
  return { headers, headersEn, rows, n: rows.length + 1 };
}

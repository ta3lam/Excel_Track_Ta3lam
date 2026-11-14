import { useState, useCallback } from 'react';
import { SheetData, FormulaResult } from '../types';
import { useAppContext } from '../contexts/AppContext';
import { displayCell, evaluateFormula, isStoredAsText } from '../utils/formulaEval';

export { evaluateFormula } from '../utils/formulaEval';

interface FormulaEditorProps {
  sheet: SheetData;
  initialFormula?: string;
  onResult?: (result: FormulaResult, formula: string) => void;
}

function useExcelErrorMap() {
  const { t } = useAppContext();
  return {
    '#N/A':    t.errNA,
    '#REF!':   t.errREF,
    '#VALUE!': t.errVALUE,
    '#DIV/0!': t.errDIV0,
    '#NAME?':  t.errNAME,
    '#NUM!':   t.errNUM,
    '#NULL!':  t.errNULL,
  } as Record<string, string>;
}

function getResultDisplay(value: FormulaResult, errorMap: Record<string, string>): { isError: boolean; text: string } {
  if (value === null) return { isError: false, text: '—' };
  const str = String(value);
  for (const [code, desc] of Object.entries(errorMap)) {
    if (str.includes(code)) return { isError: true, text: `${desc} (${code})` };
  }
  return { isError: false, text: str };
}

export function FormulaEditor({ sheet, initialFormula = '', onResult }: FormulaEditorProps) {
  const { t, lang } = useAppContext();
  const isEn = lang === 'en';
  const displayHeaders = (isEn && sheet.headersEn) ? sheet.headersEn : sheet.headers;
  const errorMap = useExcelErrorMap();

  const [formula, setFormula] = useState(initialFormula);
  const [result, setResult]   = useState<{ value: FormulaResult; error?: string } | null>(null);
  const [copied, setCopied]   = useState(false);

  const handleRun = useCallback(() => {
    if (!formula.trim()) return;
    try {
      const value = evaluateFormula(formula.trim(), sheet);
      setResult({ value });
      onResult?.(value, formula.trim());
    } catch (err) {
      const msg = err instanceof Error ? err.message : t.formulaError;
      setResult({ value: null, error: msg });
      onResult?.(null, formula.trim());
    }
  }, [formula, sheet, onResult, t.formulaError]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(formula).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 2000);
    });
  }, [formula]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleRun();
  }, [handleRun]);

  const colLetters = sheet.headers.map((_, i) => String.fromCharCode(65 + i));

  return (
    <div className="space-y-3">
      {/* Data table */}
      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 6h18M3 14h18M3 18h18" />
          </svg>
          {t.referenceData}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs" dir="ltr">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/80">
                <th className="w-8 px-2 py-1.5 text-center text-gray-400 border-b border-r border-gray-200 dark:border-gray-700 font-normal">#</th>
                {displayHeaders.map((_, i) => (
                  <th key={i} className="px-3 py-1.5 text-center text-gray-500 dark:text-gray-400 border-b border-r border-gray-200 dark:border-gray-700 font-semibold">
                    {colLetters[i]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50/50 dark:bg-gray-800/40">
                <td className="px-2 py-1.5 text-center text-gray-400 border-b border-r border-gray-200/70 dark:border-gray-700/50 font-mono">1</td>
                {displayHeaders.map((h, i) => (
                  <td key={i} className="px-3 py-1.5 text-center text-amber-600 dark:text-amber-300 font-medium border-b border-r border-gray-200/70 dark:border-gray-700/50">
                    {h}
                  </td>
                ))}
              </tr>
              {sheet.rows.map((row, ri) => (
                <tr key={ri} className="hover:bg-gray-50 dark:hover:bg-gray-700/20 transition-colors">
                  <td className="px-2 py-1.5 text-center text-gray-400 border-b border-r border-gray-200/70 dark:border-gray-700/50 font-mono">{ri + 2}</td>
                  {row.map((cell, ci) => (
                    <td key={ci} className={`px-3 py-1.5 text-center border-b border-r border-gray-200/70 dark:border-gray-700/50 ${
                      cell === null ? 'text-gray-300 dark:text-gray-600 italic' :
                      isStoredAsText(cell) ? 'text-amber-700 dark:text-amber-300 font-mono' :
                      typeof cell === 'number' ? 'text-emerald-600 dark:text-emerald-300 font-mono' :
                      'text-gray-700 dark:text-gray-200'
                    }`}>
                      {displayCell(cell)}
                      {isStoredAsText(cell) && (
                        <span className="ms-1 text-[10px] text-amber-500" title="Stored as text">T</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Formula bar */}
      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500 font-bold font-mono text-sm">fx</span>
            {t.formulaBar}
          </span>
          <span className="text-gray-400 dark:text-gray-500">{t.pressEnter}</span>
        </div>
        <div className="flex items-center bg-white dark:bg-gray-900">
          <span className="px-3 text-gray-400 font-mono text-sm border-e border-gray-200 dark:border-gray-700 py-2.5 select-none">
            {`A${sheet.rows.length + 2}`}
          </span>
          <input
            type="text"
            value={formula}
            onChange={e => setFormula(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="=SUM(B2:B4)"
            dir="ltr"
            className="flex-1 bg-transparent text-gray-900 dark:text-gray-100 font-mono text-sm px-3 py-2.5 outline-none placeholder-gray-300 dark:placeholder-gray-600"
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleRun}
          disabled={!formula.trim()}
          className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2.5 rounded-lg font-medium hover:from-emerald-700 hover:to-green-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          </svg>
          {t.run}
        </button>
        <button
          onClick={handleCopy}
          disabled={!formula.trim()}
          className="px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm disabled:opacity-40"
        >
          {copied ? '✓' : t.copy}
        </button>
        <button
          onClick={() => { setFormula(''); setResult(null); }}
          className="px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
        >
          {t.clear}
        </button>
      </div>

      {/* Result */}
      {result && (
        <>
          {result.error ? (
            <div className="rounded-lg p-3 border bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/30">
              <div className="flex items-start gap-2 text-red-600 dark:text-red-400 text-sm">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs leading-relaxed">{t.formulaError}</span>
              </div>
            </div>
          ) : (() => {
            const { isError, text } = getResultDisplay(result.value, errorMap);
            return (
              <div className={`rounded-lg p-3 border ${
                isError
                  ? 'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/30'
                  : 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30'
              }`}>
                {isError ? (
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    </svg>
                    <span className="text-amber-700 dark:text-amber-300 text-xs leading-relaxed">{text}</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">{t.result}</span>
                    <span className="text-emerald-700 dark:text-emerald-300 font-mono font-bold text-sm" dir="ltr">{text}</span>
                  </div>
                )}
              </div>
            );
          })()}
        </>
      )}
    </div>
  );
}

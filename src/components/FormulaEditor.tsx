import { useState, useCallback } from 'react';
import HyperFormula from 'hyperformula';
import { SheetData, FormulaResult } from '../types';

interface FormulaEditorProps {
  sheet: SheetData;
  initialFormula?: string;
  onResult?: (result: FormulaResult, formula: string) => void;
  height?: string;
}

export function evaluateFormula(formula: string, sheet: SheetData): FormulaResult {
  const allData: (string | number | null)[][] = [sheet.headers, ...sheet.rows];
  const hf = HyperFormula.buildFromArray(allData, { licenseKey: 'gpl-v3' });
  const answerRow = allData.length;
  hf.setCellContents({ sheet: 0, row: answerRow, col: 0 }, [[formula]]);
  const result = hf.getCellValue({ sheet: 0, row: answerRow, col: 0 });
  hf.destroy();
  return result as FormulaResult;
}

export function FormulaEditor({ sheet, initialFormula = '', onResult }: FormulaEditorProps) {
  const [formula, setFormula] = useState(initialFormula);
  const [result, setResult] = useState<{ value: FormulaResult; error?: string } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleRun = useCallback(() => {
    if (!formula.trim()) return;
    try {
      const value = evaluateFormula(formula.trim(), sheet);
      setResult({ value });
      onResult?.(value, formula.trim());
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'خطأ في الصيغة';
      setResult({ value: null, error: msg });
      onResult?.(null, formula.trim());
    }
  }, [formula, sheet, onResult]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(formula).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [formula]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleRun();
  }, [handleRun]);

  // Column letters
  const colLetters = sheet.headers.map((_, i) => String.fromCharCode(65 + i));

  return (
    <div className="space-y-3">
      {/* Data table */}
      <div className="rounded-lg overflow-hidden border border-gray-700">
        <div className="bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-400 border-b border-gray-700 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 6h18M3 14h18M3 18h18" />
          </svg>
          البيانات المرجعية
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs" dir="ltr">
            <thead>
              <tr className="bg-gray-800/80">
                <th className="w-8 px-2 py-1.5 text-center text-gray-500 border-b border-r border-gray-700 font-normal">#</th>
                {sheet.headers.map((h, i) => (
                  <th key={i} className="px-3 py-1.5 text-center text-gray-400 border-b border-r border-gray-700 font-semibold">
                    {colLetters[i]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Header row */}
              <tr className="bg-gray-800/40">
                <td className="px-2 py-1.5 text-center text-gray-500 border-b border-r border-gray-700/50 font-mono">1</td>
                {sheet.headers.map((h, i) => (
                  <td key={i} className="px-3 py-1.5 text-center text-amber-300 font-medium border-b border-r border-gray-700/50">
                    {h}
                  </td>
                ))}
              </tr>
              {/* Data rows */}
              {sheet.rows.map((row, ri) => (
                <tr key={ri} className="hover:bg-gray-700/20 transition-colors">
                  <td className="px-2 py-1.5 text-center text-gray-500 border-b border-r border-gray-700/50 font-mono">{ri + 2}</td>
                  {row.map((cell, ci) => (
                    <td key={ci} className={`px-3 py-1.5 text-center border-b border-r border-gray-700/50 ${
                      cell === null ? 'text-gray-600 italic' : typeof cell === 'number' ? 'text-emerald-300 font-mono' : 'text-gray-200'
                    }`}>
                      {cell === null ? '—' : String(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Formula bar */}
      <div className="rounded-lg overflow-hidden border border-gray-700">
        <div className="bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-400 border-b border-gray-700 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400 font-bold font-mono text-sm">fx</span>
            شريط الصيغة
          </span>
          <span className="text-gray-500">اضغط Enter للتشغيل</span>
        </div>
        <div className="flex items-center bg-gray-900">
          <span className="px-3 text-gray-500 font-mono text-sm border-r border-gray-700 py-2.5 select-none">
            {`A${sheet.rows.length + 2}`}
          </span>
          <input
            type="text"
            value={formula}
            onChange={e => setFormula(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="=SUM(B2:B4)"
            dir="ltr"
            className="flex-1 bg-transparent text-gray-100 font-mono text-sm px-3 py-2.5 outline-none placeholder-gray-600"
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
          تشغيل
        </button>
        <button
          onClick={handleCopy}
          disabled={!formula.trim()}
          className="px-4 py-2.5 rounded-lg border border-gray-700 text-gray-400 hover:bg-gray-800 transition-colors text-sm disabled:opacity-40"
        >
          {copied ? '✓' : 'نسخ'}
        </button>
        <button
          onClick={() => { setFormula(''); setResult(null); }}
          className="px-4 py-2.5 rounded-lg border border-gray-700 text-gray-400 hover:bg-gray-800 transition-colors text-sm"
        >
          مسح
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className={`rounded-lg p-3 border ${
          result.error
            ? 'bg-red-500/10 border-red-500/30'
            : 'bg-emerald-500/10 border-emerald-500/30'
        }`}>
          {result.error ? (
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-mono text-xs">{result.error}</span>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <span className="text-emerald-400 text-xs font-medium">النتيجة</span>
              <span className="text-emerald-300 font-mono font-bold text-sm" dir="ltr">
                {result.value === null ? 'null' : String(result.value)}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

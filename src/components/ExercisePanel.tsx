import { useState, useEffect, useCallback } from 'react';
import { Exercise, FormulaResult } from '../types';
import { FormulaEditor, evaluateFormula } from './FormulaEditor';

interface ExercisePanelProps {
  exercises: Exercise[];
  onAllComplete: () => void;
}

export function ExercisePanel({ exercises, onAllComplete }: ExercisePanelProps) {
  const [current, setCurrent] = useState(0);
  const [results, setResults] = useState<Record<number, boolean>>({});
  const [showHint, setShowHint] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [selectedMcq, setSelectedMcq] = useState<number | null>(null);
  const [mcqSubmitted, setMcqSubmitted] = useState(false);

  useEffect(() => {
    setCurrent(0);
    setResults({});
    setShowHint(false);
    setWrong(false);
    setSelectedMcq(null);
    setMcqSubmitted(false);
  }, [exercises]);

  const exercise = exercises[current];
  if (!exercise) return null;

  const completedCount = exercises.filter(ex => results[ex.id]).length;

  const markDone = useCallback((id: number) => {
    setResults(prev => {
      const next = { ...prev, [id]: true };
      if (exercises.every(ex => next[ex.id])) onAllComplete();
      return next;
    });
  }, [exercises, onAllComplete]);

  const handleFormulaResult = useCallback((result: FormulaResult, formula: string) => {
    if (!exercise.checkFunction) return;
    const passed = exercise.checkFunction(result, formula);
    if (passed) {
      markDone(exercise.id);
      setWrong(false);
    } else {
      setWrong(true);
    }
  }, [exercise, markDone]);

  const handleMcqSubmit = useCallback(() => {
    if (selectedMcq === null) return;
    setMcqSubmitted(true);
    if (selectedMcq === exercise.correctIndex) {
      markDone(exercise.id);
      setWrong(false);
    } else {
      setWrong(true);
    }
  }, [selectedMcq, exercise, markDone]);

  const goNext = () => {
    if (current < exercises.length - 1) {
      setCurrent(c => c + 1);
      setShowHint(false);
      setWrong(false);
      setSelectedMcq(null);
      setMcqSubmitted(false);
    }
  };

  const goPrev = () => {
    if (current > 0) {
      setCurrent(c => c - 1);
      setShowHint(false);
      setWrong(false);
      setSelectedMcq(null);
      setMcqSubmitted(false);
    }
  };

  const isDone = results[exercise.id] === true;

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-l from-amber-600 to-orange-600 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <p className="text-white text-sm font-semibold">تمرين {current + 1} من {exercises.length}</p>
            <p className="text-amber-100 text-xs">{completedCount} مكتمل</p>
          </div>
        </div>
        {/* Dots */}
        <div className="flex gap-1.5">
          {exercises.map((ex, i) => (
            <button
              key={ex.id}
              onClick={() => { setCurrent(i); setShowHint(false); setWrong(false); setSelectedMcq(null); setMcqSubmitted(false); }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                results[ex.id] ? 'bg-emerald-300' : i === current ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Question */}
        <div>
          <p className="text-gray-200 text-sm font-medium leading-relaxed">{exercise.question}</p>

          <button
            onClick={() => setShowHint(!showHint)}
            className="mt-2 text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {showHint ? 'إخفاء التلميح' : 'إظهار التلميح'}
          </button>

          {showHint && (
            <div className="mt-2 bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-3">
              <p className="text-indigo-300 text-xs font-mono">💡 {exercise.hint}</p>
            </div>
          )}
        </div>

        {/* Formula exercise */}
        {exercise.type === 'formula' && exercise.sheet && (
          <FormulaEditor
            key={exercise.id}
            sheet={exercise.sheet}
            onResult={handleFormulaResult}
          />
        )}

        {/* MCQ exercise */}
        {exercise.type === 'mcq' && exercise.options && (
          <div className="space-y-2">
            {exercise.options.map((opt, i) => {
              const isSelected = selectedMcq === i;
              const isCorrect = i === exercise.correctIndex;
              let cls = 'border-gray-700 text-gray-300 hover:border-gray-500 hover:bg-gray-700/30';
              if (mcqSubmitted) {
                if (isCorrect) cls = 'border-emerald-500 bg-emerald-500/10 text-emerald-300';
                else if (isSelected && !isCorrect) cls = 'border-red-500 bg-red-500/10 text-red-300';
                else cls = 'border-gray-700 text-gray-500';
              } else if (isSelected) {
                cls = 'border-amber-500 bg-amber-500/10 text-amber-300';
              }

              return (
                <button
                  key={i}
                  onClick={() => { if (!mcqSubmitted) setSelectedMcq(i); }}
                  disabled={mcqSubmitted}
                  className={`w-full text-right px-4 py-2.5 rounded-lg border transition-all text-sm flex items-center gap-3 ${cls}`}
                >
                  <span className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                    mcqSubmitted && isCorrect ? 'border-emerald-500 text-emerald-400' :
                    isSelected ? 'border-amber-400 text-amber-300' : 'border-gray-600 text-gray-500'
                  }`}>
                    {mcqSubmitted && isCorrect ? '✓' : mcqSubmitted && isSelected && !isCorrect ? '✗' : String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              );
            })}

            {!mcqSubmitted && (
              <button
                onClick={handleMcqSubmit}
                disabled={selectedMcq === null}
                className="w-full mt-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-40 disabled:cursor-not-allowed text-white py-2 rounded-lg text-sm font-medium transition-colors"
              >
                تأكيد الإجابة
              </button>
            )}
          </div>
        )}

        {/* Feedback */}
        {isDone && (
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-emerald-300 text-sm font-medium">إجابة صحيحة! 🎉</span>
          </div>
        )}

        {wrong && !isDone && exercise.type === 'formula' && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm flex items-center gap-2">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            النتيجة غير صحيحة — راجع الصيغة وحاول مجدداً
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between pt-2 border-t border-gray-700/50">
          <button
            onClick={goPrev}
            disabled={current === 0}
            className="text-sm text-gray-400 hover:text-gray-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5 transition-colors px-2 py-1 rounded"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            السابق
          </button>
          <button
            onClick={goNext}
            disabled={current === exercises.length - 1}
            className="text-sm text-amber-400 hover:text-amber-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5 transition-colors px-2 py-1 rounded"
          >
            التالي
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

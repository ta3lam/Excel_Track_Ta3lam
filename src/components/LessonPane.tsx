import { useState, useEffect } from 'react';
import { Lesson } from '../types';
import { FormulaEditor } from './FormulaEditor';
import { ExercisePanel } from './ExercisePanel';
import { useAppContext } from '../contexts/AppContext';

interface LessonPaneProps {
  lesson: Lesson;
  isCompleted: boolean;
  onComplete: () => void;
}

function CodeDisplay({ code, lang }: { code: string; lang?: string }) {
  const { t } = useAppContext();
  const [copied, setCopied] = useState(false);

  const langLabel =
    lang === 'dax' ? 'DAX' :
    lang === 'm'   ? 'M Language' :
    lang === 'vba' ? 'VBA' : 'Excel';

  const langColor =
    lang === 'dax' ? 'text-yellow-500' :
    lang === 'm'   ? 'text-blue-500' :
    lang === 'vba' ? 'text-purple-500' :
    'text-emerald-500';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
      <div className="px-4 py-3 flex items-center justify-between bg-gray-50 dark:bg-gray-800/80 border-b border-gray-200 dark:border-gray-700">
        <span className={`text-xs font-bold font-mono ${langColor}`}>{langLabel}</span>
        <button
          onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
          className="text-xs px-2.5 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors"
        >
          {copied ? t.copied : t.copy}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto bg-gray-900 dark:bg-gray-900">
        <code className="text-gray-100 font-mono text-xs leading-relaxed">{code.trim()}</code>
      </pre>
    </div>
  );
}

export function LessonPane({ lesson, isCompleted, onComplete }: LessonPaneProps) {
  const { t } = useAppContext();
  const [editorOpen, setEditorOpen]     = useState(true);
  const [exercisesOpen, setExercisesOpen] = useState(true);
  const [allDone, setAllDone]           = useState(false);

  useEffect(() => {
    setEditorOpen(true);
    setExercisesOpen(true);
    setAllDone(false);
  }, [lesson.id]);

  const handleAllComplete = () => { setAllDone(true); onComplete(); };

  return (
    <div className="flex flex-col gap-4">

      {/* Try it out */}
      {(lesson.sheet || lesson.example) && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <button
            onClick={() => setEditorOpen(o => !o)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors text-start"
          >
            <span className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
              {lesson.type === 'formula' ? t.tryItYourself : t.codeExample}
            </span>
            <svg className={`w-4 h-4 text-gray-400 transition-transform ${editorOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {editorOpen && (
            <div className="px-4 pb-4">
              {lesson.type === 'formula' && lesson.sheet ? (
                <FormulaEditor sheet={lesson.sheet} initialFormula={lesson.example || ''} />
              ) : lesson.example ? (
                <CodeDisplay code={lesson.example} lang={lesson.codeLang} />
              ) : null}
            </div>
          )}
        </div>
      )}

      {/* Exercises */}
      {lesson.exercises.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <button
            onClick={() => setExercisesOpen(o => !o)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors text-start"
          >
            <span className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
              <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              {t.exercises}
              <span className="text-xs text-gray-400">({lesson.exercises.length})</span>
            </span>
            <svg className={`w-4 h-4 text-gray-400 transition-transform ${exercisesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {exercisesOpen && (
            <div className="border-t border-gray-200 dark:border-gray-700">
              <ExercisePanel exercises={lesson.exercises} onAllComplete={handleAllComplete} />
            </div>
          )}
        </div>
      )}

      {/* No exercises — manual complete */}
      {lesson.exercises.length === 0 && (
        <div className="flex justify-center py-2">
          {isCompleted ? (
            <div className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-lg border border-emerald-500/30 text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {t.completedBadge}
            </div>
          ) : (
            <button
              onClick={onComplete}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg hover:from-emerald-700 hover:to-green-700 shadow-sm transition-all text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {t.markDone}
            </button>
          )}
        </div>
      )}

      {/* Celebration */}
      {allDone && lesson.exercises.length > 0 && (
        <div className="bg-gradient-to-l from-emerald-600 to-green-600 text-white rounded-xl p-4 text-center shadow-md">
          <div className="text-2xl mb-1">🎉</div>
          <p className="font-bold text-sm">{t.allExercisesDone}</p>
          <p className="text-xs text-emerald-100 mt-0.5">{t.continueNext}</p>
        </div>
      )}
    </div>
  );
}

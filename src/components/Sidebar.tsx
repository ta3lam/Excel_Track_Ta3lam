import { useState } from 'react';
import { Lesson, LevelGroup } from '../types';
import { LEVEL_COLORS } from '../data/lessons';
import logo from '../assets/logo.png';

// Static mapping for progress bar bg colors (Tailwind requires static class names)
const LEVEL_PROGRESS_BAR: Record<string, string> = {
  slate:   'bg-slate-500',
  emerald: 'bg-emerald-500',
  blue:    'bg-blue-500',
  violet:  'bg-violet-500',
  orange:  'bg-orange-500',
  red:     'bg-red-500',
  amber:   'bg-amber-500',
};

interface SidebarProps {
  lessons: Lesson[];
  levelGroups: LevelGroup[];
  currentLessonId: number;
  completed: number[];
  onSelectLesson: (id: number) => void;
  onResetProgress: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({
  lessons, levelGroups, currentLessonId, completed,
  onSelectLesson, onResetProgress, isOpen, onClose,
}: SidebarProps) {
  const [confirmReset, setConfirmReset] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const completedPct = Math.round((completed.length / lessons.length) * 100);
  const query = searchQuery.trim().toLowerCase();

  const handleResetConfirmed = () => {
    onResetProgress();
    setConfirmReset(false);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Confirm Reset Modal */}
      {confirmReset && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" dir="rtl">
          <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6 max-w-sm w-full shadow-2xl">
            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-center text-base mb-2">إعادة تعيين التقدم</h3>
            <p className="text-gray-400 text-sm text-center leading-relaxed mb-6">
              ستُحذف جميع درجات تقدمك بشكل نهائي.<br />
              هذا الإجراء لا يمكن التراجع عنه.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmReset(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors text-sm font-medium"
              >
                إلغاء
              </button>
              <button
                onClick={handleResetConfirmed}
                className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white transition-colors text-sm font-bold"
              >
                تأكيد الحذف
              </button>
            </div>
          </div>
        </div>
      )}

      <aside className={`
        fixed lg:static inset-y-0 right-0 z-30 w-72 flex-shrink-0
        bg-gray-900 border-l border-gray-700/50 flex flex-col
        transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="p-4 border-b border-gray-700/50 flex-shrink-0">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Ta3laM" className="w-8 h-8 rounded-lg object-cover flex-shrink-0" />
              <div>
                <h1 className="text-sm font-bold text-white leading-tight">إتقان تحليل البيانات</h1>
                <p className="text-xs text-gray-400">Excel Mastery</p>
              </div>
            </div>
            <button onClick={onClose} className="lg:hidden p-1.5 hover:bg-gray-700 rounded text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress */}
          <div className="mb-3">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>{completed.length} / {lessons.length} درس</span>
              <span className="text-emerald-400 font-medium">{completedPct}%</span>
            </div>
            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-500"
                style={{ width: `${completedPct}%` }}
              />
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="ابحث عن درس..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-1.5 pr-8 pl-3 text-xs text-gray-200 placeholder-gray-500 outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Lesson list */}
        <nav className="flex-1 overflow-y-auto py-2">
          {levelGroups.map((group) => {
            const colors = LEVEL_COLORS[group.color];
            const groupLessons = group.lessonIds
              .map(id => lessons.find(l => l.id === id))
              .filter(Boolean) as Lesson[];

            const filteredLessons = query
              ? groupLessons.filter(l => l.title.toLowerCase().includes(query))
              : groupLessons;

            if (!filteredLessons.length) return null;

            const groupCompleted = groupLessons.filter(l => completed.includes(l.id)).length;
            const groupTotal = groupLessons.length;
            const groupPct = Math.round((groupCompleted / groupTotal) * 100);

            return (
              <div key={group.id} className="mb-1">
                {/* Level header */}
                <div className="px-3 py-2">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${colors.badge}`}>
                        {group.label}
                      </span>
                      {!query && (
                        <span className="text-xs text-gray-500 truncate">{group.labelSub}</span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 flex-shrink-0 font-mono">
                      {groupCompleted}/{groupTotal}
                    </span>
                  </div>
                  {/* Level progress bar */}
                  {!query && (
                    <div className="h-0.5 bg-gray-700/60 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${LEVEL_PROGRESS_BAR[group.color] ?? 'bg-gray-500'}`}
                        style={{ width: `${groupPct}%` }}
                      />
                    </div>
                  )}
                </div>

                {/* Lessons */}
                {filteredLessons.map((lesson) => {
                  const isActive = lesson.id === currentLessonId;
                  const isDone = completed.includes(lesson.id);

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => { onSelectLesson(lesson.id); onClose(); }}
                      title={lesson.title}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 text-right transition-colors ${
                        isActive
                          ? 'bg-emerald-500/15 border-l-2 border-emerald-500'
                          : 'hover:bg-gray-800/60 border-l-2 border-transparent'
                      }`}
                    >
                      {/* Completion dot */}
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        isDone ? 'bg-emerald-400' : isActive ? 'bg-emerald-500' : 'bg-gray-600'
                      }`} />

                      {/* Title */}
                      <span className={`flex-1 text-sm leading-snug truncate ${
                        isActive ? 'text-emerald-300 font-medium' : isDone ? 'text-gray-400' : 'text-gray-300'
                      }`}>
                        {lesson.title}
                      </span>

                      {/* Type badge */}
                      <span className={`text-xs px-1.5 py-0.5 rounded flex-shrink-0 ${
                        lesson.type === 'formula' ? 'bg-emerald-500/20 text-emerald-400' :
                        lesson.type === 'code' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-gray-600/40 text-gray-400'
                      }`}>
                        {lesson.type === 'formula' ? 'fx' : lesson.type === 'code' ? '</>' : '📖'}
                      </span>
                    </button>
                  );
                })}
              </div>
            );
          })}

          {/* No results */}
          {query && levelGroups.every(g =>
            !g.lessonIds
              .map(id => lessons.find(l => l.id === id))
              .filter(Boolean)
              .some(l => l!.title.toLowerCase().includes(query))
          ) && (
            <div className="px-4 py-8 text-center text-sm text-gray-500">
              لا توجد دروس تطابق "{searchQuery}"
            </div>
          )}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-gray-700/50 flex-shrink-0">
          <button
            onClick={() => setConfirmReset(true)}
            className="w-full text-xs text-gray-500 hover:text-red-400 transition-colors py-1.5 rounded hover:bg-gray-800 flex items-center justify-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            إعادة تعيين التقدم
          </button>
        </div>
      </aside>
    </>
  );
}

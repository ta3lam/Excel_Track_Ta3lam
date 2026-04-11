import { Lesson, LevelGroup } from '../types';
import { LEVEL_COLORS } from '../data/lessons';

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
  const completedPct = Math.round((completed.length / lessons.length) * 100);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
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
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center text-sm">
                📊
              </div>
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
          <div>
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
        </div>

        {/* Lesson list */}
        <nav className="flex-1 overflow-y-auto py-2">
          {levelGroups.map((group) => {
            const colors = LEVEL_COLORS[group.color];
            const groupLessons = group.lessonIds.map(id => lessons.find(l => l.id === id)).filter(Boolean) as Lesson[];
            if (!groupLessons.length) return null;

            return (
              <div key={group.id} className="mb-1">
                {/* Level header */}
                <div className={`px-3 py-2 flex items-center gap-2`}>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${colors.badge}`}>
                    {group.label}
                  </span>
                  <span className="text-xs text-gray-500">{group.labelSub}</span>
                </div>

                {/* Lessons */}
                {groupLessons.map((lesson) => {
                  const isActive = lesson.id === currentLessonId;
                  const isDone = completed.includes(lesson.id);

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => { onSelectLesson(lesson.id); onClose(); }}
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
                      <span className={`flex-1 text-sm leading-snug ${
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
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-gray-700/50 flex-shrink-0">
          <button
            onClick={onResetProgress}
            className="w-full text-xs text-gray-500 hover:text-red-400 transition-colors py-1.5 rounded hover:bg-gray-800"
          >
            إعادة تعيين التقدم
          </button>
        </div>
      </aside>
    </>
  );
}

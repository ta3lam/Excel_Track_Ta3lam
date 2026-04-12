import { useState, useCallback, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { LessonContent } from './components/LessonContent';
import { LessonPane } from './components/LessonPane';
import { WelcomeScreen } from './components/WelcomeScreen';
import { allLessons, LEVEL_GROUPS } from './data/lessons';
import { useProgress } from './hooks/useProgress';

const WELCOMED_KEY = 'excel-mastery-welcomed';

function NavArrow({ direction, onClick, disabled }: { direction: 'prev' | 'next'; onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
        text-gray-400 hover:text-gray-200 hover:bg-gray-700/60
        disabled:opacity-30 disabled:cursor-not-allowed transition-all"
    >
      {direction === 'prev' && (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
      {direction === 'prev' ? 'السابق' : 'التالي'}
      {direction === 'next' && (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      )}
    </button>
  );
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentLessonId, setCurrentLessonId] = useState<number>(allLessons[0]?.id ?? 1);
  const [mobileTab, setMobileTab] = useState<'content' | 'exercises'>('content');
  const [showWelcome, setShowWelcome] = useState<boolean>(
    () => !localStorage.getItem(WELCOMED_KEY)
  );

  const { completed, markComplete, resetProgress } = useProgress();

  const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
  const currentLesson = allLessons[currentIndex];

  // Reset mobile tab to content when lesson changes
  useEffect(() => {
    setMobileTab('content');
  }, [currentLessonId]);

  const goNext = useCallback(() => {
    if (currentIndex < allLessons.length - 1) {
      setCurrentLessonId(allLessons[currentIndex + 1].id);
    }
  }, [currentIndex]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentLessonId(allLessons[currentIndex - 1].id);
    }
  }, [currentIndex]);

  const handleComplete = useCallback(() => {
    markComplete(currentLessonId);
  }, [currentLessonId, markComplete]);

  const handleSelectLesson = useCallback((id: number) => {
    setCurrentLessonId(id);
    setSidebarOpen(false);
  }, []);

  const handleStart = useCallback(() => {
    localStorage.setItem(WELCOMED_KEY, '1');
    setShowWelcome(false);
  }, []);

  const completedPct = Math.round((completed.length / allLessons.length) * 100);

  if (showWelcome) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  if (!currentLesson) return null;

  const hasExercises = currentLesson.exercises.length > 0 || currentLesson.sheet || currentLesson.example;

  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden" dir="rtl">
      {/* Sidebar */}
      <Sidebar
        lessons={allLessons}
        levelGroups={LEVEL_GROUPS}
        currentLessonId={currentLessonId}
        completed={completed}
        onSelectLesson={handleSelectLesson}
        onResetProgress={resetProgress}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="flex-shrink-0 h-12 bg-gray-900 border-b border-gray-700/50 flex items-center px-4 gap-3">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setSidebarOpen(o => !o)}
            className="lg:hidden p-1.5 hover:bg-gray-700 rounded text-gray-400"
            aria-label="فتح القائمة"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Title */}
          <div className="flex items-center gap-2 mr-1">
            <span className="text-emerald-400 text-lg">📊</span>
            <span className="text-sm font-bold text-white hidden sm:block">إتقان تحليل البيانات بـ Excel</span>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Progress */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs text-gray-400">{completed.length}/{allLessons.length}</span>
            <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-500"
                style={{ width: `${completedPct}%` }}
              />
            </div>
            <span className="text-xs text-emerald-400 font-medium">{completedPct}%</span>
          </div>

          {/* Download button */}
          <a
            href="excel-exercises.xlsx"
            download
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            ملف التمارين
          </a>

          {/* Nav arrows */}
          <div className="flex items-center gap-1 mr-2">
            <NavArrow direction="prev" onClick={goPrev} disabled={currentIndex === 0} />
            <NavArrow direction="next" onClick={goNext} disabled={currentIndex === allLessons.length - 1} />
          </div>
        </header>

        {/* Mobile tab bar */}
        {hasExercises && (
          <div className="lg:hidden flex-shrink-0 flex border-b border-gray-700/50 bg-gray-900">
            <button
              onClick={() => setMobileTab('content')}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors border-b-2 ${
                mobileTab === 'content'
                  ? 'text-emerald-400 border-emerald-500'
                  : 'text-gray-500 border-transparent hover:text-gray-300'
              }`}
            >
              المحتوى
            </button>
            <button
              onClick={() => setMobileTab('exercises')}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors border-b-2 ${
                mobileTab === 'exercises'
                  ? 'text-amber-400 border-amber-500'
                  : 'text-gray-500 border-transparent hover:text-gray-300'
              }`}
            >
              التمارين
              {currentLesson.exercises.length > 0 && (
                <span className="mr-1.5 text-xs opacity-60">({currentLesson.exercises.length})</span>
              )}
            </button>
          </div>
        )}

        {/* Split pane */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left: lesson content */}
          <div className={`
            flex-1 min-w-0 overflow-y-auto p-4 lg:p-6
            ${mobileTab === 'content' ? 'block' : 'hidden'} lg:block
          `}>
            <div className="max-w-2xl mx-auto animate-fadeIn" key={currentLesson.id}>
              <LessonContent lesson={currentLesson} />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-gray-700/50 flex-shrink-0" />

          {/* Right: interactive panel (desktop always, mobile only if exercises tab) */}
          <div className={`
            flex-shrink-0 flex-col overflow-hidden
            ${mobileTab === 'exercises' ? 'flex flex-1' : 'hidden'}
            lg:flex lg:flex-initial lg:w-96 xl:w-[420px]
          `}>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="animate-fadeIn" key={`pane-${currentLesson.id}`}>
                <LessonPane
                  lesson={currentLesson}
                  isCompleted={completed.includes(currentLesson.id)}
                  onComplete={handleComplete}
                />
              </div>
            </div>

            {/* Bottom nav */}
            <div className="flex-shrink-0 border-t border-gray-700/50 px-4 py-3 flex items-center justify-between bg-gray-900/50">
              <NavArrow direction="prev" onClick={goPrev} disabled={currentIndex === 0} />
              <span className="text-xs text-gray-500">
                {currentIndex + 1} / {allLessons.length}
              </span>
              <NavArrow direction="next" onClick={goNext} disabled={currentIndex === allLessons.length - 1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

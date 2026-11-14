import { allLessons, LEVEL_GROUPS, LEVEL_COLORS } from '../data/lessons';
import { useAppContext } from '../contexts/AppContext';
import logo from '../assets/logo.png';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const { t, lang, isDark, toggleLang, toggleTheme } = useAppContext();

  return (
    <div className={`flex min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white overflow-y-auto ${isDark ? 'dark' : ''}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-2xl mx-auto px-6 py-10 w-full">

        {/* Top bar: theme + lang toggles */}
        <div className="flex justify-end gap-2 mb-8">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 rounded-lg text-xs font-bold border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {lang === 'ar' ? 'EN' : 'ع'}
          </button>
        </div>

        {/* Logo + Title */}
        <div className="text-center mb-10">
          <img src={logo} alt="Ta3laM" className="w-16 h-16 rounded-2xl mx-auto mb-5 shadow-lg" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 leading-snug">
            {t.welcomeTitle}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
            {t.welcomeSubtitle}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {[
            { value: String(allLessons.length), label: t.statLessons },
            { value: String(LEVEL_GROUPS.length), label: t.statLevels },
            { value: String(allLessons.reduce((sum, lesson) => sum + lesson.exercises.length, 0)), label: t.statExercises },
          ].map(s => (
            <div key={s.label} className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-emerald-500 mb-1">{s.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Levels */}
        <div className="mb-10">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            {t.sevenLevels}
          </h2>
          <div className="space-y-2">
            {LEVEL_GROUPS.map((group, i) => {
              const colors = LEVEL_COLORS[group.color];
              const levelLabel = lang === 'ar' ? group.label : group.labelSub;
              return (
                <div key={group.id} className={`flex items-center gap-3 p-3 rounded-xl border ${colors.border} ${colors.bg}`}>
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 bg-white dark:bg-gray-900 ${colors.text}`}>
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className={`text-sm font-semibold ${colors.text}`}>{levelLabel}</span>
                  </div>
                  <span className="text-xs text-gray-400 flex-shrink-0">
                    {group.lessonIds.length} {t.lessonsBadge}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* How it works */}
        <div className="bg-white dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700/50 p-5 mb-8">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">{t.howItWorks}</h2>
          <div className="space-y-3">
            {[
              { icon: '📖', text: t.howStep1 },
              { icon: '⚡', text: t.howStep2 },
              { icon: '✏️', text: t.howStep3 },
              { icon: '📥', text: t.howStep4 },
            ].map(step => (
              <div key={step.icon} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                <span className="text-lg flex-shrink-0">{step.icon}</span>
                {step.text}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onStart}
            className="flex-1 bg-gradient-to-l from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg text-base flex items-center justify-center gap-2"
          >
            {t.startNow}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <a
            href="excel-exercises.xlsx"
            download
            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t.downloadExercises}
          </a>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">{t.saveNote}</p>
      </div>
    </div>
  );
}

import { LEVEL_GROUPS, LEVEL_COLORS } from '../data/lessons';
import logo from '../assets/logo.png';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white overflow-y-auto" dir="rtl">
      <div className="max-w-2xl mx-auto px-6 py-12 w-full">

        {/* Logo + Title */}
        <div className="text-center mb-10">
          <img src={logo} alt="Ta3laM" className="w-16 h-16 rounded-2xl mx-auto mb-5 shadow-lg" />
          <h1 className="text-3xl font-bold text-white mb-3 leading-snug">
            إتقان تحليل البيانات بـ Excel
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
            رحلتك الشاملة من الصفر إلى الاحتراف في تحليل البيانات — بمحتوى تفاعلي عربي 100%
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {[
            { value: '51', label: 'درس تفاعلي' },
            { value: '7', label: 'مستويات' },
            { value: '100+', label: 'تمرين' },
          ].map(s => (
            <div key={s.label} className="bg-gray-800 rounded-xl p-4 text-center border border-gray-700/70">
              <div className="text-2xl font-bold text-emerald-400 mb-1">{s.value}</div>
              <div className="text-xs text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Levels */}
        <div className="mb-10">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            المستويات السبعة
          </h2>
          <div className="space-y-2">
            {LEVEL_GROUPS.map((group, i) => {
              const colors = LEVEL_COLORS[group.color];
              return (
                <div
                  key={group.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border ${colors.border} ${colors.bg}`}
                >
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 bg-gray-900 ${colors.text}`}>
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className={`text-sm font-semibold ${colors.text}`}>{group.label}</span>
                    <span className="text-xs text-gray-500 mr-2">{group.labelSub}</span>
                  </div>
                  <span className="text-xs text-gray-500 flex-shrink-0">
                    {group.lessonIds.length} درس
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* How it works */}
        <div className="bg-gray-800/60 rounded-xl border border-gray-700/50 p-5 mb-8">
          <h2 className="text-sm font-semibold text-white mb-4">كيف يعمل التطبيق؟</h2>
          <div className="space-y-3">
            {[
              { icon: '📖', text: 'اقرأ الدرس واستوعب المفهوم بشكل كامل' },
              { icon: '⚡', text: 'جرّب الصيغ بنفسك في المحرر التفاعلي المدمج' },
              { icon: '✏️', text: 'أجب على التمارين للتحقق من مستوى فهمك' },
              { icon: '📥', text: 'حمّل ملف Excel للتدريب الإضافي على جهازك' },
            ].map(step => (
              <div key={step.icon} className="flex items-center gap-3 text-sm text-gray-300">
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
            ابدأ الآن
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <a
            href="excel-exercises.xlsx"
            download
            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            تحميل ملف التمارين
          </a>
        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          يحفظ التطبيق تقدمك تلقائياً في المتصفح
        </p>
      </div>
    </div>
  );
}

export type Lang = 'ar' | 'en';

export interface Translations {
  // Header
  openMenu: string;
  appTitle: string;
  exerciseFile: string;
  prev: string;
  next: string;
  content: string;
  exercises: string;
  // Sidebar
  sidebarTitle: string;
  sidebarSub: string;
  progressLabel: (completed: number, total: number) => string;
  searchPlaceholder: string;
  resetProgress: string;
  resetTitle: string;
  resetBody: string;
  cancel: string;
  confirmDelete: string;
  noResults: (q: string) => string;
  lessons: string;
  // LessonPane
  tryItYourself: string;
  codeExample: string;
  completedBadge: string;
  markDone: string;
  allExercisesDone: string;
  continueNext: string;
  // ExercisePanel
  exerciseOf: (cur: number, total: number) => string;
  completedCount: (n: number) => string;
  showHint: string;
  hideHint: string;
  confirmAnswer: string;
  correctAnswer: string;
  wrongFormula: string;
  // FormulaEditor
  referenceData: string;
  formulaBar: string;
  pressEnter: string;
  run: string;
  copy: string;
  copied: string;
  clear: string;
  result: string;
  formulaError: string;
  // Excel error descriptions
  errNA: string;
  errREF: string;
  errVALUE: string;
  errDIV0: string;
  errNAME: string;
  errNUM: string;
  errNULL: string;
  // WelcomeScreen
  welcomeTitle: string;
  welcomeSubtitle: string;
  statLessons: string;
  statLevels: string;
  statExercises: string;
  sevenLevels: string;
  howItWorks: string;
  howStep1: string;
  howStep2: string;
  howStep3: string;
  howStep4: string;
  startNow: string;
  downloadExercises: string;
  saveNote: string;
  // Misc
  lessonsBadge: string;
}

export const translations: Record<Lang, Translations> = {
  ar: {
    openMenu: 'فتح القائمة',
    appTitle: 'إتقان تحليل البيانات بـ Excel',
    exerciseFile: 'ملف التمارين',
    prev: 'السابق',
    next: 'التالي',
    content: 'المحتوى',
    exercises: 'التمارين',

    sidebarTitle: 'إتقان تحليل البيانات',
    sidebarSub: 'Excel Mastery',
    progressLabel: (c, t) => `${c} / ${t} درس`,
    searchPlaceholder: 'ابحث عن درس...',
    resetProgress: 'إعادة تعيين التقدم',
    resetTitle: 'إعادة تعيين التقدم',
    resetBody: 'ستُحذف جميع درجات تقدمك بشكل نهائي.\nهذا الإجراء لا يمكن التراجع عنه.',
    cancel: 'إلغاء',
    confirmDelete: 'تأكيد الحذف',
    noResults: (q) => `لا توجد دروس تطابق "${q}"`,
    lessons: 'دروس',

    tryItYourself: 'جرّب بنفسك',
    codeExample: 'مثال على الكود',
    completedBadge: 'تم الإكمال',
    markDone: 'تم — انتقل للتالي',
    allExercisesDone: 'أتممت جميع التمارين!',
    continueNext: 'انتقل إلى الدرس التالي',

    exerciseOf: (c, t) => `تمرين ${c} من ${t}`,
    completedCount: (n) => `${n} مكتمل`,
    showHint: 'إظهار التلميح',
    hideHint: 'إخفاء التلميح',
    confirmAnswer: 'تأكيد الإجابة',
    correctAnswer: 'إجابة صحيحة! 🎉',
    wrongFormula: 'النتيجة غير صحيحة — راجع الصيغة وحاول مجدداً',

    referenceData: 'البيانات المرجعية',
    formulaBar: 'شريط الصيغة',
    pressEnter: 'اضغط Enter للتشغيل',
    run: 'تشغيل',
    copy: 'نسخ',
    copied: '✓ تم النسخ',
    clear: 'مسح',
    result: 'النتيجة',
    formulaError: 'خطأ في الصيغة — تحقق من الكتابة الصحيحة',
    errNA: 'القيمة غير موجودة في النطاق المحدد',
    errREF: 'مرجع الخلية غير صالح أو محذوف',
    errVALUE: 'نوع البيانات غير متوافق مع الدالة',
    errDIV0: 'لا يمكن القسمة على صفر',
    errNAME: 'اسم الدالة أو النطاق غير معروف',
    errNUM: 'قيمة عددية غير صالحة',
    errNULL: 'تقاطع النطاقين المحددين فارغ',

    welcomeTitle: 'إتقان تحليل البيانات بـ Excel',
    welcomeSubtitle: 'رحلتك الشاملة من الصفر إلى الاحتراف في تحليل البيانات — بمحتوى تفاعلي عربي 100%',
    statLessons: 'درس تفاعلي',
    statLevels: 'مستويات',
    statExercises: 'تمرين',
    sevenLevels: 'المستويات السبعة',
    howItWorks: 'كيف يعمل التطبيق؟',
    howStep1: 'اقرأ الدرس واستوعب المفهوم بشكل كامل',
    howStep2: 'جرّب الصيغ بنفسك في المحرر التفاعلي المدمج',
    howStep3: 'أجب على التمارين للتحقق من مستوى فهمك',
    howStep4: 'حمّل ملف Excel للتدريب الإضافي على جهازك',
    startNow: 'ابدأ الآن',
    downloadExercises: 'تحميل ملف التمارين',
    saveNote: 'يحفظ التطبيق تقدمك تلقائياً في المتصفح',
    lessonsBadge: 'درس',
  },

  en: {
    openMenu: 'Open Menu',
    appTitle: 'Excel Data Analysis Mastery',
    exerciseFile: 'Exercise File',
    prev: 'Previous',
    next: 'Next',
    content: 'Content',
    exercises: 'Exercises',

    sidebarTitle: 'Data Analysis Mastery',
    sidebarSub: 'Excel Mastery',
    progressLabel: (c, t) => `${c} / ${t} lessons`,
    searchPlaceholder: 'Search lessons...',
    resetProgress: 'Reset Progress',
    resetTitle: 'Reset Progress',
    resetBody: 'All your progress will be permanently deleted.\nThis action cannot be undone.',
    cancel: 'Cancel',
    confirmDelete: 'Confirm Reset',
    noResults: (q) => `No lessons match "${q}"`,
    lessons: 'lessons',

    tryItYourself: 'Try it yourself',
    codeExample: 'Code Example',
    completedBadge: 'Completed',
    markDone: 'Done — Go to Next',
    allExercisesDone: 'All exercises completed!',
    continueNext: 'Continue to next lesson',

    exerciseOf: (c, t) => `Exercise ${c} of ${t}`,
    completedCount: (n) => `${n} completed`,
    showHint: 'Show Hint',
    hideHint: 'Hide Hint',
    confirmAnswer: 'Confirm Answer',
    correctAnswer: 'Correct! 🎉',
    wrongFormula: 'Incorrect result — check your formula and try again',

    referenceData: 'Reference Data',
    formulaBar: 'Formula Bar',
    pressEnter: 'Press Enter to Run',
    run: 'Run',
    copy: 'Copy',
    copied: '✓ Copied',
    clear: 'Clear',
    result: 'Result',
    formulaError: 'Formula error — check the syntax',
    errNA: 'Value not found in the specified range',
    errREF: 'Invalid or deleted cell reference',
    errVALUE: 'Data type is incompatible with the function',
    errDIV0: 'Cannot divide by zero',
    errNAME: 'Unknown function or range name',
    errNUM: 'Invalid numeric value',
    errNULL: 'The two specified ranges do not intersect',

    welcomeTitle: 'Excel Data Analysis Mastery',
    welcomeSubtitle: 'Your complete journey from zero to pro in data analysis — 100% Arabic interactive content',
    statLessons: 'interactive lessons',
    statLevels: 'levels',
    statExercises: 'exercises',
    sevenLevels: 'The Seven Levels',
    howItWorks: 'How does it work?',
    howStep1: 'Read each lesson and absorb the concept fully',
    howStep2: 'Try formulas yourself in the built-in interactive editor',
    howStep3: 'Answer exercises to check your understanding',
    howStep4: 'Download the Excel file to practice offline',
    startNow: 'Start Now',
    downloadExercises: 'Download Exercise File',
    saveNote: 'Your progress is saved automatically in the browser',
    lessonsBadge: 'lessons',
  },
};

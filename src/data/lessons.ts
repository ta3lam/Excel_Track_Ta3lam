import { Lesson, LevelGroup } from '../types';
import { lessonsZero } from './lessons_zero';
import { lessonsBeginner } from './lessons_beginner';
import { lessonsLookup } from './lessons_lookup';
import { lessonsAdvanced } from './lessons_advanced';
import { lessonsPowerQuery } from './lessons_powerquery';
import { lessonsExpert } from './lessons_expert';
import { lessonsPro } from './lessons_pro';

export const allLessons: Lesson[] = [
  ...lessonsZero,
  ...lessonsBeginner,
  ...lessonsLookup,
  ...lessonsAdvanced,
  ...lessonsPowerQuery,
  ...lessonsExpert,
  ...lessonsPro,
];

export const LEVEL_GROUPS: LevelGroup[] = [
  {
    id: 'zero',
    label: 'تحت الصفر',
    labelSub: 'Under Zero',
    color: 'slate',
    lessonIds: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 'beginner',
    label: 'الأساسيات',
    labelSub: 'Fundamentals',
    color: 'emerald',
    lessonIds: [11, 12, 13, 14, 15, 16, 17, 18, 19],
  },
  {
    id: 'lookup',
    label: 'البحث والمرجع',
    labelSub: 'Lookup & Reference',
    color: 'blue',
    lessonIds: [21, 22, 23, 24, 25, 26, 27],
  },
  {
    id: 'advanced',
    label: 'المستوى المتقدم',
    labelSub: 'Advanced Excel',
    color: 'violet',
    lessonIds: [31, 32, 33, 34, 35, 36, 37],
  },
  {
    id: 'powerquery',
    label: 'Power Query',
    labelSub: 'Power Query & M',
    color: 'orange',
    lessonIds: [41, 42, 43, 44, 45, 46],
  },
  {
    id: 'expert',
    label: 'DAX والـ Data Model',
    labelSub: 'Data Model & DAX',
    color: 'red',
    lessonIds: [51, 52, 53, 54, 55, 56, 57, 58],
  },
  {
    id: 'pro',
    label: 'الاحتراف',
    labelSub: 'VBA & Certification',
    color: 'amber',
    lessonIds: [61, 62, 63, 64],
  },
];

export const LEVEL_COLORS: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  slate:   { bg: 'bg-slate-500/10',   text: 'text-slate-400',   border: 'border-slate-500/30',   badge: 'bg-slate-500/20 text-slate-300' },
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30', badge: 'bg-emerald-500/20 text-emerald-300' },
  blue:    { bg: 'bg-blue-500/10',    text: 'text-blue-400',    border: 'border-blue-500/30',    badge: 'bg-blue-500/20 text-blue-300' },
  violet:  { bg: 'bg-violet-500/10',  text: 'text-violet-400',  border: 'border-violet-500/30',  badge: 'bg-violet-500/20 text-violet-300' },
  orange:  { bg: 'bg-orange-500/10',  text: 'text-orange-400',  border: 'border-orange-500/30',  badge: 'bg-orange-500/20 text-orange-300' },
  red:     { bg: 'bg-red-500/10',     text: 'text-red-400',     border: 'border-red-500/30',     badge: 'bg-red-500/20 text-red-300' },
  amber:   { bg: 'bg-amber-500/10',   text: 'text-amber-400',   border: 'border-amber-500/30',   badge: 'bg-amber-500/20 text-amber-300' },
};

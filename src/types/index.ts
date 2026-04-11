export type LessonType = 'formula' | 'code' | 'concept';
export type CodeLang = 'dax' | 'm' | 'vba';
export type Level = 'zero' | 'beginner' | 'lookup' | 'advanced' | 'powerquery' | 'expert' | 'pro';

export type FormulaResult = number | string | boolean | null;

export interface SheetData {
  headers: string[];
  rows: (string | number | null)[][];
}

export interface Exercise {
  id: number;
  type: 'formula' | 'mcq';
  question: string;
  hint: string;
  // formula
  sheet?: SheetData;
  checkFunction?: (result: FormulaResult, formula: string) => boolean;
  // mcq
  options?: string[];
  correctIndex?: number;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  content: string; // markdown
  type: LessonType;
  codeLang?: CodeLang;
  example?: string;
  sheet?: SheetData; // "try it out" data for formula lessons
  exercises: Exercise[];
}

export interface LevelGroup {
  id: Level;
  label: string;
  labelSub: string;
  color: string; // tailwind color prefix e.g. 'emerald'
  lessonIds: number[];
}

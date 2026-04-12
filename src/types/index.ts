export type LessonType = 'formula' | 'code' | 'concept';
export type CodeLang = 'dax' | 'm' | 'vba';
export type Level = 'zero' | 'beginner' | 'lookup' | 'advanced' | 'powerquery' | 'expert' | 'pro';

export type FormulaResult = number | string | boolean | null;

export interface SheetData {
  headers: string[];
  headersEn?: string[];
  rows: (string | number | null)[][];
}

export interface Exercise {
  id: number;
  type: 'formula' | 'mcq';
  question: string;
  questionEn?: string;
  hint: string;
  hintEn?: string;
  // formula
  sheet?: SheetData;
  checkFunction?: (result: FormulaResult, formula: string) => boolean;
  // mcq
  options?: string[];
  optionsEn?: string[];
  correctIndex?: number;
}

export interface Lesson {
  id: number;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  content: string;
  contentEn?: string;
  type: LessonType;
  codeLang?: CodeLang;
  example?: string;
  sheet?: SheetData;
  exercises: Exercise[];
}

export interface LevelGroup {
  id: Level;
  label: string;
  labelSub: string;
  color: string;
  lessonIds: number[];
}

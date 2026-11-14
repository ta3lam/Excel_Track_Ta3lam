export type LessonType = 'formula' | 'code' | 'concept';
export type CodeLang = 'dax' | 'm' | 'vba' | 'python';
export type Level = 'zero' | 'beginner' | 'lookup' | 'advanced' | 'powerquery' | 'expert' | 'pro' | 'cases' | 'ai';

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
  /** Reference formula. Revealed on demand and written into the trainer sheet. */
  solutionFormula?: string;
  /** Result of solutionFormula, used by tests and the solution reveal. */
  expected?: FormulaResult;
  /** Prompt the learner copies into Copilot or a chat model. No API is called. */
  prompt?: string;
  promptEn?: string;
  // mcq
  options?: string[];
  optionsEn?: string[];
  correctIndex?: number;
}

export interface LessonLink {
  href: string;
  label: string;
  labelEn?: string;
}

export interface LessonTag {
  label: string;
  labelEn?: string;
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
  /** Dataset sheets start at A1 so workbook formulas match the in-app grid. */
  sheetLayout?: 'dataset';
  tags?: LessonTag[];
  resources?: LessonLink[];
  exercises: Exercise[];
}

export interface LevelSection {
  id: string;
  label: string;
  labelEn: string;
  lessonIds: number[];
}

export interface LevelGroup {
  id: Level;
  label: string;
  labelSub: string;
  color: string;
  lessonIds: number[];
  sections?: LevelSection[];
}

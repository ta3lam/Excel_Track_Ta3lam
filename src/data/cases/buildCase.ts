import { Exercise, Lesson, SheetData } from '../../types';
import { evaluateFormula, isFormulaError, sameResult } from '../../utils/formulaEval';

export type CaseFn =
  | 'sales'
  | 'retail'
  | 'finance'
  | 'hr'
  | 'procurement'
  | 'service'
  | 'marketing'
  | 'logistics'
  | 'banking'
  | 'telecom';

export type CaseLevel = 'beginner' | 'intermediate' | 'advanced';

export interface CaseTask {
  question: string;
  questionEn: string;
  hint: string;
  hintEn: string;
  /** Use {n} for the last data row. */
  formula: string;
}

export interface CaseSpec {
  id: number;
  fn: CaseFn;
  level: CaseLevel;
  title: string;
  titleEn: string;
  company: string;
  companyEn: string;
  who: string;
  whoEn: string;
  why: string;
  whyEn: string;
  currency: 'EGP' | 'SAR';
  headers: string[];
  headersEn: string[];
  rows: (string | number | null)[][];
  messy?: string[];
  messyEn?: string[];
  note?: string;
  noteEn?: string;
  tasks: CaseTask[];
}

const FN_LABEL: Record<CaseFn, { ar: string; en: string }> = {
  sales: { ar: 'المبيعات والعمولات', en: 'Sales & commissions' },
  retail: { ar: 'التجزئة والمخزون', en: 'Retail & inventory' },
  finance: { ar: 'المالية والموازنة', en: 'Finance & budget' },
  hr: { ar: 'الموارد البشرية', en: 'HR' },
  procurement: { ar: 'المشتريات', en: 'Procurement' },
  service: { ar: 'خدمة العملاء', en: 'Customer service' },
  marketing: { ar: 'التسويق', en: 'Marketing' },
  logistics: { ar: 'التوصيل واللوجستيات', en: 'Logistics' },
  banking: { ar: 'التمويل والقروض', en: 'Banking & loans' },
  telecom: { ar: 'تسرب عملاء الاتصالات', en: 'Telecom churn' },
};

const LEVEL_LABEL: Record<CaseLevel, { ar: string; en: string }> = {
  beginner: { ar: 'مبتدئ', en: 'Beginner' },
  intermediate: { ar: 'متوسط', en: 'Intermediate' },
  advanced: { ar: 'متقدم', en: 'Advanced' },
};

function fill(formula: string, lastRow: number): string {
  return formula.split('{n}').join(String(lastRow));
}

function functionsIn(formula: string): string[] {
  const found = formula.toUpperCase().match(/[A-Z][A-Z0-9.]*(?=\()/g) ?? [];
  return [...new Set(found)];
}

function glossary(headers: string[], headersEn: string[]): string {
  return headers.map((header, index) => {
    const letter = String.fromCharCode(65 + index);
    const en = headersEn[index] ? ` — ${headersEn[index]}` : '';
    return `| ${letter} | ${header || '—'}${en} |`;
  }).join('\n');
}

export function buildCase(spec: CaseSpec): Lesson {
  spec.rows.forEach((row, index) => {
    if (row.length !== spec.headers.length) {
      throw new Error(`Case ${spec.id} row ${index} has ${row.length} cells, expected ${spec.headers.length}`);
    }
  });
  const lastRow = spec.rows.length + 1;
  const sheet: SheetData = {
    headers: spec.headers,
    headersEn: spec.headersEn,
    rows: spec.rows,
  };
  const fn = FN_LABEL[spec.fn];
  const level = LEVEL_LABEL[spec.level];
  const tasks = spec.tasks.map(task => ({ ...task, formula: fill(task.formula, lastRow) }));

  const exercises: Exercise[] = tasks.map((task, index) => {
    const expected = evaluateFormula(task.formula, sheet);
    if (isFormulaError(expected) || expected == null) {
      throw new Error(`Case ${spec.id} task ${index + 1} failed: ${task.formula} => ${String(expected)}`);
    }
    return {
      id: spec.id * 10 + index + 1,
      type: 'formula' as const,
      question: task.question,
      questionEn: task.questionEn,
      hint: task.hint,
      hintEn: task.hintEn,
      sheet,
      solutionFormula: task.formula,
      expected,
      checkFunction: (result: unknown) => sameResult(result, expected),
    };
  });

  const used = [...new Set(tasks.flatMap(task => functionsIn(task.formula)))];
  const messyAr = spec.messy?.length
    ? spec.messy.map(item => `- ${item}`).join('\n')
    : '- البيانات دي نسخة تصدير متظبطة عشان السؤال يركز على القرار، من غير لخبطة زيادة.';
  const messyEn = spec.messyEn?.length
    ? spec.messyEn.map(item => `- ${item}`).join('\n')
    : '- This extract is tidy on purpose so the question stays on the decision.';

  const solutionBlock = tasks.map((task, index) => (
    `${index + 1}. \`${task.formula}\`\n   - ${task.question}`
  )).join('\n');
  const solutionBlockEn = tasks.map((task, index) => (
    `${index + 1}. \`${task.formula}\`\n   - ${task.questionEn}`
  )).join('\n');

  const content = `## مين بيسأل وليه؟

**${spec.who}** في شركة ${spec.company} عايز ${spec.why}

العملة في الملف: **${spec.currency}**. الأسماء والشركات والأرقام خيالية للتدريب، ومثبتة بالبذرة \`${spec.id}\` عشان كل المتدربين يشوفوا نفس الشيت.

## البيانات

${messyAr}

| العمود | المعنى |
| --- | --- |
${glossary(spec.headers, spec.headersEn)}

علامة **T** جنب الخلية معناها الرقم متخزن كنص. علامة **␣** معناها مسافة زيادة.

## المطلوب

${tasks.map((task, index) => `${index + 1}. ${task.question}`).join('\n')}

الدوال اللي بتحل الحالة: ${used.join('، ')}.

${spec.note ? `## ملاحظة تشغيل\n\n${spec.note}\n` : ''}
## الصيغة المرجعية

${solutionBlock}

> اكتب الصيغة في التمرين. أي صيغة تطلع نفس النتيجة هتتحسب صحيحة. في Excel على جهازك اكتب \`FALSE\` في البحث الدقيق؛ المحرك هنا بيفهم \`0\` مكانها.
`;

  const contentEn = `## Who is asking, and why?

**${spec.whoEn}** at ${spec.companyEn} needs this because ${spec.whyEn}

Currency in the file: **${spec.currency}**. Names, companies, and figures are fictional training data, frozen with seed \`${spec.id}\` so every learner sees the same sheet.

## The data

${messyEn}

| Column | Meaning |
| --- | --- |
${glossary(spec.headers, spec.headersEn)}

A **T** mark means the number is stored as text. **␣** marks an extra space.

## What to answer

${tasks.map((task, index) => `${index + 1}. ${task.questionEn}`).join('\n')}

Functions used: ${used.join(', ')}.

${spec.noteEn ? `## Operating note\n\n${spec.noteEn}\n` : ''}
## Reference formulas

${solutionBlockEn}

> Type a formula in the exercise. Any formula that returns the same result is accepted. On desktop Excel, exact match uses \`FALSE\`; this checker understands \`0\` in that position.
`;

  return {
    id: spec.id,
    title: spec.title,
    titleEn: spec.titleEn,
    description: `${spec.who} في ${spec.company}: ${spec.why}`,
    descriptionEn: `${spec.whoEn} at ${spec.companyEn}: ${spec.whyEn}`,
    type: 'formula',
    content,
    contentEn,
    sheet,
    sheetLayout: 'dataset',
    tags: [
      { label: level.ar, labelEn: level.en },
      { label: fn.ar, labelEn: fn.en },
      { label: spec.currency, labelEn: spec.currency },
    ],
    resources: [{
      href: `cases/c${spec.id}.xlsx`,
      label: 'حمّل شيت الحالة',
      labelEn: 'Download this case',
    }],
    exercises,
  };
}

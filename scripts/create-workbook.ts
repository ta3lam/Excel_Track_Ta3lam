import ExcelJS from 'exceljs';
import { mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { allLessons, LEVEL_GROUPS } from '../src/data/lessons.js';
import type { Lesson } from '../src/types/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ─── Colors (ARGB) ─────────────────────────────────────────────────────────
const LEVEL_BG: Record<string, string> = {
  slate:   'FFE2E8F0',
  emerald: 'FFD1FAE5',
  blue:    'FFDBEAFE',
  violet:  'FFEDE9FE',
  orange:  'FFFFEDD5',
  red:     'FFFEE2E2',
  amber:   'FFFEF3C7',
  teal:    'FFCCFBF1',
  fuchsia: 'FFFAE8FF',
};
const LEVEL_FONT: Record<string, string> = {
  slate:   'FF475569',
  emerald: 'FF065F46',
  blue:    'FF1E40AF',
  violet:  'FF5B21B6',
  orange:  'FF9A3412',
  red:     'FF991B1B',
  amber:   'FF92400E',
  teal:    'FF0F766E',
  fuchsia: 'FFA21CAF',
};
const ANSWER_BG  = 'FFFFFF99'; // خلية الإجابة
const HEADER_BG  = 'FF1E293B'; // رأس الجداول
const HINT_BG    = 'FFE0E7FF'; // التلميح
const SECTION_BG = 'FFF8FAFC'; // رأس القسم

// ─── Helpers ────────────────────────────────────────────────────────────────
function sheetName(lesson: Lesson): string {
  return `${lesson.id}. ${lesson.title}`.replace(/[*?:\\/[\]]/g, ' ').slice(0, 31);
}

function getLevelColor(lesson: Lesson) {
  const group = LEVEL_GROUPS.find(g => g.lessonIds.includes(lesson.id));
  const color = group?.color ?? 'slate';
  return { bg: LEVEL_BG[color], font: LEVEL_FONT[color], label: group?.label ?? '' };
}

function cell(
  sheet: ExcelJS.Worksheet,
  row: number,
  col: number,
  value: string | number | null,
  options: {
    bold?: boolean;
    bg?: string;
    fontColor?: string;
    fontSize?: number;
    align?: ExcelJS.Alignment['horizontal'];
    wrap?: boolean;
    italic?: boolean;
    border?: boolean;
  } = {}
) {
  const c = sheet.getCell(row, col);
  if (value !== null) c.value = value;
  c.font = {
    name: 'Calibri',
    bold: options.bold ?? false,
    italic: options.italic ?? false,
    color: { argb: options.fontColor ?? 'FF1E293B' },
    size: options.fontSize ?? 11,
  };
  if (options.bg) {
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: options.bg } };
  }
  c.alignment = {
    horizontal: options.align ?? 'right',
    vertical: 'middle',
    readingOrder: 'rightToLeft',
    wrapText: options.wrap ?? false,
  };
  if (options.border) {
    c.border = {
      top: { style: 'thin', color: { argb: 'FFCBD5E1' } },
      left: { style: 'thin', color: { argb: 'FFCBD5E1' } },
      bottom: { style: 'thin', color: { argb: 'FFCBD5E1' } },
      right: { style: 'thin', color: { argb: 'FFCBD5E1' } },
    };
  }
}

function sectionHeader(sheet: ExcelJS.Worksheet, row: number, text: string, colCount = 5) {
  sheet.mergeCells(row, 1, row, colCount);
  cell(sheet, row, 1, text, { bold: true, bg: SECTION_BG, fontColor: 'FF475569', fontSize: 10 });
  sheet.getRow(row).height = 20;
}

// ─── Index Sheet ────────────────────────────────────────────────────────────
function buildIndexSheet(wb: ExcelJS.Workbook) {
  const sheet = wb.addWorksheet('📋 الفهرس', {
    views: [{ rightToLeft: true }],
  });

  sheet.columns = [
    { width: 6 },
    { width: 32 },
    { width: 22 },
    { width: 12 },
    { width: 14 },
  ];

  // Title
  sheet.mergeCells(1, 1, 1, 5);
  cell(sheet, 1, 1, 'إتقان تحليل البيانات بـ Excel — ملف التمارين', {
    bold: true, bg: HEADER_BG, fontColor: 'FFFFFFFF', fontSize: 14, align: 'center',
  });
  sheet.getRow(1).height = 32;

  sheet.mergeCells(2, 1, 2, 5);
  cell(sheet, 2, 1, 'كل Sheet يمثل درساً — اكتب إجاباتك في الخلايا الصفراء 🟡', {
    bg: 'FFFFF9C4', fontColor: 'FF78350F', fontSize: 10, align: 'center', italic: true,
  });
  sheet.getRow(2).height = 18;

  // Table header
  const headers = ['#', 'عنوان الدرس', 'المرحلة', 'النوع', 'التمارين'];
  headers.forEach((h, i) => {
    cell(sheet, 4, i + 1, h, { bold: true, bg: HEADER_BG, fontColor: 'FFFFFFFF', align: 'center', border: true });
  });
  sheet.getRow(4).height = 22;

  // Rows
  let currentGroup = '';
  let dataRow = 5;

  for (const lesson of allLessons) {
    const { bg, font, label } = getLevelColor(lesson);

    // Group separator row
    if (label !== currentGroup) {
      currentGroup = label;
      sheet.mergeCells(dataRow, 1, dataRow, 5);
      cell(sheet, dataRow, 1, `── ${label} ──`, {
        bold: true, bg, fontColor: font, align: 'center', fontSize: 10,
      });
      sheet.getRow(dataRow).height = 18;
      dataRow++;
    }

    const exerciseCount = lesson.exercises.length;
    const typeLabel =
      lesson.type === 'formula' ? '📐 صيغة' :
      lesson.type === 'code' ? '💻 كود' : '📖 مفهوم';

    const c = sheet.getCell(dataRow, 2);
    c.value = {
      text: lesson.title,
      hyperlink: `#'${sheetName(lesson)}'!A1`,
    };
    c.font = { name: 'Calibri', size: 11, color: { argb: 'FF2563EB' }, underline: true };
    c.alignment = { horizontal: 'right', vertical: 'middle', readingOrder: 'rightToLeft' };
    c.border = { bottom: { style: 'thin', color: { argb: 'FFCBD5E1' } }, right: { style: 'thin', color: { argb: 'FFCBD5E1' } } };

    cell(sheet, dataRow, 1, lesson.id, { align: 'center', border: true, fontColor: 'FF64748B' });
    cell(sheet, dataRow, 3, label, { bg, fontColor: font, align: 'center', border: true, fontSize: 10 });
    cell(sheet, dataRow, 4, typeLabel, { align: 'center', border: true });
    cell(sheet, dataRow, 5, exerciseCount > 0 ? `${exerciseCount} تمارين` : '—', { align: 'center', border: true, fontColor: 'FF64748B' });

    sheet.getRow(dataRow).height = 20;
    dataRow++;
  }
}

// ─── Lesson Sheet ────────────────────────────────────────────────────────────
function buildLessonSheet(wb: ExcelJS.Workbook, lesson: Lesson) {
  const name = sheetName(lesson);
  const sheet = wb.addWorksheet(name, { views: [{ rightToLeft: true }] });
  const { bg, font } = getLevelColor(lesson);
  const group = LEVEL_GROUPS.find(g => g.lessonIds.includes(lesson.id));

  sheet.columns = [
    { width: 4 },   // A - row index
    { width: 28 },  // B
    { width: 20 },  // C
    { width: 16 },  // D
    { width: 16 },  // E
    { width: 16 },  // F
  ];

  let r = 1;

  // ── Title row
  sheet.mergeCells(r, 1, r, 6);
  cell(sheet, r, 1, `${lesson.id}. ${lesson.title}`, {
    bold: true, bg: HEADER_BG, fontColor: 'FFFFFFFF', fontSize: 14,
  });
  sheet.getRow(r).height = 32;
  r++;

  // ── Level badge + description
  sheet.mergeCells(r, 1, r, 2);
  cell(sheet, r, 1, group?.label ?? '', { bg, fontColor: font, bold: true, fontSize: 10 });
  sheet.mergeCells(r, 3, r, 6);
  cell(sheet, r, 3, lesson.description, { fontColor: 'FF475569', fontSize: 10, wrap: true });
  sheet.getRow(r).height = 18;
  r++;

  r++; // blank

  // ── Formula lesson: data table
  if (lesson.type === 'formula' && lesson.sheet) {
    sectionHeader(sheet, r, '📊 البيانات المرجعية', 6);
    r++;

    // Column letters header
    cell(sheet, r, 1, '#', { bold: true, bg: HEADER_BG, fontColor: 'FFFFFFFF', align: 'center', border: true });
    lesson.sheet.headers.forEach((h, i) => {
      cell(sheet, r, i + 2, h, { bold: true, bg: HEADER_BG, fontColor: 'FFFFFFFF', align: 'center', border: true });
    });
    sheet.getRow(r).height = 22;
    r++;

    lesson.sheet.rows.forEach((row, ri) => {
      cell(sheet, r, 1, ri + 2, { align: 'center', fontColor: 'FF94A3B8', border: true });
      row.forEach((val, ci) => {
        const isNum = typeof val === 'number';
        cell(sheet, r, ci + 2, val, {
          align: isNum ? 'center' : 'right',
          fontColor: isNum ? 'FF059669' : 'FF1E293B',
          border: true,
        });
      });
      sheet.getRow(r).height = 20;
      r++;
    });
    r++;
  }

  // ── Code lesson: example
  if (lesson.type === 'code' && lesson.example) {
    sectionHeader(sheet, r, '💻 مثال على الكود', 6);
    r++;
    sheet.mergeCells(r, 1, r + Math.min(lesson.example.split('\n').length, 12), 6);
    const codeCell = sheet.getCell(r, 1);
    codeCell.value = lesson.example.trim();
    codeCell.font = { name: 'Courier New', size: 10, color: { argb: 'FF1E293B' } };
    codeCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF1F5F9' } };
    codeCell.alignment = { horizontal: 'left', vertical: 'top', wrapText: true, readingOrder: 'leftToRight' };
    codeCell.border = { top: { style: 'thin', color: { argb: 'FFCBD5E1' } }, left: { style: 'thin', color: { argb: 'FFCBD5E1' } }, bottom: { style: 'thin', color: { argb: 'FFCBD5E1' } }, right: { style: 'thin', color: { argb: 'FFCBD5E1' } } };
    r += Math.min(lesson.example.split('\n').length, 12) + 2;
  }

  // ── Exercises
  if (lesson.exercises.length > 0) {
    sectionHeader(sheet, r, `✏️ التمارين (${lesson.exercises.length})`, 6);
    r++;

    lesson.exercises.forEach((ex, idx) => {
      // Question
      sheet.mergeCells(r, 1, r, 6);
      cell(sheet, r, 1, `س${idx + 1}: ${ex.question}`, {
        bold: true, bg: 'FFF0F9FF', fontColor: 'FF0C4A6E', wrap: true, fontSize: 11,
      });
      sheet.getRow(r).height = 28;
      r++;

      // Hint
      sheet.mergeCells(r, 1, r, 6);
      cell(sheet, r, 1, `💡 تلميح: ${ex.hint}`, {
        italic: true, bg: HINT_BG, fontColor: 'FF3730A3', wrap: true, fontSize: 10,
      });
      sheet.getRow(r).height = 20;
      r++;

      if (ex.type === 'formula') {
        // Exercise data table (if different from lesson sheet)
        if (ex.sheet) {
          cell(sheet, r, 1, 'البيانات:', { bold: true, fontColor: 'FF475569', fontSize: 10 });
          const colLetters = ex.sheet.headers.map((_, i) => String.fromCharCode(65 + i));
          ex.sheet.headers.forEach((h, i) => {
            cell(sheet, r, i + 2, `${colLetters[i]}: ${h}`, { bold: true, bg: 'FFF8FAFC', fontColor: 'FF64748B', border: true, fontSize: 9 });
          });
          r++;
          ex.sheet.rows.forEach((row, ri) => {
            cell(sheet, r, 1, ri + 2, { align: 'center', fontColor: 'FF94A3B8', fontSize: 9 });
            row.forEach((val, ci) => {
              cell(sheet, r, ci + 2, val, { border: true, fontSize: 10, align: typeof val === 'number' ? 'center' : 'right' });
            });
            r++;
          });
        }

        // Answer cell
        cell(sheet, r, 1, 'اكتب الصيغة:', { bold: true, fontColor: 'FF475569' });
        const ansCell = sheet.getCell(r, 2);
        ansCell.value = '=';
        ansCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: ANSWER_BG } };
        ansCell.font = { name: 'Courier New', size: 11, color: { argb: 'FF92400E' } };
        ansCell.alignment = { horizontal: 'left', readingOrder: 'leftToRight' };
        ansCell.border = { top: { style: 'medium', color: { argb: 'FFF59E0B' } }, left: { style: 'medium', color: { argb: 'FFF59E0B' } }, bottom: { style: 'medium', color: { argb: 'FFF59E0B' } }, right: { style: 'medium', color: { argb: 'FFF59E0B' } } };
        sheet.getRow(r).height = 22;
        r++;

      } else if (ex.type === 'mcq' && ex.options) {
        // Options
        ex.options.forEach((opt, oi) => {
          const letter = String.fromCharCode(65 + oi);
          cell(sheet, r, 1, `${letter}.`, { bold: true, fontColor: 'FF64748B', align: 'center' });
          sheet.mergeCells(r, 2, r, 6);
          cell(sheet, r, 2, opt, { bg: 'FFFAFAFA', border: true });
          sheet.getRow(r).height = 20;
          r++;
        });

        // Answer cell
        cell(sheet, r, 1, 'إجابتك:', { bold: true, fontColor: 'FF475569' });
        const ansCell = sheet.getCell(r, 2);
        ansCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: ANSWER_BG } };
        ansCell.border = { top: { style: 'medium', color: { argb: 'FFF59E0B' } }, left: { style: 'medium', color: { argb: 'FFF59E0B' } }, bottom: { style: 'medium', color: { argb: 'FFF59E0B' } }, right: { style: 'medium', color: { argb: 'FFF59E0B' } } };
        ansCell.alignment = { horizontal: 'center', vertical: 'middle' };
        sheet.getRow(r).height = 22;
        r++;
      }

      r++; // blank between exercises
    });
  } else {
    // No exercises
    sheet.mergeCells(r, 1, r, 6);
    cell(sheet, r, 1, '📌 درس نظري — راجع المحتوى في الموقع وطبّق الأمثلة بنفسك', {
      italic: true, fontColor: 'FF64748B', bg: 'FFF8FAFC',
    });
    r++;
  }

  // Back to index link
  r++;
  const backCell = sheet.getCell(r, 1);
  sheet.mergeCells(r, 1, r, 2);
  backCell.value = { text: '← العودة للفهرس', hyperlink: `#'📋 الفهرس'!A1` };
  backCell.font = { name: 'Calibri', size: 10, color: { argb: 'FF2563EB' }, underline: true };
  backCell.alignment = { horizontal: 'right', readingOrder: 'rightToLeft' };
}

function writeRaw(
  sheet: ExcelJS.Worksheet,
  row: number,
  col: number,
  value: string | number | null,
  options: Parameters<typeof cell>[4] = {},
) {
  if (typeof value === 'string' && value.startsWith("'")) {
    cell(sheet, row, col, value.slice(1), options);
    sheet.getCell(row, col).numFmt = '@';
    return;
  }
  cell(sheet, row, col, value, options);
}

function qualifyFormula(formula: string, sheetName: string): string {
  return formula.replace(
    /(\$?[A-Z]{1,3}\$?\d+(?::\$?[A-Z]{1,3}\$?\d+)?)/g,
    `${sheetName}!$1`,
  );
}

/** Case and capstone sheets keep row 1 as the header so A1 formulas match the app. */
function buildDatasetSheet(wb: ExcelJS.Workbook, lesson: Lesson) {
  const name = sheetName(lesson);
  const sheet = wb.addWorksheet(name, { views: [{ rightToLeft: true }] });
  const data = lesson.sheet;
  if (!data) return;
  const width = Math.max(data.headers.length, 6);
  sheet.columns = Array.from({ length: Math.max(width, 12) }, (_, index) => ({
    width: index === 0 ? 28 : 18,
  }));

  data.headers.forEach((header, index) => {
    cell(sheet, 1, index + 1, header, {
      bold: true, bg: HEADER_BG, fontColor: 'FFFFFFFF', align: 'center', border: true,
    });
  });
  sheet.getRow(1).height = 22;

  data.rows.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      const isNum = typeof value === 'number';
      writeRaw(sheet, rowIndex + 2, colIndex + 1, value, {
        align: isNum ? 'center' : 'right',
        fontColor: isNum ? 'FF059669' : 'FF1E293B',
        border: true,
      });
    });
    sheet.getRow(rowIndex + 2).height = 20;
  });

  let r = data.rows.length + 3;
  lesson.exercises.forEach((ex, idx) => {
    sheet.mergeCells(r, 1, r, 6);
    cell(sheet, r, 1, `س${idx + 1}: ${ex.question}`, {
      bold: true, bg: 'FFF0F9FF', fontColor: 'FF0C4A6E', wrap: true,
    });
    sheet.getRow(r).height = 32;
    r++;
    sheet.mergeCells(r, 1, r, 6);
    cell(sheet, r, 1, `💡 تلميح: ${ex.hint}`, {
      italic: true, bg: HINT_BG, fontColor: 'FF3730A3', wrap: true, fontSize: 10,
    });
    r++;
    cell(sheet, r, 1, ex.type === 'formula' ? 'اكتب الصيغة:' : 'إجابتك:', { bold: true, fontColor: 'FF475569' });
    const ans = sheet.getCell(r, 2);
    if (ex.type === 'formula') ans.value = '=';
    ans.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: ANSWER_BG } };
    ans.font = { name: 'Courier New', size: 11, color: { argb: 'FF92400E' } };
    ans.alignment = { horizontal: 'left', readingOrder: 'leftToRight' };
    ans.border = {
      top: { style: 'medium', color: { argb: 'FFF59E0B' } },
      left: { style: 'medium', color: { argb: 'FFF59E0B' } },
      bottom: { style: 'medium', color: { argb: 'FFF59E0B' } },
      right: { style: 'medium', color: { argb: 'FFF59E0B' } },
    };
    if (ex.solutionFormula) {
      cell(sheet, r, 12, ex.solutionFormula, {
        fontColor: 'FF92400E', align: 'left',
      });
      sheet.getCell(r, 12).alignment = { horizontal: 'left', readingOrder: 'leftToRight' };
    }
    sheet.getRow(r).height = 22;
    r += 2;
  });

  cell(sheet, 1, 12, 'حل المدرب', {
    bold: true, bg: 'FFFEF3C7', fontColor: 'FF92400E', align: 'center', border: true,
  });
}

function dataOnlySheet(wb: ExcelJS.Workbook, lesson: Lesson, name: string) {
  const sheet = wb.addWorksheet(name, { views: [{ rightToLeft: true }] });
  const data = lesson.sheet;
  if (!data) return sheet;
  data.headers.forEach((header, index) => {
    cell(sheet, 1, index + 1, header, {
      bold: true, bg: HEADER_BG, fontColor: 'FFFFFFFF', align: 'center', border: true,
    });
  });
  data.rows.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      writeRaw(sheet, rowIndex + 2, colIndex + 1, value, {
        border: true,
        align: typeof value === 'number' ? 'center' : 'right',
      });
    });
  });
  sheet.columns = data.headers.map(header => ({ width: Math.max(16, header.length + 4) }));
  return sheet;
}

async function writeResourceWorkbooks() {
  const publicDir = join(__dirname, '../public');
  for (const lesson of allLessons) {
    if (!lesson.resources?.length || !lesson.sheet) continue;
    for (const resource of lesson.resources) {
      const target = join(publicDir, resource.href);
      mkdirSync(dirname(target), { recursive: true });
      const wb = new ExcelJS.Workbook();
      wb.creator = 'Ta3laM';
      wb.title = lesson.title;
      const solution = resource.href.includes('capstones/');
      if (solution) {
        dataOnlySheet(wb, lesson, 'البيانات');
        const sol = wb.addWorksheet('الحل', { views: [{ rightToLeft: true }] });
        sol.columns = [{ width: 70 }, { width: 80 }];
        cell(sol, 1, 1, 'السؤال', { bold: true, bg: HEADER_BG, fontColor: 'FFFFFFFF' });
        cell(sol, 1, 2, 'الصيغة', { bold: true, bg: HEADER_BG, fontColor: 'FFFFFFFF' });
        let row = 2;
        for (const ex of lesson.exercises) {
          cell(sol, row, 1, ex.question, { wrap: true });
          sol.getRow(row).height = 32;
          if (ex.solutionFormula) {
            const formula = qualifyFormula(ex.solutionFormula, 'البيانات');
            const c = sol.getCell(row, 2);
            c.value = { formula: formula.slice(1), result: ex.expected ?? undefined };
            c.font = { name: 'Courier New', size: 11, color: { argb: 'FF92400E' } };
            c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: ANSWER_BG } };
          }
          row++;
        }
      } else {
        dataOnlySheet(wb, lesson, 'البيانات');
        const q = wb.addWorksheet('الأسئلة', { views: [{ rightToLeft: true }] });
        q.columns = [{ width: 18 }, { width: 80 }];
        let row = 1;
        lesson.exercises.forEach((ex, index) => {
          cell(q, row, 1, `س${index + 1}`, { bold: true, bg: 'FFF0F9FF', fontColor: 'FF0C4A6E' });
          cell(q, row, 2, ex.question, { wrap: true });
          q.getRow(row).height = 30;
          row++;
          cell(q, row, 1, 'تلميح', { italic: true, bg: HINT_BG, fontColor: 'FF3730A3' });
          cell(q, row, 2, ex.hint, { italic: true, wrap: true });
          row++;
          cell(q, row, 1, 'إجابتك', { bold: true });
          const ans = q.getCell(row, 2);
          ans.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: ANSWER_BG } };
          ans.border = {
            top: { style: 'medium', color: { argb: 'FFF59E0B' } },
            left: { style: 'medium', color: { argb: 'FFF59E0B' } },
            bottom: { style: 'medium', color: { argb: 'FFF59E0B' } },
            right: { style: 'medium', color: { argb: 'FFF59E0B' } },
          };
          row += 2;
        });
      }
      await wb.xlsx.writeFile(target);
    }
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'Ta3laM';
  wb.created = new Date();
  wb.title = 'إتقان تحليل البيانات بـ Excel — ملف التمارين';
  wb.subject = 'Excel Data Analysis Exercises';

  console.log('📋 Building index sheet...');
  buildIndexSheet(wb);

  console.log(`📄 Building ${allLessons.length} lesson sheets...`);
  for (const lesson of allLessons) {
    if (lesson.sheetLayout === 'dataset') buildDatasetSheet(wb, lesson);
    else buildLessonSheet(wb, lesson);
    process.stdout.write(`  ✓ ${lesson.id}. ${lesson.title}\n`);
  }

  const outputPath = join(__dirname, '../public/excel-exercises.xlsx');
  await wb.xlsx.writeFile(outputPath);
  console.log(`\n✅ Done! → public/excel-exercises.xlsx`);
  console.log(`   Sheets: ${allLessons.length + 1} (index + lessons)`);
  console.log('📁 Writing per-case workbooks...');
  await writeResourceWorkbooks();
  console.log('✅ Case and capstone files written');
}

main().catch(err => { console.error(err); process.exit(1); });

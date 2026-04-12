# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Excel Data Analysis Mastery** (إتقان تحليل البيانات بـ Excel) is an Arabic-only interactive Excel learning platform that runs entirely in the browser. Deployed as a single self-contained HTML file to GitHub Pages at https://ta3lam.github.io/excel.

## Commands

```bash
npm run dev       # Dev server at http://localhost:5173
npm run build     # Production build → dist/index.html (single file, all assets inlined)
npm run preview   # Preview production build locally
```

No test suite configured.

## Architecture

### Tech Stack
- **React 19 + TypeScript** (strict mode), **Vite 7**, **Tailwind CSS 4**
- **HyperFormula (gpl-v3)** — in-browser Excel formula evaluation engine
- **react-markdown + remark-gfm** — renders lesson content (markdown)
- **vite-plugin-singlefile** — bundles everything into one `dist/index.html`

### State & Data Flow

**`App.tsx`** owns all global state: current lesson ID, sidebar toggle. Progress persists to `localStorage` via `useProgress` hook.

`allLessons` array and `LEVEL_GROUPS` are imported from `src/data/lessons.ts` (aggregator).

### Lesson Types

Three types defined in `src/types/index.ts`:
- **`formula`** — shows `FormulaEditor` (HyperFormula-powered grid + formula bar). Requires `sheet` and optionally `example`.
- **`code`** — shows styled read-only code block (`CodeDisplay`). Requires `example` and `codeLang` (`dax` | `m` | `vba`).
- **`concept`** — markdown content only, no interactive editor.

### Exercise Types
- **`formula`** — learner types a formula, `checkFunction(result, formula)` validates it.
- **`mcq`** — multiple choice with `options[]` and `correctIndex`.

### Formula Evaluation

`evaluateFormula(formula, sheet)` in `FormulaEditor.tsx`:
- Builds a HyperFormula instance from `sheet.headers` + `sheet.rows`
- Places the user's formula at `row = allData.length` (after all data rows)
- Returns the computed result, then destroys the instance

### Lesson Data Structure

Files in `src/data/`:
- `lessons_zero.ts` — IDs 1–8 (تحت الصفر): أساسيات Excel، اختصارات لوحة المفاتيح، تنسيق الخلايا، Named Ranges
- `lessons_beginner.ts` — IDs 11–19 (الأساسيات): SUM/AVERAGE، MAX/MIN/ROUND، دوال النصوص، IF/AND/OR، دوال التاريخ، IFERROR، ABS/MOD/CEILING
- `lessons_lookup.ts` — IDs 21–27 (البحث والمرجع): VLOOKUP، INDEX/MATCH، XLOOKUP، SUMIF/COUNTIFS، OFFSET/INDIRECT، CHOOSE
- `lessons_advanced.ts` — IDs 31–37 (المتقدم): Pivot Tables، Charts، Data Validation، Dynamic Arrays، What-If Analysis، Array Formulas
- `lessons_powerquery.ts` — IDs 41–46 (Power Query): مقدمة PQ، التحويلات، لغة M، Append/Merge، Pivot/Unpivot، Group By
- `lessons_expert.ts` — IDs 51–58 (DAX والـ Data Model): Data Model، DAX، CALCULATE، Time Intelligence، RANKX، Measures vs Columns، ALL/ALLEXCEPT، VAR/RETURN
- `lessons_pro.ts` — IDs 61–66 (الاحتراف): VBA مقدمة، VBA أساسيات، الحلقات والأحداث، الشهادات، UserForms، UDFs
- `lessons.ts` — aggregator: exports `allLessons`, `LEVEL_GROUPS`, `LEVEL_COLORS`

**Total lessons: 50** (as of last update)

When adding new lessons, update both the lesson file AND the `lessonIds` array in the corresponding `LEVEL_GROUPS` entry in `lessons.ts`.

### ID Ranges per Level

| Level | IDs reserved |
|-------|-------------|
| تحت الصفر | 1–10 |
| الأساسيات | 11–20 |
| البحث والمرجع | 21–30 |
| المتقدم | 31–40 |
| Power Query | 41–50 |
| DAX والـ Data Model | 51–60 |
| الاحتراف | 61–70 |

### Sidebar Level Groups

`LEVEL_GROUPS` in `src/data/lessons.ts` maps lesson IDs to sidebar sections. When adding lessons, add their IDs to the correct group's `lessonIds` array.

`LEVEL_COLORS` maps color names to Tailwind class sets: `slate`, `emerald`, `blue`, `violet`, `orange`, `red`, `amber`.

### Deployment

GitHub Actions (`.github/workflows/deploy.yml`) auto-deploys on push to `main`: runs `npm ci && npm run build`, then deploys `dist/index.html` to GitHub Pages.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Excel Data Analysis Mastery** (إتقان تحليل البيانات بـ Excel) — Arabic-only interactive Excel learning platform. Runs entirely in the browser, deployed as a single self-contained HTML file to GitHub Pages at https://ta3lam.github.io/excel.

## Commands

```bash
npm run dev        # Dev server at http://localhost:5173
npm run build      # Production build → dist/index.html (all assets inlined)
npm run preview    # Preview production build locally
npm run workbook   # Regenerate public/excel-exercises.xlsx from lesson data
```

No test suite configured.

## Architecture

### Tech Stack
- **React 19 + TypeScript** (strict mode), **Vite 7**, **Tailwind CSS 4**
- **HyperFormula (gpl-v3)** — in-browser Excel formula evaluation
- **react-markdown + remark-gfm** — renders lesson markdown content
- **ExcelJS** (dev) — generates the downloadable exercise workbook via `scripts/create-workbook.ts`
- **vite-plugin-singlefile** — inlines all JS/CSS/assets into one `dist/index.html`

### State & Data Flow

**`App.tsx`** owns all global state: `currentLessonId`, `sidebarOpen`. Progress (completed lesson IDs) persists to `localStorage` via `useProgress` hook (`src/hooks/useProgress.ts`, key: `excel-mastery-progress-v1`).

`NavArrow` is defined outside `App` (module level) to prevent remounting on every render.

Split-pane layout: left = `LessonContent` (markdown), right = `LessonPane` (interactive). On mobile, the pane stacks below the content.

### Lesson Types

Three types in `src/types/index.ts`:
- **`formula`** — `FormulaEditor` with HyperFormula grid. Requires `sheet: SheetData` and optionally `example`.
- **`code`** — read-only `CodeDisplay` block. Requires `example` (string) and `codeLang: 'dax' | 'm' | 'vba'`.
- **`concept`** — markdown content only, no interactive panel (just a manual "complete" button).

### Exercise Types
- **`formula`** — user types a formula into `FormulaEditor`; `checkFunction(result: FormulaResult, formula: string) => boolean` validates it.
- **`mcq`** — multiple choice; requires `options: string[]` and `correctIndex: number`.

### Formula Evaluation (`FormulaEditor.tsx`)

`evaluateFormula(formula, sheet)`:
1. Builds HyperFormula from `[sheet.headers, ...sheet.rows]`
2. Places the user's formula at `row = allData.length` (one row below the data)
3. Returns computed result via `getCellValue`, then calls `hf.destroy()`

Row 1 in the grid = headers, Row 2+ = data rows, so `=SUM(B2:B4)` is always correct for 3-row data.

### Lesson Data

Files in `src/data/`:

| File | Level label | IDs | Count |
|------|------------|-----|-------|
| `lessons_zero.ts` | تحت الصفر | 1–10 | 8 |
| `lessons_beginner.ts` | الأساسيات | 11–20 | 9 |
| `lessons_lookup.ts` | البحث والمرجع | 21–30 | 7 |
| `lessons_advanced.ts` | المتقدم | 31–40 | 7 |
| `lessons_powerquery.ts` | Power Query | 41–50 | 6 |
| `lessons_expert.ts` | DAX والـ Data Model | 51–60 | 8 |
| `lessons_pro.ts` | الاحتراف | 61–70 | 6 |
| `lessons.ts` | aggregator | — | — |

**Total: 51 lessons.** `lessons.ts` exports `allLessons`, `LEVEL_GROUPS`, `LEVEL_COLORS`.

**When adding a lesson:** add to the lesson file AND add its ID to `lessonIds` in the matching `LEVEL_GROUPS` entry in `lessons.ts`. Keep IDs within the reserved range for each level.

### Exercise Workbook (`scripts/create-workbook.ts`)

Generates `public/excel-exercises.xlsx` using ExcelJS. Run with `npm run workbook` after any lesson changes. The file is committed to `public/` and served statically from GitHub Pages. The download button in `App.tsx` links to `excel-exercises.xlsx` (relative path, resolved by GitHub Pages).

Structure: one index sheet + one sheet per lesson. Yellow cells = answer cells for the learner. Sheet names are truncated to 31 chars (Excel limit).

### Deployment

GitHub Actions (`.github/workflows/deploy.yml`) auto-deploys on push to `main`: `npm ci && npm run build`, uploads `dist/` to GitHub Pages. The `public/` folder (including `excel-exercises.xlsx` and the logo) is copied into `dist/` by Vite automatically.

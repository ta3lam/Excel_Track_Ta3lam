import { allLessons, LEVEL_GROUPS } from '../src/data/lessons.js';
import { evaluateFormula, isFormulaError, sameResult } from '../src/utils/formulaEval.js';

const ids = allLessons.map(lesson => lesson.id);
const dupes = ids.filter((id, index) => ids.indexOf(id) !== index);
if (dupes.length) {
  console.error('Duplicate lesson ids:', [...new Set(dupes)].join(', '));
  process.exit(1);
}

const grouped = new Set(LEVEL_GROUPS.flatMap(group => group.lessonIds));
for (const lesson of allLessons) {
  if (!grouped.has(lesson.id)) {
    console.error('Lesson missing from a level group:', lesson.id);
    process.exit(1);
  }
}

let formula = 0;
let mcq = 0;
let failed = 0;
for (const lesson of allLessons) {
  for (const exercise of lesson.exercises) {
    if (exercise.type === 'mcq') mcq += 1;
    else formula += 1;
    if (!exercise.solutionFormula || !exercise.sheet) continue;
    const again = evaluateFormula(exercise.solutionFormula, exercise.sheet);
    if (isFormulaError(again) || !sameResult(again, exercise.expected)) {
      failed += 1;
      console.error(`FAIL ${lesson.id} ${exercise.id}: ${exercise.solutionFormula} => ${String(again)} expected ${String(exercise.expected)}`);
    }
  }
}

console.log(`Lessons: ${allLessons.length}`);
console.log(`Levels: ${LEVEL_GROUPS.length}`);
console.log(`Formula exercises: ${formula}`);
console.log(`MCQ exercises: ${mcq}`);
console.log(`Checked solutions re-run: ${failed === 0 ? 'ok' : failed + ' failed'}`);
if (failed) process.exit(1);

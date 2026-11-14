import { Exercise, Lesson, SheetData } from '../../types';
import { evaluateFormula, excelText, isFormulaError, sameResult } from '../../utils/formulaEval';
import { EG_REPS } from './names';
import { dmy } from './rows';

function checked(sheet: SheetData, tasks: Omit<Exercise, 'id' | 'type' | 'checkFunction' | 'expected' | 'sheet'>[], idBase: number): Exercise[] {
  return tasks.map((task, index) => {
    const formula = task.solutionFormula ?? '';
    const expected = evaluateFormula(formula, sheet);
    if (isFormulaError(expected) || expected == null) {
      throw new Error(`Capstone formula failed ${formula} => ${String(expected)}`);
    }
    return {
      ...task,
      id: idBase + index + 1,
      type: 'formula' as const,
      sheet,
      solutionFormula: formula,
      expected,
      checkFunction: (result: unknown) => sameResult(result, expected),
    };
  });
}

const salesSheet: SheetData = {
  headers: ['الفاتورة', 'المندوب', 'المدينة', 'المبلغ', 'التاريخ'],
  headersEn: ['Invoice', 'Rep', 'City', 'Amount', 'Date'],
  rows: [
    [450201, EG_REPS[0], 'القاهرة', 18500, dmy(3, 3)],
    [450202, EG_REPS[1], 'الجيزة', 14200, dmy(6, 3)],
    [450203, EG_REPS[0] + ' ', 'القاهرة', 9600, dmy(9, 3)],
    [450204, EG_REPS[2], 'الإسكندرية', 22000, dmy(12, 3)],
    [450205, EG_REPS[3], 'المنصورة', 8100, dmy(18, 3)],
    [450206, EG_REPS[0], 'الجيزة', 15400, dmy(21, 3)],
    [450207, EG_REPS[4], 'طنطا', 11800, dmy(25, 2)],
    [450208, EG_REPS[5], 'أسيوط', excelText(7300), dmy(2, 4)],
    [450209, EG_REPS[6], 'القاهرة', 17600, dmy(27, 3)],
    [450210, EG_REPS[1], 'القاهرة', 9900, dmy(14, 3)],
    [450201, EG_REPS[0], 'القاهرة', 18500, dmy(3, 3)],
  ],
};

const hrSheet: SheetData = {
  headers: ['الموظف', 'القسم', 'الساعات', 'أجر الساعة', 'الأساسي', 'البدلات', 'تأمين', 'ضريبة', 'تاريخ التعيين'],
  headersEn: ['Employee', 'Department', 'Hours', 'Hourly rate', 'Basic', 'Allowances', 'Insurance', 'Tax', 'Hire date'],
  rows: [
    [EG_REPS[0], 'التشغيل', 11, 40, 8000, 600, 880, 0, dmy(15, 6, 2018)],
    [EG_REPS[1], 'المبيعات', 8, 50, 10000, 1500, 1100, 200, dmy(1, 2, 2022)],
    [EG_REPS[2], 'التشغيل', 10, 42, 7500, 400, 825, 0, dmy(20, 9, 2019)],
    [EG_REPS[4], 'التشغيل', 7, 38, 7000, 300, 770, 0, dmy(3, 4, 2023)],
    [EG_REPS[6], 'المبيعات', 12, 48, 9500, 800, 1045, 150, dmy(11, 11, 2017)],
  ],
};

const callSheet: SheetData = {
  headers: ['التذكرة', 'الطابور', 'الانتظار', 'زمن التعامل', 'حل من أول مرة', 'التقييم'],
  headersEn: ['Ticket', 'Queue', 'Wait seconds', 'Handle seconds', 'First contact', 'CSAT'],
  rows: [
    ['T-1', 'الدعم', 12, 180, 'نعم', 5],
    ['T-2', 'الدعم', 28, 240, 'لا', 3],
    ['T-3', 'المبيعات', 8, 150, 'نعم', 4],
    ['T-4', 'الدعم', 15, 200, 'نعم', 4],
    ['T-5', 'الدعم', 40, 310, 'لا', 2],
    ['T-6', 'المبيعات', 18, 160, 'نعم', 5],
    ['T-7', 'الدعم', 9, 175, 'نعم', 5],
    ['T-8', 'الدعم', 22, 260, 'نعم', 3],
    ['T-9', 'المبيعات', 35, 190, 'لا', 2],
    ['T-10', 'الدعم', 11, 210, 'نعم', 4],
  ],
};

const churnSheet: SheetData = {
  headers: ['العميل', 'الكود', 'الحالة', 'السبب', 'الإيراد الشهري', '', 'الباقة', 'الكود'],
  headersEn: ['Customer', 'Code', 'Status', 'Reason', 'Monthly revenue', '', 'Plan', 'Code'],
  rows: [
    ['C-1', 'P-2', 'متسرب', 'طوعي', 180, null, 'أساسي', 'P-1'],
    ['C-2', 'P-1', 'نشط', 'طوعي', 90, null, 'لامحدود', 'P-2'],
    ['C-3', 'P-2', 'متسرب', 'عدم سداد', 210, null, 'عائلي', 'P-3'],
    ['C-4', 'P-3', 'نشط', 'طوعي', 140, null, null, null],
    ['C-5', 'P-2', 'متسرب', 'طوعي', 160, null, null, null],
    ['C-6', 'P-1', 'نشط', 'عدم سداد', 95, null, null, null],
    ['C-7', 'P-2', 'نشط', 'طوعي', 175, null, null, null],
    ['C-8', 'P-3', 'متسرب', 'طوعي', 130, null, null, null],
    ['C-9', 'P-1', 'متسرب', 'طوعي', 100, null, null, null],
    ['C-10', 'P-2', 'متسرب', 'عدم سداد', 240, null, null, null],
  ],
};

const salesSteps = `## مين طالب المشروع؟

**مديرة المبيعات** في شركة نُور للتجارة عايزة لوحة شهر مارس قبل اجتماع الإثنين: الإيراد من غير فاتورة مكررة، مبيعات القاهرة، وعمولة أحمد محمود. الملفات جاية من ثلاث فروع وفيها لخبطة متعمدة.

العملة: **EGP**. البيانات خيالية ومثبتة بالبذرة \`201\`.

## التسليمات

1. جمّع ملفات الفروع. في Power Query الخطوة اسمها Append Queries، مش Merge. Merge بتربط جداول بعمود مشترك.
2. ظبّط الأنواع: التاريخ نص يوم/شهر/سنة، وفيه مبلغ متخزن كنص في أبريل، وفيه مسافة في آخر اسم مندوب.
3. شيل تكرار الفاتورة 450201. في Power Query: Remove Duplicates على عمود الفاتورة. في الشيت الصيغة تحت بتعمل نفس القرار.
4. اعمل Pivot: الصفوف المدينة، والقيم مجموع المبلغ، و Slicer على المندوب.
5. Pivot Chart عمودي للمدن، وعنوان بالعربي، والأرقام من غير خانات زيادة.
6. راجع الأرقام بالصيغ قبل ما تبعت اللوحة. اللوحة اللي أرقامها مش متراجعة بتتفتح في الاجتماع.

## الصيغ المطلوبة

العمولة سياسة تدريب: 3% تحت 30,000، و 5% من 30,000، و 8% من 50,000.`;

const salesStepsEn = `## Who asked for this?

**The sales director** at Noor Trading wants a March board pack before Monday’s meeting: revenue without a duplicated invoice, Cairo sales, and Ahmed Mahmoud’s commission. The files come from three branches and the mess is intentional.

Currency: **EGP**. The data is fictional and frozen with seed \`201\`.

## Deliverables

1. Stack the branch files. In Power Query the step is Append Queries, not Merge. Merge joins tables on a key.
2. Fix types: dates are day/month/year text, one April amount is stored as text, and one rep name has a trailing space.
3. Drop the duplicate of invoice 450201. In Power Query use Remove Duplicates on the invoice column. The formula below makes the same decision on this sheet.
4. Build a Pivot: cities on rows, sum of amount on values, and a slicer on the rep.
5. Add a column Pivot Chart, an Arabic title, and no extra decimals.
6. Reconcile the numbers with formulas before you send the pack. An unreconciled dashboard gets opened in the meeting.

## Required formulas

Commission is a training policy: 3% under 30,000, 5% from 30,000, and 8% from 50,000.`;

export const capstoneLessons: Lesson[] = [
  {
    id: 201,
    title: 'مشروع: لوحة مبيعات مارس',
    titleEn: 'Capstone: March sales pack',
    description: 'مديرة المبيعات عايزة لوحة مارس من ملف متسخ: تكرار، مبلغ كنص، ومسافة في اسم المندوب.',
    descriptionEn: 'The sales director wants a March pack from a messy file: a duplicate, a text amount, and a trailing space on a rep name.',
    type: 'formula',
    sheet: salesSheet,
    sheetLayout: 'dataset',
    tags: [
      { label: 'مشروع ختامي', labelEn: 'Capstone' },
      { label: 'المبيعات', labelEn: 'Sales' },
    ],
    resources: [
      { href: 'cases/c201.xlsx', label: 'حمّل ملف التدريب', labelEn: 'Download the practice file' },
      { href: 'capstones/sales-dashboard-solution.xlsx', label: 'حمّل ملف الحل', labelEn: 'Download the solution file' },
    ],
    content: `${salesSteps}

> في Microsoft 365 تقدر ترتّب فواتير القاهرة بـ \`SORT\` و \`FILTER\`. التحقق هنا على الأرقام اللي هتتقال في الاجتماع.`,
    contentEn: `${salesStepsEn}

> In Microsoft 365 you can rank Cairo invoices with \`SORT\` and \`FILTER\`. The check here is the numbers that will be said in the meeting.`,
    exercises: [
      ...checked(salesSheet, [
        {
          question: 'كام إجمالي مبيعات مارس بالجنيه قبل حذف الفاتورة المكررة؟ صف أبريل اللي مبلغه نص مش داخل مارس.',
          questionEn: 'What are March sales in EGP before removing the duplicate invoice? The April row whose amount is text is outside March.',
          hint: 'SUM على FILTER بعد MONTH و DATEVALUE',
          hintEn: 'SUM of FILTER after MONTH and DATEVALUE',
          solutionFormula: '=SUM(FILTER(D2:D12,MONTH(DATEVALUE(E2:E12))=3))',
        },
        {
          question: 'الفاتورة 450201 متكررة. كام صافي كل الفترات من غير التكرار ومن غير المبلغ النص في الصف 9؟',
          questionEn: 'Invoice 450201 is duplicated. What is the all-period net without the duplicate and without the text amount on row 9?',
          hint: 'SUMIFS تستبعد رقم الفاتورة، و MAXIFS ترجّع نسخة واحدة. SUMIFS بتتجاهل النص.',
          hintEn: 'SUMIFS excludes the invoice number and MAXIFS adds one copy back. SUMIFS ignores the text amount.',
          solutionFormula: '=SUMIFS(D2:D12,A2:A12,"<>450201")+MAXIFS(D2:D12,A2:A12,450201)',
        },
        {
          question: 'كام إجمالي أحمد محمود بالجنيه بما فيه الصف اللي اسمه آخره مسافة؟',
          questionEn: 'What is Ahmed Mahmoud’s total in EGP, including the row whose name ends with a space?',
          hint: 'SUMIF وحرف البدل *',
          hintEn: 'SUMIF with a * wildcard',
          solutionFormula: '=SUMIF(B2:B12,"أحمد محمود*",D2:D12)',
        },
        {
          question: 'كام عمولته؟ 3% تحت 30,000، و 5% من 30,000، و 8% من 50,000. قرّب لرقمين. احسب الإجمالي بحرف البدل.',
          questionEn: 'What is his commission? 3% under 30,000, 5% from 30,000, and 8% from 50,000. Round to 2 decimals. Total him with the wildcard.',
          hint: 'IF متداخلة حوالين SUMIF بحرف البدل',
          hintEn: 'A nested IF around a wildcard SUMIF',
          solutionFormula: '=ROUND(IF(SUMIF(B2:B12,"أحمد محمود*",D2:D12)>=50000,SUMIF(B2:B12,"أحمد محمود*",D2:D12)*0.08,IF(SUMIF(B2:B12,"أحمد محمود*",D2:D12)>=30000,SUMIF(B2:B12,"أحمد محمود*",D2:D12)*0.05,SUMIF(B2:B12,"أحمد محمود*",D2:D12)*0.03)),2)',
        },
      ], 2010),
      {
        id: 2019,
        type: 'mcq',
        question: 'ملفات الفروع الثلاثة منفصلة. أنهي خطوة في Power Query تجمع الصفوف في جدول واحد قبل الـ Pivot؟',
        questionEn: 'The three branch files are separate. Which Power Query step stacks the rows into one table before the Pivot?',
        hint: 'الخطوة اللي بتلصق الصفوف تحت بعض',
        hintEn: 'The step that stacks rows',
        options: ['Merge Queries', 'Append Queries', 'Unpivot Columns', 'Group By'],
        optionsEn: ['Merge Queries', 'Append Queries', 'Unpivot Columns', 'Group By'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 202,
    title: 'مشروع: مسير رواتب وحضور',
    titleEn: 'Capstone: payroll and attendance',
    description: 'مدير الرواتب عايز أوفر تايم أحمد، صافيه، أيام فترة المرتب، وقرار مكافأة الخمس سنين.',
    descriptionEn: 'The payroll manager needs Ahmed’s overtime, his net pay, the period’s working days, and the five-year award decision.',
    type: 'formula',
    sheet: hrSheet,
    sheetLayout: 'dataset',
    tags: [
      { label: 'مشروع ختامي', labelEn: 'Capstone' },
      { label: 'الموارد البشرية', labelEn: 'HR' },
    ],
    resources: [
      { href: 'cases/c202.xlsx', label: 'حمّل ملف التدريب', labelEn: 'Download the practice file' },
      { href: 'capstones/hr-payroll-solution.xlsx', label: 'حمّل ملف الحل', labelEn: 'Download the solution file' },
    ],
    content: `## مين طالب المشروع؟

**مدير الرواتب** في شركة رواق للموارد البشرية هيقفل مسير مارس. عايز ملف واحد فيه الأوفر تايم، الصافي، أيام العمل، واستحقاق مكافأة الخمس سنين.

العملة: **EGP**. التأمين والضريبة مبالغ تدريب جاهزة في الأعمدة، مش نسب قانونية. ساعة ونص بعد 8 ساعات سياسة تدريب.

## التسليمات

1. عمود أوفر تايم: لو الساعات أكبر من 8، (الساعات − 8) × الأجر × 1.5، وغير كده صفر.
2. عمود الصافي: الأساسي + البدلات + الأوفر تايم − التأمين − الضريبة.
3. أيام العمل بين 2 مارس و 15 مارس 2024. التاريخ في الملف نص.
4. مكافأة لمن أكمل 5 سنين في 31/12/2024.
5. احمِ ورقة المدخلات بكلمة مرور تدريب، وسيب خلايا الإدخال مفتوحة. حماية الورقة مش تشفير الملف.
6. راجع صف أحمد محمود بالصيغ تحت قبل التحويل للبنك.

> \`NETWORKDAYS\` في المحرك بتستبعد السبت والأحد. لو الويك إند عندكم جمعة وسبت، ظبّط أسبوع العمل في Excel على الملف الحقيقي.`,
    contentEn: `## Who asked for this?

**The payroll manager** at Rewaq HR is closing the March run. He wants one file with overtime, net pay, working days, and the five-year award.

Currency: **EGP**. Insurance and tax are ready-made training amounts, not statutory rates. Time-and-a-half after 8 hours is a training policy.

## Deliverables

1. An overtime column: if hours are above 8, (hours − 8) × rate × 1.5, otherwise zero.
2. A net column: basic + allowances + overtime − insurance − tax.
3. Working days from 2 March to 15 March 2024. Dates in the file are text.
4. An award for anyone who completed 5 years on 31/12/2024.
5. Protect the input sheet with a training password and leave the input cells unlocked. Sheet protection is not file encryption.
6. Reconcile Ahmed Mahmoud’s row with the formulas below before the bank file goes out.

> \`NETWORKDAYS\` in this engine excludes Saturday and Sunday. If your weekend is Friday–Saturday, set the work week in Excel on a real file.`,
    exercises: [
      ...checked(hrSheet, [
        {
          question: 'كام أوفر تايم أحمد محمود بالجنيه؟ قرّب لرقمين.',
          questionEn: 'What is Ahmed Mahmoud’s overtime in EGP? Round to 2 decimals.',
          hint: 'IF على الساعات في الصف 2',
          hintEn: 'IF on the hours in row 2',
          solutionFormula: '=IF(C2>8,ROUND((C2-8)*D2*1.5,2),0)',
        },
        {
          question: 'كام صافيه بالجنيه بعد إضافة الأوفر تايم وخصم التأمين والضريبة؟ قرّب لرقمين.',
          questionEn: 'What is his net in EGP after adding overtime and deducting insurance and tax? Round to 2 decimals.',
          hint: 'الأساسي + البدلات + أوفر تايم الصف − التأمين − الضريبة',
          hintEn: 'Basic + allowances + this row’s overtime − insurance − tax',
          solutionFormula: '=ROUND(E2+F2+IF(C2>8,(C2-8)*D2*1.5,0)-G2-H2,2)',
        },
        {
          question: 'كام يوم عمل بين 02/03/2024 و 15/03/2024؟',
          questionEn: 'How many working days fall between 02/03/2024 and 15/03/2024?',
          hint: 'NETWORKDAYS و DATEVALUE',
          hintEn: 'NETWORKDAYS and DATEVALUE',
          solutionFormula: '=NETWORKDAYS(DATEVALUE("02/03/2024"),DATEVALUE("15/03/2024"))',
        },
        {
          question: 'أحمد محمود يستحق مكافأة الخمس سنين في 31/12/2024؟ اكتب "مكافأة" أو "لا".',
          questionEn: 'Does Ahmed Mahmoud qualify for the five-year award on 31/12/2024? Return "مكافأة" or "لا".',
          hint: 'IF و DATEDIF على تاريخ التعيين',
          hintEn: 'IF and DATEDIF on the hire date',
          solutionFormula: '=IF(DATEDIF(DATEVALUE(I2),DATE(2024,12,31),"Y")>=5,"مكافأة","لا")',
        },
      ], 2020),
      {
        id: 2029,
        type: 'mcq',
        question: 'عايز الموظفين يعدّلوا خانات الساعات بس، ومش يمسحوا رؤوس الأعمدة. أنهي أمر يعمل كده؟',
        questionEn: 'You want people to edit the hours cells only, and not delete the headers. Which command does that?',
        hint: 'من تبويب Review، بعد ما تفتح الخلايا المسموحة',
        hintEn: 'On the Review tab, after unlocking the cells people may edit',
        options: [
          'Protect Sheet بعد فتح قفل خلايا الإدخال',
          'Encrypt with Password من معلومات الملف',
          'Hide Sheet',
          'Protect Workbook Structure من غير فتح خلايا',
        ],
        optionsEn: [
          'Protect Sheet after unlocking the input cells',
          'Encrypt with Password from the file info screen',
          'Hide Sheet',
          'Protect Workbook structure without unlocking cells',
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    id: 203,
    title: 'مشروع: تقرير مؤشرات مركز الاتصال',
    titleEn: 'Capstone: call-center KPI report',
    description: 'مشرف المركز عايز SLA و AHT و FCR و CSAT لطابور الدعم قبل اجتماع الجودة.',
    descriptionEn: 'The center supervisor needs SLA, AHT, FCR, and support-queue CSAT before the quality meeting.',
    type: 'formula',
    sheet: callSheet,
    sheetLayout: 'dataset',
    tags: [
      { label: 'مشروع ختامي', labelEn: 'Capstone' },
      { label: 'خدمة العملاء', labelEn: 'Customer service' },
    ],
    resources: [
      { href: 'cases/c203.xlsx', label: 'حمّل ملف التدريب', labelEn: 'Download the practice file' },
      { href: 'capstones/call-center-solution.xlsx', label: 'حمّل ملف الحل', labelEn: 'Download the solution file' },
    ],
    content: `## مين طالب المشروع؟

**مشرف مركز الاتصال** في شركة نبض للاتصالات خارج من وردية، واجتماع الجودة بعد ساعة. عايز أربع أرقام على شريحة واحدة.

التعريفات دي للتدريب داخل الحالة:

- **SLA**: نسبة المكالمات اللي انتظارها 20 ثانية أو أقل.
- **AHT**: متوسط زمن التعامل بالثواني.
- **FCR**: نسبة التذاكر اللي حلها "نعم" من أول مرة.
- **CSAT**: متوسط التقييم من 1 إلى 5 لطابور الدعم بس.

## التسليمات

1. أربع خانات في أعلى الشيت للنسب الأربعة.
2. Pivot بعدد التذاكر على الطابور، و Pivot Chart.
3. Sparkline لاتجاه الانتظار لو هتعرض الشيت يومياً. الـ Sparkline بيترسم جوه خلية من Insert ثم Sparklines.
4. سطر يوضّح إن التارجت داخلي ومش معيار هيئة تنظيم.
5. راجع كل رقم بصيغة قبل الاجتماع. متوسط الدعم مش متوسط المركز كله.

> \`AVERAGEIFS\` هي الصيغة المختصرة لمتوسط الدعم في Excel. المحرك هنا مش بيقيمها، فاستخدم SUMIF مقسومة على COUNTIF.`,
    contentEn: `## Who asked for this?

**The call-center supervisor** at Nabd Telecom is coming off a shift, and the quality meeting is in an hour. He needs four numbers on one slide.

These definitions are for training inside the case:

- **SLA**: share of calls that waited 20 seconds or less.
- **AHT**: average handle time in seconds.
- **FCR**: share of tickets marked “نعم” on first contact.
- **CSAT**: average score from 1 to 5 for the support queue only.

## Deliverables

1. Four cells at the top of the sheet for the four rates.
2. A Pivot of ticket count by queue, plus a Pivot Chart.
3. A sparkline for the wait trend if this sheet will be refreshed daily. Sparklines sit inside a cell: Insert, then Sparklines.
4. A line that says the target is internal, not a regulator’s standard.
5. Reconcile every number with a formula before the meeting. The support average is not the center-wide average.

> \`AVERAGEIFS\` is the short Excel formula for the support average. This engine does not evaluate it, so use SUMIF divided by COUNTIF.`,
    exercises: [
      ...checked(callSheet, [
        {
          question: 'كام نسبة SLA كنسبة مئوية مقربة لرقمين؟ 80 تعني 80%.',
          questionEn: 'What is the SLA rate as a percent rounded to 2 decimals? 80 means 80%.',
          hint: 'COUNTIF للانتظار حتى 20 قسمة عدد التذاكر × 100',
          hintEn: 'COUNTIF of waits up to 20, divided by tickets, times 100',
          solutionFormula: '=ROUND(COUNTIF(C2:C11,"<=20")/COUNTA(C2:C11)*100,2)',
        },
        {
          question: 'كام AHT بالثواني؟ قرّب لرقم عشري واحد.',
          questionEn: 'What is AHT in seconds? Round to 1 decimal.',
          hint: 'AVERAGE لزمن التعامل',
          hintEn: 'AVERAGE of handle time',
          solutionFormula: '=ROUND(AVERAGE(D2:D11),1)',
        },
        {
          question: 'كام نسبة FCR كنسبة مئوية مقربة لرقمين؟',
          questionEn: 'What is the FCR rate as a percent rounded to 2 decimals?',
          hint: 'COUNTIF لحالة نعم',
          hintEn: 'COUNTIF of نعم',
          solutionFormula: '=ROUND(COUNTIF(E2:E11,"نعم")/COUNTA(E2:E11)*100,2)',
        },
        {
          question: 'كام متوسط CSAT لطابور الدعم؟ قرّب لرقمين.',
          questionEn: 'What is the support queue’s average CSAT? Round to 2 decimals.',
          hint: 'SUMIF قسمة COUNTIF',
          hintEn: 'SUMIF divided by COUNTIF',
          solutionFormula: '=ROUND(SUMIF(B2:B11,"الدعم",F2:F11)/COUNTIF(B2:B11,"الدعم"),2)',
        },
      ], 2030),
      {
        id: 2039,
        type: 'mcq',
        question: 'عايز خط صغير جوه خلية يورّي اتجاه الانتظار آخر 10 مكالمات من غير رسم كبير. اسم الأداة إيه؟',
        questionEn: 'You want a tiny line inside a cell that shows the wait trend of the last 10 calls, not a large chart. What is the tool called?',
        hint: 'من تبويب Insert، وبيترسم جوه الخلية',
        hintEn: 'On the Insert tab, and it draws inside the cell',
        options: ['Pivot Chart', 'Sparkline', 'Slicer', 'Timeline'],
        optionsEn: ['Pivot Chart', 'Sparkline', 'Slicer', 'Timeline'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 204,
    title: 'مشروع: تقرير تسرب باقة لامحدود',
    titleEn: 'Capstone: unlimited-plan churn report',
    description: 'مدير الاحتفاظ عايز نسبة التسرب، الإيراد المعرّض، والتسرب الطوعي من باقة لامحدود.',
    descriptionEn: 'The retention manager needs the churn rate, revenue at risk, and voluntary churn on the unlimited plan.',
    type: 'formula',
    sheet: churnSheet,
    sheetLayout: 'dataset',
    tags: [
      { label: 'مشروع ختامي', labelEn: 'Capstone' },
      { label: 'الاتصالات', labelEn: 'Telecom' },
    ],
    resources: [
      { href: 'cases/c204.xlsx', label: 'حمّل ملف التدريب', labelEn: 'Download the practice file' },
      { href: 'capstones/telecom-churn-solution.xlsx', label: 'حمّل ملف الحل', labelEn: 'Download the solution file' },
    ],
    content: `## مين طالب المشروع؟

**مدير الاحتفاظ** في شركة نبض للاتصالات هيراجع باقة لامحدود قبل تسعير التجديد. الفواتير فيها كود الباقة، والاسم في جدول جانبي. عايز ثلاثة أرقام: نسبة التسرب على القاعدة كلها، إيراد المتسربين من الباقة، وعدد الطوعي منهم.

العملة: **SAR**. الأسماء والأكواد خيالية. متلصقش أرقام عملاء حقيقيين في أداة ذكاء اصطناعي عامة؛ لو هتطلب صياغة تعليق، استخدم الأعمدة والكود من غير أسماء.

## التسليمات

1. خانة لنسبة التسرب على كل العملاء.
2. خانة لإيراد باقة لامحدود المتسرب، عن طريق الكود مش الاسم.
3. خانة لعدد الطوعي على نفس الباقة.
4. عمود مخطط أو Pivot بسبب التسرب.
5. سطر في التقرير يقول إن عرض الإنقاذ بيتقدم للطوعي، والفصل لعدم السداد مسار تاني.
6. راجع الصيغ قبل الاجتماع. الكود الغلط بيحرّك سعر الباقة الغلط.`,
    contentEn: `## Who asked for this?

**The retention manager** at Nabd Telecom is reviewing the unlimited plan before renewal pricing. Bills carry a plan code, and the name sits on a side table. He needs three numbers: churn on the whole base, revenue of people who left that plan, and how many of those exits were voluntary.

Currency: **SAR**. Names and codes are fictional. Do not paste real customer numbers into a consumer AI tool; if you ask a model to draft the commentary, send the columns and the code without names.

## Deliverables

1. A cell for the churn rate on all customers.
2. A cell for churned unlimited-plan revenue, looked up by code rather than by name.
3. A cell for voluntary exits on that same plan.
4. A column chart or a Pivot by churn reason.
5. A line on the report that says the save offer is for voluntary exits, and non-payment disconnection is a different path.
6. Reconcile the formulas before the meeting. The wrong code moves the price of the wrong plan.`,
    exercises: [
      ...checked(churnSheet, [
        {
          question: 'نسبة التسرب على كل العملاء كام ككسر عشري مقرب لـ 4 خانات؟',
          questionEn: 'What is the churn rate on all customers, as a decimal rounded to 4 places?',
          hint: 'COUNTIF للمتسربين قسمة عدد العملاء',
          hintEn: 'COUNTIF of churned customers divided by the customer count',
          solutionFormula: '=ROUND(COUNTIF(C2:C11,"متسرب")/COUNTA(C2:C11),4)',
        },
        {
          question: 'كام الإيراد الشهري للعملاء المتسربين من باقة لامحدود؟ هات الكود من الجدول الجانبي.',
          questionEn: 'What is the monthly revenue of customers who churned off the unlimited plan? Get the code from the side table.',
          hint: 'XLOOKUP ثم SUMIFS',
          hintEn: 'XLOOKUP then SUMIFS',
          solutionFormula: '=SUMIFS(E2:E11,C2:C11,"متسرب",B2:B11,XLOOKUP("لامحدود",G2:G4,H2:H4))',
        },
        {
          question: 'كام عميل متسرب طوعي من نفس الباقة؟',
          questionEn: 'How many voluntary churners left that same plan?',
          hint: 'COUNTIFS للحالة والسبب والكود اللي رجعه XLOOKUP',
          hintEn: 'COUNTIFS on status, reason, and the code XLOOKUP returns',
          solutionFormula: '=COUNTIFS(C2:C11,"متسرب",D2:D11,"طوعي",B2:B11,XLOOKUP("لامحدود",G2:G4,H2:H4))',
        },
      ], 2040),
      {
        id: 2049,
        type: 'mcq',
        question: 'هتطلب من أداة ذكاء اصطناعي صياغة تعليق على التقرير. أنهي نسخة من البيانات تتبعت؟',
        questionEn: 'You will ask an AI tool to draft the commentary. Which version of the data should you send?',
        hint: 'التعليق محتاج الأعمدة والنتيجة، مش هوية العميل',
        hintEn: 'The commentary needs the columns and the result, not the customer’s identity',
        options: [
          'ملف العملاء الكامل بالاسم ورقم الخط',
          'الأعمدة المجمّعة والكود والنتيجة من غير أسماء أو أرقام خطوط',
          'صورة من نظام الفوترة الحقيقي',
          'قائمة المتسربين مع عناوينهم',
        ],
        optionsEn: [
          'The full customer file with names and line numbers',
          'The aggregated columns, the code, and the result, without names or line numbers',
          'A screenshot of the real billing system',
          'The churn list with home addresses',
        ],
        correctIndex: 1,
      },
    ],
  },
];

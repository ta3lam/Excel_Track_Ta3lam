import { Lesson } from '../types';
import { fx } from './fxLesson';

const avgSheet = {
  headers: ['القسم', 'المدينة', 'المبلغ'],
  headersEn: ['Department', 'City', 'Amount'],
  rows: [
    ['مبيعات', 'القاهرة', 18000],
    ['مبيعات', 'الجيزة', 9000],
    ['مبيعات', 'القاهرة', 22000],
    ['تسويق', 'القاهرة', 7000],
    ['مبيعات', 'الإسكندرية', 11000],
    ['مبيعات', 'القاهرة', 14000],
  ],
};

const hSheet = {
  headers: ['البند', 'يناير', 'فبراير', 'مارس'],
  headersEn: ['Item', 'January', 'February', 'March'],
  rows: [['المبيعات', 120000, 98000, 143000]],
};

const xmatchSheet = {
  headers: ['الكود', 'الصنف'],
  headersEn: ['Code', 'Item'],
  rows: [
    ['P-11', 'أرز'],
    ['P-14', 'زيت'],
    ['P-18', 'سكر'],
    ['P-21', 'شاي'],
  ],
};

const letSheet = {
  headers: ['المندوب', 'المبيعات'],
  headersEn: ['Rep', 'Sales'],
  rows: [
    ['فهد العتيبي', 86000],
    ['نورة القحطاني', 24000],
    ['ريم الشمري', 47000],
  ],
};

const textSheet = {
  headers: ['الكود المركب'],
  headersEn: ['Compound code'],
  rows: [['فرع-القاهرة'], ['CAT-03|أجهزة']],
};

const randSheet = {
  headers: ['العينة'],
  headersEn: ['Sample'],
  rows: [[120], [340], [210], [480], [150], [390], [260], [410]],
};

const stackSheet = {
  headers: ['المدينة', 'مارس', '', 'المدينة', 'أبريل'],
  headersEn: ['City', 'March', '', 'City', 'April'],
  rows: [
    ['القاهرة', 40000, null, 'القاهرة', 42000],
    ['جدة', 31000, null, 'جدة', 28000],
    ['الدمام', 19000, null, 'الدمام', 21000],
  ],
};

const wideSheet = {
  headers: ['الفاتورة', 'المندوب', 'المدينة', 'المبلغ'],
  headersEn: ['Invoice', 'Rep', 'City', 'Amount'],
  rows: [
    [501, 'أحمد محمود', 'القاهرة', 12000],
    [502, 'منى عبد الرحمن', 'الجيزة', 18000],
    [503, 'يوسف حسن', 'القاهرة', 9000],
  ],
};

const marginSheet = {
  headers: ['الصنف', 'المبيعات', 'التكلفة'],
  headersEn: ['Item', 'Sales', 'Cost'],
  rows: [
    ['أجهزة', 80000, 52000],
    ['خطوط', 45000, 30000],
    ['إكسسوار', 15000, 9000],
  ],
};

const citySheet = {
  headers: ['المدينة', 'المبلغ'],
  headersEn: ['City', 'Amount'],
  rows: [
    ['القاهرة', 42000],
    ['جدة', 31000],
    ['القاهرة', 18000],
    ['الدمام', 22000],
  ],
};

const monthSheet = {
  headers: ['التاريخ', 'المبلغ', 'الشهر'],
  headersEn: ['Date', 'Amount', 'Month'],
  rows: [
    ['02/03/2024', 10000, 3],
    ['15/03/2024', 14000, 3],
    ['02/04/2024', 8000, 4],
    ['20/03/2024', 9000, 3],
  ],
};

const sparkSheet = {
  headers: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
  headersEn: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  rows: [[80, 95, 90, 110, 105, 130]],
};

const waterSheet = {
  headers: ['البند', 'الموازنة', 'الفعلي'],
  headersEn: ['Line', 'Budget', 'Actual'],
  rows: [
    ['المبيعات', 100000, 112000],
    ['التشغيل', 40000, 37000],
  ],
};

const protectSheet = {
  headers: ['الموظف', 'الساعات', 'الأجر'],
  headersEn: ['Employee', 'Hours', 'Rate'],
  rows: [['أحمد محمود', 11, 40]],
};

const sumxSheet = {
  headers: ['الصنف', 'الكمية', 'السعر'],
  headersEn: ['Item', 'Qty', 'Price'],
  rows: [
    ['أرز', 40, 25],
    ['زيت', 15, 60],
    ['شاي', 30, 18],
  ],
};

const relatedSheet = {
  headers: ['الطلب', 'كود العميل', 'المبلغ', '', 'كود العميل', 'المدينة'],
  headersEn: ['Order', 'Customer code', 'Amount', '', 'Customer code', 'City'],
  rows: [
    [1, 'C-1', 5000, null, 'C-1', 'القاهرة'],
    [2, 'C-2', 7000, null, 'C-2', 'جدة'],
    [3, 'C-1', 3000, null, 'C-3', 'الدمام'],
    [4, 'C-3', 4500, null, null, null],
  ],
};

const shipSheet = {
  headers: ['الطلب', 'المبلغ', 'شهر الطلب', 'شهر الشحن'],
  headersEn: ['Order', 'Amount', 'Order month', 'Ship month'],
  rows: [
    [1, 8000, 2, 3],
    [2, 6000, 3, 3],
    [3, 9000, 3, 4],
    [4, 4000, 1, 3],
  ],
};

export const gapLessons: Lesson[] = [
  {
    id: 28,
    title: 'AVERAGEIFS — متوسط بشروط',
    titleEn: 'AVERAGEIFS — average with conditions',
    description: 'مدير المبيعات عايز متوسط فاتورة فريق القاهرة، مش مجموعها.',
    descriptionEn: 'The sales manager wants the average Cairo invoice, not the sum.',
    type: 'formula',
    sheet: avgSheet,
    content: `## السؤال التجاري

مدير المبيعات في **نُور للتجارة** عايز متوسط فواتير قسم المبيعات في القاهرة. المجموع بيخبي إن فيه فاتورة كبيرة فاتورة صغيرة.

## AVERAGEIFS

الدالة موجودة من Excel 2007، وفي Microsoft 365 كمان.

\`\`\`excel
=AVERAGEIFS(C2:C7,A2:A7,"مبيعات",B2:B7,"القاهرة")
\`\`\`

الترتيب مختلف عن SUMIFS في حاجة واحدة بس: **عمود المتوسط هو أول حجة**، وبعدين الشرط.

## المحرك هنا

المحرر مبني على HyperFormula، والنسخة دي مش بتقيّم \`AVERAGEIFS\`. نفس الرقم يطلع من SUMIFS مقسومة على COUNTIFS. في Excel على جهازك اكتب AVERAGEIFS، وهنا اكتب المعادلة المكافئة عشان التحقق يعدّي.`,
    contentEn: `## The business question

The sales manager at **Noor Trading** wants the average sales invoice in Cairo. The total hides a mix of large and small invoices.

## AVERAGEIFS

The function has been in Excel since Excel 2007, and it is in Microsoft 365.

\`\`\`excel
=AVERAGEIFS(C2:C7,A2:A7,"مبيعات",B2:B7,"القاهرة")
\`\`\`

The order differs from SUMIFS in one place: **the average column is the first argument**, then the criteria.

## This editor

The editor runs on HyperFormula, and this version does not evaluate \`AVERAGEIFS\`. The same number comes from SUMIFS divided by COUNTIFS. On desktop Excel type AVERAGEIFS; here type the equivalent so the check can pass.`,
    exercises: [
      fx(
        281,
        'كام متوسط فواتير قسم المبيعات في القاهرة؟ قرّب لرقمين. اكتب المعادلة المكافئة لـ AVERAGEIFS.',
        'What is the average sales invoice in Cairo? Round to 2 decimals. Type the AVERAGEIFS equivalent.',
        'SUMIFS قسمة COUNTIFS بنفس الشرطين',
        'SUMIFS divided by COUNTIFS with the same two criteria',
        avgSheet,
        '=ROUND(SUMIFS(C2:C7,A2:A7,"مبيعات",B2:B7,"القاهرة")/COUNTIFS(A2:A7,"مبيعات",B2:B7,"القاهرة"),2)',
      ),
    ],
  },
  {
    id: 29,
    title: 'HLOOKUP — البحث في صف',
    titleEn: 'HLOOKUP — look along a row',
    description: 'الموازنة متسطرة في صف الشهور، والمدير عايز مارس من غير ما يدوّر بالعين.',
    descriptionEn: 'The budget is laid out across a month row, and the manager wants March without scanning.',
    type: 'formula',
    sheet: hSheet,
    content: `## امتى تستخدمها؟

**HLOOKUP** بتدور في أول صف وترجع خلية من صف تحت. تنفع لما الجدول عريض: الشهور في الأعمدة مش في الصفوف.

\`\`\`excel
=HLOOKUP("مارس",A1:D2,2,FALSE)
\`\`\`

- \`2\` يعني الصف الثاني من الجدول، مش رقم الصف في الشيت.
- \`FALSE\` بحث دقيق. في المحرر هنا اكتب \`0\`، لأن المحرك مش بيتعرّف على الاسم FALSE.

الدالة قديمة وموجودة في إصدارات Excel الحالية. لو الجدول هيتقلب كتير، XLOOKUP أو INDEX أوضح. HLOOKUP لسه بتظهر في ملفات موازنات قديمة، فلازم تعرف تقراها.`,
    contentEn: `## When to use it

**HLOOKUP** searches the first row and returns a cell from a row below. It fits a wide table: months across columns, not down rows.

\`\`\`excel
=HLOOKUP("مارس",A1:D2,2,FALSE)
\`\`\`

- \`2\` is the second row of the table, not the worksheet row number.
- \`FALSE\` is an exact match. In this editor type \`0\`, because the engine does not recognize the name FALSE.

The function is old and still in current Excel. If the table will be reshaped often, XLOOKUP or INDEX is clearer. HLOOKUP still shows up in older budget files, so you need to be able to read it.`,
    exercises: [
      fx(
        291,
        'كام مبيعات مارس من صف الموازنة؟',
        'What are March sales from the budget row?',
        'HLOOKUP على كلمة مارس، والصف 2، وآخر حجة 0',
        'HLOOKUP for March, row 2, and 0 as the last argument',
        hSheet,
        '=HLOOKUP("مارس",A1:D2,2,0)',
      ),
    ],
  },
  {
    id: 30,
    title: 'XMATCH — موضع القيمة',
    titleEn: 'XMATCH — position of a value',
    description: 'أمين المخزن عايز رقم صف كود P-14 عشان يراجع الحركة.',
    descriptionEn: 'The storekeeper needs the position of code P-14 so he can audit the movement.',
    type: 'formula',
    sheet: xmatchSheet,
    content: `## XMATCH

\`XMATCH\` بترجع موضع القيمة جوه النطاق، مش القيمة نفسها. موجودة في Excel 2021 و Microsoft 365، ومش في Excel 2019.

\`\`\`excel
=XMATCH("P-14",A2:A5,0)
\`\`\`

\`0\` بحث دقيق. تقدر كمان تطلب أقرب أصغر أو أقرب أكبر، واتجاه البحث. \`MATCH\` القديمة بترجع نفس الموضع في البحث الدقيق.

## المحرك هنا

HyperFormula مش بتقيّم XMATCH. اكتب MATCH بآخر حجة \`0\`. في Excel على جهازك الاتنين يطلعوا نفس الرقم للكود ده.`,
    contentEn: `## XMATCH

\`XMATCH\` returns the position of a value inside a range, not the value itself. It is in Excel 2021 and Microsoft 365, and not in Excel 2019.

\`\`\`excel
=XMATCH("P-14",A2:A5,0)
\`\`\`

\`0\` is an exact match. You can also ask for the next smaller or next larger item, and a search direction. Classic \`MATCH\` returns the same position for an exact match.

## This editor

HyperFormula does not evaluate XMATCH. Type MATCH with \`0\` as the last argument. On desktop Excel both return the same number for this code.`,
    exercises: [
      fx(
        301,
        'موضع كود P-14 كام؟ اكتب MATCH. في Excel، XMATCH بنفس البحث الدقيق ترجع نفس الرقم.',
        'What is the position of code P-14? Type MATCH. In Excel, XMATCH with the same exact match returns the same number.',
        'MATCH("P-14",A2:A5,0)',
        'MATCH("P-14",A2:A5,0)',
        xmatchSheet,
        '=MATCH("P-14",A2:A5,0)',
      ),
    ],
  },
  {
    id: 38,
    title: 'LET — سمّ المتغير جوه الصيغة',
    titleEn: 'LET — name a variable inside the formula',
    description: 'عمولة الشرائح بتتكرر أربع مرات. LET بتكتب الإجمالي مرة واحدة.',
    descriptionEn: 'A tiered commission repeats the total four times. LET names it once.',
    type: 'formula',
    sheet: letSheet,
    content: `## ليه LET؟

عمولة فهد العتيبي شرائح: 3% تحت 40 ألف، 5% من 40 ألف، 8% من 80 ألف. من غير LET بتكتب SUMIF أربع مرات، ولو غيّرت الشرط لازم تعدّل كل النسخ.

\`LET\` موجودة في Excel 2021 و Microsoft 365.

\`\`\`excel
=LET(total,SUMIF(A2:A4,"فهد العتيبي",B2:B4),IF(total>=80000,total*0.08,IF(total>=40000,total*0.05,total*0.03)))
\`\`\`

الاسم \`total\` يعيش جوه الصيغة بس، مش في Name Manager.

## المحرك هنا

المحرر مش بيقيم LET. اكتب النسخة الموسعة. النتيجة لازم تطابق نسخة LET على Excel.`,
    contentEn: `## Why LET?

Fahd Al-Otaibi’s commission is tiered: 3% under 40,000, 5% from 40,000, and 8% from 80,000. Without LET you write SUMIF four times, and a rule change means editing every copy.

\`LET\` is in Excel 2021 and Microsoft 365.

\`\`\`excel
=LET(total,SUMIF(A2:A4,"فهد العتيبي",B2:B4),IF(total>=80000,total*0.08,IF(total>=40000,total*0.05,total*0.03)))
\`\`\`

The name \`total\` lives inside the formula, not in Name Manager.

## This editor

The editor does not evaluate LET. Type the expanded formula. The result has to match the LET version in Excel.`,
    exercises: [
      fx(
        381,
        'كام عمولة فهد العتيبي؟ 3% تحت 40,000، و 5% من 40,000، و 8% من 80,000. قرّب لرقمين.',
        'What is Fahd Al-Otaibi’s commission? 3% under 40,000, 5% from 40,000, and 8% from 80,000. Round to 2 decimals.',
        'SUMIF جوه IF متداخلة ثم ROUND. دي النسخة الموسعة من LET',
        'SUMIF inside a nested IF, then ROUND. This is the expanded LET',
        letSheet,
        '=ROUND(IF(SUMIF(A2:A4,"فهد العتيبي",B2:B4)>=80000,SUMIF(A2:A4,"فهد العتيبي",B2:B4)*0.08,IF(SUMIF(A2:A4,"فهد العتيبي",B2:B4)>=40000,SUMIF(A2:A4,"فهد العتيبي",B2:B4)*0.05,SUMIF(A2:A4,"فهد العتيبي",B2:B4)*0.03)),2)',
      ),
    ],
  },
  {
    id: 39,
    title: 'LAMBDA — دالة باسمها',
    titleEn: 'LAMBDA — a function with a name',
    description: 'المالية عايزة دالة Commission تتنادى في كل الشيتات بدل ما تتكتب من أول.',
    descriptionEn: 'Finance wants a Commission function they can call on every sheet instead of rewriting it.',
    type: 'formula',
    sheet: letSheet,
    content: `## LAMBDA

\`LAMBDA\` بتعرّف دالة. موجودة في Microsoft 365 و Excel 2024، ومش في Excel 2021.

صيغة لمرة واحدة:

\`\`\`excel
=LAMBDA(amount,IF(amount>=80000,amount*0.08,IF(amount>=40000,amount*0.05,amount*0.03)))(B2)
\`\`\`

عشان تتنادى بالاسم، من Formulas ثم Name Manager:

\`\`\`excel
Commission = LAMBDA(amount,IF(amount>=80000,amount*0.08,IF(amount>=40000,amount*0.05,amount*0.03)))
\`\`\`

وبعدين في الخلية \`=Commission(B2)\`. الاسم يتنقل مع الملف، ويتراجع من مكان واحد.

## المحرك هنا

المحرر مش بيقيم LAMBDA ولا الأسماء المعرفة. احسب نفس الشريحة بالصيغة العادية، وقارن الرقم بما ترجعها Commission على Excel.`,
    contentEn: `## LAMBDA

\`LAMBDA\` defines a function. It is in Microsoft 365 and Excel 2024, and not in Excel 2021.

A one-off call:

\`\`\`excel
=LAMBDA(amount,IF(amount>=80000,amount*0.08,IF(amount>=40000,amount*0.05,amount*0.03)))(B2)
\`\`\`

To call it by name, use Formulas, then Name Manager:

\`\`\`excel
Commission = LAMBDA(amount,IF(amount>=80000,amount*0.08,IF(amount>=40000,amount*0.05,amount*0.03)))
\`\`\`

Then in the cell, \`=Commission(B2)\`. The name travels with the file and is audited in one place.

## This editor

The editor does not evaluate LAMBDA or defined names. Compute the same tier with an ordinary formula, and compare the number with what Commission returns in Excel.`,
    exercises: [
      fx(
        391,
        'لو Commission(B2) اتحسبت على فهد العتيبي، الرقم كام؟ قرّب لرقمين.',
        'If Commission(B2) is evaluated for Fahd Al-Otaibi, what is the number? Round to 2 decimals.',
        'نفس شرائح LET: 8% من 80 ألف، و 5% من 40 ألف، و 3% تحتها',
        'The same tiers as LET: 8% from 80k, 5% from 40k, otherwise 3%',
        letSheet,
        '=ROUND(IF(B2>=80000,B2*0.08,IF(B2>=40000,B2*0.05,B2*0.03)),2)',
      ),
      {
        id: 392,
        type: 'mcq',
        question: 'فين يتسجل اسم Commission عشان كل الشيتات تناديه؟',
        questionEn: 'Where do you store the name Commission so every sheet can call it?',
        hint: 'من تبويب Formulas',
        hintEn: 'From the Formulas tab',
        options: [
          'جوه خلية واحدة بس من غير اسم',
          'Formulas ثم Name Manager',
          'Protect Sheet',
          'PivotTable Analyze',
        ],
        optionsEn: [
          'Inside one cell only, with no name',
          'Formulas, then Name Manager',
          'Protect Sheet',
          'PivotTable Analyze',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 40,
    title: 'TEXTSPLIT و TEXTBEFORE و TEXTAFTER',
    titleEn: 'TEXTSPLIT, TEXTBEFORE, and TEXTAFTER',
    description: 'كود الفرع جاى في خلية واحدة، والعمليات عايزة المدينة لوحدها.',
    descriptionEn: 'The branch code arrives in one cell, and operations needs the city on its own.',
    type: 'formula',
    sheet: textSheet,
    content: `## الدوال

الثلاثة في Microsoft 365 و Excel 2024. مش موجودين في Excel 2021 ولا 2019.

\`\`\`excel
=TEXTBEFORE(A2,"-")
=TEXTAFTER(A2,"-")
=TEXTSPLIT(A3,"|")
\`\`\`

- TEXTBEFORE يرجّع اللي قبل الفاصل.
- TEXTAFTER يرجّع اللي بعده. تقدر تطلب الفاصل الثاني بحجة رقم.
- TEXTSPLIT بيفك الخلية لأعمدة أو صفوف، وبيعمل spill.

## بديل المحرك

HyperFormula مش بتقيّم التلاتة. LEFT و MID و FIND بيطلعوا نفس القطعة للفاصل الواحد. على الشيت، \`فرع-القاهرة\` تبقى "فرع" و "القاهرة".`,
    contentEn: `## The functions

All three are in Microsoft 365 and Excel 2024. They are not in Excel 2021 or 2019.

\`\`\`excel
=TEXTBEFORE(A2,"-")
=TEXTAFTER(A2,"-")
=TEXTSPLIT(A3,"|")
\`\`\`

- TEXTBEFORE returns what is before the delimiter.
- TEXTAFTER returns what is after it. You can ask for the second delimiter with an instance number.
- TEXTSPLIT spills the cell into columns or rows.

## The editor’s substitute

HyperFormula does not evaluate the three. LEFT, MID, and FIND return the same piece for a single delimiter. On this sheet, \`فرع-القاهرة\` becomes "فرع" and "القاهرة".`,
    exercises: [
      fx(
        401,
        'الجزء اللي قبل الشرطة في الصف 2 إيه؟ في Excel ده ناتج TEXTBEFORE.',
        'What is the piece before the hyphen on row 2? In Excel that is the TEXTBEFORE result.',
        'LEFT لحد FIND للشرطة ناقص 1',
        'LEFT up to FIND of the hyphen, minus 1',
        textSheet,
        '=LEFT(A2,FIND("-",A2)-1)',
      ),
      fx(
        402,
        'المدينة اللي بعد الشرطة في الصف 2 إيه؟ في Excel ده ناتج TEXTAFTER.',
        'What is the city after the hyphen on row 2? In Excel that is the TEXTAFTER result.',
        'MID من بعد الشرطة',
        'MID from after the hyphen',
        textSheet,
        '=MID(A2,FIND("-",A2)+1,LEN(A2))',
      ),
    ],
  },
  {
    id: 70,
    title: 'RANDARRAY — عينة أرقام',
    titleEn: 'RANDARRAY — a sample of numbers',
    description: 'المراجع عايز عينة جرد ثابتة، مش أرقام تتغير كل ما الملف يتحسب.',
    descriptionEn: 'The auditor wants a fixed stock sample, not numbers that change every time the file calculates.',
    type: 'formula',
    sheet: randSheet,
    content: `## الدالة

\`RANDARRAY\` في Excel 2021 و Microsoft 365. بتطلّع مصفوفة أرقام عشوائية وتعمل spill.

\`\`\`excel
=RANDARRAY(8,1,100,500,TRUE)
\`\`\`

\`TRUE\` يعني أعداد صحيحة. الدالة متقلبة: كل إعادة حساب بتغير الأرقام.

## ليه العينة هنا أرقام ثابتة؟

المراجع في **واحة التجزئة** ولّد 8 أرقام بين 100 و 500 ثم عمل Paste Values. العينة اللي بتتحقق عليها لازم تفضل ثابتة، وإلا محضر الجرد يتغير. لو كتبت RANDARRAY في الخلية من غير لصق القيم، المتوسط هيتغير وأنت بتفتح الملف.

المحرر مش بيقيم RANDARRAY. احسب متوسط القيم الملصوقة.`,
    contentEn: `## The function

\`RANDARRAY\` is in Excel 2021 and Microsoft 365. It spills an array of random numbers.

\`\`\`excel
=RANDARRAY(8,1,100,500,TRUE)
\`\`\`

\`TRUE\` means integers. The function is volatile: every recalculation changes the numbers.

## Why this sample is fixed

The auditor at **Waha Retail** generated 8 numbers between 100 and 500 and then used Paste Values. The sample you check has to stay fixed, or the count record changes. If you leave RANDARRAY in the cell without pasting values, the average changes when the file opens.

The editor does not evaluate RANDARRAY. Average the pasted values.`,
    exercises: [
      fx(
        701,
        'كام متوسط عينة الجرد الملصوقة؟ قرّب لرقمين.',
        'What is the average of the pasted count sample? Round to 2 decimals.',
        'AVERAGE على العمود',
        'AVERAGE of the column',
        randSheet,
        '=ROUND(AVERAGE(A2:A9),2)',
      ),
      {
        id: 702,
        type: 'mcq',
        question: 'ليه العينة متتغيّرش لما الملف يتعمل له Recalculate؟',
        questionEn: 'Why does the sample not change when the file recalculates?',
        hint: 'فكر في Paste Values',
        hintEn: 'Think about Paste Values',
        options: [
          'لأن RANDARRAY مش متقلبة',
          'لأن القيم اتلصقت كأرقام ثابتة بعد التوليد',
          'لأن العمود محمي بكلمة مرور',
          'لأن المتوسط بيمنع التحديث',
        ],
        optionsEn: [
          'Because RANDARRAY is not volatile',
          'Because the values were pasted as fixed numbers after they were generated',
          'Because the column is password-protected',
          'Because the average blocks updates',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 71,
    title: 'CHOOSECOLS و TAKE و DROP و VSTACK و HSTACK',
    titleEn: 'CHOOSECOLS, TAKE, DROP, VSTACK, and HSTACK',
    description: 'تقرير عريض وتقريرين شهرين، والمدير عايز عمود المدينة ومجموع الشهرين.',
    descriptionEn: 'A wide report and two monthly blocks, and the manager wants the city column and the two-month total.',
    type: 'formula',
    sheet: wideSheet,
    content: `## الدوال

الخمس دوال في Microsoft 365 (من تحديثات 2022) وفي Excel 2024. مش في Excel 2021.

- \`CHOOSECOLS(A1:D4,3)\` يرجّع عمود المدينة بس.
- \`TAKE(A2:D4,2)\` أول صفين. \`DROP(A2:D4,1)\` يشيل أول صف.
- \`VSTACK(مارس,أبريل)\` يرصّ الجداول تحت بعض.
- \`HSTACK(المدينة,المبلغ)\` يرصّهم جنب بعض.

كلها بتعمل spill.

## التحقق هنا

HyperFormula مش بتقيّم الدوال دي. السؤالين تحت بيطلبوا نفس قرار المدير بدوال أقدم: مجموع الشهرين، ومدينة أكبر فاتورة. في Excel تقدر توصّل لنفس الرقم بـ VSTACK أو CHOOSECOLS ثم SUM أو INDEX.`,
    contentEn: `## The functions

All five are in Microsoft 365 (from the 2022 updates) and in Excel 2024. They are not in Excel 2021.

- \`CHOOSECOLS(A1:D4,3)\` returns only the city column.
- \`TAKE(A2:D4,2)\` is the first two rows. \`DROP(A2:D4,1)\` removes the first row.
- \`VSTACK(March,April)\` stacks tables on top of each other.
- \`HSTACK(city,amount)\` places them side by side.

They spill.

## The check here

HyperFormula does not evaluate these functions. The two questions below ask for the same manager decisions with older functions: the two-month total, and the city of the largest invoice. In Excel you can reach the same number with VSTACK or CHOOSECOLS and then SUM or INDEX.`,
    exercises: [
      fx(
        711,
        'كام مجموع مارس وأبريل مع بعض؟ الجدولين جنب بعض في الشيت.',
        'What is March plus April? The two blocks sit side by side.',
        'SUM لعمود مارس زائد SUM لعمود أبريل. في Excel، VSTACK ثم SUM',
        'SUM of March plus SUM of April. In Excel, VSTACK then SUM',
        stackSheet,
        '=SUM(B2:B4)+SUM(E2:E4)',
      ),
      fx(
        712,
        'مدينة أكبر فاتورة إيه؟ في Excel تقدر تختار عمود المدينة بـ CHOOSECOLS وبعدين تاخد الصف الأول بعد الترتيب.',
        'What is the city of the largest invoice? In Excel you can keep the city column with CHOOSECOLS and then take the first row after sorting.',
        'INDEX و MATCH على MAX',
        'INDEX and MATCH on MAX',
        wideSheet,
        '=INDEX(C2:C4,MATCH(MAX(D2:D4),D2:D4,0))',
      ),
    ],
  },
  {
    id: 72,
    title: 'الحقل المحسوب في Pivot',
    titleEn: 'Pivot calculated fields',
    description: 'المالية عايزة هامش الربح جوه الـ Pivot من غير عمود جديد في المصدر.',
    descriptionEn: 'Finance wants margin inside the Pivot without a new source column.',
    type: 'concept',
    content: `## الحقل المحسوب

من PivotTable Analyze ثم Fields, Items, & Sets ثم Calculated Field. تكتب معادلة بأسماء حقول الـ Pivot، زي:

\`\`\`excel
= المبيعات - التكلفة
\`\`\`

الحقل يظهر في قائمة القيم. ده لـ Pivot عادي مبني على نطاق أو Table.

لو الـ Pivot مبني على Data Model أو Power Pivot، الحقل المحسوب مش الأداة الصح. اكتب Measure بـ DAX.

## المراجعة

قبل ما تصدق رقم الـ Pivot، اجمع الهامش من الجدول الخام. لو الرقمين مختلفين، فيه فلتر أو صف ناقص.`,
    contentEn: `## Calculated field

From PivotTable Analyze, then Fields, Items, & Sets, then Calculated Field. You write a formula with the Pivot’s field names, such as:

\`\`\`excel
= Sales - Cost
\`\`\`

The field shows up in the values list. This is for an ordinary Pivot built on a range or a Table.

If the Pivot is built on a Data Model or Power Pivot, a calculated field is the wrong tool. Write a DAX measure.

## The reconciliation

Before you trust the Pivot number, total the margin from the raw table. If the two numbers differ, a filter or a row is missing.`,
    exercises: [
      fx(
        721,
        'كام هامش الربح الإجمالي من الجدول الخام؟ المبيعات ناقص التكلفة. ده الرقم اللي الحقل المحسوب لازم يطلّعه من غير فلاتر.',
        'What is total margin from the raw table? Sales minus cost. That is the number the calculated field should show with no filters.',
        'SUM للمبيعات ناقص SUM للتكلفة',
        'SUM of sales minus SUM of cost',
        marginSheet,
        '=SUM(B2:B4)-SUM(C2:C4)',
      ),
      {
        id: 722,
        type: 'mcq',
        question: 'Pivot مبني على Data Model. هتحسب الهامش فين؟',
        questionEn: 'The Pivot is built on a Data Model. Where do you calculate margin?',
        hint: 'الحقل المحسوب مش بتاع الموديل',
        hintEn: 'A calculated field is not the data-model tool',
        options: [
          'Calculated Field من قائمة الـ Pivot',
          'Measure بـ DAX',
          'Sparkline',
          'Protect Sheet',
        ],
        optionsEn: [
          'A Calculated Field on the Pivot menu',
          'A DAX measure',
          'A sparkline',
          'Protect Sheet',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 73,
    title: 'GETPIVOTDATA',
    titleEn: 'GETPIVOTDATA',
    description: 'لوحة المتابعة لازم تسحب رقم القاهرة من الـ Pivot، مش من خلية بتتكسر لما الترتيب يتغير.',
    descriptionEn: 'The dashboard should pull Cairo’s number from the Pivot, not from a cell that breaks when the sort changes.',
    type: 'concept',
    content: `## ليه بتظهر لوحدها؟

لما تضغط خلية قيمة جوه Pivot، Excel غالبًا بيكتب \`GETPIVOTDATA\` مش مرجع عادي. الصيغة بتسأل عن اسم الحقل والعنصر، فبتفضل صح لو ترتيب الصفوف اتغير.

شكلها التقريبي:

\`\`\`excel
=GETPIVOTDATA("Sum of المبلغ",A3,"المدينة","القاهرة")
\`\`\`

الخلية الأولى مرجع لأي خلية في الـ Pivot. تقدر تقفل التوليد التلقائي من PivotTable Analyze ثم Options ثم Generate GetPivotData.

الدالة قديمة وموجودة في الإصدارات الحالية.

## المراجعة

رقم القاهرة في المصدر لازم يساوي اللي راجعه GETPIVOTDATA. التمرين يحسب رقم المصدر.`,
    contentEn: `## Why it appears on its own

When you click a value cell inside a Pivot, Excel usually writes \`GETPIVOTDATA\` rather than a normal reference. The formula asks for the field name and the item, so it stays correct if the row order changes.

A typical shape:

\`\`\`excel
=GETPIVOTDATA("Sum of المبلغ",A3,"المدينة","القاهرة")
\`\`\`

The first cell is a reference to any cell in the Pivot. You can turn off automatic generation from PivotTable Analyze, then Options, then Generate GetPivotData.

The function is long-standing and in current Excel.

## The reconciliation

Cairo’s source total has to equal what GETPIVOTDATA returns. The exercise computes the source number.`,
    exercises: [
      fx(
        731,
        'كام مجموع القاهرة في الجدول الخام؟ ده الرقم اللي GETPIVOTDATA لازم ترجّعه من Pivot من غير فلاتر تانية.',
        'What is Cairo’s total in the raw table? That is the number GETPIVOTDATA should return from an unfiltered Pivot.',
        'SUMIF على المدينة',
        'SUMIF on the city',
        citySheet,
        '=SUMIF(A2:A5,"القاهرة",B2:B5)',
      ),
    ],
  },
  {
    id: 74,
    title: 'Timeline — فلتر التاريخ على الـ Pivot',
    titleEn: 'Timeline — a date filter on a Pivot',
    description: 'المدير عايز يبدّل بين الشهور من شريط، من غير ما يعدل شرط في صيغة.',
    descriptionEn: 'The manager wants to switch months from a bar, without editing a formula criterion.',
    type: 'concept',
    content: `## Timeline

من Insert ثم Timeline. لازم الـ Pivot يكون فيه حقل تاريخ حقيقي، مش نص. الشريط بيفلتر بالسنة أو الربع أو الشهر أو اليوم.

الأداة موجودة من Excel 2013 وفي Microsoft 365. لو التاريخ نص، حوّله بـ DATEVALUE أو في Power Query قبل الـ Pivot.

## المعادلة المكافئة

الـ Timeline مش صيغة. عشان تراجع رقم شهر مارس، اجمع الشهر من عمود رقم الشهر. لو الـ Pivot بعد الضغط على مارس طلّع رقم مختلف، فيه صف تاريخه مش متظبط.`,
    contentEn: `## Timeline

Insert, then Timeline. The Pivot needs a real date field, not text. The bar filters by year, quarter, month, or day.

The tool has been there since Excel 2013 and is in Microsoft 365. If the date is text, convert it with DATEVALUE or in Power Query before the Pivot.

## The equivalent total

A Timeline is not a formula. To reconcile March, total the month-number column. If the Pivot shows a different number after you click March, a row’s date is wrong.`,
    exercises: [
      fx(
        741,
        'كام إجمالي شهر 3 من عمود الشهر؟ ده الرقم اللي Timeline مارس لازم يفلتر له الـ Pivot.',
        'What is the total of month 3 from the month column? That is the number a March timeline should leave on the Pivot.',
        'SUMIF على رقم الشهر',
        'SUMIF on the month number',
        monthSheet,
        '=SUMIF(C2:C5,3,B2:B5)',
      ),
    ],
  },
  {
    id: 75,
    title: 'Pivot Chart',
    titleEn: 'Pivot Chart',
    description: 'الرسم لازم يتغير مع الـ Slicer، مش يفضل صورة قديمة.',
    descriptionEn: 'The chart has to move with the slicer, not stay as an old picture.',
    type: 'concept',
    content: `## Pivot Chart

من Insert ثم PivotChart، أو من PivotTable Analyze ثم PivotChart. الرسم مربوط بالـ Pivot: الـ Slicer والفلتر بيغيّروا الاتنين.

لو نسخت الرسم كصورة أو بنيته على خلايا GETPIVOTDATA ملصوقة كقيم، مش هيتحدث. ده الفرق اللي بيوقع لوحات المتابعة بعد أول شهر.

راجع رقم السلسلة على الجدول الخام قبل ما تبعت الرسم.`,
    contentEn: `## Pivot Chart

Insert, then PivotChart, or PivotTable Analyze, then PivotChart. The chart is tied to the Pivot: a slicer and a filter change both.

If you copy the chart as a picture, or build it on GETPIVOTDATA cells pasted as values, it will not update. That is the gap that breaks a dashboard after the first month.

Reconcile the series total to the raw table before you send the chart.`,
    exercises: [
      fx(
        751,
        'كام إجمالي المبالغ اللي عمود الرسم لازم يمثّلها من غير فلتر؟',
        'What total should the chart column represent when no filter is on?',
        'SUM لكل المبالغ',
        'SUM of every amount',
        citySheet,
        '=SUM(B2:B5)',
      ),
      {
        id: 752,
        type: 'mcq',
        question: 'عملت Slicer والجدول اتغير والرسم لأ. السبب الأرجح إيه؟',
        questionEn: 'The slicer changed the table and the chart did not. What is the likely cause?',
        hint: 'الربط بالـ Pivot',
        hintEn: 'The link to the Pivot',
        options: [
          'الرسم Pivot Chart مربوط بنفس الـ Pivot',
          'الرسم نسخة ثابتة أو مبني على قيم متلصقة',
          'الـ Slicer بيشتغل على الرسوم بس',
          'Pivot Chart مش موجود في Microsoft 365',
        ],
        optionsEn: [
          'The chart is a Pivot Chart tied to the same Pivot',
          'The chart is a static copy or built on pasted values',
          'A slicer only drives charts',
          'Pivot Chart is not in Microsoft 365',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 76,
    title: 'Sparklines',
    titleEn: 'Sparklines',
    description: 'جدول اثني عشر فرعًا، والمدير عايز اتجاه ستة شهور جوه الخلية مش رسم يملأ الصفحة.',
    descriptionEn: 'Twelve branches, and the manager wants a six-month trend inside the cell rather than a chart that fills the page.',
    type: 'concept',
    content: `## Sparkline

من Insert ثم Sparklines. تختار Line أو Column أو Win/Loss، وتحدد نطاق البيانات وخلية المكان. الرسم يعيش جوه الخلية ويتحرك معاها.

الأداة موجودة من Excel 2010 وفي Microsoft 365. مش بديل لتحليل، هي إشارة بصرية. الرقم اللي هتتناقشوا عليه لازم يتحسب بصيغة.

في المثال، يونيو هو آخر نقطة. السؤال يراجع أعلى شهر، لأن العين بتجري على القمة وممكن تقرأها غلط.`,
    contentEn: `## Sparkline

Insert, then Sparklines. Choose Line, Column, or Win/Loss, then the data range and the location cell. The chart lives inside the cell and moves with it.

The tool has been there since Excel 2010 and is in Microsoft 365. It is not a substitute for the analysis. The number you will discuss still needs a formula.

In the example, June is the last point. The question checks the peak month, because the eye runs to the top and can misread it.`,
    exercises: [
      fx(
        761,
        'أعلى شهر في السلسلة كام؟',
        'What is the highest month in the series?',
        'MAX على صف الشهور',
        'MAX of the month row',
        sparkSheet,
        '=MAX(A2:F2)',
      ),
    ],
  },
  {
    id: 77,
    title: 'كومبو و Waterfall',
    titleEn: 'Combo and waterfall charts',
    description: 'اللجنة عايزة تشوف الموازنة والفعلي مع بعض، وتشوف إزاي الرقم ابتدا واتحرّك.',
    descriptionEn: 'The committee wants budget and actual together, and a picture of how the number started and moved.',
    type: 'concept',
    content: `## Combo

من Insert ثم Combo Chart. عمود للموازنة وعمود للفعلي، وخط للانحراف لو حبيت. تقدر تحط السلسلة التانية على محور ثانوي لو الوحدات مختلفة. متستخدمش محورين من غير عنوان، لأن القارئ هيخلط الرقمين.

## Waterfall

من Insert ثم Waterfall. موجود من Excel 2016 وفي Microsoft 365. بيورّي نقطة البداية، الزيادات، النقصان، ونقطة النهاية. ينفع لجسر الموازنة: من الموازنة للفعلي بند بند.

الانحراف في التمرين هو الفعلي ناقص الموازنة. موجب يعني أعلى من الخطة.`,
    contentEn: `## Combo

Insert, then Combo Chart. A column for budget, a column for actual, and a line for the variance if you want one. You can put the second series on a secondary axis when the units differ. Do not use two axes without a title, because the reader will mix the numbers up.

## Waterfall

Insert, then Waterfall. It has been there since Excel 2016 and is in Microsoft 365. It shows a start, the increases, the decreases, and the end. It fits a budget bridge: from budget to actual, line by line.

The variance in the exercise is actual minus budget. Positive means above plan.`,
    exercises: [
      fx(
        771,
        'كام انحراف المبيعات؟ الفعلي ناقص الموازنة.',
        'What is the sales variance? Actual minus budget.',
        'C2-B2',
        'C2-B2',
        waterSheet,
        '=C2-B2',
      ),
      {
        id: 772,
        type: 'mcq',
        question: 'عايز تشوف الموازنة تبدأ ثم كل بند يزوّد أو ينقّص لحد الفعلي. أنهي رسم؟',
        questionEn: 'You want to see the budget start, then each line add or subtract until actual. Which chart?',
        hint: 'الجسر بين رقمين',
        hintEn: 'The bridge between two numbers',
        options: ['Pie', 'Waterfall', 'Sparkline', 'Timeline'],
        optionsEn: ['Pie', 'Waterfall', 'Sparkline', 'Timeline'],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 78,
    title: 'حماية الورقة وبنية الملف',
    titleEn: 'Sheet and workbook protection',
    description: 'الموظف يعدّل الساعات بس، ومش يقدر يمسح ورقة المرتبات.',
    descriptionEn: 'The clerk can edit hours, and cannot delete the payroll sheet.',
    type: 'concept',
    sheet: protectSheet,
    content: `## حاجتين مختلفين

- **Protect Sheet** من Review: تقفل الخلايا. قبلها علّم خلايا الإدخال وافتح قفلها من Format Cells ثم Protection ثم شيل Locked. الصيغ تفضل مقفولة.
- **Protect Workbook** من Review: بتحمي بنية الملف. تمنع إضافة أو حذف أو نقل أو إعادة تسمية الورق. مش بتقفل الخلايا.
- **Encrypt with Password** من File ثم Info: قفل فتح الملف. دي حاجة تالتة، وأقوى، وبرضو مش بديل عن صلاحيات المشاركة.

حماية الورقة بكلمة مرور ضعيفة بتتفك بأدوات معروفة. متعتبرهاش سرية بيانات. اعتبرها مانع للتعديل بالغلط.

سياسة الأوفر تايم في التمرين ساعة ونص بعد 8 ساعات، ودي قاعدة تدريب.`,
    contentEn: `## Two different locks

- **Protect Sheet** on Review locks cells. First select the input cells and unlock them from Format Cells, then Protection, then clear Locked. Formulas stay locked.
- **Protect Workbook** on Review protects the file structure. It blocks adding, deleting, moving, or renaming sheets. It does not lock cells.
- **Encrypt with Password** under File, then Info, locks opening the file. That is a third, stronger control, and it is still not a substitute for sharing permissions.

A weak sheet password can be removed with well-known tools. Do not treat it as data confidentiality. Treat it as a guard against accidental edits.

The overtime rule in the exercise is time-and-a-half after 8 hours, and it is a training rule.`,
    exercises: [
      fx(
        781,
        'خلية الساعات مفتوحة للتعديل والباقي مقفول. كام أوفر تايم أحمد محمود لو الساعة بعد 8 بساعة ونص؟',
        'The hours cell is unlocked and the rest is locked. What is Ahmed Mahmoud’s overtime if hours after 8 are time-and-a-half?',
        'IF الساعات أكبر من 8',
        'IF hours are above 8',
        protectSheet,
        '=IF(B2>8,(B2-8)*C2*1.5,0)',
      ),
      {
        id: 782,
        type: 'mcq',
        question: 'عايز تمنع حذف ورقة المرتبات من غير ما تقفل خانة الساعات. أنهي أمر؟',
        questionEn: 'You want to stop people deleting the payroll sheet without locking the hours cell. Which command?',
        hint: 'بنية الملف غير خلايا الورقة',
        hintEn: 'File structure is not the same as sheet cells',
        options: [
          'Protect Workbook',
          'Protect Sheet على كل الخلايا',
          'Hide the formula bar',
          'Encrypt with Password بس',
        ],
        optionsEn: [
          'Protect Workbook',
          'Protect Sheet on every cell',
          'Hide the formula bar',
          'Encrypt with Password only',
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    id: 59,
    title: 'SUMX و AVERAGEX',
    titleEn: 'SUMX and AVERAGEX',
    description: 'الإيراد مش عمود جاهز. هو الكمية ضرب السعر لكل صف، وبعدين الجمع.',
    descriptionEn: 'Revenue is not a ready-made column. It is quantity times price on each row, then a sum.',
    type: 'code',
    codeLang: 'dax',
    example: `Revenue = SUMX(Sales, Sales[Qty] * Sales[Price])
Avg Line = AVERAGEX(Sales, Sales[Qty] * Sales[Price])`,
    content: `## المكرّرات

\`SUM\` بيجمع عمود موجود. \`SUMX\` يلف على الجدول صف صف، يحسب تعبير، وبعدين يجمع. \`AVERAGEX\` بنفس اللفة وبياخد المتوسط.

\`\`\`dax
Revenue = SUMX(Sales, Sales[Qty] * Sales[Price])
\`\`\`

ده Row Context: جوه SUMX، \`Sales[Qty]\` معناها كمية الصف الحالي. من غير المكرّر، ضرب العمودين مش صف صف.

في Excel العادي، SUMPRODUCT بتعمل نفس الجمع. التمرين يراجع الرقم قبل ما تصدق الـ Measure.`,
    contentEn: `## Iterators

\`SUM\` adds a column that already exists. \`SUMX\` walks the table row by row, evaluates an expression, then adds. \`AVERAGEX\` does the same walk and takes the average.

\`\`\`dax
Revenue = SUMX(Sales, Sales[Qty] * Sales[Price])
\`\`\`

That is row context: inside SUMX, \`Sales[Qty]\` means the current row’s quantity. Without the iterator, multiplying the two columns is not row by row.

In ordinary Excel, SUMPRODUCT does the same total. The exercise reconciles the number before you trust the measure.`,
    exercises: [
      fx(
        591,
        'كام الإيراد لو Measure الـ SUMX اتظبطت؟ الكمية ضرب السعر لكل صف.',
        'What is revenue if the SUMX measure is right? Quantity times price on each row.',
        'SUMPRODUCT للكمية والسعر',
        'SUMPRODUCT of quantity and price',
        sumxSheet,
        '=SUMPRODUCT(B2:B4,C2:C4)',
      ),
      {
        id: 592,
        type: 'mcq',
        question: 'ليه SUM(Sales[Qty]) * SUM(Sales[Price]) رقم غلط للإيراد؟',
        questionEn: 'Why is SUM(Sales[Qty]) * SUM(Sales[Price]) the wrong revenue?',
        hint: 'الضرب لازم يحصل قبل الجمع',
        hintEn: 'The multiplication has to happen before the sum',
        options: [
          'لأن SUMX أبطأ بس والناتج نفسه',
          'لأنها تجمع كل الكميات وكل الأسعار وبعدين تضرب المجموعين، مش كل صف',
          'لأن DAX ممنوعة في Excel',
          'لأن السعر لازم يكون Measure',
        ],
        optionsEn: [
          'Because SUMX is only slower and the result is the same',
          'Because it adds every quantity and every price, then multiplies the two totals, not each row',
          'Because DAX is not allowed in Excel',
          'Because price must be a measure',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 60,
    title: 'RELATED و RELATEDTABLE',
    titleEn: 'RELATED and RELATEDTABLE',
    description: 'الطلب فيه كود العميل، والمدينة على جدول العملاء. عايز إيراد القاهرة.',
    descriptionEn: 'The order has a customer code, and the city lives on the customer table. You need Cairo revenue.',
    type: 'code',
    codeLang: 'dax',
    example: `City = RELATED(Customers[City])
Orders Of Customer = COUNTROWS(RELATEDTABLE(Orders))`,
    content: `## الاتجاه

العلاقة من الطلبات (الكتيرة) إلى العملاء (الواحد). 

- \`RELATED\` تتكتب على جهة الكتير وتسحب عمود من جهة الواحد. زي مدينة العميل على صف الطلب.
- \`RELATEDTABLE\` تتكتب على جهة الواحد وترجع صفوف الجهة الكتير. زي كل طلبات العميل ده.

\`\`\`dax
Order City = RELATED(Customers[City])
Customer Orders = COUNTROWS(RELATEDTABLE(Orders))
\`\`\`

من غير علاقة شغالة، RELATED ترجع خطأ. في Excel المسطح، XLOOKUP و SUMIFS بيعملوا نفس القرار على الجدولين اللي تحت.`,
    contentEn: `## The direction

The relationship runs from orders (the many side) to customers (the one side).

- \`RELATED\` is written on the many side and pulls a column from the one side. That is the customer’s city on the order row.
- \`RELATEDTABLE\` is written on the one side and returns the many-side rows. That is every order for this customer.

\`\`\`dax
Order City = RELATED(Customers[City])
Customer Orders = COUNTROWS(RELATEDTABLE(Orders))
\`\`\`

Without a working relationship, RELATED returns an error. On a flat Excel sheet, XLOOKUP and SUMIFS make the same decision on the two tables below.`,
    exercises: [
      fx(
        601,
        'مدينة الطلب الأول إيه؟ في الموديل دي RELATED من كود العميل.',
        'What is the city of the first order? In the model that is RELATED from the customer code.',
        'XLOOKUP من جدول العملاء',
        'XLOOKUP on the customer table',
        relatedSheet,
        '=XLOOKUP(B2,E2:E4,F2:F4)',
      ),
      fx(
        602,
        'كام إيراد عملاء القاهرة؟ الكود بتاع القاهرة في الجدول الجانبي.',
        'What is Cairo customer revenue? Cairo’s code is on the side table.',
        'XLOOKUP للكود ثم SUMIFS',
        'XLOOKUP the code, then SUMIFS',
        relatedSheet,
        '=SUMIFS(C2:C5,B2:B5,XLOOKUP("القاهرة",F2:F4,E2:E4))',
      ),
    ],
  },
  {
    id: 69,
    title: 'USERELATIONSHIP',
    titleEn: 'USERELATIONSHIP',
    description: 'تقويم واحد، وتاريخ الطلب شغال، وتاريخ الشحن علاقة مقفولة. تقرير الشحن محتاج التانية.',
    descriptionEn: 'One calendar, the order date is active, and the ship date is an inactive relationship. The shipping report needs the second one.',
    type: 'code',
    codeLang: 'dax',
    example: `Shipped =
CALCULATE(
    SUM(Orders[Amount]),
    USERELATIONSHIP(Orders[ShipDate], Calendar[Date])
)`,
    content: `## العلاقة المقفولة

في الموديل علاقة واحدة بس بين جدولين تقدر تكون Active. تاريخ الطلب هو العلاقة الشغالة. تاريخ الشحن موجود كعلاقة Inactive، وإلا الموديل يبقى غامض.

\`USERELATIONSHIP\` جوه \`CALCULATE\` بتشغّل العلاقة المقفولة للحسبة دي بس.

\`\`\`dax
Shipped =
CALCULATE(
    SUM(Orders[Amount]),
    USERELATIONSHIP(Orders[ShipDate], Calendar[Date])
)
\`\`\`

من غير CALCULATE، USERELATIONSHIP مش بتبدّل السياق. متستخدمهاش جوه عمود محسوب عادي كسطر لوحده.

## المراجعة في Excel

جدول التدريب فيه شهر الطلب وشهر الشحن كأرقام. إجمالي شهر الشحن 3 هو الرقم اللي مقياس الشحن لازم يرجّعه لما تفلتر مارس على تقويم الشحن.`,
    contentEn: `## The inactive relationship

Only one relationship between two tables can be active. The order date is the active one. The ship date exists as an inactive relationship, otherwise the model is ambiguous.

\`USERELATIONSHIP\` inside \`CALCULATE\` turns that inactive relationship on for that calculation only.

\`\`\`dax
Shipped =
CALCULATE(
    SUM(Orders[Amount]),
    USERELATIONSHIP(Orders[ShipDate], Calendar[Date])
)
\`\`\`

Without CALCULATE, USERELATIONSHIP does not change the context. Do not drop it on its own inside an ordinary calculated column.

## The Excel reconciliation

The training table stores order month and ship month as numbers. The ship-month 3 total is the number the shipping measure should return when March is filtered on the ship-date calendar.`,
    exercises: [
      fx(
        691,
        'كام مبلغ الطلبات اللي شهر شحنها 3؟ ده رقم مقياس الشحن، مش شهر الطلب.',
        'What is the amount of orders whose ship month is 3? That is the shipping measure, not the order month.',
        'SUMIF على شهر الشحن',
        'SUMIF on the ship month',
        shipSheet,
        '=SUMIF(D2:D5,3,B2:B5)',
      ),
      {
        id: 692,
        type: 'mcq',
        question: 'USERELATIONSHIP تتكتب فين عشان تشتغل؟',
        questionEn: 'Where does USERELATIONSHIP have to sit in order to work?',
        hint: 'محتاجة تغيّر سياق الفلتر',
        hintEn: 'It needs to change the filter context',
        options: [
          'جوه CALCULATE',
          'لوحدها في عمود محسوب من غير CALCULATE',
          'جوه Power Query',
          'في Name Manager كـ LAMBDA',
        ],
        optionsEn: [
          'Inside CALCULATE',
          'Alone in a calculated column, without CALCULATE',
          'Inside Power Query',
          'In Name Manager as a LAMBDA',
        ],
        correctIndex: 0,
      },
    ],
  },
];

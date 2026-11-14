import { CaseSpec } from './buildCase';
import { EG_CITIES, EG_REPS, SA_CITIES, SA_REPS } from './names';
import { asText, Cell, dmy, invoiceNo, money, trail } from './rows';

function repsCities(seed: number, people: string[], cities: string[], n: number, min: number, max: number): Cell[][] {
  return Array.from({ length: n }, (_, i) => {
    const focus = i % 4 === 0;
    return [
      invoiceNo(seed, i),
      focus ? people[0] : people[(i % (people.length - 1)) + 1],
      focus ? cities[0] : cities[(i % (cities.length - 1)) + 1],
      money(seed, i, min, max),
    ];
  });
}

const headers4 = ['الفاتورة', 'المندوب', 'المدينة', 'المبلغ'];
const headers4En = ['Invoice', 'Rep', 'City', 'Amount'];

export const salesCaseSpecs: CaseSpec[] = [
  {
    id: 101,
    fn: 'sales',
    level: 'beginner',
    title: 'إجمالي مندوب قبل قفل العمولة',
    titleEn: 'Rep total before commission close',
    company: 'نُور للتجارة',
    companyEn: 'Noor Trading',
    who: 'مدير المبيعات',
    whoEn: 'The sales manager',
    why: 'يقفل عمولات مارس قبل تحويل الرواتب يوم 5 أبريل، ومحتاج إجمالي أحمد محمود من غير ما يجمع الفواتير واحدة واحدة.',
    whyEn: 'he is closing March commissions before payroll on 5 April and needs Ahmed Mahmoud’s total without adding invoices by hand.',
    currency: 'EGP',
    headers: headers4,
    headersEn: headers4En,
    rows: repsCities(101, EG_REPS, EG_CITIES, 12, 4500, 32000),
    tasks: [{
      question: 'كام إجمالي مبيعات أحمد محمود بالجنيه؟',
      questionEn: 'What are Ahmed Mahmoud’s total sales in EGP?',
      hint: 'SUMIF على عمود المندوب',
      hintEn: 'SUMIF on the rep column',
      formula: '=SUMIF(B2:B{n},"أحمد محمود",D2:D{n})',
    }],
  },
  {
    id: 102,
    fn: 'sales',
    level: 'beginner',
    title: 'فواتير لازم يعدّيها المدير',
    titleEn: 'Invoices that need a manager sign-off',
    company: 'أفق الخليج',
    companyEn: 'Ufuq Al Khaleej',
    who: 'مراقب الائتمان',
    whoEn: 'The credit controller',
    why: 'سياسة الشركة: أي فاتورة من 20,000 ريال وأعلى ما تتسجلش إلا بتوقيعه، وعايز العدد والإجمالي قبل اجتماع الائتمان.',
    whyEn: 'company policy says any invoice of SAR 20,000 or more needs his signature, and he wants the count and the total before the credit meeting.',
    currency: 'SAR',
    headers: headers4,
    headersEn: headers4En,
    rows: repsCities(102, SA_REPS, SA_CITIES, 12, 6000, 42000),
    tasks: [
      {
        question: 'كام فاتورة قيمتها 20,000 ريال أو أكثر؟',
        questionEn: 'How many invoices are SAR 20,000 or more?',
        hint: 'COUNTIF بشرط >=20000',
        hintEn: 'COUNTIF with a >=20000 criterion',
        formula: '=COUNTIF(D2:D{n},">=20000")',
      },
      {
        question: 'وإجمالي المبالغ دي بالريال كام؟',
        questionEn: 'What is the total amount of those invoices in SAR?',
        hint: 'SUMIF بنفس الشرط',
        hintEn: 'SUMIF with the same criterion',
        formula: '=SUMIF(D2:D{n},">=20000")',
      },
    ],
  },
  {
    id: 103,
    fn: 'sales',
    level: 'beginner',
    title: 'عمولة 4% لمندوبة جدة',
    titleEn: '4% commission for the Jeddah rep',
    company: 'أفق الخليج',
    companyEn: 'Ufuq Al Khaleej',
    who: 'محاسب العمولات',
    whoEn: 'The commission accountant',
    why: 'سياسة التدريب في الشركة بتدي نورة القحطاني 4% على إجمالي فواتيرها، وعايز الرقم النهائي اللي هيتحط في مسير العمولة.',
    whyEn: 'the training policy pays Noura Al-Qahtani 4% of her invoice total, and he needs the figure that goes on the commission sheet.',
    currency: 'SAR',
    headers: headers4,
    headersEn: headers4En,
    rows: repsCities(103, SA_REPS, SA_CITIES, 12, 5000, 30000),
    note: 'النسبة 4% سياسة تدريبية داخل الحالة، مش عقد عمولة حقيقي.',
    noteEn: 'The 4% rate is a training policy inside this case, not a real commission contract.',
    tasks: [{
      question: 'كام عمولة نورة القحطاني بالريال بعد التقريب لرقمين؟',
      questionEn: 'What is Noura Al-Qahtani’s commission in SAR, rounded to 2 decimals?',
      hint: 'SUMIF ثم اضرب في 0.04 وقرّب بـ ROUND',
      hintEn: 'SUMIF, multiply by 0.04, and ROUND',
      formula: '=ROUND(SUMIF(B2:B{n},"نورة القحطاني",D2:D{n})*0.04,2)',
    }],
  },
  {
    id: 104,
    fn: 'sales',
    level: 'intermediate',
    title: 'مبيعات مارس بعد ما التواريخ جت نص',
    titleEn: 'March sales when dates arrived as text',
    company: 'نُور للتجارة',
    companyEn: 'Noor Trading',
    who: 'مديرة التخطيط',
    whoEn: 'The planning manager',
    why: 'تقرير نقطة البيع نزل التواريخ كنص بصيغة يوم/شهر/سنة، وهي عايزة إيراد مارس بس عشان تقارنه بتارجت الربع.',
    whyEn: 'the POS export stored dates as day/month/year text, and she needs March revenue only so she can compare it with the quarterly target.',
    currency: 'EGP',
    headers: ['الفاتورة', 'المندوب', 'المدينة', 'المبلغ', 'التاريخ'],
    headersEn: ['Invoice', 'Rep', 'City', 'Amount', 'Date'],
    messy: ['عمود التاريخ نص بالصيغة يوم/شهر/سنة، ومش رقم تسلسلي. حوّله بـ DATEVALUE قبل ما تسأل عن الشهر.'],
    messyEn: ['The date column is text in day/month/year form, not a serial number. Convert it with DATEVALUE before testing the month.'],
    rows: Array.from({ length: 12 }, (_, i) => {
      const focus = i % 4 === 0;
      const day = [2, 6, 9, 12, 15, 18, 21, 24, 27, 4, 11, 28][i];
      const month = i === 9 ? 2 : i === 10 ? 4 : 3;
      return [
        invoiceNo(104, i),
        focus ? EG_REPS[0] : EG_REPS[(i % (EG_REPS.length - 1)) + 1],
        focus ? EG_CITIES[0] : EG_CITIES[(i % (EG_CITIES.length - 1)) + 1],
        money(104, i, 5000, 28000),
        dmy(day, month),
      ];
    }),
    note: 'في Microsoft 365 تقدر تجيب أكبر فاتورة بعد الفلتر بـ SORT. المحرك هنا بيقبل SUM على FILTER لأن ده السؤال اللي المدير محتاجه: إجمالي مارس.',
    noteEn: 'In Microsoft 365 you can rank a filtered list with SORT. This checker accepts SUM of FILTER because the decision she needs is the March total.',
    tasks: [
      {
        question: 'كام إجمالي مبيعات شهر مارس بالجنيه؟',
        questionEn: 'What are total March sales in EGP?',
        hint: 'SUM على FILTER بعد MONTH و DATEVALUE',
        hintEn: 'SUM of FILTER after MONTH and DATEVALUE',
        formula: '=SUM(FILTER(D2:D{n},MONTH(DATEVALUE(E2:E{n}))=3))',
      },
      {
        question: 'ومن مارس بس، كام مبيعات القاهرة؟',
        questionEn: 'Within March only, what are Cairo sales?',
        hint: 'ضيف شرط المدينة جوه FILTER بالضرب',
        hintEn: 'Add the city condition inside FILTER by multiplying',
        formula: '=SUM(FILTER(D2:D{n},(MONTH(DATEVALUE(E2:E{n}))=3)*(C2:C{n}="القاهرة")))',
      },
    ],
  },
  {
    id: 105,
    fn: 'sales',
    level: 'intermediate',
    title: 'فاتورة اتسجلت مرتين في الإقفال',
    titleEn: 'An invoice posted twice at close',
    company: 'أفق الخليج',
    companyEn: 'Ufuq Al Khaleej',
    who: 'مراجع الإيراد',
    whoEn: 'The revenue reviewer',
    why: 'لقي فاتورة بنفس الرقم والمبلغ نزلت مرتين من الفرع، ولو اتحسبت مرتين رقم الإقفال هيتبعت للمالية غلط.',
    whyEn: 'he found one invoice number and amount posted twice from a branch, and counting it twice would send the wrong close figure to finance.',
    currency: 'SAR',
    headers: headers4,
    headersEn: headers4En,
    messy: ['أول فاتورة متكررة في آخر الجدول بنفس الرقم ونفس المبلغ. المطلوب صافي الإيراد من غير التكرار.'],
    messyEn: ['The first invoice is repeated at the bottom with the same number and amount. The close needs revenue without the duplicate.'],
    rows: (() => {
      const rows = repsCities(105, SA_REPS, SA_CITIES, 11, 7000, 36000);
      rows.push([...rows[0]]);
      return rows;
    })(),
    tasks: [{
      question: `الفاتورة ${invoiceNo(105, 0)} متكررة. كام صافي المبيعات بالريال من غير ما تتحسب مرتين؟`,
      questionEn: `Invoice ${invoiceNo(105, 0)} is duplicated. What is net sales in SAR without counting it twice?`,
      hint: 'SUMIFS يستبعد الرقم، و MAXIFS يرجّع نسخة واحدة منه',
      hintEn: 'SUMIFS excludes the number, MAXIFS adds one copy back',
      formula: `=SUMIFS(D2:D{n},A2:A{n},"<>${invoiceNo(105, 0)}")+MAXIFS(D2:D{n},A2:A{n},${invoiceNo(105, 0)})`,
    }],
  },
  {
    id: 106,
    fn: 'sales',
    level: 'intermediate',
    title: 'اسم مندوب جاى من الـ CRM بمسافة',
    titleEn: 'A CRM rep name with a trailing space',
    company: 'نُور للتجارة',
    companyEn: 'Noor Trading',
    who: 'محلل المبيعات',
    whoEn: 'The sales analyst',
    why: 'تصدير الـ CRM حاطط مسافة في آخر اسم أحمد محمود في بعض الصفوف، فالتقرير اللي بيطابق الاسم حرفيًا بيضيع جزء من عمولته.',
    whyEn: 'the CRM export left a trailing space on Ahmed Mahmoud in some rows, so an exact-name report drops part of his commission.',
    currency: 'EGP',
    headers: headers4,
    headersEn: headers4En,
    messy: ['في صف على الأقل اسم المندوب آخره مسافة. المطابقة الحرفية مش هتجمع كل فواتيره. حرف البدل * بيلحق الاسم حتى لو فيه مسافة.'],
    messyEn: ['At least one rep name ends with a space. An exact match will miss those invoices. A trailing * wildcard still matches the name.'],
    rows: (() => {
      const rows = repsCities(106, EG_REPS, EG_CITIES, 12, 4000, 26000);
      rows[0][1] = trail(String(rows[0][1]));
      return rows;
    })(),
    tasks: [{
      question: 'كام إجمالي فواتير أحمد محمود بالجنيه بعد ما تحسب الصفوف اللي فيها مسافة؟',
      questionEn: 'What is Ahmed Mahmoud’s total in EGP once the spaced rows are included?',
      hint: 'SUMIF والشرط "أحمد محمود*"',
      hintEn: 'SUMIF with the criterion "أحمد محمود*"',
      formula: '=SUMIF(B2:B{n},"أحمد محمود*",D2:D{n})',
    }],
  },
  {
    id: 107,
    fn: 'sales',
    level: 'intermediate',
    title: 'مبلغ فاتورة نازل كنص من الكاشير',
    titleEn: 'A cashier amount stored as text',
    company: 'واحة التجزئة',
    companyEn: 'Waha Retail',
    who: 'مشرف الفروع',
    whoEn: 'The branch supervisor',
    why: 'كاشير فرع طنطا صدّر مبلغ فاتورة كنص، و SUM تجاهله. المشرف عايز إجمالي اليوم الصح قبل ما يقفّل الدرج.',
    whyEn: 'the Tanta cashier exported one invoice amount as text, and SUM ignored it. He needs the true daily total before closing the till.',
    currency: 'EGP',
    headers: headers4,
    headersEn: headers4En,
    messy: ['الخلية اللي جنبها علامة T مبلغ نص. SUM مش بيجمعها. VALUE بترجّعها رقم.'],
    messyEn: ['The cell marked T is a number stored as text. SUM skips it. VALUE turns it back into a number.'],
    rows: (() => {
      const rows = repsCities(107, EG_REPS, EG_CITIES, 12, 2500, 18000);
      rows[4][3] = asText(Number(rows[4][3]));
      return rows;
    })(),
    tasks: [{
      question: 'كام إجمالي المبالغ بالجنيه بعد ما ترجّع المبلغ النص لرقم؟ المبلغ النص في الصف 6.',
      questionEn: 'What is the total in EGP after converting the text amount back to a number? The text amount is on row 6.',
      hint: 'SUM للنطاق زائد VALUE للخلية النص',
      hintEn: 'SUM the range plus VALUE of the text cell',
      formula: '=SUM(D2:D{n})+VALUE(D6)',
    }],
  },
  {
    id: 108,
    fn: 'sales',
    level: 'advanced',
    title: 'تارجت المنطقة وعمولة الشرائح',
    titleEn: 'Region target and tiered commission',
    company: 'أفق الخليج',
    companyEn: 'Ufuq Al Khaleej',
    who: 'مدير المبيعات الإقليمي',
    whoEn: 'The regional sales director',
    why: 'الفواتير متكوّدة بكود تصنيف، واسم التصنيف في جدول جانبي. عايز مبيعات "أجهزة" قبل ما يقرر شريحة عمولة فهد العتيبي: 3% تحت 40 ألف، 5% من 40 ألف، 8% من 80 ألف.',
    whyEn: 'invoices carry a category code, and the category name sits in a side table. He needs “Appliances” sales before setting Fahd Al-Otaibi’s tier: 3% under 40k, 5% from 40k, and 8% from 80k.',
    currency: 'SAR',
    headers: ['الفاتورة', 'المندوب', 'الكود', 'المبلغ', '', 'التصنيف', 'الكود'],
    headersEn: ['Invoice', 'Rep', 'Code', 'Amount', '', 'Category', 'Code'],
    messy: ['جدول التصنيفات في العمودين F و G. الفاتورة فيها الكود بس، والاسم اللي المدير بيسأل عنه في الجدول الجانبي.'],
    messyEn: ['The category list is in columns F and G. Invoices only have the code; the name the director asked for is on the side table.'],
    note: 'نسخة Microsoft 365 لنفس العمولة بـ LET: `=LET(total,SUMIF(...),IF(total>=80000,total*0.08,IF(total>=40000,total*0.05,total*0.03)))`. المحرك هنا مش بيقيم LET، فاكتب النسخة الموسعة.',
    noteEn: 'The Microsoft 365 version of the commission uses LET. This engine does not evaluate LET, so type the expanded formula.',
    rows: (() => {
      const codes = ['CAT-01', 'CAT-02', 'CAT-03', 'CAT-04'];
      const names = ['خطوط', 'بيانات', 'أجهزة', 'إكسسوار'];
      return Array.from({ length: 12 }, (_, i) => {
        const focus = i % 4 === 0;
        return [
          invoiceNo(108, i),
          focus ? SA_REPS[0] : SA_REPS[(i % (SA_REPS.length - 1)) + 1],
          i % 3 === 0 ? 'CAT-03' : codes[i % codes.length],
          money(108, i, 8000, 36000),
          null,
          i < names.length ? names[i] : null,
          i < codes.length ? codes[i] : null,
        ];
      });
    })(),
    tasks: [
      {
        question: 'كام إجمالي مبيعات التصنيف "أجهزة" بالريال؟ الكود بتاعه في الجدول الجانبي.',
        questionEn: 'What are total “Appliances” sales in SAR? Its code is on the side table.',
        hint: 'XLOOKUP يجيب الكود من عمود الاسم، و SUMIFS يجمع المبلغ',
        hintEn: 'XLOOKUP returns the code from the name column, SUMIFS totals the amount',
        formula: '=SUMIFS(D2:D{n},C2:C{n},XLOOKUP("أجهزة",F2:F5,G2:G5))',
      },
      {
        question: 'كام عمولة فهد العتيبي بالريال؟ 3% تحت 40,000، و 5% من 40,000، و 8% من 80,000. قرّب لرقمين.',
        questionEn: 'What is Fahd Al-Otaibi’s commission in SAR? 3% under 40,000, 5% from 40,000, and 8% from 80,000. Round to 2 decimals.',
        hint: 'SUMIF جوه IF متداخلة، وبعدين ROUND',
        hintEn: 'SUMIF inside a nested IF, then ROUND',
        formula: '=ROUND(IF(SUMIF(B2:B{n},"فهد العتيبي",D2:D{n})>=80000,SUMIF(B2:B{n},"فهد العتيبي",D2:D{n})*0.08,IF(SUMIF(B2:B{n},"فهد العتيبي",D2:D{n})>=40000,SUMIF(B2:B{n},"فهد العتيبي",D2:D{n})*0.05,SUMIF(B2:B{n},"فهد العتيبي",D2:D{n})*0.03)),2)',
      },
    ],
  },
];

import { Lesson } from '../types';

export const lessonsAdvanced: Lesson[] = [
  {
    id: 31,
    title: 'تنظيف البيانات',
    description: 'كيف تتعامل مع البيانات المكررة والخاطئة قبل أي تحليل',
    type: 'concept',
    content: `## ليه تنظيف البيانات مهم؟

**"Garbage in, garbage out"** — لو البيانات غلط، النتائج غلط.
تنظيف البيانات عادةً بياخد 60-80% من وقت المحلل.

## إزالة التكرارات

**الطريقة السريعة:**
1. حدد الجدول
2. Data → Remove Duplicates
3. اختار الأعمدة اللي تحدد التكرار

**اكتشافها بـ COUNTIF:**
\`\`\`excel
=COUNTIF($A$2:$A$100, A2) > 1   → TRUE = مكرر
\`\`\`

## اكتشاف القيم الفارغة

\`\`\`excel
=COUNTBLANK(A2:A100)   → عدد الخلايا الفارغة
=ISBLANK(A2)           → هل هذه الخلية فارغة؟
\`\`\`

**ملء الفراغات:**
- Ctrl + G → Special → Blanks → اكتب القيمة → Ctrl + Enter

## تحويل الأرقام المحفوظة كنصوص

\`\`\`excel
=VALUE("123")    → 123   (نص → رقم)
=TEXT(123, "0")  → "123" (رقم → نص)
\`\`\`

أو: Data → Text to Columns → Finish (للنطاق كله)

## توحيد تنسيق النصوص

\`\`\`excel
=TRIM(PROPER(A2))    ← ينظّف المسافات + يوحّد الحالة
\`\`\`

## Flash Fill — السحر الأبيض

اكتب النمط في أول خلية، ثم اضغط **Ctrl + E**.
Excel يكمّل البقية تلقائياً بناءً على النمط.

مثال: عندك "أحمد محمد" وتريد الاسم الأول فقط.
اكتب "أحمد" في الخلية التالية ثم Ctrl + E.`,
    exercises: [
      {
        id: 32,
        type: 'mcq',
        question: 'ما الصيغة الصحيحة لاكتشاف القيم المكررة في العمود A؟',
        hint: 'استخدم COUNTIF مع نطاق مطلق',
        options: [
          '=DUPLICATE(A2)',
          '=COUNTIF($A$2:$A$100, A2) > 1',
          '=IF(A2=A3, TRUE, FALSE)',
          '=ISDUP(A2:A100)'
        ],
        correctIndex: 1,
      },
      {
        id: 33,
        type: 'mcq',
        question: 'ما الاختصار لاستخدام Flash Fill؟',
        hint: 'مش Ctrl + F — فكّر في حرف E',
        options: ['Ctrl + F', 'Ctrl + E', 'Alt + F', 'Ctrl + D'],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 32,
    title: 'Pivot Tables — الجداول المحورية',
    description: 'لخّص آلاف الصفوف في ثوانٍ بدون ما تكتب صيغة واحدة',
    type: 'concept',
    content: `## إيه هي Pivot Table؟

Pivot Table أداة بتخليك تلخّص وتحلّل بيانات ضخمة بسرعة جداً بمجرد السحب والإفلات.

## كيف تنشئ Pivot Table

1. انقر داخل بياناتك
2. Insert → PivotTable
3. اختار مكان الجدول (ورقة جديدة أو نفس الورقة)
4. OK

## المناطق الأربعة

\`\`\`
┌─────────────────────────────────────┐
│  FILTERS    │  COLUMNS              │
│─────────────┼───────────────────────│
│  ROWS       │  VALUES               │
└─────────────────────────────────────┘
\`\`\`

- **Rows** — البيانات تنظم في صفوف (مثل: الأقسام)
- **Columns** — البيانات تنظم في أعمدة (مثل: الأشهر)
- **Values** — الأرقام اللي هتحسبها (مثل: مجموع المبيعات)
- **Filters** — فلتر يطبق على كل الجدول

## مثال عملي

بياناتك:
| القسم | الشهر | المبيعات |
|-------|-------|---------|
| مبيعات | يناير | 5000 |
| تسويق | يناير | 3000 |
| مبيعات | فبراير | 6000 |

Pivot Table:
- Rows: القسم
- Columns: الشهر
- Values: Sum of المبيعات

## تنسيق القيم

اضغط مرتين على "Sum of المبيعات" في قائمة الحقول:
- **Value Field Settings** → اختار Sum أو Count أو Average
- **Number Format** → نسّق الأرقام

## Slicers — فلاتر بصرية

Insert → Slicer → اختار الحقل
بيضيف أزرار تفاعلية تخلي الفلترة أسهل.

> 💡 **نصيحة:** حوّل بياناتك لـ Excel Table أولاً (Ctrl+T) قبل إنشاء الـ Pivot — هذا يخلي التحديث التلقائي يشتغل بشكل أفضل.`,
    exercises: [
      {
        id: 34,
        type: 'mcq',
        question: 'في Pivot Table، أي منطقة تضع فيها "مجموع المبيعات"؟',
        hint: 'هي المنطقة اللي بتحسب الأرقام',
        options: ['Rows', 'Columns', 'Filters', 'Values'],
        correctIndex: 3,
      },
      {
        id: 35,
        type: 'mcq',
        question: 'كيف تضيف Slicer لـ Pivot Table؟',
        hint: 'من تبويب Insert',
        options: [
          'Data → Slicer',
          'Insert → Slicer',
          'PivotTable Analyze → Slicer',
          'Home → Slicer'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 33,
    title: 'الرسوم البيانية والـ Dashboards',
    description: 'اختار الرسم الصح لبياناتك واصنع Dashboard احترافي',
    type: 'concept',
    content: `## إيه الفرق بين أنواع الرسوم؟

### Column/Bar Chart — للمقارنة
\`\`\`
متى تستخدمه: مقارنة فئات مختلفة
مثال: مبيعات كل قسم
\`\`\`

### Line Chart — للاتجاهات عبر الزمن
\`\`\`
متى تستخدمه: تغير قيمة مع الوقت
مثال: المبيعات الشهرية على مدار السنة
\`\`\`

### Pie/Donut Chart — للنسب
\`\`\`
متى تستخدمه: عرض أجزاء من الكل
مثال: نسبة كل منتج من إجمالي المبيعات
تحذير: تجنّبه لو عندك أكثر من 5 أجزاء
\`\`\`

### Scatter Plot — للعلاقات
\`\`\`
متى تستخدمه: العلاقة بين متغيرين
مثال: هل الإنفاق على التسويق يؤثر على المبيعات؟
\`\`\`

## أساسيات الـ Dashboard

Dashboard جيد لازم يحقق:

1. **وضوح** — نظرة واحدة تعطي الصورة الكاملة
2. **تناسق** — نفس الألوان والخطوط
3. **تفاعل** — Slicers وFilters تخلي المستخدم يستكشف
4. **بساطة** — لا تحشو كل رسوم الدنيا في صفحة واحدة

## خطوات بناء Dashboard

\`\`\`
1. حضّر البيانات (Excel Table)
     ↓
2. اصنع Pivot Tables للتلخيص
     ↓
3. أضف Charts من كل Pivot
     ↓
4. انقل كل شيء لورقة Dashboard
     ↓
5. أضف Slicers وربطها بكل الـ Pivots
\`\`\`

## ربط Slicer بأكثر من Pivot

انقر على Slicer → PivotTable Analyze → Report Connections → اختار كل الـ Pivot Tables اللي تبيها تتأثر.

> 💡 **نصيحة:** صمّم الـ Dashboard على ورقة منفصلة وقفّل الخلايا. المستخدم يشوف النتائج بس بدون ما يعدل في البيانات.`,
    exercises: [
      {
        id: 36,
        type: 'mcq',
        question: 'أي نوع رسم بياني تستخدم لعرض تغير المبيعات على مدار 12 شهر؟',
        hint: 'فكّر في أي رسم يُظهر الاتجاهات عبر الزمن',
        options: ['Pie Chart', 'Column Chart', 'Line Chart', 'Scatter Plot'],
        correctIndex: 2,
      },
      {
        id: 37,
        type: 'mcq',
        question: 'كيف تربط Slicer واحد بأكثر من Pivot Table؟',
        hint: 'ابحث في تبويب PivotTable Analyze',
        options: [
          'تنسخ الـ Slicer لكل Pivot',
          'PivotTable Analyze → Report Connections',
          'Data → Connect Slicers',
          'مستحيل — كل Pivot يحتاج Slicer منفصل'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 34,
    title: 'Data Validation — التحقق من البيانات',
    description: 'تحكّم فيما يُدخله المستخدم في الخلايا ومنع الأخطاء من البداية',
    type: 'concept',
    content: `## إيه هو Data Validation؟

Data Validation بيمنع المستخدم من إدخال بيانات غلط في الخلايا.
Data → Data Validation

## أنواع التحقق

### List — قائمة منسدلة
\`\`\`
Allow: List
Source: نعم,لا,معلّق
\`\`\`
أو من نطاق: \`=$A$1:$A$5\`

### Whole Number — أرقام صحيحة
\`\`\`
Allow: Whole number
Data: between 1 and 100
\`\`\`

### Date — تواريخ
\`\`\`
Allow: Date
Data: greater than or equal
Start date: =TODAY()
\`\`\`

### Custom — صيغة مخصصة
\`\`\`excel
=LEN(A1)=10          ← التأكد من 10 أحرف بالظبط
=COUNTIF($A:$A,A1)=1 ← منع التكرار
=ISNUMBER(A1)        ← التأكد من أن القيمة رقم
\`\`\`

## Input Message و Error Alert

- **Input Message** — رسالة توضيحية لما المستخدم ينقر على الخلية
- **Error Alert** — رسالة خطأ لو أدخل قيمة غير صالحة

## مثال عملي

بتبني نموذج طلب، وعايز:
- حقل الكمية: أرقام صحيحة بين 1 و 999
- حقل الحالة: قائمة (جديد، قيد التنفيذ، مكتمل، ملغي)
- حقل التاريخ: تاريخ لا يكون في الماضي`,
    exercises: [
      {
        id: 38,
        type: 'mcq',
        question: 'لإنشاء قائمة منسدلة في خلية، تختار في Data Validation تحت Allow:',
        hint: 'ابحث عن الخيار اللي يعطيك dropdown',
        options: ['Dropdown', 'List', 'Custom', 'Text length'],
        correctIndex: 1,
      },
      {
        id: 39,
        type: 'mcq',
        question: 'ما الصيغة المخصصة اللي تمنع التكرار في العمود A؟',
        hint: 'تحتاج تعدّ كم مرة ظهرت القيمة',
        options: [
          '=UNIQUE(A1)',
          '=COUNTIF($A:$A,A1)=1',
          '=NOT(DUPLICATE(A1))',
          '=ISUNIQUE(A1)'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 35,
    title: 'Dynamic Arrays — FILTER, SORT, UNIQUE, SEQUENCE',
    description: 'دوال الـ Dynamic Arrays في Excel 365 التي تغيّر طريقة التعامل مع البيانات كلياً',
    type: 'formula',
    content: `## ما هي Dynamic Arrays؟

من أهم تحديثات Excel 365 — دوال تُرجع **مصفوفة نتائج** تمتد تلقائياً في الخلايا المجاورة بدون Ctrl+Shift+Enter.

## FILTER — فلترة ببيانات ديناميكية

\`\`\`excel
=FILTER(array, include, [if_empty])
\`\`\`

\`\`\`excel
=FILTER(A2:C10, B2:B10="مبيعات")
\`\`\`
يُرجع كل الصفوف التي عمود B فيها = "مبيعات".

### فلتر بشروط متعددة
\`\`\`excel
=FILTER(A2:C10, (B2:B10="مبيعات") * (C2:C10>5000))
\`\`\`
`*` = AND، `+` = OR في الـ arrays.

### مع رسالة إذا لم توجد نتائج
\`\`\`excel
=FILTER(A2:C10, B2:B10="مبيعات", "لا توجد نتائج")
\`\`\`

## SORT — ترتيب ديناميكي

\`\`\`excel
=SORT(array, [sort_index], [sort_order], [by_col])
\`\`\`

\`\`\`excel
=SORT(A2:B10, 2, -1)   → ترتيب تنازلي حسب العمود الثاني
=SORT(A2:B10, 2, 1)    → ترتيب تصاعدي
\`\`\`

### SORTBY — ترتيب بعمود خارج النطاق
\`\`\`excel
=SORTBY(A2:B10, C2:C10, -1)   → ترتيب A:B بناءً على C تنازلياً
\`\`\`

## UNIQUE — القيم الفريدة فقط

\`\`\`excel
=UNIQUE(A2:A20)                → قائمة بدون تكرار
=UNIQUE(A2:A20, FALSE, TRUE)   → القيم التي تظهر مرة واحدة فقط
\`\`\`

## SEQUENCE — توليد تسلسل أرقام

\`\`\`excel
=SEQUENCE(rows, [cols], [start], [step])
\`\`\`

\`\`\`excel
=SEQUENCE(5)           → {1;2;3;4;5}
=SEQUENCE(3, 4)        → مصفوفة 3×4
=SEQUENCE(12, 1, 1, 1) → أرقام 1 لـ 12
\`\`\`

### تطبيق: إنشاء تقويم شهري
\`\`\`excel
=SEQUENCE(6, 7, DATE(2024,1,1) - WEEKDAY(DATE(2024,1,1),2) + 1)
\`\`\`

## دمج الدوال

\`\`\`excel
=SORT(UNIQUE(A2:A100))   → قائمة مرتبة بدون تكرار

=SORT(
  FILTER(A2:C50, C2:C50 > AVERAGE(C2:C50)),
  3, -1
)
→ المنتجات التي تفوق المتوسط، مرتبة تنازلياً
\`\`\`

## SPILL — ميزة التسريب التلقائي

النتائج "تسرّب" تلقائياً في الخلايا التالية. إذا كانت الخلايا محجوبة، تظهر #SPILL!

\`\`\`excel
=A1#    ← يشير إلى كل نطاق الـ spill الناتج من A1
\`\`\`

> 💡 هذه الدوال تتطلب **Excel 365** أو **Excel 2021**. في الإصدارات الأقدم استخدم Power Query لنفس النتائج.`,
    example: '=UNIQUE(A2:A5)',
    sheet: {
      headers: ['القسم', 'المبيعات'],
      rows: [
        ['مبيعات', 8000],
        ['تسويق', 3000],
        ['مبيعات', 6000],
        ['عمليات', 4000],
      ],
    },
    exercises: [
      {
        id: 50,
        type: 'mcq',
        question: 'تريد فلترة الصفوف التي مبيعاتها أكثر من 5000. أي صيغة صحيحة؟',
        hint: 'الشرط في المعامل الثاني من FILTER',
        options: [
          '=FILTER(A2:B5, ">5000")',
          '=FILTER(A2:B5, B2:B5>5000)',
          '=FILTER(B2:B5>5000, A2:B5)',
          '=FILTERIF(A2:B5, B2:B5, ">5000")'
        ],
        correctIndex: 1,
      },
      {
        id: 51,
        type: 'mcq',
        question: 'ما الدالة التي تُرجع قائمة بدون قيم مكررة؟',
        hint: 'اسمها يدل على المعنى مباشرةً',
        options: ['DISTINCT', 'UNIQUE', 'NODUPS', 'REMOVE_DUPS'],
        correctIndex: 1,
      },
      {
        id: 52,
        type: 'mcq',
        question: 'في FILTER، كيف تدمج شرطين بـ AND؟',
        hint: 'في Arrays، العمليات المنطقية تختلف عن AND() العادية',
        options: [
          'FILTER(array, AND(cond1, cond2))',
          'FILTER(array, cond1 * cond2)',
          'FILTER(array, cond1 + cond2)',
          'FILTER(array, cond1, cond2)'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 36,
    title: 'What-If Analysis — تحليل السيناريوهات',
    description: 'Goal Seek و Scenario Manager و Data Tables لاتخاذ قرارات مدروسة',
    type: 'concept',
    content: `## ما هو What-If Analysis؟

أدوات تساعدك على الإجابة على سؤال: "**ماذا سيحدث لو...؟**"

Data → What-If Analysis

## Goal Seek — العمل بالهدف

"أريد الوصول إلى نتيجة معينة — ما القيمة المطلوبة؟"

### مثال: قرض شهري
- لديك قرض 100,000 جنيه بفائدة 12% سنوياً
- تريد أن يكون القسط الشهري **لا يتجاوز 2,500 جنيه**
- الصيغة: \`=PMT(12%/12, B3, -100000)\`

\`\`\`
Data → What-If Analysis → Goal Seek
Set cell: خلية الصيغة (القسط)
To value: 2500
By changing cell: خلية عدد الأشهر
\`\`\`

### مثال: نقطة التعادل
- إيرادات = التكلفة الثابتة + (التكلفة المتغيرة × الكمية)
- "كم وحدة تحتاج لتحقيق ربح = 0؟"

## Scenario Manager — مقارنة السيناريوهات

مقارنة "الحالة المتفائلة" vs "الحالة المتشائمة" vs "الحالة المعتدلة":

\`\`\`
Data → What-If Analysis → Scenario Manager
Add → اسم السيناريو + الخلايا المتغيرة + قيمها
\`\`\`

ثم "Summary" لإنشاء تقرير مقارنة تلقائي.

### مثال: تأثير نسبة النمو على الإيراد

| السيناريو | نسبة النمو | الإيراد المتوقع |
|-----------|-----------|----------------|
| متفائل | 20% | 1,200,000 |
| معتدل | 10% | 1,100,000 |
| متشائم | -5% | 950,000 |

## Data Tables — تحليل متغير أو متغيرَين

### جدول بمتغير واحد (One-Variable)
اختبر تأثير قيم مختلفة لمتغير واحد على النتيجة:

\`\`\`
ضع الصيغة في رأس الجدول
ضع القيم المحتملة في عمود
Data → What-If Analysis → Data Table
Column input cell: الخلية المتغيرة
\`\`\`

### جدول بمتغيرَين (Two-Variable)
اختبر تأثير متغيرَين في آنٍ واحد — مثل أسعار × كميات:

| | 100 | 200 | 300 |  ← كميات |
|--|-----|-----|-----|
| 10 | 1000 | 2000 | 3000 |  ← أسعار |
| 15 | 1500 | 3000 | 4500 |
| 20 | 2000 | 4000 | 6000 |

## Solver — تحسين متعدد المتغيرات

أداة أقوى من Goal Seek تتعامل مع عدة متغيرات وقيود:
\`\`\`
Data → Solver
Objective: تعظيم الربح
Variables: الكميات المنتجة
Constraints: لا تتجاوز الطاقة الإنتاجية
\`\`\`

> 💡 Solver يحتاج تفعيله: File → Options → Add-ins → Solver Add-in.`,
    exercises: [
      {
        id: 53,
        type: 'mcq',
        question: 'أي أداة تستخدم لمعرفة "كم وحدة تحتاج لتحقيق ربح 50,000 جنيه"؟',
        hint: 'تريد تحديد قيمة هدف معينة',
        options: ['Scenario Manager', 'Data Table', 'Goal Seek', 'Solver'],
        correctIndex: 2,
      },
      {
        id: 54,
        type: 'mcq',
        question: 'ما الأداة المناسبة لمقارنة 3 سيناريوهات (متفائل، معتدل، متشائم) وإنشاء تقرير تلقائي؟',
        hint: 'اسمها يدل مباشرةً على إدارة السيناريوهات',
        options: ['Goal Seek', 'Scenario Manager', 'Data Table', 'Solver'],
        correctIndex: 1,
      },
      {
        id: 55,
        type: 'mcq',
        question: 'ما الفرق بين Goal Seek و Solver؟',
        hint: 'فكّر في عدد المتغيرات التي تتعامل معها كل منهما',
        options: [
          'لا فرق — كلاهما متطابق',
          'Goal Seek متغير واحد بلا قيود، Solver متغيرات متعددة مع قيود',
          'Solver فقط للأعداد الصحيحة',
          'Goal Seek أقوى وأكثر تعقيداً'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 37,
    title: 'Array Formulas — صيغ المصفوفات',
    description: 'صيغ تعمل على نطاقات كاملة في آنٍ واحد لحل مسائل معقدة',
    type: 'formula',
    content: `## ما هي Array Formulas؟

صيغة عادية تعمل على خلية واحدة. Array Formula تعمل على **نطاق كامل** في خطوة واحدة.

## الطريقة القديمة: Ctrl + Shift + Enter

في Excel 2019 والأقدم، تدخل الصيغة وتضغط **Ctrl+Shift+Enter** بدلاً من Enter فقط. تظهر بين أقواس متعرجة:
\`\`\`excel
{=SUM(IF(A2:A10="مبيعات", B2:B10, 0))}
\`\`\`

## الطريقة الحديثة: Dynamic Arrays (Excel 365)

في Excel 365، معظم الصيغ أصبحت تعمل كـ arrays تلقائياً.

## تطبيقات عملية

### جمع بشرط (بديل SUMIF بدون دالة)
\`\`\`excel
{=SUM(IF(A2:A10="مبيعات", B2:B10, 0))}
\`\`\`

### عدد القيم الفريدة
\`\`\`excel
{=SUM(1/COUNTIF(A2:A10, A2:A10))}
\`\`\`
كيف تعمل: COUNTIF يحسب كم مرة ظهرت كل قيمة، ثم 1/عدد_المرات = حصة كل قيمة فريدة.

### أكبر قيمة بشرط
\`\`\`excel
{=MAX(IF(A2:A10="مبيعات", B2:B10))}
\`\`\`

### SUMPRODUCT كبديل لـ Array Formula
SUMPRODUCT تعمل بدون Ctrl+Shift+Enter:
\`\`\`excel
=SUMPRODUCT((A2:A10="مبيعات") * B2:B10)
\`\`\`

### ترتيب بدون تكرار
\`\`\`excel
{=IFERROR(INDEX($A$2:$A$10, MATCH(ROWS($A$2:A2), COUNTIF($A$2:$A$10,"<="&$A$2:$A$10), 0)),"")}
\`\`\`

## متى تستخدم Array Formulas؟

| المشكلة | الحل |
|---------|------|
| SUMIF بشرط نصي معقد | Array SUM+IF |
| عدد القيم الفريدة | SUM(1/COUNTIF) |
| MAX/MIN بشرط | MAX/MIN(IF) |
| Excel 365 | استخدم FILTER, UNIQUE بدلاً منها |

> ⚠️ **تحذير:** Array Formulas الكبيرة تبطئ الملف. في Excel 365 استخدم Dynamic Arrays أو SUMPRODUCT كلما أمكن.`,
    example: '=SUM(IF(A2:A4="مبيعات",B2:B4,0))',
    sheet: {
      headers: ['القسم', 'المبيعات'],
      rows: [
        ['مبيعات', 8000],
        ['تسويق', 3000],
        ['مبيعات', 6000],
      ],
    },
    exercises: [
      {
        id: 56,
        type: 'mcq',
        question: 'ما الاختصار لإدخال Array Formula في Excel 2019؟',
        hint: 'ثلاثة مفاتيح معاً بدلاً من Enter فقط',
        options: [
          'Alt + Enter',
          'Ctrl + Shift + Enter',
          'Shift + Enter',
          'Ctrl + Alt + Enter'
        ],
        correctIndex: 1,
      },
      {
        id: 57,
        type: 'mcq',
        question: 'ما الصيغة التي تحسب عدد القيم الفريدة في A2:A10 بدون دالة UNIQUE؟',
        hint: 'كل قيمة فريدة تساهم بـ 1/عدد_تكرارها',
        options: [
          '=COUNTUNIQUE(A2:A10)',
          '{=SUM(1/COUNTIF(A2:A10,A2:A10))}',
          '=COUNT(UNIQUE(A2:A10))',
          '{=SUMIF(A2:A10,"<>",1)}'
        ],
        correctIndex: 1,
      }
    ]
  },
];

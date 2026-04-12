import { Lesson } from '../types';

export const lessonsExpert: Lesson[] = [
  {
    id: 51,
    title: 'Data Model — نموذج البيانات',
    description: 'ادمج جداول متعددة في نموذج واحد وحلّل ملايين الصفوف بسهولة',
    type: 'concept',
    content: `## إيه هو Data Model؟

Data Model بيخليك تربط جداول متعددة ببعض وتحلّلها كأنها جدول واحد.
بدله، كنت محتاج VLOOKUP كتير وبيبطّئ الملف.

## كيف توصله

Power Pivot → Manage
أو: لما تنشئ Pivot Table، اختار "Add this data to the Data Model"

## Star Schema — الهيكل المثالي

\`\`\`
              [Dim_Products]
                    |
[Dim_Dates] — [Fact_Sales] — [Dim_Customers]
                    |
             [Dim_Employees]
\`\`\`

- **Fact Table** — الجدول الرئيسي اللي فيه الأرقام (المبيعات، الطلبات)
- **Dimension Tables** — جداول التفاصيل (المنتجات، العملاء، التواريخ)

## كيف تنشئ Relationship

في Power Pivot → Diagram View:
- اسحب العمود المشترك من جدول لجدول آخر
- أو: Data → Relationships → New

**مثال:**
\`\`\`
Fact_Sales[ProductID] → Dim_Products[ID]
\`\`\`

## أنواع العلاقات

| النوع | الوصف | الأكثر شيوعاً |
|-------|-------|--------------|
| One-to-Many | منتج واحد لكثير من المبيعات | ✅ |
| One-to-One | نادر الاستخدام | - |
| Many-to-Many | يحتاج جدول وسيط | ⚠️ |

> 💡 **قاعدة:** الـ Primary Key (القيم الفريدة) دايماً في جانب "One"، والـ Foreign Key في جانب "Many".`,
    exercises: [
      {
        id: 48,
        type: 'mcq',
        question: 'في Star Schema، ما الفرق بين Fact Table وDimension Table؟',
        hint: 'فكّر في أيهما يحتوي الأرقام وأيهما يحتوي التفاصيل',
        options: [
          'Fact Table للتواريخ، Dimension Table للأرقام',
          'Fact Table يحتوي الأرقام والقياسات، Dimension Table يحتوي التفاصيل والوصف',
          'لا فرق بينهما',
          'Fact Table للمبيعات فقط، Dimension Table لباقي البيانات'
        ],
        correctIndex: 1,
      },
      {
        id: 49,
        type: 'mcq',
        question: 'لماذا Star Schema أفضل من ضم كل شيء في جدول واحد؟',
        hint: 'فكّر في الأداء وحجم البيانات',
        options: [
          'لأنه يبدو أجمل في الشاشة',
          'لأنه يقلل التكرار ويحسّن الأداء وييسّر التحليل',
          'لأن Excel يشترطه',
          'لا توجد فائدة حقيقية'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 52,
    title: 'DAX — مقدمة',
    description: 'لغة الصيغ في Power Pivot — بتكتبها في Excel وتحلّل ملايين الصفوف',
    type: 'code',
    codeLang: 'dax',
    content: `## إيه هو DAX؟

DAX = Data Analysis Expressions
لغة صيغ مخصصة لـ Power Pivot وPower BI.
تشبه Excel formulas لكن أقوى وبتتعامل مع الجداول.

## Measure vs Calculated Column

### Measure — حساب ديناميكي
\`\`\`dax
Total Sales = SUM(Sales[Amount])
\`\`\`
بيتحسب بناءً على الفلتر الحالي في الـ Pivot Table.
مخزّن في الـ Data Model مش في الجدول.

### Calculated Column — عمود محسوب
\`\`\`dax
Sales[Profit] = Sales[Revenue] - Sales[Cost]
\`\`\`
بيتحسب لكل صف وبيتخزن في الجدول.

**متى تستخدم أيهما؟**
- **Measure** — للتجميعات (SUM, COUNT, AVERAGE) — الغالبية
- **Calculated Column** — لحسابات الصف الواحد (ربح كل طلب)

## Row Context vs Filter Context

### Row Context
عندما تحسب Calculated Column — DAX يعرف "أنا في أي صف؟"

### Filter Context
عندما تحسب Measure — DAX يعرف "أنا مفلتر على أيه؟"
هذا هو السر وراء قوة DAX.

## أول 3 دوال لازم تتعلمها

\`\`\`dax
Total Sales = SUM(Sales[Amount])

Sales Count = COUNTROWS(Sales)

Avg Order = AVERAGE(Sales[Amount])
\`\`\``,
    example: `Total Sales = SUM(Sales[Amount])
Avg Sales = AVERAGE(Sales[Amount])
Order Count = COUNTROWS(Sales)`,
    exercises: [
      {
        id: 50,
        type: 'mcq',
        question: 'ما الفرق بين Measure وCalculated Column في DAX؟',
        hint: 'فكّر في أين يتخزن كل منهما وكيف يتحسب',
        options: [
          'لا فرق — كلاهما نفس الشيء',
          'Measure يتحسب ديناميكياً بناءً على الفلتر، Calculated Column يتحسب لكل صف ويتخزن في الجدول',
          'Measure يتخزن في الجدول، Calculated Column ديناميكي',
          'Calculated Column أسرع دايماً'
        ],
        correctIndex: 1,
      },
      {
        id: 51,
        type: 'mcq',
        question: 'متى تستخدم Calculated Column بدل Measure؟',
        hint: 'فكّر فيما تريد حسابه',
        options: [
          'للتجميعات مثل SUM وAVERAGE',
          'عندما تريد حساب قيمة لكل صف منفرد مثل (الربح = الإيراد - التكلفة)',
          'دايماً — هي الأفضل دايماً',
          'فقط مع التواريخ'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 53,
    title: 'CALCULATE — أهم دالة في DAX',
    description: 'CALCULATE بتغيّر السياق (Context) وتعطيك تحليلات ما كانت ممكنة بدونها',
    type: 'code',
    codeLang: 'dax',
    content: `## CALCULATE — قلب DAX

\`\`\`dax
CALCULATE(expression, filter1, filter2, ...)
\`\`\`

بتحسب expression لكن بعد تغيير الفلاتر.

## مثال بسيط

\`\`\`dax
-- مبيعات قسم المبيعات فقط (بغض النظر عن الفلتر الحالي)
Sales Dept Sales =
    CALCULATE(
        SUM(Sales[Amount]),
        Sales[Department] = "مبيعات"
    )
\`\`\`

## CALCULATE مع ALL

\`\`\`dax
-- نسبة المبيعات من الإجمالي
Sales % of Total =
    DIVIDE(
        SUM(Sales[Amount]),
        CALCULATE(SUM(Sales[Amount]), ALL(Sales))
    )
\`\`\`

\`ALL(Sales)\` بيشيل كل الفلاتر من جدول Sales.

## CALCULATE مع FILTER

\`\`\`dax
-- مبيعات الطلبات الكبيرة فقط
Large Orders =
    CALCULATE(
        SUM(Sales[Amount]),
        FILTER(Sales, Sales[Amount] > 10000)
    )
\`\`\`

## متغيرات في DAX (VAR)

\`\`\`dax
Sales vs Target =
VAR CurrentSales = SUM(Sales[Amount])
VAR Target = SUM(Budget[Target])
VAR Diff = CurrentSales - Target
RETURN
    IF(Diff > 0, "✅ فوق الهدف", "❌ تحت الهدف")
\`\`\`

\`VAR...RETURN\` بيحسّن الأداء والقراءة كتير.

> 💡 **قاعدة:** افهم CALCULATE كويس — هي أساس 80% من المقاييس الاحترافية.`,
    example: `Sales Dept =
CALCULATE(
    SUM(Sales[Amount]),
    Sales[Department] = "مبيعات"
)

Sales % =
DIVIDE(
    SUM(Sales[Amount]),
    CALCULATE(SUM(Sales[Amount]), ALL(Sales))
)`,
    exercises: [
      {
        id: 52,
        type: 'mcq',
        question: 'ما وظيفة ALL() داخل CALCULATE؟',
        hint: 'فكّر في الفلاتر',
        options: [
          'بيجمع كل القيم',
          'بيشيل الفلاتر الموجودة عشان يحسب على كل البيانات',
          'بيختار كل الأعمدة',
          'بيشيل القيم الفارغة'
        ],
        correctIndex: 1,
      },
      {
        id: 53,
        type: 'mcq',
        question: 'ما فائدة VAR في DAX؟',
        hint: 'فكّر في الأداء وسهولة القراءة',
        options: [
          'لا فائدة منها — مجرد اختيار أسلوب',
          'بتحسّن أداء الحساب وبتخلي الكود أوضح وأسهل في الصيانة',
          'مطلوبة دايماً في كل measure',
          'بتحسّن فقط مع CALCULATE'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 54,
    title: 'Time Intelligence في DAX',
    description: 'حساب YTD وMTD والمقارنة بالسنة الماضية بكل سهولة',
    type: 'code',
    codeLang: 'dax',
    content: `## متطلب أساسي: Date Table

Time Intelligence في DAX بيحتاج جدول تواريخ متواصل بدون فجوات.

\`\`\`dax
-- إنشاء Date Table تلقائياً
Date = CALENDARAUTO()
\`\`\`

ثم Mark as Date Table من Power Pivot.

## أهم دوال Time Intelligence

### TOTALYTD — من بداية السنة
\`\`\`dax
YTD Sales = TOTALYTD(SUM(Sales[Amount]), 'Date'[Date])
\`\`\`

### TOTALMTD — من بداية الشهر
\`\`\`dax
MTD Sales = TOTALMTD(SUM(Sales[Amount]), 'Date'[Date])
\`\`\`

### SAMEPERIODLASTYEAR — نفس الفترة من السنة الماضية
\`\`\`dax
Sales LY =
CALCULATE(
    SUM(Sales[Amount]),
    SAMEPERIODLASTYEAR('Date'[Date])
)
\`\`\`

### نمو سنوي (YoY Growth)
\`\`\`dax
YoY Growth % =
VAR CY = SUM(Sales[Amount])
VAR LY = CALCULATE(SUM(Sales[Amount]), SAMEPERIODLASTYEAR('Date'[Date]))
RETURN
    DIVIDE(CY - LY, LY, 0)
\`\`\`

### Rolling 12 Months
\`\`\`dax
Rolling 12M =
CALCULATE(
    SUM(Sales[Amount]),
    DATESINPERIOD('Date'[Date], LASTDATE('Date'[Date]), -12, MONTH)
)
\`\`\`

> 💡 إضافة Date Table يحوّل تحليلك من عادي لاحترافي في ثوانٍ.`,
    example: `YTD Sales = TOTALYTD(SUM(Sales[Amount]), 'Date'[Date])

Sales LY =
CALCULATE(
    SUM(Sales[Amount]),
    SAMEPERIODLASTYEAR('Date'[Date])
)

YoY % =
DIVIDE([Total Sales] - [Sales LY], [Sales LY], 0)`,
    exercises: [
      {
        id: 54,
        type: 'mcq',
        question: 'لماذا يحتاج DAX Time Intelligence إلى Date Table منفصل؟',
        hint: 'فكّر في كيف تعمل دوال التواريخ',
        options: [
          'لأن Excel يشترطه',
          'لأن دوال Time Intelligence تتطلب نطاق تواريخ متواصل بدون فجوات لتعمل بشكل صحيح',
          'لتحسين الأداء فقط',
          'هو اختياري وليس ضرورياً'
        ],
        correctIndex: 1,
      },
      {
        id: 55,
        type: 'mcq',
        question: 'ما الدالة المستخدمة لحساب مبيعات نفس الفترة من السنة الماضية؟',
        hint: 'اسمها يوصف وظيفتها مباشرة',
        options: [
          'LASTYEAR()',
          'PREVIOUSYEAR()',
          'SAMEPERIODLASTYEAR()',
          'DATEADD(, -1, YEAR)'
        ],
        correctIndex: 2,
      }
    ]
  },

  {
    id: 55,
    title: 'DAX متقدم — RANKX و TOPN',
    description: 'رتّب المنتجات والعملاء واستخرج أفضل N نتيجة ديناميكياً',
    type: 'code',
    codeLang: 'dax',
    content: `## RANKX — الترتيب الديناميكي

\`\`\`dax
Product Rank =
RANKX(
    ALL(Products),       ← الجدول اللي هنرتب فيه
    [Total Sales],       ← القيمة اللي نرتب عليها
    ,                    ← (اتركه فارغاً)
    DESC,                ← ترتيب تنازلي
    Dense                ← Dense = لا فجوات في الترتيب
)
\`\`\`

**Dense vs Skip:**
- Dense: 1, 2, 3, 3, 4 (لو تعادل، يكمل من بعده)
- Skip: 1, 2, 3, 3, 5 (يتخطى الرقم)

## TOPN — أفضل N

\`\`\`dax
-- حساب مبيعات أفضل 5 منتجات
Top 5 Sales =
CALCULATE(
    SUM(Sales[Amount]),
    TOPN(5, Products, [Total Sales])
)
\`\`\`

## CONCATENATEX — دمج نصوص من جدول

\`\`\`dax
-- أسماء أفضل 3 منتجات في خلية واحدة
Top 3 Names =
CONCATENATEX(
    TOPN(3, Products, [Total Sales]),
    Products[Name],
    ", "
)
\`\`\`

## SELECTEDVALUE — معرفة الفلتر المحدد

\`\`\`dax
-- عرض اسم المنطقة المختارة في الـ Slicer
Selected Region =
SELECTEDVALUE(Regions[Name], "كل المناطق")
\`\`\`

## Dynamic Measure Selector

\`\`\`dax
Dynamic Metric =
VAR Metric = SELECTEDVALUE(Metrics[MetricName])
RETURN
    SWITCH(Metric,
        "المبيعات",    [Total Sales],
        "الربح",       [Total Profit],
        "العملاء",     [Customer Count],
        [Total Sales]
    )
\`\`\`
هذا بيخلي المستخدم يختار المقياس من Slicer!`,
    example: `Product Rank =
RANKX(ALL(Products[Name]), [Total Sales], , DESC, Dense)

Top 5 Revenue =
CALCULATE([Total Sales], TOPN(5, Products, [Total Sales]))`,
    exercises: [
      {
        id: 56,
        type: 'mcq',
        question: 'في RANKX، ما الفرق بين Dense وSkip في المعامل الأخير؟',
        hint: 'فكّر فيما يحدث لو تعادل اثنان في الترتيب الثالث',
        options: [
          'لا فرق بينهما',
          'Dense: يكمل الترتيب بدون فجوات (3,3,4). Skip: يتخطى الرقم (3,3,5)',
          'Skip: يكمل الترتيب بدون فجوات. Dense: يتخطى',
          'Dense أسرع في الحساب'
        ],
        correctIndex: 1,
      },
      {
        id: 57,
        type: 'mcq',
        question: 'ما فائدة SELECTEDVALUE في DAX؟',
        hint: 'فكّر في التفاعل مع الـ Slicer',
        options: [
          'تختار أعلى قيمة في العمود',
          'ترجع القيمة المحددة حالياً في Slicer أو Pivot Filter',
          'تحدد نطاق الخلايا',
          'تختار العمود المطلوب'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 56,
    title: 'Measures vs Calculated Columns',
    description: 'الفرق الجوهري بين المقاييس والأعمدة المحسوبة في DAX — ومتى تستخدم كلاً منهما',
    type: 'code',
    codeLang: 'dax',
    content: `## الفرق الجوهري

هذا أهم مفهوم يُخطئ فيه المبتدئون في DAX.

| | Calculated Column | Measure |
|--|-------------------|---------|
| الحساب | عند تحميل البيانات (مرة واحدة) | عند تحديث التقرير (ديناميكي) |
| التخزين | في الـ Data Model (يزيد الحجم) | لا تُخزَّن — تُحسَّب عند الطلب |
| السياق | Row Context (صف بصف) | Filter Context (المرشّحات النشطة) |
| الاستخدام | بيانات مشتقة ثابتة | مقاييس تتغير بالـ Slicer والـ Filter |

## Calculated Column — العمود المحسوب

\`\`\`dax
-- يُضاف عمود جديد للجدول
Profit = Sales[Revenue] - Sales[Cost]

-- يعمل صف بصف تلقائياً
Full Name = Customers[First Name] & " " & Customers[Last Name]

-- يمكن استخدامه في Slicer وFilter
Price Category =
    IF(Products[Price] >= 1000, "High", "Low")
\`\`\`

## Measure — المقياس

\`\`\`dax
-- يتغير حسب السياق (الفلاتر النشطة)
Total Sales = SUM(Sales[Revenue])

-- لا يمكن كتابة Sales[Revenue] مباشرةً
-- لأن المقياس لا يعمل صف بصف
\`\`\`

## متى تستخدم أياً منهما؟

### استخدم Calculated Column إذا:
- تريد تصنيف البيانات (A/B/C، High/Medium/Low)
- تريد ربط جدولَين بعمود مشتق
- القيمة لا تتغير بالفلاتر (عمر العميل، فئة المنتج)

### استخدم Measure إذا:
- تريد مجموعاً أو متوسطاً أو نسبة
- النتيجة تتغير حسب الـ Slicer والفلاتر
- تريد مقارنة فترات (YoY, MoM)

## الخطأ الأكثر شيوعاً

\`\`\`dax
-- ❌ خطأ: لا يمكن استخدام عمود مباشرةً في Measure
Wrong Measure = Sales[Revenue] - Sales[Cost]

-- ✅ صحيح
Correct Measure = SUM(Sales[Revenue]) - SUM(Sales[Cost])
\`\`\`

## Implicit vs Explicit Measures

\`\`\`dax
-- Implicit: تسحب العمود لـ Values في Pivot → Excel يعمل SUM تلقائياً
-- مشكلته: لا يمكن التحكم في الحساب

-- Explicit: تكتب المقياس بنفسك
Total Revenue = SUM(Sales[Revenue])
-- أفضل: تحكم كامل + يمكن الإشارة إليه من مقاييس أخرى
\`\`\`

> 💡 **القاعدة الذهبية:** إذا كانت النتيجة تتغير بناءً على ما تختاره في التقرير → استخدم Measure.`,
    example: `-- Calculated Column
Profit Margin % = DIVIDE(Sales[Profit], Sales[Revenue])

-- Measure
Avg Profit Margin = AVERAGE(Sales[Profit Margin %])`,
    exercises: [
      {
        id: 70,
        type: 'mcq',
        question: 'تريد إضافة عمود "تصنيف العميل" (Gold/Silver/Bronze) بناءً على إجمالي مشترياته. أي نوع تستخدم؟',
        hint: 'القيمة ثابتة لكل عميل ولا تتغير بالفلاتر',
        options: ['Measure', 'Calculated Column', 'Row-Level Security', 'KPI'],
        correctIndex: 1,
      },
      {
        id: 71,
        type: 'mcq',
        question: 'تريد مقياساً يعرض إجمالي المبيعات ويتغير تلقائياً عند اختيار منطقة من الـ Slicer. أي نوع؟',
        hint: 'النتيجة تتغير ديناميكياً بالفلاتر',
        options: ['Calculated Column', 'Measure', 'Calculated Table', 'Named Set'],
        correctIndex: 1,
      },
      {
        id: 72,
        type: 'mcq',
        question: 'ما الفرق في "التخزين" بين Calculated Column وMeasure؟',
        hint: 'فكّر في تأثير كلٍّ منهما على حجم ملف Power Pivot',
        options: [
          'كلاهما لا يُخزَّنان',
          'Calculated Column تُخزَّن في الـ Model وتزيد الحجم، Measure تُحسَّب عند الطلب',
          'Measure تُخزَّن، Calculated Column تُحسَّب',
          'لا فرق في التخزين'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 57,
    title: 'ALL و ALLEXCEPT — التحكم في الفلاتر',
    description: 'إزالة الفلاتر كلها أو جزء منها لحساب نسب ومقارنات احترافية',
    type: 'code',
    codeLang: 'dax',
    content: `## مشكلة Filter Context

في DAX، كل مقياس يُحسَّب ضمن فلاتر الـ Pivot. أحياناً تريد **تجاهل** بعض هذه الفلاتر.

## ALL — إزالة جميع الفلاتر

\`\`\`dax
All Products Sales = CALCULATE(SUM(Sales[Revenue]), ALL(Products))
\`\`\`

هذا المقياس يُرجع إجمالي المبيعات لجميع المنتجات **بغض النظر** عن أي فلتر على جدول Products.

### حساب نسبة المبيعات من الإجمالي

\`\`\`dax
% of Total =
DIVIDE(
    SUM(Sales[Revenue]),
    CALCULATE(SUM(Sales[Revenue]), ALL(Sales))
)
\`\`\`

**النتيجة:** لكل منتج، يظهر نسبته من إجمالي المبيعات الكلي.

### ALL على جدول كامل vs عمود محدد

\`\`\`dax
-- يزيل كل فلاتر الجدول
CALCULATE([Total Sales], ALL(Sales))

-- يزيل فلتر عمود محدد فقط
CALCULATE([Total Sales], ALL(Sales[Region]))
\`\`\`

## ALLEXCEPT — إزالة كل الفلاتر إلا عمود معين

\`\`\`dax
ALLEXCEPT(table, column1, column2, ...)
\`\`\`

\`\`\`dax
% of Category =
DIVIDE(
    SUM(Sales[Revenue]),
    CALCULATE(
        SUM(Sales[Revenue]),
        ALLEXCEPT(Products, Products[Category])
    )
)
\`\`\`

**النتيجة:** نسبة كل منتج من إجمالي فئته — الفلتر على Category يبقى، باقي الفلاتر تُزال.

## ALLSELECTED — مراعاة الفلاتر الخارجية فقط

\`\`\`dax
% of Visible Total =
DIVIDE(
    SUM(Sales[Revenue]),
    CALCULATE(SUM(Sales[Revenue]), ALLSELECTED())
)
\`\`\`

يحسب النسبة من المجموع المرئي (بعد تطبيق الـ Slicer) لا من الكل.

## مثال شامل: تقرير أداء المناطق

\`\`\`dax
Region Sales = SUM(Sales[Revenue])

Total Sales = CALCULATE(SUM(Sales[Revenue]), ALL(Sales))

Region % =
VAR RegionSales = [Region Sales]
VAR TotalSales = [Total Sales]
RETURN
    DIVIDE(RegionSales, TotalSales, 0)
\`\`\`

> 💡 ALL وأخواتها من أكثر الدوال استخداماً في DAX — بدونها لا يمكن حساب نسب أو مقارنات صحيحة.`,
    example: `-- نسبة كل منتج من الإجمالي
% of Total =
DIVIDE(
    SUM(Sales[Revenue]),
    CALCULATE(SUM(Sales[Revenue]), ALL(Sales))
)`,
    exercises: [
      {
        id: 73,
        type: 'mcq',
        question: 'تريد مقياساً يعرض نسبة مبيعات كل منتج من إجمالي المبيعات الكلي (بغض النظر عن أي فلتر). أي دالة تستخدم لإزالة الفلاتر؟',
        hint: 'تريد إزالة جميع الفلاتر عن جدول المبيعات',
        options: ['REMOVEFILTERS', 'ALL', 'FILTER', 'ALLSELECTED'],
        correctIndex: 1,
      },
      {
        id: 74,
        type: 'mcq',
        question: 'ما الفرق بين ALL وALLSELECTED؟',
        hint: 'فكّر في الـ Slicer — هل يؤثر على كل منهما؟',
        options: [
          'لا فرق — كلاهما يزيل جميع الفلاتر',
          'ALL يزيل كل الفلاتر بما فيها الـ Slicer، ALLSELECTED يحترم الـ Slicer',
          'ALLSELECTED أسرع في الأداء',
          'ALL للجداول فقط، ALLSELECTED للأعمدة فقط'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 58,
    title: 'VAR و RETURN — متغيرات DAX',
    description: 'استخدام المتغيرات لكتابة DAX أنظف وأسرع وأسهل في الفهم',
    type: 'code',
    codeLang: 'dax',
    content: `## لماذا VAR/RETURN؟

قبل VAR، كانت الصيغ المعقدة تتطلب تكرار نفس الحسابات:

\`\`\`dax
-- ❌ بدون VAR — تكرار وبطء
YoY Growth % =
DIVIDE(
    SUM(Sales[Revenue]) - CALCULATE(SUM(Sales[Revenue]), SAMEPERIODLASTYEAR(Dates[Date])),
    CALCULATE(SUM(Sales[Revenue]), SAMEPERIODLASTYEAR(Dates[Date]))
)
\`\`\`

\`\`\`dax
-- ✅ مع VAR — واضح وأسرع
YoY Growth % =
VAR CurrentSales = SUM(Sales[Revenue])
VAR PrevYearSales = CALCULATE(SUM(Sales[Revenue]), SAMEPERIODLASTYEAR(Dates[Date]))
RETURN
    DIVIDE(CurrentSales - PrevYearSales, PrevYearSales)
\`\`\`

## بناء جملة VAR

\`\`\`dax
MeasureName =
VAR VariableName1 = expression1
VAR VariableName2 = expression2
RETURN
    result_expression
\`\`\`

## أمثلة عملية

### حساب تصنيف الأداء
\`\`\`dax
Performance Label =
VAR Sales = SUM(Sales[Revenue])
VAR Target = SUM(Targets[Amount])
VAR Achievement = DIVIDE(Sales, Target, 0)
RETURN
    IF(Achievement >= 1, "✅ تجاوز الهدف",
    IF(Achievement >= 0.8, "⚡ قريب من الهدف",
    "❌ تحت الهدف"))
\`\`\`

### تجنب القسمة على صفر بأناقة
\`\`\`dax
Profit Margin =
VAR Revenue = SUM(Sales[Revenue])
VAR Profit = SUM(Sales[Profit])
RETURN
    IF(Revenue = 0, BLANK(), DIVIDE(Profit, Revenue))
\`\`\`

### متغير جدول (Table Variable)
\`\`\`dax
Top 3 Customers =
VAR TopCustomers =
    TOPN(3, Customers, [Total Sales], DESC)
RETURN
    CALCULATE([Total Sales], TopCustomers)
\`\`\`

## قواعد مهمة

1. **VAR تُقيَّم مرة واحدة** — ليست lazy evaluation. يُحسَّب المتغير عند تعريفه.
2. **المتغيرات لا تتأثر بالـ Filter Context** اللاحق داخل CALCULATE.
3. يمكن تعريف متغير **جدول** أو **scalar** أو **column**.

\`\`\`dax
-- ✅ صحيح
VAR x = 10
VAR y = x * 2   -- يستطيع استخدام المتغير السابق
RETURN x + y    -- 30
\`\`\`

> 💡 استخدم VAR دائماً في أي صيغة تتجاوز سطرَين — ستحسّن الأداء وتسهّل القراءة والـ debugging.`,
    example: `Sales vs Target =
VAR CurrentSales = SUM(Sales[Revenue])
VAR Target = SUM(Targets[Amount])
RETURN DIVIDE(CurrentSales, Target, 0)`,
    exercises: [
      {
        id: 75,
        type: 'mcq',
        question: 'ما الفائدة الرئيسية من استخدام VAR في DAX؟',
        hint: 'فكّر في الأداء وقابلية القراءة',
        options: [
          'تمكّن من استخدام Python داخل DAX',
          'تتجنب تكرار الحسابات وتجعل الكود أوضح وأسرع',
          'ضرورية لدوال Time Intelligence فقط',
          'تسمح بتعريف أعمدة جديدة'
        ],
        correctIndex: 1,
      },
      {
        id: 76,
        type: 'mcq',
        question: 'ما الكلمة التي تأتي بعد تعريف المتغيرات في DAX للإشارة إلى النتيجة النهائية؟',
        hint: 'البنية: VAR x = ... ثم ...',
        options: ['OUTPUT', 'RESULT', 'RETURN', 'END'],
        correctIndex: 2,
      }
    ]
  },
];

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
];

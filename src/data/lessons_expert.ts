import { Lesson } from '../types';

export const lessonsExpert: Lesson[] = [
  {
    id: 51,
    title: 'Data Model — نموذج البيانات',
    titleEn: 'Data Model — Building a Relational Model',
    description: 'ادمج جداول متعددة في نموذج واحد وحلّل ملايين الصفوف بسهولة',
    descriptionEn: 'Link multiple tables into one model and analyse millions of rows with ease',
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

> 💡 **قاعدة:** الـ Primary Key — وهي القيم الفريدة — دايماً في جانب "One"، والـ Foreign Key في جانب "Many".`,
    contentEn: `## What is the Data Model?

The Data Model lets you link multiple tables together and analyse them as if they were a single table.
Without it, you would need many VLOOKUP formulas that slow the file down considerably.

## How to access it

Power Pivot → Manage
Or: when creating a Pivot Table, choose "Add this data to the Data Model"

## Star Schema — the ideal structure

\`\`\`
              [Dim_Products]
                    |
[Dim_Dates] — [Fact_Sales] — [Dim_Customers]
                    |
             [Dim_Employees]
\`\`\`

- **Fact Table** — the central table that holds numeric measurements (sales amounts, order quantities)
- **Dimension Tables** — tables that provide descriptive context (products, customers, dates)

## Creating a Relationship

In Power Pivot → Diagram View:
- Drag the shared column from one table to another
- Or: Data → Relationships → New

**Example:**
\`\`\`
Fact_Sales[ProductID] → Dim_Products[ID]
\`\`\`

## Relationship types

| Type | Description | Most common |
|------|-------------|-------------|
| One-to-Many | One product linked to many sales rows | ✅ |
| One-to-One | Rarely needed | - |
| Many-to-Many | Requires a bridge table | ⚠️ |

> 💡 **Rule:** The Primary Key (unique values) always sits on the "One" side; the Foreign Key sits on the "Many" side.`,
    exercises: [
      {
        id: 48,
        type: 'mcq',
        question: 'في Star Schema، ما الفرق بين Fact Table وDimension Table؟',
        questionEn: 'In a Star Schema, what is the difference between a Fact Table and a Dimension Table?',
        hint: 'فكّر في أيهما يحتوي الأرقام وأيهما يحتوي التفاصيل',
        hintEn: 'Think about which one holds numbers and which one holds descriptive details',
        options: [
          'Fact Table للتواريخ، Dimension Table للأرقام',
          'Fact Table يحتوي الأرقام والقياسات، Dimension Table يحتوي التفاصيل والوصف',
          'لا فرق بينهما',
          'Fact Table للمبيعات فقط، Dimension Table لباقي البيانات'
        ],
        optionsEn: [
          'Fact Table stores dates; Dimension Table stores numbers',
          'Fact Table holds numeric measurements; Dimension Table holds descriptive details',
          'There is no difference between them',
          'Fact Table is only for sales; Dimension Table is for everything else'
        ],
        correctIndex: 1,
      },
      {
        id: 49,
        type: 'mcq',
        question: 'لماذا Star Schema أفضل من ضم كل شيء في جدول واحد؟',
        questionEn: 'Why is a Star Schema better than putting everything into a single flat table?',
        hint: 'فكّر في الأداء وحجم البيانات',
        hintEn: 'Think about performance and data size',
        options: [
          'لأنه يبدو أجمل في الشاشة',
          'لأنه يقلل التكرار ويحسّن الأداء وييسّر التحليل',
          'لأن Excel يشترطه',
          'لا توجد فائدة حقيقية'
        ],
        optionsEn: [
          'Because it looks better on screen',
          'Because it reduces redundancy, improves performance, and simplifies analysis',
          'Because Excel requires it',
          'There is no real benefit'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 52,
    title: 'DAX — مقدمة',
    titleEn: 'DAX — Introduction',
    description: 'لغة الصيغ في Power Pivot — بتكتبها في Excel وتحلّل ملايين الصفوف',
    descriptionEn: 'The formula language of Power Pivot — write it in Excel and analyse millions of rows',
    type: 'code',
    codeLang: 'dax',
    content: `## إيه هو DAX؟

اسمه DAX، وهو اختصار لـ Data Analysis Expressions — لغة صيغ طوّرتها شركة Microsoft.
ممكن تستخدمه في Excel عن طريق أداة Power Pivot، وكمان في Power BI.
بيشتغل على الجداول كلها مش على خلية واحدة، ولو اتعلمته صح هتقدر تحلل ملايين الصفوف في ثانية.

## Measure مقابل Calculated Column

### Measure — حساب ديناميكي
\`\`\`dax
Total Sales = SUM(Sales[Amount])
\`\`\`
بيتحسب بناءً على الفلتر اللي شغّال في الـ Pivot Table.
بيتخزن في الـ Data Model مش في الجدول.

### Calculated Column — عمود محسوب
\`\`\`dax
Sales[Profit] = Sales[Revenue] - Sales[Cost]
\`\`\`
بيتحسب لكل صف وبيتخزن في الجدول.

**امتى تستخدم أيهم؟**
- **Measure** — للتجميعات زي SUM, COUNT, AVERAGE — الغالبية العظمى
- **Calculated Column** — لحسابات الصف الواحد زي ربح كل طلب

## Row Context مقابل Filter Context

### Row Context
لما بتحسب Calculated Column — DAX عارف "أنا في أنهي صف؟"

### Filter Context
لما بتحسب Measure — DAX عارف "فيه فلاتر إيه شغّالة دلوقتي؟"
ده هو السر وراء قوة DAX.

## أول 3 دوال لازم تتعلمها

\`\`\`dax
Total Sales = SUM(Sales[Amount])

Sales Count = COUNTROWS(Sales)

Avg Order = AVERAGE(Sales[Amount])
\`\`\``,
    contentEn: `## What is DAX?

DAX = Data Analysis Expressions
A formula language designed specifically for Power Pivot and Power BI.
It resembles Excel formulas but is far more powerful and operates on entire tables.

## Measure vs Calculated Column

### Measure — dynamic calculation
\`\`\`dax
Total Sales = SUM(Sales[Amount])
\`\`\`
Evaluated dynamically based on the current filter context in the Pivot Table.
Stored in the Data Model, not inside the table itself.

### Calculated Column — row-level computation
\`\`\`dax
Sales[Profit] = Sales[Revenue] - Sales[Cost]
\`\`\`
Calculated for every row and stored as a physical column in the table.

**When to use each:**
- **Measure** — for aggregations (SUM, COUNT, AVERAGE) — the vast majority of cases
- **Calculated Column** — for per-row calculations (profit per order, category label)

## Row Context vs Filter Context

### Row Context
When evaluating a Calculated Column — DAX knows "which row am I on?"

### Filter Context
When evaluating a Measure — DAX knows "what filters are currently active?"
This is the secret behind DAX's power.

## The first 3 functions to learn

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
        questionEn: 'What is the difference between a Measure and a Calculated Column in DAX?',
        hint: 'فكّر في أين يتخزن كل منهما وكيف يتحسب',
        hintEn: 'Think about where each is stored and how it is evaluated',
        options: [
          'لا فرق — كلاهما نفس الشيء',
          'Measure يتحسب ديناميكياً بناءً على الفلتر، Calculated Column يتحسب لكل صف ويتخزن في الجدول',
          'Measure يتخزن في الجدول، Calculated Column ديناميكي',
          'Calculated Column أسرع دايماً'
        ],
        optionsEn: [
          'No difference — they are the same thing',
          'A Measure is evaluated dynamically based on the active filter; a Calculated Column is computed per row and stored in the table',
          'A Measure is stored in the table; a Calculated Column is dynamic',
          'A Calculated Column is always faster'
        ],
        correctIndex: 1,
      },
      {
        id: 51,
        type: 'mcq',
        question: 'متى تستخدم Calculated Column بدل Measure؟',
        questionEn: 'When should you use a Calculated Column instead of a Measure?',
        hint: 'فكّر فيما تريد حسابه',
        hintEn: 'Think about what you are trying to compute',
        options: [
          'للتجميعات مثل SUM وAVERAGE',
          'عندما تريد حساب قيمة لكل صف منفرد مثل (الربح = الإيراد - التكلفة)',
          'دايماً — هي الأفضل دايماً',
          'فقط مع التواريخ'
        ],
        optionsEn: [
          'For aggregations like SUM and AVERAGE',
          'When you need a value calculated for each individual row, such as Profit = Revenue - Cost',
          'Always — it is always the better choice',
          'Only when working with dates'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 53,
    title: 'CALCULATE — أهم دالة في DAX',
    titleEn: 'CALCULATE — The Most Important DAX Function',
    description: 'CALCULATE بتغيّر السياق (Context) وتعطيك تحليلات ما كانت ممكنة بدونها',
    descriptionEn: 'CALCULATE modifies the filter context and unlocks analyses that would be impossible otherwise',
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
    contentEn: `## CALCULATE — the heart of DAX

\`\`\`dax
CALCULATE(expression, filter1, filter2, ...)
\`\`\`

Evaluates an expression after modifying the active filter context.

## Simple example

\`\`\`dax
-- Sales for the Sales department only (regardless of the current filter)
Sales Dept Sales =
    CALCULATE(
        SUM(Sales[Amount]),
        Sales[Department] = "Sales"
    )
\`\`\`

## CALCULATE with ALL

\`\`\`dax
-- Each product's percentage of total sales
Sales % of Total =
    DIVIDE(
        SUM(Sales[Amount]),
        CALCULATE(SUM(Sales[Amount]), ALL(Sales))
    )
\`\`\`

\`ALL(Sales)\` removes all filters from the Sales table so the denominator is always the grand total.

## CALCULATE with FILTER

\`\`\`dax
-- Sales from large orders only
Large Orders =
    CALCULATE(
        SUM(Sales[Amount]),
        FILTER(Sales, Sales[Amount] > 10000)
    )
\`\`\`

## Variables in DAX (VAR)

\`\`\`dax
Sales vs Target =
VAR CurrentSales = SUM(Sales[Amount])
VAR Target = SUM(Budget[Target])
VAR Diff = CurrentSales - Target
RETURN
    IF(Diff > 0, "✅ Above target", "❌ Below target")
\`\`\`

\`VAR...RETURN\` significantly improves both performance and readability.

> 💡 **Rule:** Master CALCULATE thoroughly — it underpins around 80% of professional DAX measures.`,
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
        questionEn: 'What does ALL() do inside CALCULATE?',
        hint: 'فكّر في الفلاتر',
        hintEn: 'Think about filters',
        options: [
          'بيجمع كل القيم',
          'بيشيل الفلاتر الموجودة عشان يحسب على كل البيانات',
          'بيختار كل الأعمدة',
          'بيشيل القيم الفارغة'
        ],
        optionsEn: [
          'It sums all values',
          'It removes existing filters so the expression evaluates over the full dataset',
          'It selects all columns',
          'It removes blank values'
        ],
        correctIndex: 1,
      },
      {
        id: 53,
        type: 'mcq',
        question: 'ما فائدة VAR في DAX؟',
        questionEn: 'What is the benefit of using VAR in DAX?',
        hint: 'فكّر في الأداء وسهولة القراءة',
        hintEn: 'Think about performance and readability',
        options: [
          'لا فائدة منها — مجرد اختيار أسلوب',
          'بتحسّن أداء الحساب وبتخلي الكود أوضح وأسهل في الصيانة',
          'مطلوبة دايماً في كل measure',
          'بتحسّن فقط مع CALCULATE'
        ],
        optionsEn: [
          'No benefit — it is purely a style preference',
          'It improves calculation performance and makes the code clearer and easier to maintain',
          'It is required in every measure',
          'It only helps when used inside CALCULATE'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 54,
    title: 'Time Intelligence في DAX',
    titleEn: 'Time Intelligence in DAX',
    description: 'حساب YTD وMTD والمقارنة بالسنة الماضية بكل سهولة',
    descriptionEn: 'Calculate YTD, MTD, and year-over-year comparisons with ease',
    type: 'code',
    codeLang: 'dax',
    content: `## متطلب أساسي — Date Table

دوال Time Intelligence في DAX بتحتاج جدول تواريخ متواصل من غير فجوات.

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
    contentEn: `## Prerequisite: a Date Table

DAX Time Intelligence functions require a continuous date table with no gaps.

\`\`\`dax
-- Auto-generate a Date Table
Date = CALENDARAUTO()
\`\`\`

Then mark it as a Date Table from Power Pivot.

## Key Time Intelligence functions

### TOTALYTD — year-to-date
\`\`\`dax
YTD Sales = TOTALYTD(SUM(Sales[Amount]), 'Date'[Date])
\`\`\`

### TOTALMTD — month-to-date
\`\`\`dax
MTD Sales = TOTALMTD(SUM(Sales[Amount]), 'Date'[Date])
\`\`\`

### SAMEPERIODLASTYEAR — same period last year
\`\`\`dax
Sales LY =
CALCULATE(
    SUM(Sales[Amount]),
    SAMEPERIODLASTYEAR('Date'[Date])
)
\`\`\`

### Year-over-Year growth
\`\`\`dax
YoY Growth % =
VAR CY = SUM(Sales[Amount])
VAR LY = CALCULATE(SUM(Sales[Amount]), SAMEPERIODLASTYEAR('Date'[Date]))
RETURN
    DIVIDE(CY - LY, LY, 0)
\`\`\`

### Rolling 12 months
\`\`\`dax
Rolling 12M =
CALCULATE(
    SUM(Sales[Amount]),
    DATESINPERIOD('Date'[Date], LASTDATE('Date'[Date]), -12, MONTH)
)
\`\`\`

> 💡 Adding a proper Date Table transforms your analysis from basic to professional in seconds.`,
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
        questionEn: 'Why do DAX Time Intelligence functions require a dedicated Date Table?',
        hint: 'فكّر في كيف تعمل دوال التواريخ',
        hintEn: 'Think about how date functions navigate time periods',
        options: [
          'لأن Excel يشترطه',
          'لأن دوال Time Intelligence تتطلب نطاق تواريخ متواصل بدون فجوات لتعمل بشكل صحيح',
          'لتحسين الأداء فقط',
          'هو اختياري وليس ضرورياً'
        ],
        optionsEn: [
          'Because Excel requires it',
          'Because Time Intelligence functions need a contiguous, gap-free date range to work correctly',
          'Only to improve performance',
          'It is optional and not strictly necessary'
        ],
        correctIndex: 1,
      },
      {
        id: 55,
        type: 'mcq',
        question: 'ما الدالة المستخدمة لحساب مبيعات نفس الفترة من السنة الماضية؟',
        questionEn: 'Which function calculates sales for the same period in the previous year?',
        hint: 'اسمها يوصف وظيفتها مباشرة',
        hintEn: 'The name describes its purpose directly',
        options: [
          'LASTYEAR()',
          'PREVIOUSYEAR()',
          'SAMEPERIODLASTYEAR()',
          'DATEADD(, -1, YEAR)'
        ],
        optionsEn: [
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
    titleEn: 'Advanced DAX — RANKX and TOPN',
    description: 'رتّب المنتجات والعملاء واستخرج أفضل N نتيجة ديناميكياً',
    descriptionEn: 'Rank products and customers and dynamically extract the top N results',
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

**Dense مقابل Skip:**
- Dense: 1, 2, 3, 3, 4 — لو تعادل، يكمل من بعده
- Skip: 1, 2, 3, 3, 5 — لو تعادل، يتخطى الرقم

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
    contentEn: `## RANKX — dynamic ranking

\`\`\`dax
Product Rank =
RANKX(
    ALL(Products),       ← the table to rank across
    [Total Sales],       ← the value to rank by
    ,                    ← (leave blank for default)
    DESC,                ← descending order
    Dense                ← Dense = no gaps in rank numbers
)
\`\`\`

**Dense vs Skip:**
- Dense: 1, 2, 3, 3, 4 (ties share the same rank; the next rank is consecutive)
- Skip: 1, 2, 3, 3, 5 (ties share the same rank; the next rank skips the tie count)

## TOPN — best N results

\`\`\`dax
-- Total sales from the top 5 products only
Top 5 Sales =
CALCULATE(
    SUM(Sales[Amount]),
    TOPN(5, Products, [Total Sales])
)
\`\`\`

## CONCATENATEX — concatenate text from a table

\`\`\`dax
-- Names of the top 3 products in a single cell
Top 3 Names =
CONCATENATEX(
    TOPN(3, Products, [Total Sales]),
    Products[Name],
    ", "
)
\`\`\`

## SELECTEDVALUE — detect the active filter selection

\`\`\`dax
-- Display the region currently selected in a Slicer
Selected Region =
SELECTEDVALUE(Regions[Name], "All Regions")
\`\`\`

## Dynamic Measure Selector

\`\`\`dax
Dynamic Metric =
VAR Metric = SELECTEDVALUE(Metrics[MetricName])
RETURN
    SWITCH(Metric,
        "Sales",     [Total Sales],
        "Profit",    [Total Profit],
        "Customers", [Customer Count],
        [Total Sales]
    )
\`\`\`
This lets the user choose which metric to display by picking from a Slicer!`,
    example: `Product Rank =
RANKX(ALL(Products[Name]), [Total Sales], , DESC, Dense)

Top 5 Revenue =
CALCULATE([Total Sales], TOPN(5, Products, [Total Sales]))`,
    exercises: [
      {
        id: 56,
        type: 'mcq',
        question: 'في RANKX، ما الفرق بين Dense وSkip في المعامل الأخير؟',
        questionEn: 'In RANKX, what is the difference between Dense and Skip in the last parameter?',
        hint: 'فكّر فيما يحدث لو تعادل اثنان في الترتيب الثالث',
        hintEn: 'Think about what happens when two items tie for third place',
        options: [
          'لا فرق بينهما',
          'Dense: يكمل الترتيب بدون فجوات (3,3,4). Skip: يتخطى الرقم (3,3,5)',
          'Skip: يكمل الترتيب بدون فجوات. Dense: يتخطى',
          'Dense أسرع في الحساب'
        ],
        optionsEn: [
          'There is no difference between them',
          'Dense: continues ranks without gaps (3,3,4). Skip: jumps over the tied rank (3,3,5)',
          'Skip: continues without gaps. Dense: jumps',
          'Dense is faster to compute'
        ],
        correctIndex: 1,
      },
      {
        id: 57,
        type: 'mcq',
        question: 'ما فائدة SELECTEDVALUE في DAX؟',
        questionEn: 'What is SELECTEDVALUE used for in DAX?',
        hint: 'فكّر في التفاعل مع الـ Slicer',
        hintEn: 'Think about how it interacts with a Slicer',
        options: [
          'تختار أعلى قيمة في العمود',
          'ترجع القيمة المحددة حالياً في Slicer أو Pivot Filter',
          'تحدد نطاق الخلايا',
          'تختار العمود المطلوب'
        ],
        optionsEn: [
          'It selects the highest value in a column',
          'It returns the value currently selected in a Slicer or Pivot Filter',
          'It defines a cell range',
          'It selects a column'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 56,
    title: 'Measures vs Calculated Columns',
    titleEn: 'Measures vs Calculated Columns',
    description: 'الفرق الجوهري بين المقاييس والأعمدة المحسوبة في DAX — ومتى تستخدم كلاً منهما',
    descriptionEn: 'The fundamental difference between DAX Measures and Calculated Columns — and when to use each',
    type: 'code',
    codeLang: 'dax',
    content: `## الفرق الجوهري

ده أهم مفهوم بيغلط فيه المبتدئين في DAX.

| | Calculated Column | Measure |
|--|-------------------|---------|
| الحساب | عند تحميل البيانات (مرة واحدة) | عند تحديث التقرير (ديناميكي) |
| التخزين | في الـ Data Model (يزيد الحجم) | لا تُخزَّن — تُحسَّب عند الطلب |
| السياق | Row Context — صف بصف | Filter Context — المرشّحات النشطة |
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
    contentEn: `## The fundamental difference

This is the concept beginners most commonly get wrong in DAX.

| | Calculated Column | Measure |
|--|-------------------|---------|
| When evaluated | At data load (once) | When the report refreshes (dynamic) |
| Storage | In the Data Model (increases file size) | Not stored — computed on demand |
| Context | Row Context (row by row) | Filter Context (active filters) |
| Use case | Fixed derived data | Metrics that change with Slicers and Filters |

## Calculated Column — physical column

\`\`\`dax
-- Adds a new column to the table
Profit = Sales[Revenue] - Sales[Cost]

-- Evaluated row by row automatically
Full Name = Customers[First Name] & " " & Customers[Last Name]

-- Can be used in Slicers and Filters
Price Category =
    IF(Products[Price] >= 1000, "High", "Low")
\`\`\`

## Measure — dynamic metric

\`\`\`dax
-- Changes based on context (active filters)
Total Sales = SUM(Sales[Revenue])

-- You cannot reference Sales[Revenue] directly in a Measure
-- because Measures do not operate row by row
\`\`\`

## When to use each

### Use a Calculated Column when:
- You want to classify data (A/B/C, High/Medium/Low)
- You need a derived column to link two tables
- The value is static and does not change with filters (customer age, product tier)

### Use a Measure when:
- You need a sum, average, or percentage
- The result should change based on Slicers and filters
- You are comparing time periods (YoY, MoM)

## The most common mistake

\`\`\`dax
-- ❌ Wrong: you cannot reference columns directly in a Measure
Wrong Measure = Sales[Revenue] - Sales[Cost]

-- ✅ Correct
Correct Measure = SUM(Sales[Revenue]) - SUM(Sales[Cost])
\`\`\`

## Implicit vs Explicit Measures

\`\`\`dax
-- Implicit: drag a column to Pivot Values → Excel auto-sums it
-- Problem: no control over the calculation logic

-- Explicit: write the measure yourself
Total Revenue = SUM(Sales[Revenue])
-- Better: full control + can be referenced by other measures
\`\`\`

> 💡 **Golden rule:** If the result should change based on what a user selects in the report → use a Measure.`,
    example: `-- Calculated Column
Profit Margin % = DIVIDE(Sales[Profit], Sales[Revenue])

-- Measure
Avg Profit Margin = AVERAGE(Sales[Profit Margin %])`,
    exercises: [
      {
        id: 70,
        type: 'mcq',
        question: 'تريد إضافة عمود "تصنيف العميل" (Gold/Silver/Bronze) بناءً على إجمالي مشترياته. أي نوع تستخدم؟',
        questionEn: 'You want to add a "Customer Tier" column (Gold/Silver/Bronze) based on their total purchases. Which type do you use?',
        hint: 'القيمة ثابتة لكل عميل ولا تتغير بالفلاتر',
        hintEn: 'The value is fixed per customer and does not change with filters',
        options: ['Measure', 'Calculated Column', 'Row-Level Security', 'KPI'],
        optionsEn: ['Measure', 'Calculated Column', 'Row-Level Security', 'KPI'],
        correctIndex: 1,
      },
      {
        id: 71,
        type: 'mcq',
        question: 'تريد مقياساً يعرض إجمالي المبيعات ويتغير تلقائياً عند اختيار منطقة من الـ Slicer. أي نوع؟',
        questionEn: 'You want a metric that shows total sales and updates automatically when a region is selected from a Slicer. Which type do you use?',
        hint: 'النتيجة تتغير ديناميكياً بالفلاتر',
        hintEn: 'The result changes dynamically based on filters',
        options: ['Calculated Column', 'Measure', 'Calculated Table', 'Named Set'],
        optionsEn: ['Calculated Column', 'Measure', 'Calculated Table', 'Named Set'],
        correctIndex: 1,
      },
      {
        id: 72,
        type: 'mcq',
        question: 'ما الفرق في "التخزين" بين Calculated Column وMeasure؟',
        questionEn: 'What is the difference in "storage" between a Calculated Column and a Measure?',
        hint: 'فكّر في تأثير كلٍّ منهما على حجم ملف Power Pivot',
        hintEn: 'Think about how each affects the Power Pivot file size',
        options: [
          'كلاهما لا يُخزَّنان',
          'Calculated Column تُخزَّن في الـ Model وتزيد الحجم، Measure تُحسَّب عند الطلب',
          'Measure تُخزَّن، Calculated Column تُحسَّب',
          'لا فرق في التخزين'
        ],
        optionsEn: [
          'Neither is stored',
          'A Calculated Column is stored in the Model and increases file size; a Measure is computed on demand',
          'A Measure is stored; a Calculated Column is computed on demand',
          'There is no difference in storage'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 57,
    title: 'ALL و ALLEXCEPT — التحكم في الفلاتر',
    titleEn: 'ALL and ALLEXCEPT — Controlling Filters',
    description: 'إزالة الفلاتر كلها أو جزء منها لحساب نسب ومقارنات احترافية',
    descriptionEn: 'Remove all or selected filters to calculate professional-grade percentages and comparisons',
    type: 'code',
    codeLang: 'dax',
    content: `## مشكلة Filter Context

في DAX، كل مقياس بيتحسب جوّا فلاتر الـ Pivot. أحياناً بتحتاج **تتجاهل** بعض الفلاتر دي.

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
    contentEn: `## The Filter Context problem

In DAX, every measure is evaluated within the active filters of the Pivot Table. Sometimes you need to **ignore** some of those filters.

## ALL — remove all filters

\`\`\`dax
All Products Sales = CALCULATE(SUM(Sales[Revenue]), ALL(Products))
\`\`\`

This measure returns total sales across all products **regardless** of any filter applied to the Products table.

### Percentage of total sales

\`\`\`dax
% of Total =
DIVIDE(
    SUM(Sales[Revenue]),
    CALCULATE(SUM(Sales[Revenue]), ALL(Sales))
)
\`\`\`

**Result:** each product shows its share of the overall total, no matter what filters are active.

### ALL on a full table vs a specific column

\`\`\`dax
-- Remove all filters from the entire table
CALCULATE([Total Sales], ALL(Sales))

-- Remove the filter on one column only
CALCULATE([Total Sales], ALL(Sales[Region]))
\`\`\`

## ALLEXCEPT — remove all filters except specified columns

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

**Result:** each product's share within its own category — the Category filter is preserved while all other filters are cleared.

## ALLSELECTED — respect only external (Slicer) filters

\`\`\`dax
% of Visible Total =
DIVIDE(
    SUM(Sales[Revenue]),
    CALCULATE(SUM(Sales[Revenue]), ALLSELECTED())
)
\`\`\`

Computes the percentage relative to the visible subtotal (after Slicer selections) rather than the grand total.

## Complete example: regional performance report

\`\`\`dax
Region Sales = SUM(Sales[Revenue])

Total Sales = CALCULATE(SUM(Sales[Revenue]), ALL(Sales))

Region % =
VAR RegionSales = [Region Sales]
VAR TotalSales = [Total Sales]
RETURN
    DIVIDE(RegionSales, TotalSales, 0)
\`\`\`

> 💡 ALL and its variants are among the most frequently used DAX functions — without them, accurate percentages and comparisons are not possible.`,
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
        questionEn: 'You want a measure showing each product\'s percentage of total sales (ignoring all active filters). Which function removes the filters?',
        hint: 'تريد إزالة جميع الفلاتر عن جدول المبيعات',
        hintEn: 'You need to remove all filters from the Sales table',
        options: ['REMOVEFILTERS', 'ALL', 'FILTER', 'ALLSELECTED'],
        optionsEn: ['REMOVEFILTERS', 'ALL', 'FILTER', 'ALLSELECTED'],
        correctIndex: 1,
      },
      {
        id: 74,
        type: 'mcq',
        question: 'ما الفرق بين ALL وALLSELECTED؟',
        questionEn: 'What is the difference between ALL and ALLSELECTED?',
        hint: 'فكّر في الـ Slicer — هل يؤثر على كل منهما؟',
        hintEn: 'Think about the Slicer — does it affect both?',
        options: [
          'لا فرق — كلاهما يزيل جميع الفلاتر',
          'ALL يزيل كل الفلاتر بما فيها الـ Slicer، ALLSELECTED يحترم الـ Slicer',
          'ALLSELECTED أسرع في الأداء',
          'ALL للجداول فقط، ALLSELECTED للأعمدة فقط'
        ],
        optionsEn: [
          'No difference — both remove all filters',
          'ALL removes all filters including Slicer selections; ALLSELECTED respects Slicer selections',
          'ALLSELECTED is faster',
          'ALL works on tables only; ALLSELECTED works on columns only'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 58,
    title: 'VAR و RETURN — متغيرات DAX',
    titleEn: 'VAR and RETURN — DAX Variables',
    description: 'استخدام المتغيرات لكتابة DAX أنظف وأسرع وأسهل في الفهم',
    descriptionEn: 'Use variables to write cleaner, faster, and more readable DAX formulas',
    type: 'code',
    codeLang: 'dax',
    content: `## ليه VAR/RETURN؟

قبل VAR، الصيغ المعقدة كانت بتحتاج تكرار نفس الحسابات:

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
    contentEn: `## Why use VAR/RETURN?

Before VAR, complex formulas required repeating the same sub-expression multiple times:

\`\`\`dax
-- ❌ Without VAR — repetition and slower performance
YoY Growth % =
DIVIDE(
    SUM(Sales[Revenue]) - CALCULATE(SUM(Sales[Revenue]), SAMEPERIODLASTYEAR(Dates[Date])),
    CALCULATE(SUM(Sales[Revenue]), SAMEPERIODLASTYEAR(Dates[Date]))
)
\`\`\`

\`\`\`dax
-- ✅ With VAR — clear and faster
YoY Growth % =
VAR CurrentSales = SUM(Sales[Revenue])
VAR PrevYearSales = CALCULATE(SUM(Sales[Revenue]), SAMEPERIODLASTYEAR(Dates[Date]))
RETURN
    DIVIDE(CurrentSales - PrevYearSales, PrevYearSales)
\`\`\`

## VAR syntax

\`\`\`dax
MeasureName =
VAR VariableName1 = expression1
VAR VariableName2 = expression2
RETURN
    result_expression
\`\`\`

## Practical examples

### Performance rating label
\`\`\`dax
Performance Label =
VAR Sales = SUM(Sales[Revenue])
VAR Target = SUM(Targets[Amount])
VAR Achievement = DIVIDE(Sales, Target, 0)
RETURN
    IF(Achievement >= 1, "✅ Exceeded target",
    IF(Achievement >= 0.8, "⚡ Close to target",
    "❌ Below target"))
\`\`\`

### Graceful divide-by-zero handling
\`\`\`dax
Profit Margin =
VAR Revenue = SUM(Sales[Revenue])
VAR Profit = SUM(Sales[Profit])
RETURN
    IF(Revenue = 0, BLANK(), DIVIDE(Profit, Revenue))
\`\`\`

### Table variable
\`\`\`dax
Top 3 Customers =
VAR TopCustomers =
    TOPN(3, Customers, [Total Sales], DESC)
RETURN
    CALCULATE([Total Sales], TopCustomers)
\`\`\`

## Important rules

1. **VAR is evaluated eagerly** — not lazily. The variable is computed at the point of declaration.
2. **Variables are not affected by subsequent Filter Context changes** inside CALCULATE.
3. A variable can hold a **scalar**, a **table**, or a **column**.

\`\`\`dax
-- ✅ Valid
VAR x = 10
VAR y = x * 2   -- can reference a previously defined variable
RETURN x + y    -- returns 30
\`\`\`

> 💡 Use VAR in any formula longer than two lines — it will improve performance and make reading and debugging much easier.`,
    example: `Sales vs Target =
VAR CurrentSales = SUM(Sales[Revenue])
VAR Target = SUM(Targets[Amount])
RETURN DIVIDE(CurrentSales, Target, 0)`,
    exercises: [
      {
        id: 75,
        type: 'mcq',
        question: 'ما الفائدة الرئيسية من استخدام VAR في DAX؟',
        questionEn: 'What is the primary benefit of using VAR in DAX?',
        hint: 'فكّر في الأداء وقابلية القراءة',
        hintEn: 'Think about performance and readability',
        options: [
          'تمكّن من استخدام Python داخل DAX',
          'تتجنب تكرار الحسابات وتجعل الكود أوضح وأسرع',
          'ضرورية لدوال Time Intelligence فقط',
          'تسمح بتعريف أعمدة جديدة'
        ],
        optionsEn: [
          'It enables Python code inside DAX',
          'It avoids repeating calculations and makes the formula clearer and faster',
          'It is only needed for Time Intelligence functions',
          'It allows defining new columns'
        ],
        correctIndex: 1,
      },
      {
        id: 76,
        type: 'mcq',
        question: 'ما الكلمة التي تأتي بعد تعريف المتغيرات في DAX للإشارة إلى النتيجة النهائية؟',
        questionEn: 'Which keyword follows the variable declarations in DAX to specify the final result?',
        hint: 'البنية: VAR x = ... ثم ...',
        hintEn: 'The structure is: VAR x = ... then ...',
        options: ['OUTPUT', 'RESULT', 'RETURN', 'END'],
        optionsEn: ['OUTPUT', 'RESULT', 'RETURN', 'END'],
        correctIndex: 2,
      }
    ]
  },
];

import { Lesson } from '../types';

export const lessonsAdvanced: Lesson[] = [
  {
    id: 31,
    title: 'تنظيف البيانات',
    titleEn: 'Data Cleaning',
    description: 'كيف تتعامل مع البيانات المكررة والخاطئة قبل أي تحليل',
    descriptionEn: 'How to handle duplicate and erroneous data before any analysis',
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
    contentEn: `## Why is Data Cleaning Important?

**"Garbage in, garbage out"** — if the data is wrong, the results will be wrong.
Data cleaning typically takes up 60–80% of an analyst's time.

## Removing Duplicates

**Quick method:**
1. Select the table
2. Data → Remove Duplicates
3. Choose the columns that define a duplicate

**Detecting duplicates with COUNTIF:**
\`\`\`excel
=COUNTIF($A$2:$A$100, A2) > 1   → TRUE = duplicate
\`\`\`

## Detecting Blank Values

\`\`\`excel
=COUNTBLANK(A2:A100)   → count of empty cells
=ISBLANK(A2)           → is this cell empty?
\`\`\`

**Filling blanks:**
- Ctrl + G → Special → Blanks → type the value → Ctrl + Enter

## Converting Numbers Stored as Text

\`\`\`excel
=VALUE("123")    → 123   (text → number)
=TEXT(123, "0")  → "123" (number → text)
\`\`\`

Or use: Data → Text to Columns → Finish (for the entire range)

## Standardizing Text Formatting

\`\`\`excel
=TRIM(PROPER(A2))    ← removes extra spaces + standardizes capitalization
\`\`\`

## Flash Fill — Excel's Smart Auto-Fill

Type the pattern in the first cell, then press **Ctrl + E**.
Excel automatically completes the rest based on the detected pattern.

Example: you have "John Smith" and want the first name only.
Type "John" in the adjacent cell and press Ctrl + E.`,
    exercises: [
      {
        id: 32,
        type: 'mcq',
        question: 'ما الصيغة الصحيحة لاكتشاف القيم المكررة في العمود A؟',
        questionEn: 'What is the correct formula to detect duplicate values in column A?',
        hint: 'استخدم COUNTIF مع نطاق مطلق',
        hintEn: 'Use COUNTIF with an absolute range',
        options: [
          '=DUPLICATE(A2)',
          '=COUNTIF($A$2:$A$100, A2) > 1',
          '=IF(A2=A3, TRUE, FALSE)',
          '=ISDUP(A2:A100)'
        ],
        optionsEn: [
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
        questionEn: 'What is the keyboard shortcut for Flash Fill?',
        hint: 'مش Ctrl + F — فكّر في حرف E',
        hintEn: 'Not Ctrl + F — think of the letter E',
        options: ['Ctrl + F', 'Ctrl + E', 'Alt + F', 'Ctrl + D'],
        optionsEn: ['Ctrl + F', 'Ctrl + E', 'Alt + F', 'Ctrl + D'],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 32,
    title: 'Pivot Tables — الجداول المحورية',
    titleEn: 'Pivot Tables',
    description: 'لخّص آلاف الصفوف في ثوانٍ بدون ما تكتب صيغة واحدة',
    descriptionEn: 'Summarize thousands of rows in seconds without writing a single formula',
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
    contentEn: `## What is a Pivot Table?

A Pivot Table is a tool that lets you summarize and analyze large datasets extremely quickly through drag and drop — no formulas required.

## How to Create a Pivot Table

1. Click anywhere inside your data
2. Insert → PivotTable
3. Choose the location (new sheet or existing sheet)
4. Click OK

## The Four Areas

\`\`\`
┌─────────────────────────────────────┐
│  FILTERS    │  COLUMNS              │
│─────────────┼───────────────────────│
│  ROWS       │  VALUES               │
└─────────────────────────────────────┘
\`\`\`

- **Rows** — data organized as row labels (e.g., departments)
- **Columns** — data organized as column headers (e.g., months)
- **Values** — the numbers to calculate (e.g., sum of sales)
- **Filters** — a filter applied to the entire table

## Practical Example

Your data:
| Department | Month | Sales |
|------------|-------|-------|
| Sales | January | 5000 |
| Marketing | January | 3000 |
| Sales | February | 6000 |

Pivot Table setup:
- Rows: Department
- Columns: Month
- Values: Sum of Sales

## Formatting Values

Double-click "Sum of Sales" in the field list:
- **Value Field Settings** → choose Sum, Count, or Average
- **Number Format** → format the numbers

## Slicers — Visual Filters

Insert → Slicer → choose the field
Adds interactive buttons that make filtering easier and more intuitive.

> 💡 **Tip:** Convert your data to an Excel Table first (Ctrl+T) before creating the Pivot — this ensures automatic refresh works correctly when new data is added.`,
    exercises: [
      {
        id: 34,
        type: 'mcq',
        question: 'في Pivot Table، أي منطقة تضع فيها "مجموع المبيعات"؟',
        questionEn: 'In a Pivot Table, which area do you place "Sum of Sales" in?',
        hint: 'هي المنطقة اللي بتحسب الأرقام',
        hintEn: 'It is the area where numbers are calculated',
        options: ['Rows', 'Columns', 'Filters', 'Values'],
        optionsEn: ['Rows', 'Columns', 'Filters', 'Values'],
        correctIndex: 3,
      },
      {
        id: 35,
        type: 'mcq',
        question: 'كيف تضيف Slicer لـ Pivot Table؟',
        questionEn: 'How do you add a Slicer to a Pivot Table?',
        hint: 'من تبويب Insert',
        hintEn: 'From the Insert tab',
        options: [
          'Data → Slicer',
          'Insert → Slicer',
          'PivotTable Analyze → Slicer',
          'Home → Slicer'
        ],
        optionsEn: [
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
    titleEn: 'Charts & Dashboards',
    description: 'اختار الرسم الصح لبياناتك واصنع Dashboard احترافي',
    descriptionEn: 'Choose the right chart type for your data and build a professional dashboard',
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
    contentEn: `## What Are the Differences Between Chart Types?

### Column/Bar Chart — For Comparisons
\`\`\`
When to use: comparing different categories
Example: sales per department
\`\`\`

### Line Chart — For Trends Over Time
\`\`\`
When to use: showing how a value changes over time
Example: monthly sales throughout the year
\`\`\`

### Pie/Donut Chart — For Proportions
\`\`\`
When to use: showing parts of a whole
Example: each product's share of total sales
Warning: avoid if you have more than 5 segments
\`\`\`

### Scatter Plot — For Relationships
\`\`\`
When to use: exploring the relationship between two variables
Example: does marketing spend affect sales?
\`\`\`

## Dashboard Fundamentals

A good dashboard must achieve:

1. **Clarity** — a single glance gives the full picture
2. **Consistency** — same colors and fonts throughout
3. **Interactivity** — Slicers and Filters let the user explore
4. **Simplicity** — do not cram every chart type onto one page

## Steps to Build a Dashboard

\`\`\`
1. Prepare the data (Excel Table)
     ↓
2. Create Pivot Tables for summarization
     ↓
3. Add charts from each Pivot
     ↓
4. Move everything to a Dashboard sheet
     ↓
5. Add Slicers and connect them to all Pivots
\`\`\`

## Connecting a Slicer to Multiple Pivots

Click on the Slicer → PivotTable Analyze → Report Connections → select all Pivot Tables you want it to control.

> 💡 **Tip:** Design the Dashboard on a separate sheet and lock the cells. Users can view the results without accidentally editing the underlying data.`,
    exercises: [
      {
        id: 36,
        type: 'mcq',
        question: 'أي نوع رسم بياني تستخدم لعرض تغير المبيعات على مدار 12 شهر؟',
        questionEn: 'Which chart type would you use to display how sales changed over 12 months?',
        hint: 'فكّر في أي رسم يُظهر الاتجاهات عبر الزمن',
        hintEn: 'Think about which chart shows trends over time',
        options: ['Pie Chart', 'Column Chart', 'Line Chart', 'Scatter Plot'],
        optionsEn: ['Pie Chart', 'Column Chart', 'Line Chart', 'Scatter Plot'],
        correctIndex: 2,
      },
      {
        id: 37,
        type: 'mcq',
        question: 'كيف تربط Slicer واحد بأكثر من Pivot Table؟',
        questionEn: 'How do you connect a single Slicer to more than one Pivot Table?',
        hint: 'ابحث في تبويب PivotTable Analyze',
        hintEn: 'Look in the PivotTable Analyze tab',
        options: [
          'تنسخ الـ Slicer لكل Pivot',
          'PivotTable Analyze → Report Connections',
          'Data → Connect Slicers',
          'مستحيل — كل Pivot يحتاج Slicer منفصل'
        ],
        optionsEn: [
          'Copy the Slicer for each Pivot',
          'PivotTable Analyze → Report Connections',
          'Data → Connect Slicers',
          'Impossible — each Pivot needs its own Slicer'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 34,
    title: 'Data Validation — التحقق من البيانات',
    titleEn: 'Data Validation',
    description: 'تحكّم فيما يُدخله المستخدم في الخلايا ومنع الأخطاء من البداية',
    descriptionEn: 'Control what users can enter into cells and prevent errors from the start',
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
    contentEn: `## What is Data Validation?

Data Validation prevents users from entering incorrect data into cells.
Data → Data Validation

## Validation Types

### List — Dropdown List
\`\`\`
Allow: List
Source: Yes,No,Pending
\`\`\`
Or from a range: \`=$A$1:$A$5\`

### Whole Number — Integer Values
\`\`\`
Allow: Whole number
Data: between 1 and 100
\`\`\`

### Date — Date Values
\`\`\`
Allow: Date
Data: greater than or equal
Start date: =TODAY()
\`\`\`

### Custom — Custom Formula
\`\`\`excel
=LEN(A1)=10          ← ensure exactly 10 characters
=COUNTIF($A:$A,A1)=1 ← prevent duplicates
=ISNUMBER(A1)        ← ensure the value is a number
\`\`\`

## Input Message & Error Alert

- **Input Message** — a tooltip shown when the user clicks the cell
- **Error Alert** — an error message if the user enters an invalid value

## Practical Example

You are building an order form and want:
- Quantity field: whole numbers between 1 and 999
- Status field: dropdown list (New, In Progress, Completed, Cancelled)
- Date field: a date that is not in the past`,
    exercises: [
      {
        id: 38,
        type: 'mcq',
        question: 'لإنشاء قائمة منسدلة في خلية، تختار في Data Validation تحت Allow:',
        questionEn: 'To create a dropdown list in a cell, what do you select under Allow in Data Validation?',
        hint: 'ابحث عن الخيار اللي يعطيك dropdown',
        hintEn: 'Look for the option that provides a dropdown',
        options: ['Dropdown', 'List', 'Custom', 'Text length'],
        optionsEn: ['Dropdown', 'List', 'Custom', 'Text length'],
        correctIndex: 1,
      },
      {
        id: 39,
        type: 'mcq',
        question: 'ما الصيغة المخصصة اللي تمنع التكرار في العمود A؟',
        questionEn: 'What custom formula prevents duplicate entries in column A?',
        hint: 'تحتاج تعدّ كم مرة ظهرت القيمة',
        hintEn: 'You need to count how many times the value appears',
        options: [
          '=UNIQUE(A1)',
          '=COUNTIF($A:$A,A1)=1',
          '=NOT(DUPLICATE(A1))',
          '=ISUNIQUE(A1)'
        ],
        optionsEn: [
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
    titleEn: 'Dynamic Arrays — FILTER, SORT, UNIQUE, SEQUENCE',
    description: 'دوال الـ Dynamic Arrays في Excel 365 التي تغيّر طريقة التعامل مع البيانات كلياً',
    descriptionEn: 'Excel 365 Dynamic Array functions that completely transform how you work with data',
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
\`*\` = AND، \`+\` = OR في الـ arrays.

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
    contentEn: `## What are Dynamic Arrays?

One of the most significant updates in Excel 365 — functions that return an **array of results** that automatically spill into adjacent cells without pressing Ctrl+Shift+Enter.

## FILTER — Dynamic Data Filtering

\`\`\`excel
=FILTER(array, include, [if_empty])
\`\`\`

\`\`\`excel
=FILTER(A2:C10, B2:B10="Sales")
\`\`\`
Returns all rows where column B equals "Sales".

### Filter with Multiple Conditions
\`\`\`excel
=FILTER(A2:C10, (B2:B10="Sales") * (C2:C10>5000))
\`\`\`
\`*\` = AND, \`+\` = OR when working with arrays.

### With a Message When No Results Are Found
\`\`\`excel
=FILTER(A2:C10, B2:B10="Sales", "No results found")
\`\`\`

## SORT — Dynamic Sorting

\`\`\`excel
=SORT(array, [sort_index], [sort_order], [by_col])
\`\`\`

\`\`\`excel
=SORT(A2:B10, 2, -1)   → sort descending by the second column
=SORT(A2:B10, 2, 1)    → sort ascending
\`\`\`

### SORTBY — Sort Using a Column Outside the Range
\`\`\`excel
=SORTBY(A2:B10, C2:C10, -1)   → sort A:B descending based on column C
\`\`\`

## UNIQUE — Distinct Values Only

\`\`\`excel
=UNIQUE(A2:A20)                → a list with no duplicates
=UNIQUE(A2:A20, FALSE, TRUE)   → values that appear exactly once
\`\`\`

## SEQUENCE — Generate a Number Series

\`\`\`excel
=SEQUENCE(rows, [cols], [start], [step])
\`\`\`

\`\`\`excel
=SEQUENCE(5)           → {1;2;3;4;5}
=SEQUENCE(3, 4)        → a 3×4 array
=SEQUENCE(12, 1, 1, 1) → numbers 1 through 12
\`\`\`

### Application: Generate a Monthly Calendar
\`\`\`excel
=SEQUENCE(6, 7, DATE(2024,1,1) - WEEKDAY(DATE(2024,1,1),2) + 1)
\`\`\`

## Combining Functions

\`\`\`excel
=SORT(UNIQUE(A2:A100))   → a sorted list with no duplicates

=SORT(
  FILTER(A2:C50, C2:C50 > AVERAGE(C2:C50)),
  3, -1
)
→ products above the average, sorted descending
\`\`\`

## SPILL — Automatic Spill Behavior

Results automatically "spill" into neighboring cells. If those cells are occupied, a #SPILL! error appears.

\`\`\`excel
=A1#    ← refers to the entire spill range produced by A1
\`\`\`

> 💡 These functions require **Excel 365** or **Excel 2021**. In older versions, use Power Query to achieve the same results.`,
    example: '=UNIQUE(A2:A5)',
    sheet: {
      headers: ['القسم', 'المبيعات'],
      headersEn: ['Department', 'Sales'],
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
        questionEn: 'You want to filter rows where sales exceed 5000. Which formula is correct?',
        hint: 'الشرط في المعامل الثاني من FILTER',
        hintEn: 'The condition goes in the second argument of FILTER',
        options: [
          '=FILTER(A2:B5, ">5000")',
          '=FILTER(A2:B5, B2:B5>5000)',
          '=FILTER(B2:B5>5000, A2:B5)',
          '=FILTERIF(A2:B5, B2:B5, ">5000")'
        ],
        optionsEn: [
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
        questionEn: 'Which function returns a list without duplicate values?',
        hint: 'اسمها يدل على المعنى مباشرةً',
        hintEn: 'Its name directly reflects its purpose',
        options: ['DISTINCT', 'UNIQUE', 'NODUPS', 'REMOVE_DUPS'],
        optionsEn: ['DISTINCT', 'UNIQUE', 'NODUPS', 'REMOVE_DUPS'],
        correctIndex: 1,
      },
      {
        id: 52,
        type: 'mcq',
        question: 'في FILTER، كيف تدمج شرطين بـ AND؟',
        questionEn: 'In FILTER, how do you combine two conditions with AND?',
        hint: 'في Arrays، العمليات المنطقية تختلف عن AND() العادية',
        hintEn: 'In arrays, logical operations differ from the standard AND() function',
        options: [
          'FILTER(array, AND(cond1, cond2))',
          'FILTER(array, cond1 * cond2)',
          'FILTER(array, cond1 + cond2)',
          'FILTER(array, cond1, cond2)'
        ],
        optionsEn: [
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
    titleEn: 'What-If Analysis — Scenario Analysis',
    description: 'Goal Seek و Scenario Manager و Data Tables لاتخاذ قرارات مدروسة',
    descriptionEn: 'Goal Seek, Scenario Manager, and Data Tables for making informed decisions',
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
    contentEn: `## What is What-If Analysis?

Tools that help you answer the question: "**What would happen if...?**"

Data → What-If Analysis

## Goal Seek — Work Backwards from a Target

"I want to reach a specific result — what input value do I need?"

### Example: Monthly Loan Payment
- You have a loan of 100,000 with a 12% annual interest rate
- You want the monthly payment to **not exceed 2,500**
- Formula: \`=PMT(12%/12, B3, -100000)\`

\`\`\`
Data → What-If Analysis → Goal Seek
Set cell: the formula cell (monthly payment)
To value: 2500
By changing cell: the number of months cell
\`\`\`

### Example: Break-Even Point
- Revenue = Fixed Costs + (Variable Cost × Quantity)
- "How many units do you need to sell to break even (profit = 0)?"

## Scenario Manager — Comparing Scenarios

Compare "optimistic" vs "pessimistic" vs "moderate" scenarios:

\`\`\`
Data → What-If Analysis → Scenario Manager
Add → scenario name + changing cells + their values
\`\`\`

Then click "Summary" to generate an automatic comparison report.

### Example: Impact of Growth Rate on Revenue

| Scenario | Growth Rate | Expected Revenue |
|----------|-------------|-----------------|
| Optimistic | 20% | 1,200,000 |
| Moderate | 10% | 1,100,000 |
| Pessimistic | -5% | 950,000 |

## Data Tables — One or Two Variable Analysis

### One-Variable Data Table
Test the impact of different values for a single variable on the outcome:

\`\`\`
Place the formula at the top of the table
List the possible values in a column
Data → What-If Analysis → Data Table
Column input cell: the variable cell
\`\`\`

### Two-Variable Data Table
Test the impact of two variables simultaneously — for example, prices × quantities:

| | 100 | 200 | 300 |  ← quantities |
|--|-----|-----|-----|
| 10 | 1000 | 2000 | 3000 |  ← prices |
| 15 | 1500 | 3000 | 4500 |
| 20 | 2000 | 4000 | 6000 |

## Solver — Multi-Variable Optimization

A more powerful tool than Goal Seek that handles multiple variables and constraints:
\`\`\`
Data → Solver
Objective: maximize profit
Variables: production quantities
Constraints: do not exceed production capacity
\`\`\`

> 💡 Solver must be enabled first: File → Options → Add-ins → Solver Add-in.`,
    exercises: [
      {
        id: 53,
        type: 'mcq',
        question: 'أي أداة تستخدم لمعرفة "كم وحدة تحتاج لتحقيق ربح 50,000 جنيه"؟',
        questionEn: 'Which tool do you use to find out "how many units you need to sell to achieve a profit of 50,000"?',
        hint: 'تريد تحديد قيمة هدف معينة',
        hintEn: 'You want to hit a specific target value',
        options: ['Scenario Manager', 'Data Table', 'Goal Seek', 'Solver'],
        optionsEn: ['Scenario Manager', 'Data Table', 'Goal Seek', 'Solver'],
        correctIndex: 2,
      },
      {
        id: 54,
        type: 'mcq',
        question: 'ما الأداة المناسبة لمقارنة 3 سيناريوهات (متفائل، معتدل، متشائم) وإنشاء تقرير تلقائي؟',
        questionEn: 'Which tool is best for comparing 3 scenarios (optimistic, moderate, pessimistic) and generating an automatic summary report?',
        hint: 'اسمها يدل مباشرةً على إدارة السيناريوهات',
        hintEn: 'Its name directly refers to managing scenarios',
        options: ['Goal Seek', 'Scenario Manager', 'Data Table', 'Solver'],
        optionsEn: ['Goal Seek', 'Scenario Manager', 'Data Table', 'Solver'],
        correctIndex: 1,
      },
      {
        id: 55,
        type: 'mcq',
        question: 'ما الفرق بين Goal Seek و Solver؟',
        questionEn: 'What is the difference between Goal Seek and Solver?',
        hint: 'فكّر في عدد المتغيرات التي تتعامل معها كل منهما',
        hintEn: 'Think about how many variables each tool handles',
        options: [
          'لا فرق — كلاهما متطابق',
          'Goal Seek متغير واحد بلا قيود، Solver متغيرات متعددة مع قيود',
          'Solver فقط للأعداد الصحيحة',
          'Goal Seek أقوى وأكثر تعقيداً'
        ],
        optionsEn: [
          'No difference — they are identical',
          'Goal Seek handles one variable with no constraints; Solver handles multiple variables with constraints',
          'Solver only works with integers',
          'Goal Seek is more powerful and complex'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 37,
    title: 'Array Formulas — صيغ المصفوفات',
    titleEn: 'Array Formulas',
    description: 'صيغ تعمل على نطاقات كاملة في آنٍ واحد لحل مسائل معقدة',
    descriptionEn: 'Formulas that operate on entire ranges at once to solve complex problems',
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
    contentEn: `## What are Array Formulas?

A regular formula operates on a single cell. An array formula operates on an **entire range** in a single step.

## The Old Way: Ctrl + Shift + Enter

In Excel 2019 and earlier, enter the formula and press **Ctrl+Shift+Enter** instead of just Enter. It appears wrapped in curly braces:
\`\`\`excel
{=SUM(IF(A2:A10="Sales", B2:B10, 0))}
\`\`\`

## The Modern Way: Dynamic Arrays (Excel 365)

In Excel 365, most formulas work as arrays automatically — no special key combination needed.

## Practical Applications

### Conditional Sum (SUMIF alternative without the function)
\`\`\`excel
{=SUM(IF(A2:A10="Sales", B2:B10, 0))}
\`\`\`

### Count Unique Values
\`\`\`excel
{=SUM(1/COUNTIF(A2:A10, A2:A10))}
\`\`\`
How it works: COUNTIF counts how many times each value appears, then 1/count gives each unique value a fractional share that sums to the total distinct count.

### Maximum Value with a Condition
\`\`\`excel
{=MAX(IF(A2:A10="Sales", B2:B10))}
\`\`\`

### SUMPRODUCT as an Array Formula Alternative
SUMPRODUCT works without Ctrl+Shift+Enter:
\`\`\`excel
=SUMPRODUCT((A2:A10="Sales") * B2:B10)
\`\`\`

### Rank Without Duplicates
\`\`\`excel
{=IFERROR(INDEX($A$2:$A$10, MATCH(ROWS($A$2:A2), COUNTIF($A$2:$A$10,"<="&$A$2:$A$10), 0)),"")}
\`\`\`

## When to Use Array Formulas?

| Problem | Solution |
|---------|----------|
| SUMIF with complex text condition | Array SUM+IF |
| Count unique values | SUM(1/COUNTIF) |
| MAX/MIN with a condition | MAX/MIN(IF) |
| Excel 365 available | Use FILTER, UNIQUE instead |

> ⚠️ **Warning:** Large array formulas slow down the workbook. In Excel 365, prefer Dynamic Arrays or SUMPRODUCT whenever possible.`,
    example: '=SUM(IF(A2:A4="مبيعات",B2:B4,0))',
    sheet: {
      headers: ['القسم', 'المبيعات'],
      headersEn: ['Department', 'Sales'],
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
        questionEn: 'What is the keyboard shortcut for entering an Array Formula in Excel 2019?',
        hint: 'ثلاثة مفاتيح معاً بدلاً من Enter فقط',
        hintEn: 'Three keys pressed together instead of just Enter',
        options: [
          'Alt + Enter',
          'Ctrl + Shift + Enter',
          'Shift + Enter',
          'Ctrl + Alt + Enter'
        ],
        optionsEn: [
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
        questionEn: 'Which formula counts the number of unique values in A2:A10 without using the UNIQUE function?',
        hint: 'كل قيمة فريدة تساهم بـ 1/عدد_تكرارها',
        hintEn: 'Each unique value contributes 1 divided by its frequency',
        options: [
          '=COUNTUNIQUE(A2:A10)',
          '{=SUM(1/COUNTIF(A2:A10,A2:A10))}',
          '=COUNT(UNIQUE(A2:A10))',
          '{=SUMIF(A2:A10,"<>",1)}'
        ],
        optionsEn: [
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

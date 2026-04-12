import { Lesson } from '../types';

export const lessonsPowerQuery: Lesson[] = [
  {
    id: 41,
    title: 'مقدمة Power Query',
    titleEn: 'Introduction to Power Query',
    description: 'أقوى أداة في Excel لجلب البيانات وتنظيفها تلقائياً',
    descriptionEn: 'The most powerful Excel tool for importing and cleaning data automatically',
    type: 'concept',
    content: `## إيه هو Power Query؟

اسمه Power Query، وهو أداة ETL مدمجة في Excel من تطوير Microsoft.
اختصار ETL بيعني:
- **E** = Extract — جلب البيانات من أي مصدر
- **T** = Transform — تنظيفها وتحويلها
- **L** = Load — تحميلها لـ Excel

بتلاقيه في: **Data ← Get Data**

## ليه Power Query أحسن من الطريقة اليدوية؟

| الطريقة اليدوية | Power Query |
|----------------|-------------|
| لازم تعيد كل شيء كل مرة | بضغطة زرار Refresh |
| أخطاء بشرية كتير | خطوات محفوظة وقابلة للتكرار |
| بيضيع وقت | يوفّر ساعات كل أسبوع |

## مصادر البيانات

\`\`\`
Excel, CSV, JSON, XML
SQL Server, Access
Web — روابط الإنترنت
Folder — بتدمج ملفات من مجلد كامل
SharePoint, Power BI
\`\`\`

## واجهة Power Query Editor

لما بتفتح Power Query Editor:

\`\`\`
┌─────────────┬────────────────────────────┐
│ Queries     │        Data Preview        │
│  القائمة   │                            │
│  الجانبية  │                            │
├─────────────┴────────────────────────────┤
│            Applied Steps                 │
│     كل خطوة عملتها محفوظة هنا          │
└──────────────────────────────────────────┘
\`\`\`

**Applied Steps** ده الذهب — كل خطوة محفوظة وقابلة للتعديل والحذف.

## الـ Refresh

لما تضيف بيانات جديدة للمصدر:
- Data ← Refresh All
- أو Ctrl + Alt + F5

كل التنظيف بيتطبق تلقائياً على البيانات الجديدة.`,
    contentEn: `## What is Power Query?

Power Query is a built-in ETL tool in Excel:
- **E** = Extract → pull data from any source
- **T** = Transform → clean and reshape it
- **L** = Load → bring it into Excel

Find it at: **Data → Get Data**

## Why Power Query beats manual work

| Manual approach | Power Query |
|----------------|-------------|
| Redo everything each time | One-click Refresh |
| Prone to human error | Steps are saved and fully repeatable |
| Wastes hours | Saves hours every week |

## Supported data sources

\`\`\`
Excel, CSV, JSON, XML
SQL Server, Access
Web (URLs)
Folder (combine files from a directory)
SharePoint, Power BI
\`\`\`

## The Power Query Editor interface

When you open the Power Query Editor:

\`\`\`
┌─────────────┬────────────────────────────┐
│ Queries     │        Data Preview        │
│  (left      │                            │
│   panel)    │                            │
├─────────────┴────────────────────────────┤
│            Applied Steps                 │
│    (every step you performed is here)    │
└──────────────────────────────────────────┘
\`\`\`

**Applied Steps** is the gold feature — every transformation is recorded and can be edited or deleted at any time.

## Refreshing data

When new data is added to the source:
- Data → Refresh All
- Or press Ctrl + Alt + F5

All your cleaning steps are automatically re-applied to the new data.`,
    exercises: [
      {
        id: 40,
        type: 'mcq',
        question: 'ما المقصود بـ ETL في سياق Power Query؟',
        questionEn: 'What does ETL stand for in the context of Power Query?',
        hint: 'كل حرف يمثل خطوة في العملية',
        hintEn: 'Each letter represents a step in the process',
        options: [
          'Execute, Transfer, Load',
          'Extract, Transform, Load',
          'Edit, Test, Launch',
          'Export, Translate, Link'
        ],
        optionsEn: [
          'Execute, Transfer, Load',
          'Extract, Transform, Load',
          'Edit, Test, Launch',
          'Export, Translate, Link'
        ],
        correctIndex: 1,
      },
      {
        id: 41,
        type: 'mcq',
        question: 'ما ميزة Applied Steps في Power Query؟',
        questionEn: 'What is the purpose of Applied Steps in Power Query?',
        hint: 'فكّر في إمكانية إعادة التطبيق',
        hintEn: 'Think about the ability to replay transformations',
        options: [
          'بيحفظ الملف تلقائياً',
          'بيحفظ كل خطوة تنظيف عملتها وتقدر تعيد تطبيقها بضغطة زرار',
          'بيتحكم في الـ Refresh',
          'بيحمي البيانات من التعديل'
        ],
        optionsEn: [
          'It automatically saves the file',
          'It records every cleaning step you perform and lets you re-apply them with one click',
          'It controls the Refresh behavior',
          'It protects data from being edited'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 42,
    title: 'تحويلات Power Query الأساسية',
    titleEn: 'Essential Power Query Transformations',
    description: 'أهم العمليات اللي هتستخدمها يومياً في Power Query',
    descriptionEn: 'The most common operations you will use every day in Power Query',
    type: 'concept',
    content: `## العمليات الأساسية

### Remove Columns — حذف أعمدة
انقر على رأس العمود ← بزر الأيمن ← Remove

### Rename Column — إعادة التسمية
اضغط مرتين على رأس العمود

### Change Type — تغيير نوع البيانات
مهم جداً — Power Query لازم يعرف نوع كل عمود.
\`\`\`
Text, Whole Number, Decimal, Date, True/False
\`\`\`

### Filter Rows — الفلترة
انقر السهم على رأس العمود.

### Remove Duplicates
بزر الأيمن على العمود ← Remove Duplicates

## عمليات التحويل

### Split Column — تقسيم عمود
Transform → Split Column → By Delimiter
مفيد لتقسيم "الاسم الكامل" لـ "اسم أول" و"اسم أخير"

### Merge Columns — دمج أعمدة
حدد عمودين ← Transform → Merge Columns

### Pivot و Unpivot
\`\`\`
Unpivot: من عرضي (Wide) لطولي (Long)
مفيد لتحويل بيانات الأشهر من أعمدة لصفوف
\`\`\`

### Add Custom Column — إضافة عمود محسوب
Add Column → Custom Column
\`\`\`m
[الكمية] * [السعر]
\`\`\`

## Group By — التجميع

Transform → Group By
بيلخّص البيانات زي Pivot Table لكن بيبقى جزء من الـ Query.

\`\`\`
Group by: القسم
New column: إجمالي المبيعات
Operation: Sum of المبيعات
\`\`\``,
    contentEn: `## Core operations

### Remove Columns
Click a column header → right-click → Remove

### Rename Column
Double-click the column header

### Change Type — set the data type
Critical step — Power Query must know the type of every column.
\`\`\`
Text, Whole Number, Decimal, Date, True/False
\`\`\`

### Filter Rows
Click the dropdown arrow on a column header.

### Remove Duplicates
Right-click the column → Remove Duplicates

## Transformation operations

### Split Column
Transform → Split Column → By Delimiter
Useful for splitting "Full Name" into "First Name" and "Last Name"

### Merge Columns
Select two columns → Transform → Merge Columns

### Pivot and Unpivot
\`\`\`
Unpivot: convert wide format to long (tall) format
Useful for turning month columns into rows
\`\`\`

### Add Custom Column — computed column
Add Column → Custom Column
\`\`\`m
[Quantity] * [Price]
\`\`\`

## Group By — aggregation

Transform → Group By
Summarizes data like a Pivot Table but stays part of the query pipeline.

\`\`\`
Group by: Department
New column: Total Sales
Operation: Sum of Sales
\`\`\``,
    exercises: [
      {
        id: 42,
        type: 'mcq',
        question: 'تريد تحويل جدول عرضي (كل شهر في عمود) لجدول طولي (كل شهر في صف). ما العملية المطلوبة؟',
        questionEn: 'You want to convert a wide table (one column per month) into a tall table (one row per month). Which operation do you use?',
        hint: 'من Wide Format لـ Long Format',
        hintEn: 'Going from Wide Format to Long Format',
        options: ['Pivot', 'Unpivot', 'Transpose', 'Merge'],
        optionsEn: ['Pivot', 'Unpivot', 'Transpose', 'Merge'],
        correctIndex: 1,
      },
      {
        id: 43,
        type: 'mcq',
        question: 'ما أهمية خطوة "Change Type" في Power Query؟',
        questionEn: 'Why is the "Change Type" step important in Power Query?',
        hint: 'فكّر فيما يحدث لو Excel ما عرفش نوع البيانات',
        hintEn: 'Think about what happens when Excel does not know a column\'s data type',
        options: [
          'بتغير شكل عرض البيانات فقط',
          'بتخلي الحسابات والفلترة تشتغل صح لأن Excel يعرف نوع كل عمود',
          'بتحمي الخلايا من التعديل',
          'مش مهمة وممكن تتجاهلها'
        ],
        optionsEn: [
          'It only changes how data is displayed',
          'It ensures calculations and filtering work correctly because Excel knows the type of each column',
          'It protects cells from being edited',
          'It is not important and can be ignored'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 43,
    title: 'لغة M — أساسيات Power Query',
    titleEn: 'M Language — Power Query Fundamentals',
    description: 'اللغة البرمجية وراء Power Query — بتكتبها بدون ما تعرف برمجة',
    descriptionEn: 'The programming language behind Power Query — you can use it without a coding background',
    type: 'code',
    codeLang: 'm',
    content: `## إيه هي لغة M؟

اسمها لغة M، وهي اللغة البرمجية اللي بتشتغل في الخلفية جوّا Power Query.
كل خطوة بتعملها في الواجهة بتتحوّل تلقائياً لكود M.
تقدر تشوف الكود من: Home ← Advanced Editor

## هيكل الاستعلام الأساسي

\`\`\`m
let
    Source = Excel.CurrentWorkbook(){[Name="tblSales"]}[Content],
    FilteredRows = Table.SelectRows(Source, each [Amount] > 1000),
    RenamedCols = Table.RenameColumns(FilteredRows, {{"Amount", "Total"}})
in
    RenamedCols
\`\`\`

\`let...in\` هو الهيكل الأساسي في M:
- بعد \`let\` — خطوات التحويل، كل خطوة بتبقى متغير
- بعد \`in\` — النتيجة النهائية، عادةً اسم آخر متغير

## العمليات الأساسية

### إضافة عمود محسوب
\`\`\`m
Table.AddColumn(Source, "FullName", each [FirstName] & " " & [LastName])
\`\`\`

### فلترة صفوف
\`\`\`m
Table.SelectRows(Source, each [Sales] > 5000)
Table.SelectRows(Source, each [Department] = "مبيعات")
\`\`\`

### تجميع البيانات
\`\`\`m
Table.Group(Source, {"Department"}, {
    {"TotalSales", each List.Sum([Sales]), type number}
})
\`\`\`

## المتغيرات والأنواع

\`\`\`m
let
    myNumber = 42,
    myText = "مرحبا",
    myList = {1, 2, 3, 4, 5},
    myRecord = [Name = "أحمد", Age = 30]
in
    myText
\`\`\`

> 💡 **نصيحة:** ما محتاج تكتب M يدوياً في الغالب — الواجهة بتوّلد الكود تلقائياً. لكن فهم M يخليك تعدّل وتحسّن.`,
    contentEn: `## What is M Language?

Every step you perform in the Power Query Editor is silently converted into M code behind the scenes.
You can view the code via: Home → Advanced Editor

## Basic query structure

\`\`\`m
let
    Source = Excel.CurrentWorkbook(){[Name="tblSales"]}[Content],
    FilteredRows = Table.SelectRows(Source, each [Amount] > 1000),
    RenamedCols = Table.RenameColumns(FilteredRows, {{"Amount", "Total"}})
in
    RenamedCols
\`\`\`

The \`let...in\` block is the foundation of every M query:
- After \`let\`: transformation steps (each step is a named variable)
- After \`in\`: the final output (usually the name of the last variable)

## Core operations

### Add a computed column
\`\`\`m
Table.AddColumn(Source, "FullName", each [FirstName] & " " & [LastName])
\`\`\`

### Filter rows
\`\`\`m
Table.SelectRows(Source, each [Sales] > 5000)
Table.SelectRows(Source, each [Department] = "Sales")
\`\`\`

### Aggregate / group data
\`\`\`m
Table.Group(Source, {"Department"}, {
    {"TotalSales", each List.Sum([Sales]), type number}
})
\`\`\`

## Variables and types

\`\`\`m
let
    myNumber = 42,
    myText = "Hello",
    myList = {1, 2, 3, 4, 5},
    myRecord = [Name = "Ahmed", Age = 30]
in
    myText
\`\`\`

> 💡 **Tip:** You rarely need to write M by hand — the UI generates it automatically. But understanding M lets you fine-tune and troubleshoot your queries.`,
    example: `let
    Source = Excel.CurrentWorkbook(){[Name="tblSales"]}[Content],
    Filtered = Table.SelectRows(Source, each [Amount] > 1000)
in
    Filtered`,
    exercises: [
      {
        id: 44,
        type: 'mcq',
        question: 'في لغة M، ما الكلمة المحجوزة اللي بتحدد النتيجة النهائية للاستعلام؟',
        questionEn: 'In M Language, which keyword specifies the final output of a query?',
        hint: 'جزء من هيكل let...in',
        hintEn: 'Part of the let...in structure',
        options: ['let', 'in', 'return', 'output'],
        optionsEn: ['let', 'in', 'return', 'output'],
        correctIndex: 1,
      },
      {
        id: 45,
        type: 'mcq',
        question: 'ما دالة M المستخدمة لتصفية صفوف بناءً على شرط؟',
        questionEn: 'Which M function is used to filter rows based on a condition?',
        hint: 'اسمها يبدأ بـ Table',
        hintEn: 'The name starts with Table',
        options: [
          'Table.Filter',
          'Table.SelectRows',
          'Table.Where',
          'Table.Condition'
        ],
        optionsEn: [
          'Table.Filter',
          'Table.SelectRows',
          'Table.Where',
          'Table.Condition'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 44,
    title: 'Append و Merge Queries',
    titleEn: 'Append and Merge Queries',
    description: 'ادمج جداول متعددة رأسياً (Append) أو أفقياً (Merge) في Power Query',
    descriptionEn: 'Combine multiple tables vertically (Append) or horizontally (Merge) in Power Query',
    type: 'concept',
    content: `## Append Queries — دمج رأسي

زي UNION في SQL — بيضم جدولين أو أكثر فوق بعض.

**متى تستخدمه:**
- عندك ملفات مبيعات لكل شهر وعايز تدمجها في جدول واحد
- بيانات مقسّمة على عدة ملفات بنفس الهيكل

**الخطوات:**
1. افتح أي استعلام
2. Home → Append Queries
3. اختار Append as New (لعمل استعلام جديد)
4. اختار الجداول المطلوبة

## Merge Queries — دمج أفقي

زي JOIN في SQL — بيضم جدولين بناءً على عمود مشترك.

**أنواع الـ Join:**

| النوع | الوصف |
|-------|-------|
| Inner Join | الصفوف المشتركة في الجدولين فقط |
| Left Outer | كل صفوف الجدول الأيسر + المطابقة من الأيمن |
| Right Outer | كل صفوف الجدول الأيمن + المطابقة من الأيسر |
| Full Outer | كل الصفوف من الجدولين |

**مثال:**

جدول الطلبات (Orders) + جدول العملاء (Customers):
\`\`\`
Orders[CustomerID] ← مطابقة → Customers[ID]
\`\`\`

**الخطوات:**
1. Home → Merge Queries
2. اختار العمود المشترك في الجدولين
3. اختار نوع الـ Join
4. وسّع العمود الجديد لإظهار البيانات المطلوبة

## Combine Files — دمج ملفات من مجلد

\`\`\`
Data → Get Data → From Folder → اختار المجلد
\`\`\`

Power Query بيقرأ كل الملفات في المجلد ويدمجها تلقائياً — مفيد جداً للتقارير الشهرية.`,
    contentEn: `## Append Queries — vertical combination

Like UNION in SQL — stacks two or more tables on top of each other.

**When to use it:**
- You have separate monthly sales files and want them in one table
- Data is split across multiple files with the same structure

**Steps:**
1. Open any query
2. Home → Append Queries
3. Choose Append as New (creates a separate combined query)
4. Select the tables to append

## Merge Queries — horizontal combination

Like JOIN in SQL — combines two tables based on a shared column.

**Join types:**

| Type | Description |
|------|-------------|
| Inner Join | Only rows that match in both tables |
| Left Outer | All rows from the left table + matched rows from the right |
| Right Outer | All rows from the right table + matched rows from the left |
| Full Outer | All rows from both tables |

**Example:**

Orders table + Customers table:
\`\`\`
Orders[CustomerID] ← match → Customers[ID]
\`\`\`

**Steps:**
1. Home → Merge Queries
2. Select the matching column in each table
3. Choose the join type
4. Expand the new column to expose the fields you need

## Combine Files — merge all files in a folder

\`\`\`
Data → Get Data → From Folder → select the folder
\`\`\`

Power Query reads every file in the folder and combines them automatically — extremely useful for recurring monthly reports.`,
    exercises: [
      {
        id: 46,
        type: 'mcq',
        question: 'عندك ملفات مبيعات منفصلة لكل شهر بنفس الأعمدة. أي عملية في Power Query تستخدم لدمجها؟',
        questionEn: 'You have separate monthly sales files with identical columns. Which Power Query operation combines them?',
        hint: 'تريد وضعها فوق بعض — دمج رأسي',
        hintEn: 'You want to stack them — vertical combination',
        options: ['Merge Queries', 'Append Queries', 'Join Tables', 'Combine Columns'],
        optionsEn: ['Merge Queries', 'Append Queries', 'Join Tables', 'Combine Columns'],
        correctIndex: 1,
      },
      {
        id: 47,
        type: 'mcq',
        question: 'عندك جدول طلبات وجدول عملاء وتريد ضم اسم العميل لكل طلب. أي نوع Join مناسب لو تريد كل الطلبات حتى اللي ما عندها عميل مسجّل؟',
        questionEn: 'You have an Orders table and a Customers table and want to add the customer name to each order. Which join type should you use if you want all orders, even those without a registered customer?',
        hint: 'تريد كل الطلبات بدون استثناء',
        hintEn: 'You want every order, no exceptions',
        options: ['Inner Join', 'Left Outer Join', 'Right Outer Join', 'Full Outer Join'],
        optionsEn: ['Inner Join', 'Left Outer Join', 'Right Outer Join', 'Full Outer Join'],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 45,
    title: 'Pivot و Unpivot — إعادة تشكيل البيانات',
    titleEn: 'Pivot and Unpivot — Reshaping Data',
    description: 'تحويل البيانات الأفقية لعمودية والعكس — من أهم تحويلات Power Query',
    descriptionEn: 'Convert wide data to tall and vice versa — one of the most important Power Query transformations',
    type: 'concept',
    content: `## مشكلة الـ Cross-tab

كثير من البيانات تصلك بهذا الشكل "المصفوفي":

| المنتج | يناير | فبراير | مارس |
|--------|-------|--------|------|
| لابتوب | 100 | 120 | 90 |
| ماوس | 45 | 52 | 61 |

هذا الشكل جيد للعرض لكن **سيء للتحليل** — لا يمكن عمل SUMIF أو Pivot Table صحيح عليه.

## Unpivot — من عرضي إلى عمودي

يُحوّل الأعمدة (يناير، فبراير، مارس) إلى صفوف:

| المنتج | الشهر | المبيعات |
|--------|-------|---------|
| لابتوب | يناير | 100 |
| لابتوب | فبراير | 120 |
| لابتوب | مارس | 90 |
| ماوس | يناير | 45 |

**الخطوات:**
1. حدد أعمدة الشهور
2. Transform → Unpivot Columns

أو: حدد الأعمدة الثابتة (المنتج) ← Unpivot Other Columns (أفضل للمرونة)

## Pivot — من عمودي إلى عرضي

العكس — تحويل قيم عمود إلى أعمدة متعددة:

**الخطوات:**
1. حدد عمود القيم التي تريد تحويلها لأعمدة
2. Transform → Pivot Column
3. اختار عمود الـ Values وطريقة التجميع

## متى تستخدم كلاً منهما؟

| | Unpivot | Pivot |
|--|---------|-------|
| الاستخدام | تنظيف بيانات للتحليل | إعداد تقارير وعروض |
| في Power Query | الأكثر استخداماً | أقل شيوعاً |
| النتيجة | جدول "طويل" | جدول "عريض" |

## Unpivot في M Language

\`\`\`m
= Table.UnpivotOtherColumns(المصدر, {"المنتج"}, "الشهر", "المبيعات")
\`\`\`

## مثال شائع: تقارير Excel الشهرية

عادةً تحصل على ملف Excel فيه أعمدة لكل شهر. خطوات تحويله:
1. **Get Data** من الملف
2. **Unpivot** أعمدة الأشهر
3. **Change Type** للعمود الرقمي
4. **Filter** لإزالة الصفوف الفارغة
5. **Close & Load**

> 💡 قاعدة ذهبية: **"البيانات للتحليل تكون عمودية، البيانات للعرض تكون أفقية"**.`,
    contentEn: `## The cross-tab problem

Data often arrives in this "matrix" layout:

| Product | January | February | March |
|---------|---------|----------|-------|
| Laptop  | 100     | 120      | 90    |
| Mouse   | 45      | 52       | 61    |

This layout looks clean but is **bad for analysis** — SUMIF and Pivot Tables cannot work correctly on it.

## Unpivot — wide to tall

Converts the month columns (January, February, March) into rows:

| Product | Month    | Sales |
|---------|----------|-------|
| Laptop  | January  | 100   |
| Laptop  | February | 120   |
| Laptop  | March    | 90    |
| Mouse   | January  | 45    |

**Steps:**
1. Select the month columns
2. Transform → Unpivot Columns

Alternatively: select the fixed columns (Product) → Unpivot Other Columns (better for flexibility)

## Pivot — tall to wide

The reverse — turn the values of a column into multiple columns:

**Steps:**
1. Select the column whose values you want to become columns
2. Transform → Pivot Column
3. Choose the Values column and the aggregation method

## When to use each

| | Unpivot | Pivot |
|--|---------|-------|
| Purpose | Clean data for analysis | Prepare reports and presentations |
| Frequency in Power Query | Very common | Less common |
| Result | "Tall" table | "Wide" table |

## Unpivot in M Language

\`\`\`m
= Table.UnpivotOtherColumns(Source, {"Product"}, "Month", "Sales")
\`\`\`

## Common scenario: monthly Excel reports

You typically receive an Excel file with one column per month. Steps to reshape it:
1. **Get Data** from the file
2. **Unpivot** the month columns
3. **Change Type** on the numeric column
4. **Filter** to remove blank rows
5. **Close & Load**

> 💡 Golden rule: **"Data for analysis should be tall; data for presentation can be wide."**`,
    exercises: [
      {
        id: 60,
        type: 'mcq',
        question: 'عندك جدول فيه أعمدة: المنتج، يناير، فبراير، مارس. تريد تحويله لـ: المنتج، الشهر، المبيعات. أي عملية؟',
        questionEn: 'You have a table with columns: Product, January, February, March. You want to transform it to: Product, Month, Sales. Which operation do you use?',
        hint: 'من أفقي (عريض) إلى عمودي (طويل)',
        hintEn: 'Going from horizontal (wide) to vertical (tall)',
        options: ['Pivot', 'Unpivot', 'Transpose', 'Merge'],
        optionsEn: ['Pivot', 'Unpivot', 'Transpose', 'Merge'],
        correctIndex: 1,
      },
      {
        id: 61,
        type: 'mcq',
        question: 'عند Unpivot، لماذا يُفضَّل "Unpivot Other Columns" على "Unpivot Columns"؟',
        questionEn: 'When using Unpivot, why is "Unpivot Other Columns" preferred over "Unpivot Columns"?',
        hint: 'فكّر فيما يحدث لو أضفت شهراً جديداً',
        hintEn: 'Think about what happens when you add a new month column later',
        options: [
          'أسرع في التنفيذ',
          'يعمل ديناميكياً — يشمل تلقائياً أي أعمدة جديدة تُضاف لاحقاً',
          'يُنتج بيانات أكثر دقة',
          'يدعم الأعمدة النصية فقط'
        ],
        optionsEn: [
          'It executes faster',
          'It works dynamically — it automatically includes any new columns added later',
          'It produces more accurate data',
          'It only supports text columns'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 46,
    title: 'Group By والـ Custom Columns',
    titleEn: 'Group By and Custom Columns',
    description: 'تجميع البيانات وإنشاء أعمدة محسوبة مخصصة في Power Query',
    descriptionEn: 'Aggregate data and create custom computed columns in Power Query',
    type: 'concept',
    content: `## Group By — التجميع والإحصاء

مثل GROUP BY في SQL — يُجمّع الصفوف ويطبّق تجميعاً (مجموع، متوسط، عدد...).

**الخطوات:**
\`\`\`
Home → Group By
\`\`\`

### مثال: إجمالي المبيعات لكل قسم

البيانات:
| القسم | المبيعات |
|-------|---------|
| مبيعات | 8000 |
| تسويق | 3000 |
| مبيعات | 6000 |

بعد Group By (القسم → Sum المبيعات):
| القسم | إجمالي المبيعات |
|-------|----------------|
| مبيعات | 14000 |
| تسويق | 3000 |

### تجميعات متعددة في خطوة واحدة

يمكن إضافة أكثر من عملية تجميع:
- مجموع المبيعات
- متوسط المبيعات
- عدد الصفوف

**في M Language:**
\`\`\`m
= Table.Group(المصدر, {"القسم"}, {
    {"إجمالي", each List.Sum([المبيعات]), type number},
    {"متوسط", each List.Average([المبيعات]), type number},
    {"عدد", each Table.RowCount(_), type number}
  })
\`\`\`

## Add Column — إضافة أعمدة محسوبة

### Custom Column — صيغة M مخصصة

\`\`\`
Add Column → Custom Column
\`\`\`

\`\`\`m
[السعر] * [الكمية]                → الإجمالي
[السعر] * (1 + 0.14)              → السعر شامل الضريبة
Text.Upper([الاسم])               → الاسم بأحرف كبيرة
Date.Year([تاريخ_الطلب])         → سنة الطلب
\`\`\`

### Conditional Column — عمود شرطي بـ UI

\`\`\`
Add Column → Conditional Column
\`\`\`

مثل IF بواجهة بصرية:
\`\`\`
If [المبيعات] >= 10000 Then "A"
Else If [المبيعات] >= 5000 Then "B"
Else "C"
\`\`\`

**في M Language:**
\`\`\`m
= Table.AddColumn(المصدر, "التصنيف", each
    if [المبيعات] >= 10000 then "A"
    else if [المبيعات] >= 5000 then "B"
    else "C")
\`\`\`

### Column From Examples

أقوى ميزة للمبتدئين — أعطِ Excel مثالاً وهو يكتشف النمط:
\`\`\`
Add Column → Column From Examples
\`\`\`

مثال: عمود يحتوي "أحمد محمد" — تكتب "أحمد" في أول خلية، Excel يفهم أنك تريد الاسم الأول.

## Index Column و Duplicate و Reference

\`\`\`
Add Column → Index Column   → ترقيم الصفوف من 0 أو 1
\`\`\`

> 💡 أفضل ممارسة: ابدأ بتنظيف البيانات (Remove Duplicates, Fix Types) قبل إضافة الأعمدة المحسوبة.`,
    contentEn: `## Group By — aggregation and statistics

Like GROUP BY in SQL — groups rows and applies an aggregation (sum, average, count, etc.).

**Steps:**
\`\`\`
Home → Group By
\`\`\`

### Example: total sales per department

Source data:
| Department | Sales |
|------------|-------|
| Sales      | 8000  |
| Marketing  | 3000  |
| Sales      | 6000  |

After Group By (Department → Sum of Sales):
| Department | Total Sales |
|------------|-------------|
| Sales      | 14000       |
| Marketing  | 3000        |

### Multiple aggregations in one step

You can add several aggregations at once:
- Sum of Sales
- Average of Sales
- Row count

**In M Language:**
\`\`\`m
= Table.Group(Source, {"Department"}, {
    {"Total",   each List.Sum([Sales]),     type number},
    {"Average", each List.Average([Sales]), type number},
    {"Count",   each Table.RowCount(_),     type number}
  })
\`\`\`

## Add Column — computed columns

### Custom Column — write an M formula

\`\`\`
Add Column → Custom Column
\`\`\`

\`\`\`m
[Price] * [Quantity]          → Total
[Price] * (1 + 0.14)          → Price including 14% tax
Text.Upper([Name])            → Name in uppercase
Date.Year([OrderDate])        → Order year
\`\`\`

### Conditional Column — IF logic with a visual UI

\`\`\`
Add Column → Conditional Column
\`\`\`

Works like an IF statement but with a point-and-click interface:
\`\`\`
If [Sales] >= 10000 Then "A"
Else If [Sales] >= 5000 Then "B"
Else "C"
\`\`\`

**In M Language:**
\`\`\`m
= Table.AddColumn(Source, "Grade", each
    if [Sales] >= 10000 then "A"
    else if [Sales] >= 5000 then "B"
    else "C")
\`\`\`

### Column From Examples

The most beginner-friendly feature — show Excel one example and it figures out the pattern:
\`\`\`
Add Column → Column From Examples
\`\`\`

Example: a column contains "Ahmed Mohamed" — type "Ahmed" in the first cell and Excel recognises you want the first name only.

## Index Column, Duplicate, and Reference

\`\`\`
Add Column → Index Column   → number rows starting from 0 or 1
\`\`\`

> 💡 Best practice: clean your data first (Remove Duplicates, fix types) before adding computed columns.`,
    exercises: [
      {
        id: 62,
        type: 'mcq',
        question: 'تريد إضافة عمود "التصنيف" بشرط: إذا المبيعات > 10000 فـ"ممتاز"، وإلا "عادي". أي خيار في Power Query؟',
        questionEn: 'You want to add a "Grade" column: if Sales > 10000 then "Excellent", otherwise "Average". Which Power Query option do you use?',
        hint: 'تريد عمود بشروط بدون كتابة كود',
        hintEn: 'You want a conditional column without writing code',
        options: ['Custom Column', 'Conditional Column', 'Column From Examples', 'Duplicate Column'],
        optionsEn: ['Custom Column', 'Conditional Column', 'Column From Examples', 'Duplicate Column'],
        correctIndex: 1,
      },
      {
        id: 63,
        type: 'mcq',
        question: 'ما وظيفة "Column From Examples" في Power Query؟',
        questionEn: 'What does "Column From Examples" do in Power Query?',
        hint: 'تعطي مثالاً وPower Query يكمل الباقي',
        hintEn: 'You provide an example and Power Query fills in the rest',
        options: [
          'تنسخ عمود موجود',
          'تكتشف النمط تلقائياً من أمثلة تُعطيها',
          'تضيف عمود ترقيم',
          'تحوّل نوع البيانات'
        ],
        optionsEn: [
          'It copies an existing column',
          'It automatically detects the pattern from examples you provide',
          'It adds a row-number column',
          'It changes the data type'
        ],
        correctIndex: 1,
      },
      {
        id: 64,
        type: 'mcq',
        question: 'في M Language، ما الدالة المستخدمة لحساب مجموع قائمة؟',
        questionEn: 'In M Language, which function calculates the sum of a list?',
        hint: 'اسمها يبدأ بـ List',
        hintEn: 'The name starts with List',
        options: ['List.Sum', 'Table.Sum', 'Number.Sum', 'Value.Sum'],
        optionsEn: ['List.Sum', 'Table.Sum', 'Number.Sum', 'Value.Sum'],
        correctIndex: 0,
      }
    ]
  },
];

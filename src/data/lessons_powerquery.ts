import { Lesson } from '../types';

export const lessonsPowerQuery: Lesson[] = [
  {
    id: 41,
    title: 'مقدمة Power Query',
    description: 'أقوى أداة في Excel لجلب البيانات وتنظيفها تلقائياً',
    type: 'concept',
    content: `## إيه هو Power Query؟

Power Query أداة ETL مدمجة في Excel:
- **E** = Extract → جلب البيانات من أي مصدر
- **T** = Transform → تنظيفها وتحويلها
- **L** = Load → تحميلها لـ Excel

تلاقيه في: **Data → Get Data**

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
Web (روابط الإنترنت)
Folder (دمج ملفات من مجلد)
SharePoint, Power BI
\`\`\`

## واجهة Power Query Editor

لما تفتح Power Query Editor:

\`\`\`
┌─────────────┬────────────────────────────┐
│ Queries     │        Data Preview        │
│ (القائمة   │                            │
│  الجانبية) │                            │
├─────────────┴────────────────────────────┤
│            Applied Steps                 │
│    (كل خطوة عملتها محفوظة هنا)         │
└──────────────────────────────────────────┘
\`\`\`

**Applied Steps** هو الذهب — كل خطوة محفوظة وقابلة للتعديل والحذف.

## الـ Refresh

لما تضيف بيانات جديدة للمصدر:
- Data → Refresh All
- أو Ctrl + Alt + F5

كل التنظيف بيتطبق تلقائياً على البيانات الجديدة.`,
    exercises: [
      {
        id: 40,
        type: 'mcq',
        question: 'ما المقصود بـ ETL في سياق Power Query؟',
        hint: 'كل حرف يمثل خطوة في العملية',
        options: [
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
        hint: 'فكّر في إمكانية إعادة التطبيق',
        options: [
          'بيحفظ الملف تلقائياً',
          'بيحفظ كل خطوة تنظيف عملتها وتقدر تعيد تطبيقها بضغطة زرار',
          'بيتحكم في الـ Refresh',
          'بيحمي البيانات من التعديل'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 42,
    title: 'تحويلات Power Query الأساسية',
    description: 'أهم العمليات اللي هتستخدمها يومياً في Power Query',
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
    exercises: [
      {
        id: 42,
        type: 'mcq',
        question: 'تريد تحويل جدول عرضي (كل شهر في عمود) لجدول طولي (كل شهر في صف). ما العملية المطلوبة؟',
        hint: 'من Wide Format لـ Long Format',
        options: ['Pivot', 'Unpivot', 'Transpose', 'Merge'],
        correctIndex: 1,
      },
      {
        id: 43,
        type: 'mcq',
        question: 'ما أهمية خطوة "Change Type" في Power Query؟',
        hint: 'فكّر فيما يحدث لو Excel ما عرفش نوع البيانات',
        options: [
          'بتغير شكل عرض البيانات فقط',
          'بتخلي الحسابات والفلترة تشتغل صح لأن Excel يعرف نوع كل عمود',
          'بتحمي الخلايا من التعديل',
          'مش مهمة وممكن تتجاهلها'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 43,
    title: 'لغة M — أساسيات Power Query',
    description: 'اللغة البرمجية وراء Power Query — بتكتبها بدون ما تعرف برمجة',
    type: 'code',
    codeLang: 'm',
    content: `## إيه هي لغة M؟

كل خطوة بتعملها في Power Query بتتحوّل لكود M في الخلف.
تقدر تشوف الكود من: Home → Advanced Editor

## هيكل الاستعلام الأساسي

\`\`\`m
let
    Source = Excel.CurrentWorkbook(){[Name="tblSales"]}[Content],
    FilteredRows = Table.SelectRows(Source, each [Amount] > 1000),
    RenamedCols = Table.RenameColumns(FilteredRows, {{"Amount", "Total"}})
in
    RenamedCols
\`\`\`

\`let...in\` هو هيكل M الأساسي:
- بعد \`let\`: خطوات التحويل (كل خطوة = متغير)
- بعد \`in\`: النتيجة النهائية (اسم آخر متغير عادةً)

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
        hint: 'جزء من هيكل let...in',
        options: ['let', 'in', 'return', 'output'],
        correctIndex: 1,
      },
      {
        id: 45,
        type: 'mcq',
        question: 'ما دالة M المستخدمة لتصفية صفوف بناءً على شرط؟',
        hint: 'اسمها يبدأ بـ Table',
        options: [
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
    description: 'ادمج جداول متعددة رأسياً (Append) أو أفقياً (Merge) في Power Query',
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
    exercises: [
      {
        id: 46,
        type: 'mcq',
        question: 'عندك ملفات مبيعات منفصلة لكل شهر بنفس الأعمدة. أي عملية في Power Query تستخدم لدمجها؟',
        hint: 'تريد وضعها فوق بعض — دمج رأسي',
        options: ['Merge Queries', 'Append Queries', 'Join Tables', 'Combine Columns'],
        correctIndex: 1,
      },
      {
        id: 47,
        type: 'mcq',
        question: 'عندك جدول طلبات وجدول عملاء وتريد ضم اسم العميل لكل طلب. أي نوع Join مناسب لو تريد كل الطلبات حتى اللي ما عندها عميل مسجّل؟',
        hint: 'تريد كل الطلبات بدون استثناء',
        options: ['Inner Join', 'Left Outer Join', 'Right Outer Join', 'Full Outer Join'],
        correctIndex: 1,
      }
    ]
  },
];

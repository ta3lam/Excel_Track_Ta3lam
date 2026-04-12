import { Lesson } from '../types';

export const lessonsZero: Lesson[] = [
  {
    id: 1,
    title: 'ما هو تحليل البيانات؟',
    titleEn: 'What is Data Analysis?',
    description: 'نظرة شاملة على مجال تحليل البيانات وأهميته في سوق العمل',
    descriptionEn: 'A comprehensive overview of data analysis and its importance in the job market',
    type: 'concept',
    content: `## ما هو تحليل البيانات؟

**تحليل البيانات (Data Analysis)** هو عملية جمع البيانات وتنظيمها وتفسيرها لاستخلاص رؤى تدعم اتخاذ القرارات.

## لماذا Excel؟

Excel هو الأداة الأكثر استخداماً في تحليل البيانات على مستوى العالم لأسباب عدة:

- **سهولة التعلم** — واجهة بسيطة لا تحتاج خبرة برمجية
- **انتشار واسع** — متوفر في كل شركة تقريباً
- **قوة حقيقية** — يدعم Power Query وDAX والـ Data Model
- **توافق** — يتكامل مع Power BI وSQL وPython

## مسار التعلم

\`\`\`
تحت الصفر → الأساسيات → البحث والمرجع → المتقدم → Power Query → DAX → الاحتراف
\`\`\`

## فرص العمل

إتقان Excel يفتح أبواباً في:
- **Financial Analyst** — تحليل مالي
- **Data Analyst** — تحليل بيانات
- **Business Intelligence Analyst** — ذكاء أعمال
- **Operations Analyst** — تحليل عمليات

> 💡 **نصيحة:** لا تكتفِ بالقراءة — طبّق كل درس مباشرةً في Excel لأن التطبيق هو سر الإتقان.`,
    contentEn: `## What is Data Analysis?

**Data Analysis** is the process of collecting, organizing, and interpreting data to extract insights that support decision-making.

## Why Excel?

Excel is the world's most widely used data analysis tool for several reasons:

- **Easy to learn** — Simple interface that requires no programming experience
- **Universally available** — Found in virtually every company
- **Genuinely powerful** — Supports Power Query, DAX, and the Data Model
- **Integrates well** — Works alongside Power BI, SQL, and Python

## Learning Path

\`\`\`
Zero → Beginner → Lookup & Reference → Advanced → Power Query → DAX → Pro
\`\`\`

## Career Opportunities

Mastering Excel opens doors to roles such as:
- **Financial Analyst** — financial reporting and modeling
- **Data Analyst** — business data analysis
- **Business Intelligence Analyst** — BI dashboards and insights
- **Operations Analyst** — process and performance analysis

> 💡 **Tip:** Don't just read — apply every lesson directly in Excel. Hands-on practice is the secret to mastery.`,
    exercises: [
      {
        id: 1,
        type: 'mcq',
        question: 'ما الذي يميّز Excel عن أدوات تحليل البيانات الأخرى؟',
        questionEn: 'What sets Excel apart from other data analysis tools?',
        hint: 'فكّر في السبب الذي يجعله الأكثر استخداماً في الشركات',
        hintEn: 'Think about why it is the most commonly used tool in businesses',
        options: [
          'يعمل فقط على أنظمة Mac',
          'سهل التعلم ومنتشر في جميع الشركات تقريباً',
          'مجاني بالكامل بدون أي قيود',
          'يستطيع معالجة مليارات الصفوف'
        ],
        optionsEn: [
          'It only runs on Mac systems',
          'It is easy to learn and available in virtually every company',
          'It is completely free with no limitations',
          'It can process billions of rows'
        ],
        correctIndex: 1,
      },
      {
        id: 2,
        type: 'mcq',
        question: 'ما هو ترتيب مسار التعلم الصحيح في هذه الدورة؟',
        questionEn: 'What is the correct learning path order in this course?',
        hint: 'ابدأ بالأساسيات قبل الأدوات المتقدمة',
        hintEn: 'Start with the basics before moving to advanced tools',
        options: [
          'DAX ← Power Query ← الأساسيات ← تحت الصفر',
          'تحت الصفر ← الأساسيات ← البحث ← المتقدم ← Power Query → DAX',
          'الاحتراف ← الخبير ← المتوسط ← المبتدئ',
          'Power Query ← DAX ← الأساسيات ← تحت الصفر'
        ],
        optionsEn: [
          'DAX ← Power Query ← Beginner ← Zero',
          'Zero → Beginner → Lookup → Advanced → Power Query → DAX',
          'Pro ← Expert ← Intermediate ← Beginner',
          'Power Query ← DAX ← Beginner ← Zero'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 2,
    title: 'واجهة Excel',
    titleEn: 'The Excel Interface',
    description: 'تعرّف على مكونات Excel الأساسية: Ribbon، Formula Bar، Name Box، Sheet Tabs',
    descriptionEn: 'Get familiar with Excel\'s core components: Ribbon, Formula Bar, Name Box, and Sheet Tabs',
    type: 'concept',
    content: `## مكونات واجهة Excel

### Ribbon (شريط الأدوات)
شريط الأدوات الرئيسي في الأعلى. يحتوي على Tabs (علامات تبويب) مثل:
- **Home** — التنسيق والعمليات الأساسية
- **Insert** — إدراج جداول ورسوم وPivot Tables
- **Data** — ترتيب وفلترة وPower Query
- **Formulas** — مكتبة الدوال

### Formula Bar (شريط الصيغة)
يعرض محتوى الخلية المحددة. إذا كانت الخلية تحتوي صيغة، سيظهر هنا:
\`\`\`
=SUM(B2:B10)
\`\`\`

### Name Box (مربع الاسم)
في أقصى اليسار من Formula Bar. يعرض عنوان الخلية المحددة مثل \`A1\` أو اسم النطاق.

### Sheet Tabs (تبويبات الأوراق)
في أسفل الشاشة. انقر بزر الفأرة الأيمن لإضافة أوراق جديدة أو إعادة تسميتها.

### Status Bar (شريط الحالة)
في أسفل الشاشة يظهر تلقائياً: **Sum**, **Average**, **Count** عند تحديد خلايا.

## اختصارات التنقل الأساسية

| الاختصار | الوظيفة |
|----------|---------|
| \`Ctrl + Home\` | الانتقال إلى A1 |
| \`Ctrl + End\` | آخر خلية تحتوي بيانات |
| \`Ctrl + ←↑→↓\` | القفز إلى حافة البيانات |
| \`F2\` | تحرير الخلية المحددة |
| \`Ctrl + Z\` | تراجع |
| \`Ctrl + S\` | حفظ |`,
    contentEn: `## Excel Interface Components

### Ribbon
The main toolbar at the top of the screen. It contains tabs such as:
- **Home** — formatting and basic operations
- **Insert** — insert tables, charts, and Pivot Tables
- **Data** — sort, filter, and Power Query
- **Formulas** — function library

### Formula Bar
Displays the content of the selected cell. If the cell contains a formula, you will see it here:
\`\`\`
=SUM(B2:B10)
\`\`\`

### Name Box
Located at the far left of the Formula Bar. It displays the address of the selected cell (e.g., \`A1\`) or the name of a named range.

### Sheet Tabs
Located at the bottom of the screen. Right-click a tab to add new sheets or rename them.

### Status Bar
At the very bottom of the screen, Excel automatically shows **Sum**, **Average**, and **Count** when cells are selected.

## Essential Navigation Shortcuts

| Shortcut | Action |
|----------|--------|
| \`Ctrl + Home\` | Jump to cell A1 |
| \`Ctrl + End\` | Jump to the last cell with data |
| \`Ctrl + ←↑→↓\` | Jump to the edge of the data region |
| \`F2\` | Edit the selected cell |
| \`Ctrl + Z\` | Undo |
| \`Ctrl + S\` | Save |`,
    exercises: [
      {
        id: 3,
        type: 'mcq',
        question: 'أين تجد عنوان الخلية المحددة حالياً في واجهة Excel؟',
        questionEn: 'Where do you find the address of the currently selected cell in Excel?',
        hint: 'ابحث في الجزء العلوي الأيسر من الشاشة',
        hintEn: 'Look in the upper-left area of the screen',
        options: [
          'Status Bar في أسفل الشاشة',
          'Name Box في أعلى اليسار',
          'Formula Bar في المنتصف',
          'Sheet Tab في الأسفل'
        ],
        optionsEn: [
          'Status Bar at the bottom of the screen',
          'Name Box at the top left',
          'Formula Bar in the middle',
          'Sheet Tab at the bottom'
        ],
        correctIndex: 1,
      },
      {
        id: 4,
        type: 'mcq',
        question: 'ما الاختصار الذي ينقلك فوراً إلى الخلية A1؟',
        questionEn: 'Which shortcut instantly takes you to cell A1?',
        hint: 'من أشهر اختصارات التنقل',
        hintEn: 'One of the most well-known navigation shortcuts',
        options: ['Ctrl + A', 'Ctrl + Home', 'F5', 'Ctrl + G'],
        optionsEn: ['Ctrl + A', 'Ctrl + Home', 'F5', 'Ctrl + G'],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 3,
    title: 'أنواع البيانات في Excel',
    titleEn: 'Data Types in Excel',
    description: 'الفرق بين الأرقام والنصوص والتواريخ وكيف يؤثر ذلك على حساباتك',
    descriptionEn: 'The difference between numbers, text, and dates — and how each affects your calculations',
    type: 'formula',
    content: `## أنواع البيانات في Excel

يتعامل Excel مع ثلاثة أنواع أساسية من البيانات:

### 1. الأرقام (Numbers)
- تُحاذى تلقائياً إلى اليمين
- يمكن استخدامها في الحسابات مباشرةً
- تشمل: الأعداد الصحيحة، العشرية، النسب المئوية

### 2. النصوص (Text)
- تُحاذى تلقائياً إلى اليسار
- لا يمكن استخدامها في الحسابات الرياضية
- رقم محفوظ كنص: \`'12345\` (يبدأ بفاصلة عليا)

### 3. التواريخ والأوقات (Dates & Times)
- محفوظة داخلياً كأرقام (1 = 1 يناير 1900)
- تُنسَّق كتواريخ لسهولة القراءة
- يمكن طرح تاريخين للحصول على عدد الأيام بينهما

## مشكلة الأرقام المحفوظة كنصوص

المشكلة الأكثر شيوعاً للمبتدئين:
\`\`\`
A1 = "100" (نص)     ← =SUM(A1) = 0 ← خطأ!
A1 = 100  (رقم)     ← =SUM(A1) = 100 ← صحيح ✓
\`\`\`

**للتحويل:** حدد الخلايا ← Data ← Text to Columns ← Finish

> 💡 إذا رأيت مثلثاً أخضر صغيراً في ركن الخلية، فالرقم محفوظ كنص.`,
    contentEn: `## Data Types in Excel

Excel works with three core data types:

### 1. Numbers
- Automatically right-aligned
- Can be used directly in calculations
- Includes: integers, decimals, and percentages

### 2. Text
- Automatically left-aligned
- Cannot be used in mathematical calculations
- A number stored as text: \`'12345\` (preceded by an apostrophe)

### 3. Dates & Times
- Stored internally as numbers (1 = January 1, 1900)
- Formatted as dates for readability
- You can subtract two dates to get the number of days between them

## The "Numbers Stored as Text" Problem

The most common issue beginners encounter:
\`\`\`
A1 = "100" (text)   ← =SUM(A1) = 0 ← Wrong!
A1 = 100  (number)  ← =SUM(A1) = 100 ← Correct ✓
\`\`\`

**To convert:** Select the cells → Data → Text to Columns → Finish

> 💡 If you see a small green triangle in the corner of a cell, the number is stored as text.`,
    example: '=A1+A2',
    sheet: {
      headers: ['القيمة الأولى', 'القيمة الثانية', 'المجموع'],
      headersEn: ['First Value', 'Second Value', 'Sum'],
      rows: [
        [150, 250, null],
      ],
    },
    exercises: [
      {
        id: 5,
        type: 'mcq',
        question: 'إذا رأيت قيمة في خلية محاذاة لليسار، فهذا يعني عادةً أنها...',
        questionEn: 'If you see a value in a cell that is left-aligned, it typically means it is...',
        hint: 'Excel يحاذي الأنواع المختلفة باتجاهات مختلفة',
        hintEn: 'Excel aligns different data types in different directions',
        options: ['رقم عشري', 'نص أو بيانات نصية', 'تاريخ', 'صيغة خاطئة'],
        optionsEn: ['A decimal number', 'Text or string data', 'A date', 'A broken formula'],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 4,
    title: 'Excel Tables وتنسيق البيانات',
    titleEn: 'Excel Tables & Data Formatting',
    description: 'تحويل البيانات إلى جدول Excel لإدارة أسهل وصيغ أذكى',
    descriptionEn: 'Convert your data into an Excel Table for easier management and smarter formulas',
    type: 'concept',
    content: `## Excel Tables

**Excel Table** هو نطاق بيانات محدد يمتلك خصائص خاصة تجعل العمل معه أسهل بكثير.

## كيفية الإنشاء

1. انقر في أي خلية داخل بياناتك
2. اضغط **Ctrl + T**
3. تأكد من تحديد "My table has headers"
4. انقر OK

## مميزات الـ Table

### AutoFilter تلقائي
يضاف فلتر لكل عمود تلقائياً.

### اسم منظّم (Structured References)
بدلاً من \`=SUM(B2:B100)\` تكتب:
\`\`\`
=SUM(Table1[المبيعات])
\`\`\`

### التوسع التلقائي
عند إضافة صف جديد تحت الجدول، يمتد الجدول ليشمله تلقائياً.

### Total Row
انقر بزر الأيمن ← Table ← Totals Row لإضافة صف إجماليات في الأسفل.

## تسمية الجدول

1. انقر داخل الجدول
2. Table Design tab ← Table Name
3. غيّر الاسم إلى اسم وصفي مثل \`tblSales\`

## Conditional Formatting

لتمييز البيانات بصرياً:
- Home ← Conditional Formatting
- **Highlight Cell Rules**: تلوين الخلايا التي تستوفي شرطاً
- **Data Bars**: أشرطة داخل الخلايا تمثل القيم
- **Color Scales**: تدرّج لوني من أصغر لأكبر قيمة`,
    contentEn: `## Excel Tables

An **Excel Table** is a structured data range with special properties that make it much easier to work with.

## How to Create One

1. Click any cell inside your data
2. Press **Ctrl + T**
3. Confirm that "My table has headers" is checked
4. Click OK

## Table Features

### Automatic AutoFilter
A dropdown filter is automatically added to every column header.

### Structured References
Instead of writing \`=SUM(B2:B100)\`, you can write:
\`\`\`
=SUM(Table1[Sales])
\`\`\`

### Auto-Expansion
When you add a new row below the table, the table automatically expands to include it.

### Total Row
Right-click → Table → Totals Row to add a summary row at the bottom.

## Naming Your Table

1. Click inside the table
2. Go to the Table Design tab → Table Name
3. Replace the default name with something descriptive, like \`tblSales\`

## Conditional Formatting

Use conditional formatting to visually highlight your data:
- Home → Conditional Formatting
- **Highlight Cell Rules**: color cells that meet a condition
- **Data Bars**: colored bars inside cells representing values proportionally
- **Color Scales**: a color gradient from the lowest to the highest value`,
    exercises: [
      {
        id: 6,
        type: 'mcq',
        question: 'ما الاختصار لتحويل نطاق بيانات إلى Excel Table؟',
        questionEn: 'What is the keyboard shortcut to convert a data range into an Excel Table?',
        hint: 'اختصار من لوحة المفاتيح',
        hintEn: 'A keyboard shortcut',
        options: ['Ctrl + T', 'Ctrl + B', 'Alt + T', 'F4'],
        optionsEn: ['Ctrl + T', 'Ctrl + B', 'Alt + T', 'F4'],
        correctIndex: 0,
      },
      {
        id: 7,
        type: 'mcq',
        question: 'ما ميزة الـ "Structured References" في Excel Tables؟',
        questionEn: 'What is the benefit of Structured References in Excel Tables?',
        hint: 'كيف تختلف الصيغ داخل الجدول عن الصيغ العادية؟',
        hintEn: 'How do formulas inside a table differ from regular cell references?',
        options: [
          'تجعل الصيغة أسرع في الحساب',
          'تسمح بكتابة اسم العمود بدلاً من مرجع الخلية',
          'تمنع الأخطاء تلقائياً',
          'تحول الأرقام إلى نصوص'
        ],
        optionsEn: [
          'They make the formula calculate faster',
          'They let you use the column name instead of a cell reference',
          'They automatically prevent errors',
          'They convert numbers to text'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 5,
    title: 'أساسيات الصيغ والمراجع',
    titleEn: 'Formula Basics & Cell References',
    description: 'كيف تعمل الصيغ في Excel والفرق بين المراجع النسبية والمطلقة',
    descriptionEn: 'How formulas work in Excel and the difference between relative and absolute references',
    type: 'formula',
    content: `## كيف تعمل الصيغ

كل صيغة في Excel تبدأ بـ \`=\`. Excel يقرأ ما يليها ويحسب النتيجة.

\`\`\`
=5+3          → 8
=A1+B1        → مجموع محتوى A1 و B1
=SUM(A1:A10)  → مجموع نطاق من A1 إلى A10
\`\`\`

## أنواع المراجع

### المرجع النسبي (Relative Reference): \`A1\`
عند نسخ الصيغة تتغير المراجع تبعاً للموقع الجديد.
\`\`\`
=A1+B1  →  نسخ للأسفل  →  =A2+B2
\`\`\`

### المرجع المطلق (Absolute Reference): \`$A$1\`
لا يتغير عند النسخ أبداً. استخدمه للمعاملات الثابتة.
\`\`\`
=A1*$B$1  →  نسخ للأسفل  →  =A2*$B$1
\`\`\`

### المرجع المختلط (Mixed Reference): \`$A1\` أو \`A$1\`
يثبّت العمود أو الصف فقط.

## اختصار التثبيت

اضغط **F4** على المرجع للتبديل بين الأنواع الأربعة:
\`\`\`
A1  →  $A$1  →  A$1  →  $A1  →  A1
\`\`\`

## ترتيب العمليات (PEMDAS)

\`\`\`
()  →  ^  →  * /  →  + -
=2+3*4    → 14  (وليس 20)
=(2+3)*4  → 20
\`\`\`

> 💡 **قاعدة ذهبية:** استخدم \`$\` عندما تريد نسخ الصيغة وإبقاء مرجع معين ثابتاً.`,
    contentEn: `## How Formulas Work

Every formula in Excel starts with \`=\`. Excel reads what follows and calculates the result.

\`\`\`
=5+3          → 8
=A1+B1        → sum of the values in A1 and B1
=SUM(A1:A10)  → sum of the range A1 through A10
\`\`\`

## Types of Cell References

### Relative Reference: \`A1\`
When you copy the formula, the references shift relative to the new location.
\`\`\`
=A1+B1  →  copy down  →  =A2+B2
\`\`\`

### Absolute Reference: \`$A$1\`
Never changes when copied. Use it for fixed constants.
\`\`\`
=A1*$B$1  →  copy down  →  =A2*$B$1
\`\`\`

### Mixed Reference: \`$A1\` or \`A$1\`
Locks either the column or the row, but not both.

## Toggling References

Press **F4** on a reference to cycle through all four types:
\`\`\`
A1  →  $A$1  →  A$1  →  $A1  →  A1
\`\`\`

## Order of Operations (PEMDAS)

\`\`\`
()  →  ^  →  * /  →  + -
=2+3*4    → 14  (not 20)
=(2+3)*4  → 20
\`\`\`

> 💡 **Golden rule:** Use \`$\` whenever you want to copy a formula but keep a specific reference from changing.`,
    example: '=B2*$C$1',
    sheet: {
      headers: ['المنتج', 'الكمية', 'السعر', 'الإجمالي'],
      headersEn: ['Product', 'Quantity', 'Price', 'Total'],
      rows: [
        ['تفاح', 10, 5, null],
        ['برتقال', 15, 3, null],
        ['موز', 8, 4, null],
      ],
    },
    exercises: [
      {
        id: 8,
        type: 'formula',
        question: 'في الجدول أعلاه، اكتب صيغة تحسب إجمالي سعر التفاح (الكمية × السعر)',
        questionEn: 'Using the table above, write a formula that calculates the total price for apples (quantity × price)',
        hint: 'اضرب خلية الكمية في خلية السعر: B2 * C2',
        hintEn: 'Multiply the quantity cell by the price cell: B2 * C2',
        sheet: {
          headers: ['المنتج', 'الكمية', 'السعر'],
          headersEn: ['Product', 'Quantity', 'Price'],
          rows: [['تفاح', 10, 5]],
        },
        checkFunction: (result) => result === 50,
      },
      {
        id: 9,
        type: 'mcq',
        question: 'ماذا يحدث للصيغة =A1*$B$1 عند نسخها إلى الصف الثاني؟',
        questionEn: 'What happens to the formula =A1*$B$1 when it is copied down to the second row?',
        hint: 'المرجع المطلق ($) لا يتغير عند النسخ',
        hintEn: 'An absolute reference ($) does not change when copied',
        options: [
          'تصبح =A2*$B$2',
          'تصبح =A2*$B$1',
          'تبقى =A1*$B$1 دون تغيير',
          'تصبح =$A$2*$B$2'
        ],
        optionsEn: [
          'It becomes =A2*$B$2',
          'It becomes =A2*$B$1',
          'It stays =A1*$B$1 unchanged',
          'It becomes =$A$2*$B$2'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 6,
    title: 'اختصارات لوحة المفاتيح الأساسية',
    titleEn: 'Essential Keyboard Shortcuts',
    description: 'الاختصارات الأكثر استخداماً في Excel لتوفير الوقت ورفع الإنتاجية',
    descriptionEn: 'The most commonly used Excel shortcuts to save time and boost productivity',
    type: 'concept',
    content: `## لماذا تتعلم الاختصارات؟

المحترفون يعملون بسرعة مضاعفة لأنهم نادراً ما يلمسون الماوس. الاختصارات تحوّل دقائق إلى ثوانٍ.

## اختصارات التنقل

| الاختصار | الوظيفة |
|----------|---------|
| \`Ctrl + Home\` | الانتقال إلى A1 |
| \`Ctrl + End\` | آخر خلية تحتوي بيانات |
| \`Ctrl + ↓ / ↑\` | القفز إلى آخر/أول خلية في العمود |
| \`Ctrl + → / ←\` | القفز إلى آخر/أول خلية في الصف |
| \`Ctrl + G\` أو \`F5\` | الانتقال إلى خلية بعنوانها |

## اختصارات التحرير

| الاختصار | الوظيفة |
|----------|---------|
| \`F2\` | تحرير الخلية الحالية |
| \`Delete\` | مسح محتوى الخلية |
| \`Ctrl + Z\` | تراجع (Undo) |
| \`Ctrl + Y\` | إعادة (Redo) |
| \`Ctrl + D\` | نسخ الخلية العليا للأسفل |
| \`Ctrl + R\` | نسخ الخلية اليسرى لليمين |
| \`F4\` | تكرار آخر إجراء / تثبيت المرجع |

## اختصارات التنسيق

| الاختصار | الوظيفة |
|----------|---------|
| \`Ctrl + B\` | غامق (Bold) |
| \`Ctrl + I\` | مائل (Italic) |
| \`Ctrl + U\` | تسطير (Underline) |
| \`Ctrl + 1\` | فتح نافذة Format Cells |
| \`Ctrl + Shift + $\` | تنسيق عملة |
| \`Ctrl + Shift + %\` | تنسيق نسبة مئوية |

## اختصارات الملفات والأوراق

| الاختصار | الوظيفة |
|----------|---------|
| \`Ctrl + S\` | حفظ |
| \`Ctrl + N\` | ملف جديد |
| \`Ctrl + P\` | طباعة |
| \`Ctrl + Page Down/Up\` | التنقل بين الأوراق |
| \`Shift + F11\` | إضافة ورقة جديدة |
| \`Alt + F4\` | إغلاق Excel |

## الاختصارات الأكثر استخداماً (احفظها الأول)

\`\`\`
Ctrl + C / V / X   →  نسخ / لصق / قص
Ctrl + Z / Y       →  تراجع / إعادة
Ctrl + F           →  بحث
Ctrl + H           →  بحث واستبدال
Ctrl + A           →  تحديد الكل
Ctrl + Shift + L   →  تفعيل/إلغاء الفلتر
\`\`\`

> 💡 **نصيحة:** لا تحاول حفظهم كلهم دفعةً واحدة. ركّز على 5 اختصارات أسبوعياً وستتقنهم خلال شهر.`,
    contentEn: `## Why Learn Shortcuts?

Professionals work at twice the speed because they rarely touch the mouse. Shortcuts turn minutes into seconds.

## Navigation Shortcuts

| Shortcut | Action |
|----------|--------|
| \`Ctrl + Home\` | Jump to cell A1 |
| \`Ctrl + End\` | Jump to the last cell with data |
| \`Ctrl + ↓ / ↑\` | Jump to the last/first cell in a column |
| \`Ctrl + → / ←\` | Jump to the last/first cell in a row |
| \`Ctrl + G\` or \`F5\` | Go to a specific cell by address |

## Editing Shortcuts

| Shortcut | Action |
|----------|--------|
| \`F2\` | Edit the current cell |
| \`Delete\` | Clear cell content |
| \`Ctrl + Z\` | Undo |
| \`Ctrl + Y\` | Redo |
| \`Ctrl + D\` | Fill Down (copy cell above) |
| \`Ctrl + R\` | Fill Right (copy cell to the left) |
| \`F4\` | Repeat last action / toggle reference type |

## Formatting Shortcuts

| Shortcut | Action |
|----------|--------|
| \`Ctrl + B\` | Bold |
| \`Ctrl + I\` | Italic |
| \`Ctrl + U\` | Underline |
| \`Ctrl + 1\` | Open the Format Cells dialog |
| \`Ctrl + Shift + $\` | Apply currency format |
| \`Ctrl + Shift + %\` | Apply percentage format |

## File & Sheet Shortcuts

| Shortcut | Action |
|----------|--------|
| \`Ctrl + S\` | Save |
| \`Ctrl + N\` | New workbook |
| \`Ctrl + P\` | Print |
| \`Ctrl + Page Down/Up\` | Navigate between sheets |
| \`Shift + F11\` | Insert a new sheet |
| \`Alt + F4\` | Close Excel |

## The Must-Know Shortcuts (Learn These First)

\`\`\`
Ctrl + C / V / X   →  Copy / Paste / Cut
Ctrl + Z / Y       →  Undo / Redo
Ctrl + F           →  Find
Ctrl + H           →  Find & Replace
Ctrl + A           →  Select All
Ctrl + Shift + L   →  Toggle AutoFilter
\`\`\`

> 💡 **Tip:** Don't try to memorize all of them at once. Focus on 5 shortcuts per week and you will master them within a month.`,
    exercises: [
      {
        id: 10,
        type: 'mcq',
        question: 'ما الاختصار الذي يفتح نافذة "Format Cells" الكاملة؟',
        questionEn: 'Which shortcut opens the full "Format Cells" dialog?',
        hint: 'الرقم 1 مع Ctrl',
        hintEn: 'The number 1 combined with Ctrl',
        options: ['Ctrl + F', 'Ctrl + 1', 'Alt + H', 'F1'],
        optionsEn: ['Ctrl + F', 'Ctrl + 1', 'Alt + H', 'F1'],
        correctIndex: 1,
      },
      {
        id: 11,
        type: 'mcq',
        question: 'تريد نسخ صيغة الخلية B2 إلى B3:B10 بسرعة — ما الأسلوب الأمثل؟',
        questionEn: 'You want to quickly copy the formula in B2 down to B3:B10 — what is the best approach?',
        hint: 'فكّر في اختصار ينسخ الخلية العليا للأسفل',
        hintEn: 'Think of the shortcut that fills down from the cell above',
        options: [
          'Ctrl + C ثم Ctrl + V لكل خلية على حدة',
          'تحديد B3:B10 ثم Ctrl + D',
          'الكتابة اليدوية في كل خلية',
          'Alt + E ثم S'
        ],
        optionsEn: [
          'Ctrl + C then Ctrl + V for each cell individually',
          'Select B3:B10 then press Ctrl + D',
          'Type the formula manually in each cell',
          'Alt + E then S'
        ],
        correctIndex: 1,
      },
      {
        id: 12,
        type: 'mcq',
        question: 'ما الاختصار للتنقل فوراً إلى آخر خلية تحتوي بيانات في العمود؟',
        questionEn: 'Which shortcut jumps to the last cell with data in a column?',
        hint: 'Ctrl مع أحد أسهم الاتجاه',
        hintEn: 'Ctrl combined with a directional arrow key',
        options: ['Ctrl + End', 'Ctrl + ↓', 'Ctrl + Shift + ↓', 'F5'],
        optionsEn: ['Ctrl + End', 'Ctrl + ↓', 'Ctrl + Shift + ↓', 'F5'],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 7,
    title: 'تنسيق الخلايا بالتفصيل',
    titleEn: 'Cell Formatting in Detail',
    description: 'إتقان تنسيق الأرقام والتواريخ والخلايا وإنشاء تنسيقات مخصصة',
    descriptionEn: 'Master number and date formatting, cell styles, and custom format codes',
    type: 'concept',
    content: `## نافذة Format Cells

اضغط **Ctrl + 1** لفتح نافذة التنسيق الكاملة. تحتوي على 6 تبويبات:

### Number — تنسيق الأرقام

| الفئة | مثال | النتيجة |
|-------|------|---------|
| General | 1234.5 | 1234.5 |
| Number | 1234.5 | 1,234.50 |
| Currency | 1234.5 | 1,234.50 ج.م |
| Percentage | 0.25 | 25% |
| Date | 45292 | 01/01/2024 |
| Text | 01234 | 01234 (يحافظ على الصفر) |

### تنسيق مخصص (Custom Format)

أقوى خاصية في التنسيق — تكتب كوداً قصيراً لتحكم كامل:

\`\`\`
#,##0.00        →  1,234.56
#,##0.00 "ج.م"  →  1,234.56 ج.م
0%              →  25%
0.0%            →  25.0%
dd/mm/yyyy      →  15/03/2024
dddd            →  الاسم الكامل لليوم
"موجب";"-"#;"-" →  تنسيق مختلف للموجب/السالب/الصفر
\`\`\`

### Alignment — المحاذاة

- **Wrap Text**: تفاف النص داخل الخلية
- **Merge & Center**: دمج الخلايا وتوسيط المحتوى
- **Text Direction**: اتجاه النص (مهم للعربية)
- **Indent**: مسافة بادئة للنص

### Fill — لون الخلفية

يمكن استخدام ألوان صلبة أو تدرجات لونية (Gradient).

### Border — الحدود

تحكم كامل في مكان الحدود وسُمكها ولونها.

## Conditional Formatting — التنسيق الشرطي

يُطبَّق التنسيق تلقائياً بناءً على قيمة الخلية.

### Highlight Cell Rules
\`\`\`
Home → Conditional Formatting → Highlight Cell Rules
\`\`\`
مثال: لوّن كل خلية أكبر من 1000 باللون الأخضر.

### Data Bars
شريط ملوّن داخل الخلية يمثّل القيمة بصرياً — رائع في لوحات المعلومات.

### Color Scales
تدرّج لوني من الأحمر للأصفر للأخضر حسب القيمة — مثالي لمقارنة الأداء.

### Icon Sets
أيقونات (سهم لأعلى/أسفل، إشارات ضوئية) داخل الخلية.

### New Rule — قاعدة مخصصة
\`\`\`
Home → Conditional Formatting → New Rule → Use a formula
\`\`\`
مثال: لتلوين الصف كاملاً إذا كان عمود الحالة = "متأخر":
\`\`\`
=$C2="متأخر"
\`\`\`
> 💡 **ملاحظة:** في الصيغ الشرطية، استخدم \`$\` لتثبيت العمود فقط (\`$C2\`) حتى يتحقق الشرط على كل صف.`,
    contentEn: `## The Format Cells Dialog

Press **Ctrl + 1** to open the full Format Cells dialog. It has 6 tabs:

### Number — Number Formatting

| Category | Input | Result |
|----------|-------|--------|
| General | 1234.5 | 1234.5 |
| Number | 1234.5 | 1,234.50 |
| Currency | 1234.5 | $1,234.50 |
| Percentage | 0.25 | 25% |
| Date | 45292 | 01/01/2024 |
| Text | 01234 | 01234 (preserves leading zero) |

### Custom Format

The most powerful formatting option — write a short code for full control:

\`\`\`
#,##0.00          →  1,234.56
#,##0.00 "USD"    →  1,234.56 USD
0%                →  25%
0.0%              →  25.0%
dd/mm/yyyy        →  15/03/2024
dddd              →  Full day name (e.g., Friday)
"Positive";"-"#;"-"  →  Different format for positive/negative/zero
\`\`\`

### Alignment

- **Wrap Text**: wraps long text within the cell
- **Merge & Center**: merges cells and centers the content
- **Text Direction**: controls text orientation (important for RTL languages)
- **Indent**: adds leading indentation to cell text

### Fill — Background Color

Apply solid colors or gradient fills to cell backgrounds.

### Border

Full control over border placement, thickness, and color.

## Conditional Formatting

Formatting is applied automatically based on cell values.

### Highlight Cell Rules
\`\`\`
Home → Conditional Formatting → Highlight Cell Rules
\`\`\`
Example: Color any cell greater than 1000 in green.

### Data Bars
A colored bar inside the cell that visually represents the value — great for dashboards.

### Color Scales
A color gradient (e.g., red to yellow to green) based on value — ideal for performance comparisons.

### Icon Sets
Displays icons (up/down arrows, traffic lights) inside cells based on thresholds.

### New Rule — Custom Formula
\`\`\`
Home → Conditional Formatting → New Rule → Use a formula to determine which cells to format
\`\`\`
Example: Highlight an entire row if the Status column equals "Late":
\`\`\`
=$C2="Late"
\`\`\`
> 💡 **Note:** In conditional formatting formulas, use \`$\` to lock the column only (\`$C2\`) so the condition is evaluated row by row.`,
    exercises: [
      {
        id: 13,
        type: 'mcq',
        question: 'تريد عرض الرقم 0.25 بصيغة "25.0%". ما التنسيق المخصص الصحيح؟',
        questionEn: 'You want to display the number 0.25 as "25.0%". Which custom format code is correct?',
        hint: 'تحتاج رقماً عشرياً واحداً بعد الفاصلة',
        hintEn: 'You need one decimal place after the decimal point',
        options: ['0%', '0.0%', '#%', '##.#%'],
        optionsEn: ['0%', '0.0%', '#%', '##.#%'],
        correctIndex: 1,
      },
      {
        id: 14,
        type: 'mcq',
        question: 'تريد تلوين صف كامل بالأحمر إذا كانت قيمة العمود D = "خاسر". ما نوع Conditional Formatting المناسب؟',
        questionEn: 'You want to highlight an entire row in red when column D equals "Loss". Which Conditional Formatting option should you use?',
        hint: 'تحتاج كتابة صيغة خاصة تتحكم في الصف كاملاً',
        hintEn: 'You need to write a custom formula that controls the entire row',
        options: [
          'Highlight Cell Rules',
          'Data Bars',
          'New Rule → Use a formula to determine which cells to format',
          'Color Scales'
        ],
        optionsEn: [
          'Highlight Cell Rules',
          'Data Bars',
          'New Rule → Use a formula to determine which cells to format',
          'Color Scales'
        ],
        correctIndex: 2,
      },
      {
        id: 15,
        type: 'mcq',
        question: 'ما التنسيق المخصص الذي يعرض التاريخ بصيغة "15/03/2024"؟',
        questionEn: 'Which custom format code displays a date as "15/03/2024"?',
        hint: 'dd = يوم، mm = شهر، yyyy = سنة كاملة',
        hintEn: 'dd = day, mm = month, yyyy = full year',
        options: ['mm-dd-yy', 'dd/mm/yyyy', 'yyyy/dd/mm', 'd/m/y'],
        optionsEn: ['mm-dd-yy', 'dd/mm/yyyy', 'yyyy/dd/mm', 'd/m/y'],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 8,
    title: 'Named Ranges — النطاقات المسماة',
    titleEn: 'Named Ranges',
    description: 'إعطاء أسماء للخلايا والنطاقات لجعل صيغك أوضح وأسهل في الصيانة',
    descriptionEn: 'Assign names to cells and ranges to make your formulas more readable and easier to maintain',
    type: 'formula',
    content: `## ما هي Named Ranges؟

بدلاً من كتابة \`$B$1\` في صيغتك، تعطيه اسماً مثل \`ضريبة_القيمة\` وتستخدم الاسم مباشرةً.

\`\`\`
=A2 * $B$1          →  غامض
=A2 * ضريبة_القيمة  →  واضح ومفهوم
\`\`\`

## كيفية إنشاء Named Range

### الطريقة الأولى: Name Box
1. حدد الخلية أو النطاق
2. انقر في **Name Box** (مربع الاسم في أعلى اليسار)
3. اكتب الاسم واضغط **Enter**

### الطريقة الثانية: Formulas Tab
\`\`\`
Formulas → Define Name → كتابة الاسم واختيار النطاق
\`\`\`

### الطريقة الثالثة: Create from Selection
إذا كان لديك جدول برؤوس أعمدة، يمكن إنشاء Names تلقائياً:
\`\`\`
Formulas → Create from Selection → تحديد Top Row
\`\`\`

## قواعد التسمية

- لا تبدأ بـ رقم: ✗ \`1مبيعات\` / ✓ \`مبيعات_2024\`
- لا مسافات: ✗ \`إجمالي المبيعات\` / ✓ \`إجمالي_المبيعات\`
- يمكن استخدام الشرطة السفلية \`_\`
- حساسة لحالة الأحرف في الإنجليزية

## Name Manager

\`\`\`
Formulas → Name Manager  (Ctrl + F3)
\`\`\`
يتيح لك عرض وتعديل وحذف جميع الأسماء.

## أنواع النطاقات المسماة

### نطاق ثابت (Static)
\`\`\`
ضريبة = $B$1        ← خلية واحدة
أسماء_المنتجات = $A$2:$A$100  ← نطاق ثابت
\`\`\`

### نطاق ديناميكي (Dynamic) — باستخدام OFFSET
\`\`\`
=OFFSET($A$2, 0, 0, COUNTA($A:$A)-1, 1)
\`\`\`
يتوسع تلقائياً عند إضافة بيانات جديدة — مفيد جداً مع الـ Charts.

## استخدامها في الصيغ

\`\`\`
=SUM(مبيعات_2024)
=VLOOKUP(A2, جدول_المنتجات, 2, 0)
=IF(نسبة_الضريبة > 0.15, "عالية", "عادية")
\`\`\`

> 💡 **أفضل ممارسة:** استخدم Named Ranges للثوابت مثل نسبة الضريبة وسعر الصرف لأن تغييرها من مكان واحد يُحدّث كل الصيغ.`,
    contentEn: `## What Are Named Ranges?

Instead of writing \`$B$1\` in your formula, you give it a meaningful name like \`TaxRate\` and use that name directly.

\`\`\`
=A2 * $B$1       →  Cryptic
=A2 * TaxRate    →  Clear and self-documenting
\`\`\`

## How to Create a Named Range

### Method 1: Name Box
1. Select the cell or range
2. Click in the **Name Box** (top-left of the screen)
3. Type the name and press **Enter**

### Method 2: Formulas Tab
\`\`\`
Formulas → Define Name → enter the name and select the range
\`\`\`

### Method 3: Create from Selection
If you have a table with column headers, Excel can create names automatically:
\`\`\`
Formulas → Create from Selection → check Top Row
\`\`\`

## Naming Rules

- Cannot start with a number: ✗ \`1Sales\` / ✓ \`Sales_2024\`
- No spaces allowed: ✗ \`Total Sales\` / ✓ \`Total_Sales\`
- Underscores \`_\` are allowed
- Names are case-insensitive in Excel

## Name Manager

\`\`\`
Formulas → Name Manager  (Ctrl + F3)
\`\`\`
Lets you view, edit, and delete all named ranges in the workbook.

## Types of Named Ranges

### Static Range
\`\`\`
TaxRate = $B$1              ← single cell constant
ProductNames = $A$2:$A$100  ← fixed range
\`\`\`

### Dynamic Range — using OFFSET
\`\`\`
=OFFSET($A$2, 0, 0, COUNTA($A:$A)-1, 1)
\`\`\`
Automatically expands as new data is added — very useful with Charts.

## Using Named Ranges in Formulas

\`\`\`
=SUM(Sales_2024)
=VLOOKUP(A2, ProductTable, 2, 0)
=IF(TaxRate > 0.15, "High", "Normal")
\`\`\`

> 💡 **Best practice:** Use Named Ranges for constants like tax rates and exchange rates — changing the value in one place instantly updates every formula that references it.`,
    example: '=B2*ضريبة',
    sheet: {
      headers: ['المنتج', 'السعر', 'الضريبة (14%)', 'الإجمالي'],
      headersEn: ['Product', 'Price', 'Tax (14%)', 'Total'],
      rows: [
        ['لابتوب', 15000, 0.14, null],
        ['ماوس', 250, 0.14, null],
        ['شاشة', 3500, 0.14, null],
      ],
    },
    exercises: [
      {
        id: 16,
        type: 'formula',
        question: 'احسب ضريبة اللابتوب: السعر (B2) × نسبة الضريبة (C2)',
        questionEn: 'Calculate the tax on the laptop: Price (B2) × Tax Rate (C2)',
        hint: 'اضرب B2 في C2',
        hintEn: 'Multiply B2 by C2',
        sheet: {
          headers: ['المنتج', 'السعر', 'الضريبة'],
          headersEn: ['Product', 'Price', 'Tax Rate'],
          rows: [['لابتوب', 15000, 0.14]],
        },
        checkFunction: (result) => Math.abs(Number(result) - 2100) < 0.01,
      },
      {
        id: 17,
        type: 'mcq',
        question: 'ما الاختصار لفتح Name Manager؟',
        questionEn: 'What is the shortcut to open the Name Manager?',
        hint: 'Ctrl مع حرف F والرقم 3',
        hintEn: 'Ctrl combined with F3',
        options: ['Ctrl + N', 'Ctrl + F3', 'Alt + F3', 'Shift + F3'],
        optionsEn: ['Ctrl + N', 'Ctrl + F3', 'Alt + F3', 'Shift + F3'],
        correctIndex: 1,
      },
      {
        id: 18,
        type: 'mcq',
        question: 'أيٌّ من هذه الأسماء صحيح لـ Named Range؟',
        questionEn: 'Which of the following is a valid Named Range name?',
        hint: 'لا مسافات، لا تبدأ برقم',
        hintEn: 'No spaces, cannot start with a number',
        options: ['إجمالي المبيعات', '1مبيعات', 'إجمالي_المبيعات_2024', 'إجمالي-مبيعات'],
        optionsEn: ['Total Sales', '1Sales', 'Total_Sales_2024', 'Total-Sales'],
        correctIndex: 2,
      }
    ]
  },
];

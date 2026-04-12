import { Lesson } from '../types';

export const lessonsBeginner: Lesson[] = [
  {
    id: 11,
    title: 'SUM و AVERAGE و COUNT',
    titleEn: 'SUM, AVERAGE, and COUNT',
    description: 'الدوال الأكثر استخداماً في Excel لجمع البيانات وحساب المتوسطات',
    descriptionEn: 'The most commonly used Excel functions for summing data and calculating averages',
    type: 'formula',
    content: `## دوال الإحصاء الأساسية

### SUM — الجمع
\`\`\`excel
=SUM(B2:B10)       ← بتجمع نطاق كامل
=SUM(B2:B10, D2)   ← بتجمع نطاق وخلية منفردة مع بعض
\`\`\`

### AVERAGE — المتوسط الحسابي
\`\`\`excel
=AVERAGE(B2:B10)
\`\`\`
بتجمع القيم وبتقسّمها على عددها. **الخلايا الفارغة بتتجاهلها** — مش بتعدّها.

### COUNT — عدّ الخلايا الرقمية
\`\`\`excel
=COUNT(B2:B10)      ← بتعدّ الخلايا اللي فيها أرقام بس
=COUNTA(B2:B10)     ← بتعدّ كل الخلايا اللي فيها أي حاجة، نصوص أو أرقام
=COUNTBLANK(B2:B10) ← بتعدّ الخلايا الفارغة
\`\`\`

## AutoSum — أسرع طريقة

اضغط **Alt + =** لإدراج SUM تلقائياً.
أو انقر على زر **Σ** في Home tab.

## أمثلة عملية

| الصيغة | النتيجة |
|--------|---------|
| \`=SUM(100, 200, 50)\` | 350 |
| \`=AVERAGE(10, 20, 30)\` | 20 |
| \`=COUNT(1, "نص", 3, "")\` | 2 — الأرقام بس |

> 💡 **فرق مهم:** AVERAGE بتتجاهل الخلايا الفارغة، بس بتحسب الأصفار. لو عايز تتجاهل الأصفار استخدم AVERAGEIF.`,
    contentEn: `## Core Statistical Functions

### SUM — Add values
\`\`\`excel
=SUM(B2:B10)       ← sums a range
=SUM(B2:B10, D2)   ← sums a range plus an individual cell
\`\`\`

### AVERAGE — Arithmetic mean
\`\`\`excel
=AVERAGE(B2:B10)
\`\`\`
Adds all values and divides by their count. **Empty cells are ignored** — they do not count toward the average.

### COUNT — Count numeric cells
\`\`\`excel
=COUNT(B2:B10)      ← counts only cells that contain numbers
=COUNTA(B2:B10)     ← counts all non-empty cells (text + numbers)
=COUNTBLANK(B2:B10) ← counts empty cells
\`\`\`

## AutoSum — The Professional Speed Trick

Press **Alt + =** to insert a SUM formula automatically.
Or click the **Σ** button on the Home tab.

## Practical Examples

| Formula | Result |
|---------|--------|
| \`=SUM(100, 200, 50)\` | 350 |
| \`=AVERAGE(10, 20, 30)\` | 20 |
| \`=COUNT(1, "text", 3, "")\` | 2 (numbers only) |

> 💡 **Key difference:** AVERAGE ignores empty cells but counts zeros. Use AVERAGEIF if you also want to exclude zeros.`,
    example: '=SUM(B2:B4)',
    sheet: {
      headers: ['القسم', 'المبيعات (ألف ريال)'],
      headersEn: ['Department', 'Sales (thousands)'],
      rows: [
        ['المبيعات', 85],
        ['التسويق', 62],
        ['العمليات', 91],
        ['المجموع', null],
      ],
    },
    exercises: [
      {
        id: 10,
        type: 'formula',
        question: 'اكتب صيغة تجمع مبيعات الأقسام الثلاثة (B2 إلى B4)',
        questionEn: 'Write a formula that sums the sales of the three departments (B2 to B4)',
        hint: 'استخدم دالة SUM مع نطاق B2:B4',
        hintEn: 'Use the SUM function with the range B2:B4',
        sheet: {
          headers: ['القسم', 'المبيعات'],
          headersEn: ['Department', 'Sales'],
          rows: [['مبيعات', 85], ['تسويق', 62], ['عمليات', 91]],
        },
        checkFunction: (result) => result === 238,
      },
      {
        id: 11,
        type: 'formula',
        question: 'اكتب صيغة تحسب متوسط المبيعات الثلاثة',
        questionEn: 'Write a formula that calculates the average of the three sales values',
        hint: 'استخدم AVERAGE مع نفس النطاق B2:B4',
        hintEn: 'Use AVERAGE with the same range B2:B4',
        sheet: {
          headers: ['القسم', 'المبيعات'],
          headersEn: ['Department', 'Sales'],
          rows: [['مبيعات', 90], ['تسويق', 60], ['عمليات', 90]],
        },
        checkFunction: (result) => result === 80,
      },
    ]
  },

  {
    id: 12,
    title: 'MAX و MIN و ROUND',
    titleEn: 'MAX, MIN, and ROUND',
    description: 'إيجاد القيم القصوى والدنيا وتقريب الأرقام بدقة',
    descriptionEn: 'Find the highest and lowest values in a dataset and round numbers with precision',
    type: 'formula',
    content: `## MAX و MIN

### MAX — أكبر قيمة
\`\`\`excel
=MAX(B2:B10)         ← أكبر قيمة في النطاق
=MAX(B2:B10, 1000)   ← أكبر قيمة بين النطاق والرقم 1000
\`\`\`

### MIN — أصغر قيمة
\`\`\`excel
=MIN(B2:B10)
\`\`\`

### LARGE و SMALL — القيم المرتّبة
\`\`\`excel
=LARGE(B2:B10, 2)   ← تاني أكبر قيمة
=SMALL(B2:B10, 3)   ← تالت أصغر قيمة
\`\`\`

## ROUND — التقريب

\`\`\`excel
=ROUND(3.14159, 2)   → 3.14   ← تقريب لعددين عشريين
=ROUND(1234, -2)     → 1200   ← تقريب لأقرب مئة
=ROUNDUP(3.1, 0)     → 4      ← تقريب للأعلى دايماً
=ROUNDDOWN(3.9, 0)   → 3      ← تقريب للأسفل دايماً
\`\`\`

## INT و TRUNC

\`\`\`excel
=INT(3.9)    → 3   ← بتاخد الجزء الصحيح، بتتجه للأسفل دايماً
=TRUNC(3.9)  → 3   ← بتقطع الكسر العشري بس
=INT(-3.2)   → -4  ← خلي بالك! INT بتتجه للأسفل رياضياً
=TRUNC(-3.2) → -3  ← TRUNC بس بتقطع
\`\`\`

> 💡 في التقارير المالية، استخدم \`ROUND\` دايماً علشان تتجنب أخطاء التقريب اللي بتتراكم.`,
    contentEn: `## MAX and MIN

### MAX — Largest value
\`\`\`excel
=MAX(B2:B10)         ← largest value in the range
=MAX(B2:B10, 1000)   ← largest value between the range and 1000
\`\`\`

### MIN — Smallest value
\`\`\`excel
=MIN(B2:B10)
\`\`\`

### LARGE and SMALL — Ranked values
\`\`\`excel
=LARGE(B2:B10, 2)   ← 2nd largest value
=SMALL(B2:B10, 3)   ← 3rd smallest value
\`\`\`

## ROUND — Rounding numbers

\`\`\`excel
=ROUND(3.14159, 2)   → 3.14   ← round to 2 decimal places
=ROUND(1234, -2)     → 1200   ← round to the nearest hundred
=ROUNDUP(3.1, 0)     → 4      ← always round up
=ROUNDDOWN(3.9, 0)   → 3      ← always round down
\`\`\`

## INT and TRUNC

\`\`\`excel
=INT(3.9)    → 3   ← returns the integer part (always rounds toward negative infinity)
=TRUNC(3.9)  → 3   ← truncates the decimal portion
=INT(-3.2)   → -4  ← watch out! INT rounds down mathematically
=TRUNC(-3.2) → -3  ← TRUNC simply removes the decimal
\`\`\`

> 💡 In financial reports, always use \`ROUND\` to prevent cumulative rounding errors.`,
    example: '=MAX(B2:B5)',
    sheet: {
      headers: ['مندوب المبيعات', 'المبيعات'],
      headersEn: ['Sales Rep', 'Sales'],
      rows: [
        ['أحمد', 120000],
        ['سارة', 95000],
        ['محمد', 145000],
        ['نورة', 88000],
      ],
    },
    exercises: [
      {
        id: 12,
        type: 'formula',
        question: 'اكتب صيغة تجد أعلى مبيعات بين المندوبين الأربعة (B2:B5)',
        questionEn: 'Write a formula that finds the highest sales figure among the four sales reps (B2:B5)',
        hint: 'استخدم MAX مع النطاق B2:B5',
        hintEn: 'Use MAX with the range B2:B5',
        sheet: {
          headers: ['مندوب', 'مبيعات'],
          headersEn: ['Rep', 'Sales'],
          rows: [['أحمد', 120000], ['سارة', 95000], ['محمد', 145000], ['نورة', 88000]],
        },
        checkFunction: (result) => result === 145000,
      },
      {
        id: 13,
        type: 'formula',
        question: 'قرّب الرقم 3.7845 إلى عددين عشريين فقط',
        questionEn: 'Round the number 3.7845 to exactly two decimal places',
        hint: 'استخدم ROUND(number, num_digits) حيث num_digits = 2',
        hintEn: 'Use ROUND(number, num_digits) where num_digits = 2',
        sheet: {
          headers: ['الرقم'],
          headersEn: ['Number'],
          rows: [[3.7845]],
        },
        checkFunction: (result) => result === 3.78,
      },
    ]
  },

  {
    id: 13,
    title: 'دوال النصوص — LEFT, RIGHT, MID, LEN',
    titleEn: 'Text Functions — LEFT, RIGHT, MID, LEN',
    description: 'استخراج أجزاء من النصوص وقياس طولها للتعامل مع البيانات النصية',
    descriptionEn: 'Extract substrings and measure text length to work effectively with string data',
    type: 'formula',
    content: `## استخراج أجزاء من النص

### LEFT — من اليسار
\`\`\`excel
=LEFT("مرحبا بالجميع", 5)   → "مرحبا"
=LEFT(A1, 3)                 → أول 3 أحرف
\`\`\`

### RIGHT — من اليمين
\`\`\`excel
=RIGHT("Ahmed2024", 4)   → "2024"
\`\`\`

### MID — من النص من الأوسط
\`\`\`excel
=MID("SAU-2024-001", 5, 4)   → "2024"
         ↑ابدأ من  ↑عدد الحروف
\`\`\`

### LEN — طول النص
\`\`\`excel
=LEN("Excel")   → 5
=LEN("")        → 0
\`\`\`

## مثال عملي: استخراج كود البلد من رقم الهاتف

لو الهاتف: \`+966-555-1234\`
\`\`\`excel
=MID(A1, 2, 3)   → "966"   ← كود البلد
=RIGHT(A1, 8)    → "555-1234"
\`\`\`

## FIND و SEARCH — إيجاد موقع نص داخل نص

\`\`\`excel
=FIND("@", "user@email.com")   → 5   ← موقع @
=SEARCH("excel", "Excel 365")  → 1   ← مش حساسة لحالة الأحرف
\`\`\`

## استخراج الاسم الأول والأخير

\`\`\`excel
الاسم الكامل في A1: "محمد أحمد"
=LEFT(A1, FIND(" ", A1)-1)              → "محمد"
=MID(A1, FIND(" ", A1)+1, LEN(A1))     → "أحمد"
\`\`\``,
    contentEn: `## Extracting Parts of a Text String

### LEFT — from the left
\`\`\`excel
=LEFT("Hello World", 5)   → "Hello"
=LEFT(A1, 3)               → first 3 characters
\`\`\`

### RIGHT — from the right
\`\`\`excel
=RIGHT("Ahmed2024", 4)   → "2024"
\`\`\`

### MID — from the middle
\`\`\`excel
=MID("SAU-2024-001", 5, 4)   → "2024"
         ↑start  ↑length
\`\`\`

### LEN — text length
\`\`\`excel
=LEN("Excel")   → 5
=LEN("")        → 0
\`\`\`

## Practical Example: Extract a Country Code from a Phone Number

Given the phone number: \`+966-555-1234\`
\`\`\`excel
=MID(A1, 2, 3)   → "966"       ← country code
=RIGHT(A1, 8)    → "555-1234"
\`\`\`

## FIND and SEARCH — Locate text within a string

\`\`\`excel
=FIND("@", "user@email.com")   → 5   ← position of @
=SEARCH("excel", "Excel 365")  → 1   ← case-insensitive search
\`\`\`

## Combining Functions: Extract First and Last Name

\`\`\`excel
Full name in A1: "John Smith"
=LEFT(A1, FIND(" ", A1)-1)           → "John"
=MID(A1, FIND(" ", A1)+1, LEN(A1))   → "Smith"
\`\`\``,
    example: '=LEFT(A2, 3)',
    sheet: {
      headers: ['الكود', 'أول 3 أحرف'],
      headersEn: ['Code', 'First 3 Characters'],
      rows: [
        ['SAU-001', null],
        ['SAU-002', null],
      ],
    },
    exercises: [
      {
        id: 14,
        type: 'formula',
        question: 'من النص "Excel2024"، استخرج آخر 4 أحرف',
        questionEn: 'From the text "Excel2024", extract the last 4 characters',
        hint: 'استخدم RIGHT(text, 4)',
        hintEn: 'Use RIGHT(text, 4)',
        sheet: {
          headers: ['النص'],
          headersEn: ['Text'],
          rows: [['Excel2024']],
        },
        checkFunction: (result) => result === '2024',
      },
      {
        id: 15,
        type: 'formula',
        question: 'احسب طول النص "تحليل البيانات"',
        questionEn: 'Calculate the length of the text "Data Analysis"',
        hint: 'استخدم LEN(A2) حيث A2 تحتوي النص',
        hintEn: 'Use LEN(A2) where A2 contains the text',
        sheet: {
          headers: ['النص'],
          headersEn: ['Text'],
          rows: [['تحليل البيانات']],
        },
        checkFunction: (result) => result === 14,
      },
    ]
  },

  {
    id: 14,
    title: 'دوال النصوص — TRIM, SUBSTITUTE, CONCAT',
    titleEn: 'Text Functions — TRIM, SUBSTITUTE, CONCAT',
    description: 'تنظيف النصوص واستبدال الأجزاء ودمج المحتوى',
    descriptionEn: 'Clean text data, replace substrings, and combine content from multiple cells',
    type: 'formula',
    content: `## تنظيف النصوص

### TRIM — إزالة المسافات الزائدة
\`\`\`excel
=TRIM("  أحمد  ")       → "أحمد"
=TRIM("أحمد  محمد")    → "أحمد محمد"   ← بتسيب مسافة واحدة بس بين الكلمات
\`\`\`

### CLEAN — إزالة الأحرف مش القابلة للطباعة
\`\`\`excel
=CLEAN(A1)   ← مفيدة لما بتستورد بيانات من أنظمة تانية
\`\`\`

### UPPER, LOWER, PROPER — تغيير حالة الأحرف
\`\`\`excel
=UPPER("ahmed")       → "AHMED"
=LOWER("AHMED")       → "ahmed"
=PROPER("ahmed ali")  → "Ahmed Ali"
\`\`\`

## البحث والاستبدال

### SUBSTITUTE — استبدال نص بنص تاني
\`\`\`excel
=SUBSTITUTE("SAU-001", "SAU", "KSA")   → "KSA-001"
=SUBSTITUTE(A1, " ", "_")               → استبدال المسافات بـ _
=SUBSTITUTE(A1, "-", "", 2)             → حذف الشرطة الثانية بس
\`\`\`

### REPLACE — استبدال بالموضع
\`\`\`excel
=REPLACE("Ahmed2024", 6, 4, "2025")   → "Ahmed2025"
         ↑النص  ↑ابدأ من  ↑عدد الحروف  ↑النص الجديد
\`\`\`

## دمج النصوص

\`\`\`excel
=CONCAT(A1, " ", B1)               ← متاحة من Excel 2016
=TEXTJOIN(", ", TRUE, A1:A5)       ← بتدمج نطاق كامل بفاصل
=A1 & " " & B1                     ← الطريقة الكلاسيكية دايماً شغّالة
\`\`\`

> 💡 استخدم TRIM + CLEAN مع بعض لما بتنظّف بيانات جاية من خارج Excel.`,
    contentEn: `## Cleaning Text

### TRIM — Remove extra spaces
\`\`\`excel
=TRIM("  Ahmed  ")        → "Ahmed"
=TRIM("Ahmed  Ali")       → "Ahmed Ali"   ← keeps a single space between words
\`\`\`

### CLEAN — Remove non-printable characters
\`\`\`excel
=CLEAN(A1)   ← useful when importing data from external systems
\`\`\`

### UPPER, LOWER, PROPER — Change text case
\`\`\`excel
=UPPER("ahmed")       → "AHMED"
=LOWER("AHMED")       → "ahmed"
=PROPER("ahmed ali")  → "Ahmed Ali"
\`\`\`

## Find and Replace Functions

### SUBSTITUTE — Replace one string with another
\`\`\`excel
=SUBSTITUTE("SAU-001", "SAU", "KSA")   → "KSA-001"
=SUBSTITUTE(A1, " ", "_")               → replace spaces with underscores
=SUBSTITUTE(A1, "-", "", 2)             → remove only the second hyphen
\`\`\`

### REPLACE — Replace by position
\`\`\`excel
=REPLACE("Ahmed2024", 6, 4, "2025")   → "Ahmed2025"
         ↑text  ↑start ↑len ↑new_text
\`\`\`

## Combining Text

\`\`\`excel
=CONCAT(A1, " ", B1)               ← Excel 2016+
=TEXTJOIN(", ", TRUE, A1:A5)       ← joins a range with a delimiter
=A1 & " " & B1                     ← classic concatenation operator
\`\`\`

> 💡 Use TRIM + CLEAN together when cleaning data imported from external sources.`,
    example: '=TRIM(A2)',
    sheet: {
      headers: ['الاسم (غير منظّم)', 'الاسم المنظّف'],
      headersEn: ['Name (Unclean)', 'Cleaned Name'],
      rows: [
        ['  محمد  أحمد  ', null],
      ],
    },
    exercises: [
      {
        id: 16,
        type: 'formula',
        question: 'النص في A2 هو "  أحمد  علي  ". اكتب صيغة لتنظيفه وإزالة المسافات الزائدة',
        questionEn: 'The text in A2 is "  Ahmed  Ali  ". Write a formula to clean it by removing extra spaces',
        hint: 'استخدم TRIM(A2)',
        hintEn: 'Use TRIM(A2)',
        sheet: {
          headers: ['الاسم'],
          headersEn: ['Name'],
          rows: [['  أحمد  علي  ']],
        },
        checkFunction: (result) => result === 'أحمد  علي',
      },
      {
        id: 17,
        type: 'formula',
        question: 'في A2 النص "SAU-2024". استبدل "SAU" بـ "KSA"',
        questionEn: 'Cell A2 contains "SAU-2024". Replace "SAU" with "KSA"',
        hint: 'استخدم SUBSTITUTE(A2, "SAU", "KSA")',
        hintEn: 'Use SUBSTITUTE(A2, "SAU", "KSA")',
        sheet: {
          headers: ['الكود'],
          headersEn: ['Code'],
          rows: [['SAU-2024']],
        },
        checkFunction: (result) => result === 'KSA-2024',
      },
    ]
  },

  {
    id: 15,
    title: 'IF — الشرط الأساسي',
    titleEn: 'IF — The Core Logical Function',
    description: 'اتخاذ قرارات داخل Excel بناءً على شروط محددة',
    descriptionEn: 'Make decisions inside Excel based on specified conditions',
    type: 'formula',
    content: `## دالة IF

\`\`\`excel
=IF(logical_test, value_if_true, value_if_false)
\`\`\`

**مثال:**
\`\`\`excel
=IF(B2>=60, "ناجح", "راسب")
\`\`\`

## IF متداخل — Nested IF

\`\`\`excel
=IF(B2>=90, "ممتاز",
    IF(B2>=75, "جيد جداً",
        IF(B2>=60, "جيد", "راسب")))
\`\`\`

> ⚠️ متتجاوزش 3 مستويات تداخل — استخدم IFS بدلها.

## IFS — بديل أفضل، متاحة من Excel 2019

\`\`\`excel
=IFS(B2>=90, "ممتاز",
     B2>=75, "جيد جداً",
     B2>=60, "جيد",
     TRUE, "راسب")
\`\`\`

آخر شرط \`TRUE\` بيشتغل كـ "else" — بيتطبق لو مفيش شرط تاني نجح.

## SWITCH — لقيم محددة بالاسم

\`\`\`excel
=SWITCH(A2,
    "Q1", "الربع الأول",
    "Q2", "الربع الثاني",
    "Q3", "الربع الثالث",
    "Q4", "الربع الرابع",
    "غير معروف")
\`\`\`

## IFERROR — التعامل مع الأخطاء

\`\`\`excel
=IFERROR(A2/B2, 0)                      ← لو فيه خطأ، ارجع 0
=IFERROR(VLOOKUP(...), "مش موجود")
\`\`\`

> 💡 **أهم نصيحة:** قبل ما تكتب IF، اكتب الشرط بالعربي الأول: "لو المبلغ أكبر من 1000 يبقى..."`,
    contentEn: `## The IF Function

\`\`\`excel
=IF(logical_test, value_if_true, value_if_false)
\`\`\`

**Example:**
\`\`\`excel
=IF(B2>=60, "Pass", "Fail")
\`\`\`

## Nested IF

\`\`\`excel
=IF(B2>=90, "Excellent",
    IF(B2>=75, "Very Good",
        IF(B2>=60, "Good", "Fail")))
\`\`\`

> ⚠️ Avoid nesting more than 3 levels deep — use IFS instead.

## IFS — A Better Alternative (Excel 2019+)

\`\`\`excel
=IFS(B2>=90, "Excellent",
     B2>=75, "Very Good",
     B2>=60, "Good",
     TRUE, "Fail")
\`\`\`

The final \`TRUE\` condition acts as an "else" — it applies when no other condition is met.

## SWITCH — For specific values

\`\`\`excel
=SWITCH(A2,
    "Q1", "First Quarter",
    "Q2", "Second Quarter",
    "Q3", "Third Quarter",
    "Q4", "Fourth Quarter",
    "Unknown")
\`\`\`

## IFERROR — Handle errors gracefully

\`\`\`excel
=IFERROR(A2/B2, 0)                        ← return 0 if an error occurs
=IFERROR(VLOOKUP(...), "Not found")
\`\`\`

> 💡 **Best practice:** Before writing an IF formula, describe the condition in plain language first: "If the amount is greater than 1000, then..."`,
    example: '=IF(B2>=60, "ناجح", "راسب")',
    sheet: {
      headers: ['الطالب', 'الدرجة', 'التقدير'],
      headersEn: ['Student', 'Score', 'Grade'],
      rows: [
        ['أحمد', 85, null],
        ['سارة', 55, null],
        ['محمد', 72, null],
      ],
    },
    exercises: [
      {
        id: 18,
        type: 'formula',
        question: 'الدرجة في B2 هي 75. اكتب صيغة: إذا كانت الدرجة >= 60 أرجع "ناجح"، وإلا "راسب"',
        questionEn: 'The score in B2 is 75. Write a formula: if the score is >= 60 return "Pass", otherwise return "Fail"',
        hint: 'استخدم IF(B2>=60, "ناجح", "راسب")',
        hintEn: 'Use IF(B2>=60, "Pass", "Fail")',
        sheet: {
          headers: ['الطالب', 'الدرجة'],
          headersEn: ['Student', 'Score'],
          rows: [['أحمد', 75]],
        },
        checkFunction: (result) => result === 'ناجح',
      },
      {
        id: 19,
        type: 'formula',
        question: 'اكتب صيغة: إذا كانت الدرجة في B2 (وهي 45) >= 60 فـ"ناجح" وإلا "راسب"',
        questionEn: 'Write a formula: if the score in B2 (which is 45) is >= 60 return "Pass", otherwise "Fail"',
        hint: 'نفس الصيغة لكن الدرجة أقل من 60',
        hintEn: 'Same formula, but the score is below 60',
        sheet: {
          headers: ['الطالب', 'الدرجة'],
          headersEn: ['Student', 'Score'],
          rows: [['سارة', 45]],
        },
        checkFunction: (result) => result === 'راسب',
      },
    ]
  },

  {
    id: 16,
    title: 'AND و OR و NOT مع IF',
    titleEn: 'AND, OR, and NOT with IF',
    description: 'دمج شروط متعددة في صيغة واحدة باستخدام العوامل المنطقية',
    descriptionEn: 'Combine multiple conditions into a single formula using logical operators',
    type: 'formula',
    content: `## AND — كل الشروط لازم تكون صح

\`\`\`excel
=AND(A2>0, B2>0)                  → TRUE بس لو الاتنين موجبين
=IF(AND(A2>0, B2>0), "موجبان", "أحدهما سالب")
\`\`\`

## OR — شرط واحد على الأقل صح

\`\`\`excel
=OR(A2="مدير", A2="مشرف")        → TRUE لو أي منهم
=IF(OR(A2="VIP", B2>=10000), "عميل مميز", "عميل عادي")
\`\`\`

## NOT — عكس الشرط

\`\`\`excel
=NOT(ISBLANK(A2))    → TRUE لو الخلية مش فارغة
=IF(NOT(A2="مكتمل"), "قيد التنفيذ", "مكتمل")
\`\`\`

## دمج AND مع OR

\`\`\`excel
=IF(AND(A2="موافق", OR(B2>=5000, C2="VIP")), "معتمد", "مرفوض")
\`\`\`

## ISBLANK و ISNUMBER و ISTEXT

\`\`\`excel
=ISBLANK(A2)    → TRUE لو الخلية فارغة
=ISNUMBER(A2)   → TRUE لو الخلية فيها رقم
=ISTEXT(A2)     → TRUE لو الخلية فيها نص
\`\`\`

## مثال عملي: التحقق من قبول طلب قرض

\`\`\`excel
=IF(AND(B2>=25, B2<=60,    ← العمر بين 25 و 60
        C2>=5000,           ← الراتب >= 5000
        D2="موظف"),         ← الحالة الوظيفية
   "مقبول", "مرفوض")
\`\`\``,
    contentEn: `## AND — All conditions must be true

\`\`\`excel
=AND(A2>0, B2>0)                  → TRUE only if both are positive
=IF(AND(A2>0, B2>0), "Both positive", "At least one is negative")
\`\`\`

## OR — At least one condition must be true

\`\`\`excel
=OR(A2="Manager", A2="Supervisor")   → TRUE if either title matches
=IF(OR(A2="VIP", B2>=10000), "Premium customer", "Regular customer")
\`\`\`

## NOT — Reverses the condition

\`\`\`excel
=NOT(ISBLANK(A2))    → TRUE if the cell is not empty
=IF(NOT(A2="Complete"), "In progress", "Complete")
\`\`\`

## Combining AND and OR

\`\`\`excel
=IF(AND(A2="Approved", OR(B2>=5000, C2="VIP")), "Accepted", "Rejected")
\`\`\`

## ISBLANK, ISNUMBER, ISTEXT

\`\`\`excel
=ISBLANK(A2)    → TRUE if the cell is empty
=ISNUMBER(A2)   → TRUE if the cell contains a number
=ISTEXT(A2)     → TRUE if the cell contains text
\`\`\`

## Practical Example: Loan Application Validation

\`\`\`excel
=IF(AND(B2>=25, B2<=60,    ← age between 25 and 60
        C2>=5000,           ← salary >= 5000
        D2="Employed"),     ← employment status
   "Approved", "Rejected")
\`\`\``,
    example: '=IF(AND(B2>=60, C2>=60), "ناجح في المادتين", "راسب")',
    sheet: {
      headers: ['الطالب', 'رياضيات', 'علوم', 'النتيجة'],
      headersEn: ['Student', 'Math', 'Science', 'Result'],
      rows: [
        ['أحمد', 75, 80, null],
        ['سارة', 55, 90, null],
      ],
    },
    exercises: [
      {
        id: 20,
        type: 'formula',
        question: 'B2=80 وC2=70. اكتب صيغة: ناجح في المادتين فقط إذا كلتاهما >= 60',
        questionEn: 'B2=80 and C2=70. Write a formula: "Pass" only if both subjects are >= 60, otherwise "Fail"',
        hint: 'استخدم IF(AND(B2>=60, C2>=60), "ناجح", "راسب")',
        hintEn: 'Use IF(AND(B2>=60, C2>=60), "ناجح", "راسب")',
        sheet: {
          headers: ['الطالب', 'رياضيات', 'علوم'],
          headersEn: ['Student', 'Math', 'Science'],
          rows: [['أحمد', 80, 70]],
        },
        checkFunction: (result) => result === 'ناجح',
      },
      {
        id: 21,
        type: 'formula',
        question: 'B2=45 وC2=75. هل ينجح إذا شرط الناجح هو اجتياز الرياضيات فقط؟',
        questionEn: 'B2=45 and C2=75. Does the student pass if the only requirement is passing Math (score >= 60)?',
        hint: 'استخدم IF(B2>=60, "ناجح", "راسب")',
        hintEn: 'Use IF(B2>=60, "ناجح", "راسب")',
        sheet: {
          headers: ['اسم', 'رياضيات'],
          headersEn: ['Name', 'Math'],
          rows: [['سارة', 45]],
        },
        checkFunction: (result) => result === 'راسب',
      },
    ]
  },

  {
    id: 17,
    title: 'دوال التاريخ والوقت',
    titleEn: 'Date and Time Functions',
    description: 'التعامل مع التواريخ في Excel: TODAY, DATE, DATEDIF, YEAR, MONTH, DAY',
    descriptionEn: 'Work with dates in Excel: TODAY, DATE, DATEDIF, YEAR, MONTH, DAY, and more',
    type: 'formula',
    content: `## إزاي Excel بيخزّن التواريخ؟

التواريخ في Excel هي أرقام في الحقيقة — **1 يناير 1900 = 1**. يعني تقدر تطرح تاريخين من بعض وتجيب عدد الأيام بينهم.

\`\`\`excel
="2024-12-31" - "2024-01-01"   → 365
\`\`\`

## دوال التاريخ الأساسية

### TODAY و NOW
\`\`\`excel
=TODAY()     → تاريخ النهارده، بيتحدث تلقائياً
=NOW()       → تاريخ ووقت دلوقتي
\`\`\`

### DATE — بنشئ تاريخ من مكوناته
\`\`\`excel
=DATE(2024, 3, 15)                     → 15/03/2024
=DATE(YEAR(A1), MONTH(A1)+1, 1)        → أول الشهر الجاي
\`\`\`

### YEAR, MONTH, DAY — بنطلع مكونات التاريخ
\`\`\`excel
=YEAR("15/03/2024")    → 2024
=MONTH("15/03/2024")   → 3
=DAY("15/03/2024")     → 15
\`\`\`

### WEEKDAY — اليوم من الأسبوع
\`\`\`excel
=WEEKDAY("15/03/2024", 2)    → 5 — الجمعة، لما الاثنين = 1
=TEXT("15/03/2024", "dddd")  → اسم اليوم كامل
\`\`\`

## DATEDIF — حساب الفرق بين تاريخين

\`\`\`excel
=DATEDIF(تاريخ_البداية, تاريخ_النهاية, الوحدة)
\`\`\`

| الوحدة | المعنى |
|--------|--------|
| "Y" | عدد السنين الكاملة |
| "M" | عدد الشهور الكاملة |
| "D" | عدد الأيام |
| "YM" | الشهور المتبقية بعد السنين |
| "MD" | الأيام المتبقية بعد الشهور |

### مثال: حساب العمر
\`\`\`excel
=DATEDIF(B2, TODAY(), "Y") & " سنة، " &
 DATEDIF(B2, TODAY(), "YM") & " شهر، " &
 DATEDIF(B2, TODAY(), "MD") & " يوم"
\`\`\`

## NETWORKDAYS — أيام الشغل

\`\`\`excel
=NETWORKDAYS(A2, B2)                      ← أيام الشغل ماعدا الجمعة والسبت
=NETWORKDAYS(A2, B2, C2:C10)              ← مع استثناء الإجازات
=NETWORKDAYS.INTL(A2, B2, "0000011")      ← تحديد نهاية الأسبوع يدوياً
\`\`\`

## EDATE و EOMONTH

\`\`\`excel
=EDATE("15/01/2024", 3)    → 15/04/2024  — بعد 3 شهور
=EOMONTH("15/01/2024", 0)  → 31/01/2024  — آخر يوم في نفس الشهر
=EOMONTH("15/01/2024", 1)  → 29/02/2024  — آخر يوم في الشهر الجاي
\`\`\`

> 💡 **مهم:** لو ظهر التاريخ كرقم بدل ما يظهر كتاريخ، نسّقه بـ Ctrl+1 ← Date.`,
    contentEn: `## How Excel Stores Dates

Dates in Excel are actually numbers — **January 1, 1900 = 1**. This means you can subtract two dates to get the number of days between them.

\`\`\`excel
="2024-12-31" - "2024-01-01"   → 365
\`\`\`

## Core Date Functions

### TODAY and NOW
\`\`\`excel
=TODAY()     → today's date (updates automatically)
=NOW()       → current date and time
\`\`\`

### DATE — Build a date from its parts
\`\`\`excel
=DATE(2024, 3, 15)                     → 15/03/2024
=DATE(YEAR(A1), MONTH(A1)+1, 1)        → first day of next month
\`\`\`

### YEAR, MONTH, DAY — Extract date components
\`\`\`excel
=YEAR("15/03/2024")    → 2024
=MONTH("15/03/2024")   → 3
=DAY("15/03/2024")     → 15
\`\`\`

### WEEKDAY — Day of the week
\`\`\`excel
=WEEKDAY("15/03/2024", 2)    → 5 (Friday — Monday=1)
=TEXT("15/03/2024", "dddd")  → full day name (e.g., "Friday")
\`\`\`

## DATEDIF — Calculate the difference between two dates

\`\`\`excel
=DATEDIF(start_date, end_date, unit)
\`\`\`

| Unit | Meaning |
|------|---------|
| "Y" | Complete years |
| "M" | Complete months |
| "D" | Total days |
| "YM" | Remaining months after full years |
| "MD" | Remaining days after full months |

### Example: Calculate a person's age
\`\`\`excel
=DATEDIF(B2, TODAY(), "Y") & " years, " &
 DATEDIF(B2, TODAY(), "YM") & " months, " &
 DATEDIF(B2, TODAY(), "MD") & " days"
\`\`\`

## NETWORKDAYS — Count working days

\`\`\`excel
=NETWORKDAYS(A2, B2)                     ← working days excluding weekends
=NETWORKDAYS(A2, B2, C2:C10)             ← also exclude a holidays list
=NETWORKDAYS.INTL(A2, B2, "0000011")     ← define custom weekend days
\`\`\`

## EDATE and EOMONTH

\`\`\`excel
=EDATE("15/01/2024", 3)    → 15/04/2024  (3 months later)
=EOMONTH("15/01/2024", 0)  → 31/01/2024  (last day of current month)
=EOMONTH("15/01/2024", 1)  → 29/02/2024  (last day of next month)
\`\`\`

> 💡 **Important:** If a date appears as a number, format it with Ctrl+1 → Date.`,
    example: '=YEAR(A2)',
    sheet: {
      headers: ['تاريخ الميلاد', 'السنة', 'الشهر', 'اليوم'],
      headersEn: ['Date of Birth', 'Year', 'Month', 'Day'],
      rows: [
        ['1990-05-20', null, null, null],
        ['1985-11-03', null, null, null],
      ],
    },
    exercises: [
      {
        id: 30,
        type: 'formula',
        question: 'تاريخ الميلاد في A2 هو "1990-05-20". اكتب صيغة تستخرج سنة الميلاد فقط',
        questionEn: 'The date of birth in A2 is "1990-05-20". Write a formula that extracts only the birth year',
        hint: 'استخدم YEAR(A2)',
        hintEn: 'Use YEAR(A2)',
        sheet: {
          headers: ['تاريخ الميلاد'],
          headersEn: ['Date of Birth'],
          rows: [['1990-05-20']],
        },
        checkFunction: (result) => result === 1990,
      },
      {
        id: 31,
        type: 'formula',
        question: 'احسب عدد الأيام بين "2024-01-01" و "2024-12-31"',
        questionEn: 'Calculate the number of days between "2024-01-01" and "2024-12-31"',
        hint: 'اطرح التاريخين: B2 - A2، أو استخدم DATEDIF بوحدة "D"',
        hintEn: 'Subtract the two dates: B2 - A2, or use DATEDIF with unit "D"',
        sheet: {
          headers: ['تاريخ البداية', 'تاريخ النهاية'],
          headersEn: ['Start Date', 'End Date'],
          rows: [['2024-01-01', '2024-12-31']],
        },
        checkFunction: (result) => result === 365,
      },
      {
        id: 32,
        type: 'mcq',
        question: 'ما الدالة التي تُرجع آخر يوم في الشهر الحالي؟',
        questionEn: 'Which function returns the last day of the current month?',
        hint: 'فكّر في الدالة التي تحسب نهاية الشهر',
        hintEn: 'Think of the function specifically designed to return end-of-month dates',
        options: [
          '=LASTDAY(TODAY())',
          '=EOMONTH(TODAY(), 0)',
          '=ENDOFMONTH(TODAY())',
          '=DATE(YEAR(TODAY()), MONTH(TODAY()), 31)'
        ],
        optionsEn: [
          '=LASTDAY(TODAY())',
          '=EOMONTH(TODAY(), 0)',
          '=ENDOFMONTH(TODAY())',
          '=DATE(YEAR(TODAY()), MONTH(TODAY()), 31)'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 18,
    title: 'معالجة الأخطاء — IFERROR و IFNA',
    titleEn: 'Error Handling — IFERROR and IFNA',
    description: 'التعامل الاحترافي مع أخطاء Excel وإخفاؤها أو استبدالها بقيم مفيدة',
    descriptionEn: 'Handle Excel errors professionally by suppressing them or replacing them with meaningful values',
    type: 'formula',
    content: `## أنواع الأخطاء في Excel

| الخطأ | السبب |
|-------|-------|
| \`#DIV/0!\` | قسمة على صفر |
| \`#VALUE!\` | نوع بيانات غلط — نص بدل رقم |
| \`#REF!\` | مرجع لخلية اتحذفت |
| \`#NAME?\` | اسم دالة مش معروف |
| \`#N/A\` | القيمة مش موجودة، بتظهر كتير مع VLOOKUP |
| \`#NULL!\` | تقاطع نطاقين مش بيتقاطعوا |
| \`#NUM!\` | رقم مش صالح |

## IFERROR — بتتعامل مع أي خطأ

\`\`\`excel
=IFERROR(الصيغة, القيمة_عند_الخطأ)
\`\`\`

**أمثلة:**
\`\`\`excel
=IFERROR(A2/B2, 0)                    ← لو قسمة على صفر، ارجع 0
=IFERROR(A2/B2, "خطأ في البيانات")    ← رسالة واضحة
=IFERROR(VLOOKUP(D2,A:B,2,0), "غير موجود")
\`\`\`

## IFNA — بس لخطأ #N/A

أدق من IFERROR — بتتعامل بس مع أخطاء #N/A:
\`\`\`excel
=IFNA(VLOOKUP(D2, A:C, 2, 0), "المنتج غير موجود")
\`\`\`

> 💡 **امتى تستخدم IFNA بدل IFERROR؟**
> استخدمها مع VLOOKUP و MATCH — علشان ما تخبّيش أخطاء حقيقية تانية.

## الطريقة القديمة مقابل IFERROR

\`\`\`excel
=IF(ISERROR(A2/B2), 0, A2/B2)   ← الطريقة القديمة قبل IFERROR
=IFERROR(A2/B2, 0)               ← أف��ل وأقصر
\`\`\`

## ERROR.TYPE — معرفة نوع الخطأ

\`\`\`excel
=ERROR.TYPE(A2)
\`\`\`
بترجع رقم: 1=#NULL!, 2=#DIV/0!, 3=#VALUE!, 4=#REF!, 5=#NAME?, 6=#NUM!, 7=#N/A

## مثال عملي: تقرير مبيعات محمي من الأخطاء

\`\`\`excel
=IFERROR(
    VLOOKUP(A2, جدول_المنتجات, 3, 0) * B2,
    "راجع كود المنتج"
)
\`\`\``,
    contentEn: `## Excel Error Types

| Error | Cause |
|-------|-------|
| \`#DIV/0!\` | Division by zero |
| \`#VALUE!\` | Wrong data type (text instead of number) |
| \`#REF!\` | Reference to a deleted cell |
| \`#NAME?\` | Unrecognized function name |
| \`#N/A\` | Value not found (common with VLOOKUP) |
| \`#NULL!\` | Intersection of two non-overlapping ranges |
| \`#NUM!\` | Invalid numeric value |

## IFERROR — Handle any error

\`\`\`excel
=IFERROR(formula, value_if_error)
\`\`\`

**Examples:**
\`\`\`excel
=IFERROR(A2/B2, 0)                       ← return 0 on division by zero
=IFERROR(A2/B2, "Data error")            ← return a descriptive message
=IFERROR(VLOOKUP(D2, A:B, 2, 0), "Not found")
\`\`\`

## IFNA — Handle #N/A errors only

More precise than IFERROR — only catches #N/A errors:
\`\`\`excel
=IFNA(VLOOKUP(D2, A:C, 2, 0), "Product not found")
\`\`\`

> 💡 **When to use IFNA instead of IFERROR?**
> Use IFNA with VLOOKUP and MATCH — so you don't accidentally hide other real errors.

## The Old Way vs. IFERROR

\`\`\`excel
=IF(ISERROR(A2/B2), 0, A2/B2)   ← old approach before IFERROR existed
=IFERROR(A2/B2, 0)               ← cleaner and shorter
\`\`\`

## ERROR.TYPE — Identify the error type

\`\`\`excel
=ERROR.TYPE(A2)
\`\`\`
Returns a number: 1=#NULL!, 2=#DIV/0!, 3=#VALUE!, 4=#REF!, 5=#NAME?, 6=#NUM!, 7=#N/A

## Practical Example: Error-Safe Sales Report

\`\`\`excel
=IFERROR(
    VLOOKUP(A2, ProductTable, 3, 0) * B2,
    "Check product code"
)
\`\`\``,
    example: '=IFERROR(B2/C2, 0)',
    sheet: {
      headers: ['المنتج', 'الإيراد', 'الكمية', 'متوسط السعر'],
      headersEn: ['Product', 'Revenue', 'Quantity', 'Average Price'],
      rows: [
        ['لابتوب', 45000, 3, null],
        ['ماوس', 500, 0, null],
      ],
    },
    exercises: [
      {
        id: 33,
        type: 'formula',
        question: 'B2=500 وC2=0. اكتب صيغة تقسّم B2 على C2 وتُرجع 0 عند الخطأ',
        questionEn: 'B2=500 and C2=0. Write a formula that divides B2 by C2 and returns 0 if an error occurs',
        hint: 'استخدم IFERROR(B2/C2, 0)',
        hintEn: 'Use IFERROR(B2/C2, 0)',
        sheet: {
          headers: ['الإيراد', 'الكمية'],
          headersEn: ['Revenue', 'Quantity'],
          rows: [[500, 0]],
        },
        checkFunction: (result) => result === 0,
      },
      {
        id: 34,
        type: 'mcq',
        question: 'ما الفرق الأساسي بين IFERROR وIFNA؟',
        questionEn: 'What is the key difference between IFERROR and IFNA?',
        hint: 'فكّر في نطاق الأخطاء التي تعالجها كل منهما',
        hintEn: 'Think about the range of errors each function handles',
        options: [
          'لا يوجد فرق — كلاهما متطابق',
          'IFERROR تعالج أي خطأ، IFNA تعالج فقط خطأ #N/A',
          'IFNA أسرع في الأداء من IFERROR',
          'IFERROR للإصدارات القديمة، IFNA للجديدة فقط'
        ],
        optionsEn: [
          'There is no difference — they are identical',
          'IFERROR handles any error; IFNA handles only #N/A errors',
          'IFNA is faster than IFERROR',
          'IFERROR is for older versions; IFNA is for newer versions only'
        ],
        correctIndex: 1,
      },
      {
        id: 35,
        type: 'mcq',
        question: 'ما الخطأ الذي يظهر عند استخدام VLOOKUP وعدم إيجاد القيمة؟',
        questionEn: 'Which error does VLOOKUP return when the lookup value is not found?',
        hint: 'هذا الخطأ يعني "Not Available"',
        hintEn: 'This error stands for "Not Available"',
        options: ['#VALUE!', '#REF!', '#N/A', '#NAME?'],
        optionsEn: ['#VALUE!', '#REF!', '#N/A', '#NAME?'],
        correctIndex: 2,
      }
    ]
  },

  {
    id: 19,
    title: 'دوال الرياضيات — ABS, MOD, CEILING, FLOOR, POWER',
    titleEn: 'Math Functions — ABS, MOD, CEILING, FLOOR, POWER',
    description: 'دوال رياضية أساسية لا غنى عنها في التحليل المالي والعمليات',
    descriptionEn: 'Essential math functions for financial analysis and operational calculations',
    type: 'formula',
    content: `## ABS — القيمة المطلقة

\`\`\`excel
=ABS(-150)    → 150
=ABS(150)     → 150
\`\`\`
مفيدة لما تحسب فروقات من غير ما تهمك الاتجاه:
\`\`\`excel
=ABS(الفعلي - المستهدف)   ← الانحراف عن الهدف
\`\`\`

## MOD — باقي القسمة

\`\`\`excel
=MOD(10, 3)   → 1   — 10 ÷ 3 = 3 والباقي 1
=MOD(12, 4)   → 0   — قابل للقسمة تماماً
=MOD(A2, 2)   → 0 لو زوجي، 1 لو فردي
\`\`\`

**تطبيق: تمييز الصفوف الزوجية والفردية**
\`\`\`excel
=IF(MOD(ROW(), 2)=0, "زوجي", "فردي")
\`\`\`

## CEILING و FLOOR — التقريب للمضاعفات

\`\`\`excel
=CEILING(23, 5)       → 25   ← للأعلى لأقرب مضاعف لـ 5
=FLOOR(23, 5)         → 20   ← للأسفل لأقرب مضاعف لـ 5
=CEILING(1.23, 0.25)  → 1.25
\`\`\`

**تطبيق: تحديد أسعار بمضاعفات 50 جنيه**
\`\`\`excel
=CEILING(التكلفة * 1.3, 50)   ← هامش 30% ويتقرّب لأعلى 50
\`\`\`

## POWER و SQRT

\`\`\`excel
=POWER(2, 10)   → 1024   — 2 أس 10
=2^10           → 1024   — نفس النتيجة باختصار
=SQRT(144)      → 12     — الجذر التربيعي
\`\`\`

## SUMPRODUCT — الجمع الضربي

دالة قوية جداً، بتضرب نطاقين في بعض وبعدين بتجمع النتائج:
\`\`\`excel
=SUMPRODUCT(B2:B5, C2:C5)
\`\`\`

| المنتج | الكمية | السعر | |
|--------|--------|-------|--|
| A | 3 | 100 | |
| B | 5 | 200 | |
| C | 2 | 150 | |

\`\`\`
= (3×100) + (5×200) + (2×150) = 300 + 1000 + 300 = 1600
\`\`\`

SUMPRODUCT أقوى من مجرد الضرب — ممكن تستخدمها كـ SUMIFS متقدمة:
\`\`\`excel
=SUMPRODUCT((A2:A10="قاهرة") * B2:B10)   ← جمع مبيعات القاهرة بس
\`\`\`

## RAND و RANDBETWEEN

\`\`\`excel
=RAND()                → رقم عشوائي بين 0 و 1، بيتغير مع كل حساب
=RANDBETWEEN(1, 100)   → رقم عشوائي صحيح بين 1 و 100
\`\`\`

> 💡 **نصيحة:** علشان تثبّت قيمة RANDBETWEEN، انسخها والصقها كـ Value بس.`,
    contentEn: `## ABS — Absolute value

\`\`\`excel
=ABS(-150)    → 150
=ABS(150)     → 150
\`\`\`
Useful for calculating variances regardless of direction:
\`\`\`excel
=ABS(Actual - Target)   ← deviation from target
\`\`\`

## MOD — Remainder after division

\`\`\`excel
=MOD(10, 3)   → 1   (10 ÷ 3 = 3 remainder 1)
=MOD(12, 4)   → 0   (evenly divisible)
=MOD(A2, 2)   → 0 if even, 1 if odd
\`\`\`

**Application: Identify even and odd rows**
\`\`\`excel
=IF(MOD(ROW(), 2)=0, "Even", "Odd")
\`\`\`

## CEILING and FLOOR — Round to multiples

\`\`\`excel
=CEILING(23, 5)       → 25   ← round up to nearest multiple of 5
=FLOOR(23, 5)         → 20   ← round down to nearest multiple of 5
=CEILING(1.23, 0.25)  → 1.25
\`\`\`

**Application: Set prices in multiples of $5**
\`\`\`excel
=CEILING(Cost * 1.3, 5)   ← apply 30% margin, round up to nearest $5
\`\`\`

## POWER and SQRT

\`\`\`excel
=POWER(2, 10)   → 1024   (2 to the power of 10)
=2^10           → 1024   (same result using the ^ operator)
=SQRT(144)      → 12     (square root)
\`\`\`

## SUMPRODUCT — Multiply and sum arrays

An extremely powerful function that multiplies two ranges together and sums the results:
\`\`\`excel
=SUMPRODUCT(B2:B5, C2:C5)
\`\`\`

| Product | Quantity | Price | |
|---------|----------|-------|--|
| A | 3 | 100 | |
| B | 5 | 200 | |
| C | 2 | 150 | |

\`\`\`
= (3×100) + (5×200) + (2×150) = 300 + 1000 + 300 = 1600
\`\`\`

SUMPRODUCT is more versatile than simple multiplication — it can act as an advanced SUMIFS:
\`\`\`excel
=SUMPRODUCT((A2:A10="Cairo") * B2:B10)   ← sum sales from Cairo only
\`\`\`

## RAND and RANDBETWEEN

\`\`\`excel
=RAND()                → random decimal between 0 and 1 (recalculates on every change)
=RANDBETWEEN(1, 100)   → random integer between 1 and 100
\`\`\`

> 💡 **Tip:** To freeze a RANDBETWEEN value, copy the cell and paste it as Values only.`,
    example: '=MOD(B2, 2)',
    sheet: {
      headers: ['الرقم', 'زوجي أم فردي؟'],
      headersEn: ['Number', 'Even or Odd?'],
      rows: [
        [14, null],
        [7, null],
        [22, null],
      ],
    },
    exercises: [
      {
        id: 36,
        type: 'formula',
        question: 'احسب القيمة المطلقة للفرق: الفعلي (B2=850) ناقص المستهدف (C2=1000)',
        questionEn: 'Calculate the absolute value of the difference: Actual (B2=850) minus Target (C2=1000)',
        hint: 'استخدم ABS(B2-C2)',
        hintEn: 'Use ABS(B2-C2)',
        sheet: {
          headers: ['الفعلي', 'المستهدف'],
          headersEn: ['Actual', 'Target'],
          rows: [[850, 1000]],
        },
        checkFunction: (result) => result === 150,
      },
      {
        id: 37,
        type: 'formula',
        question: 'قرّب 37 للأعلى إلى أقرب مضاعف لـ 10',
        questionEn: 'Round 37 up to the nearest multiple of 10',
        hint: 'استخدم CEILING(37, 10)',
        hintEn: 'Use CEILING(37, 10)',
        sheet: {
          headers: ['الرقم'],
          headersEn: ['Number'],
          rows: [[37]],
        },
        checkFunction: (result) => result === 40,
      },
      {
        id: 38,
        type: 'mcq',
        question: 'ما نتيجة =SUMPRODUCT({2,3,4}, {10,20,30})؟',
        questionEn: 'What is the result of =SUMPRODUCT({2,3,4}, {10,20,30})?',
        hint: '(2×10) + (3×20) + (4×30)',
        hintEn: '(2×10) + (3×20) + (4×30)',
        options: ['200', '240', '260', '300'],
        optionsEn: ['200', '240', '260', '300'],
        correctIndex: 1,
      }
    ]
  },
];

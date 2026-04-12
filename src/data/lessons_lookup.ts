import { Lesson } from '../types';

export const lessonsLookup: Lesson[] = [
  {
    id: 21,
    title: 'VLOOKUP — البحث العمودي',
    titleEn: 'VLOOKUP — Vertical Lookup',
    description: 'ابحث عن قيمة وأرجع بيانات مرتبطة بها من جدول آخر',
    descriptionEn: 'Search for a value and return related data from another table',
    type: 'formula',
    content: `## إيه هو VLOOKUP؟

VLOOKUP بتدور على قيمة في أول عمود من جدول، وترجع قيمة من عمود تاني في نفس الصف.

\`\`\`excel
=VLOOKUP(lookup_value, table_array, col_index, [range_lookup])
\`\`\`

## مثال بسيط

عندي جدول منتجات:

| A - كود | B - اسم | C - سعر |
|---------|---------|---------|
| P001 | تفاح | 5 |
| P002 | برتقال | 3 |
| P003 | موز | 4 |

أبحث عن سعر كود P002:
\`\`\`excel
=VLOOKUP("P002", A1:C4, 3, FALSE)   → 3
\`\`\`

- **"P002"** — الكود اللي أبحث عنه
- **A1:C4** — الجدول كله
- **3** — السعر في العمود الثالث
- **FALSE** — بحث دقيق (لازم دايماً)

## أهم تفاصيل

✅ **FALSE دايماً** للبحث الدقيق (exact match)
✅ الكود اللي بتبحث عنه لازم يكون **في أول عمود** من الجدول
✅ ثبّت الجدول بـ \`$\`: \`$A$1:$C$4\` عشان تقدر تنسخ الصيغة

## مشاكل شائعة

\`\`\`excel
#N/A   ← القيمة مش موجودة في الجدول
#REF!  ← رقم العمود أكبر من عدد أعمدة الجدول
\`\`\`

## IFERROR مع VLOOKUP

\`\`\`excel
=IFERROR(VLOOKUP(A2, $D$1:$F$100, 2, FALSE), "مش موجود")
\`\`\`

> ⚠️ **عيب VLOOKUP:** بيبحث بس من اليسار لليمين. لو احتجت تبحث بشكل عكسي، استخدم INDEX/MATCH أو XLOOKUP.`,
    contentEn: `## What is VLOOKUP?

VLOOKUP searches for a value in the first column of a table and returns a value from another column in the same row.

\`\`\`excel
=VLOOKUP(lookup_value, table_array, col_index, [range_lookup])
\`\`\`

## Simple Example

Given a products table:

| A - Code | B - Name | C - Price |
|----------|----------|-----------|
| P001 | Apple | 5 |
| P002 | Orange | 3 |
| P003 | Banana | 4 |

Look up the price for code P002:
\`\`\`excel
=VLOOKUP("P002", A1:C4, 3, FALSE)   → 3
\`\`\`

- **"P002"** — the code to look up
- **A1:C4** — the entire table range
- **3** — price is in the third column
- **FALSE** — exact match (always required)

## Key Details

✅ **Always use FALSE** for exact matching
✅ The lookup value must be in the **first column** of the table
✅ Lock the table with \`$\`: \`$A$1:$C$4\` so you can copy the formula down

## Common Errors

\`\`\`excel
#N/A   ← value not found in the table
#REF!  ← column number exceeds the table width
\`\`\`

## IFERROR with VLOOKUP

\`\`\`excel
=IFERROR(VLOOKUP(A2, $D$1:$F$100, 2, FALSE), "Not found")
\`\`\`

> ⚠️ **VLOOKUP limitation:** It can only look left-to-right. If you need to search in reverse, use INDEX/MATCH or XLOOKUP instead.`,
    example: '=VLOOKUP(A2, $D$2:$F$5, 2, FALSE)',
    sheet: {
      headers: ['الكود', 'الاسم', 'السعر'],
      headersEn: ['Code', 'Name', 'Price'],
      rows: [
        ['P001', 'تفاح', 5],
        ['P002', 'برتقال', 3],
        ['P003', 'موز', 4],
        ['P004', 'عنب', 8],
      ],
    },
    exercises: [
      {
        id: 22,
        type: 'formula',
        question: 'ابحث عن سعر المنتج P003 في الجدول (العمود الثالث)',
        questionEn: 'Look up the price of product P003 in the table (third column)',
        hint: 'استخدم VLOOKUP("P003", A2:C5, 3, FALSE)',
        hintEn: 'Use VLOOKUP("P003", A2:C5, 3, FALSE)',
        sheet: {
          headers: ['الكود', 'الاسم', 'السعر'],
          headersEn: ['Code', 'Name', 'Price'],
          rows: [['P001', 'تفاح', 5], ['P002', 'برتقال', 3], ['P003', 'موز', 4], ['P004', 'عنب', 8]],
        },
        checkFunction: (result) => result === 4,
      },
      {
        id: 23,
        type: 'mcq',
        question: 'ليه لازم نكتب FALSE في آخر VLOOKUP؟',
        questionEn: 'Why must we write FALSE at the end of VLOOKUP?',
        hint: 'فكّر في نوع البحث المطلوب',
        hintEn: 'Think about the type of match required',
        options: [
          'عشان الصيغة تشتغل أسرع',
          'عشان نعمل بحث دقيق ونجيب القيمة المطابقة بالظبط',
          'هو اختياري ومش مهم',
          'عشان يبحث من اليمين لليسار'
        ],
        optionsEn: [
          'To make the formula run faster',
          'To perform an exact match and return the precisely matching value',
          'It is optional and does not matter',
          'To search from right to left'
        ],
        correctIndex: 1,
      },
    ]
  },

  {
    id: 22,
    title: 'INDEX و MATCH — أقوى من VLOOKUP',
    titleEn: 'INDEX & MATCH — More Powerful than VLOOKUP',
    description: 'مزيج INDEX/MATCH هو الحل الأمثل للبحث في أي اتجاه',
    descriptionEn: 'The INDEX/MATCH combination is the ultimate solution for lookups in any direction',
    type: 'formula',
    content: `## ليه INDEX/MATCH؟

VLOOKUP بيقدر يبحث بس من اليسار لليمين وبيحتاج تعدّ أرقام الأعمدة يدوياً.
INDEX/MATCH بيحل المشكلتين.

## INDEX — إرجاع قيمة بموقعها

\`\`\`excel
=INDEX(array, row_num, [col_num])

=INDEX(B2:B10, 3)   → ثالث قيمة في العمود B
\`\`\`

## MATCH — إيجاد موقع قيمة

\`\`\`excel
=MATCH(lookup_value, lookup_array, [match_type])

=MATCH("أحمد", A2:A10, 0)   → رقم الصف اللي فيه "أحمد"
\`\`\`

\`match_type = 0\` = بحث دقيق (الأكثر استخداماً)

## الدمج — INDEX/MATCH

\`\`\`excel
=INDEX(C2:C10, MATCH(E2, A2:A10, 0))
\`\`\`

- MATCH بيلاقي موقع القيمة في عمود A
- INDEX بيرجع القيمة المقابلة في عمود C

## مثال عملي

| A - اسم | B - قسم | C - راتب |
|---------|---------|---------|
| أحمد | IT | 8000 |
| سارة | HR | 7500 |
| محمد | Finance | 9000 |

\`\`\`excel
=INDEX(C2:C4, MATCH("سارة", A2:A4, 0))   → 7500
\`\`\`

## البحث العكسي (يمين ← يسار)

\`\`\`excel
=INDEX(A2:A4, MATCH(9000, C2:C4, 0))   → "محمد"
\`\`\`
بنبحث في العمود C ونرجع قيمة من العمود A — مستحيل في VLOOKUP!`,
    contentEn: `## Why INDEX/MATCH?

VLOOKUP can only search left-to-right and requires manually counting column numbers.
INDEX/MATCH solves both problems.

## INDEX — Return a Value by Position

\`\`\`excel
=INDEX(array, row_num, [col_num])

=INDEX(B2:B10, 3)   → the 3rd value in column B
\`\`\`

## MATCH — Find the Position of a Value

\`\`\`excel
=MATCH(lookup_value, lookup_array, [match_type])

=MATCH("Ahmed", A2:A10, 0)   → the row number containing "Ahmed"
\`\`\`

\`match_type = 0\` = exact match (most commonly used)

## Combining Them — INDEX/MATCH

\`\`\`excel
=INDEX(C2:C10, MATCH(E2, A2:A10, 0))
\`\`\`

- MATCH finds the position of the value in column A
- INDEX returns the corresponding value from column C

## Practical Example

| A - Name | B - Department | C - Salary |
|----------|----------------|------------|
| Ahmed | IT | 8000 |
| Sara | HR | 7500 |
| Mohamed | Finance | 9000 |

\`\`\`excel
=INDEX(C2:C4, MATCH("Sara", A2:A4, 0))   → 7500
\`\`\`

## Reverse Lookup (right ← left)

\`\`\`excel
=INDEX(A2:A4, MATCH(9000, C2:C4, 0))   → "Mohamed"
\`\`\`
We search in column C and return a value from column A — impossible with VLOOKUP!`,
    example: '=INDEX(C2:C4, MATCH("سارة", A2:A4, 0))',
    sheet: {
      headers: ['الاسم', 'القسم', 'الراتب'],
      headersEn: ['Name', 'Department', 'Salary'],
      rows: [
        ['أحمد', 'IT', 8000],
        ['سارة', 'HR', 7500],
        ['محمد', 'Finance', 9000],
      ],
    },
    exercises: [
      {
        id: 24,
        type: 'formula',
        question: 'استخدم INDEX/MATCH لإيجاد راتب "محمد" من الجدول',
        questionEn: 'Use INDEX/MATCH to find the salary of "Mohamed" from the table',
        hint: 'INDEX(C2:C4, MATCH("محمد", A2:A4, 0))',
        hintEn: 'INDEX(C2:C4, MATCH("Mohamed", A2:A4, 0))',
        sheet: {
          headers: ['الاسم', 'القسم', 'الراتب'],
          headersEn: ['Name', 'Department', 'Salary'],
          rows: [['أحمد', 'IT', 8000], ['سارة', 'HR', 7500], ['محمد', 'Finance', 9000]],
        },
        checkFunction: (result) => result === 9000,
      },
      {
        id: 25,
        type: 'mcq',
        question: 'ما الميزة الرئيسية لـ INDEX/MATCH مقارنةً بـ VLOOKUP؟',
        questionEn: 'What is the main advantage of INDEX/MATCH compared to VLOOKUP?',
        hint: 'فكّر في اتجاه البحث',
        hintEn: 'Think about the direction of the lookup',
        options: [
          'أسرع في الحساب',
          'بيشتغل مع الأرقام فقط',
          'يقدر يبحث في أي اتجاه، حتى من اليمين لليسار',
          'لا يحتاج لتحديد نطاق'
        ],
        optionsEn: [
          'It calculates faster',
          'It works with numbers only',
          'It can look up in any direction, including right-to-left',
          'It does not require specifying a range'
        ],
        correctIndex: 2,
      },
    ]
  },

  {
    id: 23,
    title: 'XLOOKUP — دالة البحث الحديثة',
    titleEn: 'XLOOKUP — The Modern Lookup Function',
    description: 'أسهل وأقوى من VLOOKUP وتدعم البحث في أي اتجاه (Excel 365)',
    descriptionEn: 'Easier and more powerful than VLOOKUP, supporting lookups in any direction (Excel 365)',
    type: 'formula',
    content: `## XLOOKUP — الجيل الجديد

\`\`\`excel
=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])
\`\`\`

## مقارنة سريعة

| | VLOOKUP | XLOOKUP |
|--|---------|---------|
| البحث | يسار ← يمين فقط | أي اتجاه |
| لو مش موجود | #N/A | تحدد القيمة الافتراضية |
| سهولة الاستخدام | تعدّ أرقام الأعمدة | مباشر |

## مثال بسيط

\`\`\`excel
=XLOOKUP("P002", A2:A5, C2:C5, "مش موجود")
\`\`\`

- **"P002"** — الكود المطلوب
- **A2:A5** — عمود البحث
- **C2:C5** — عمود النتيجة
- **"مش موجود"** — لو ما لاقيناه

## إرجاع أعمدة متعددة

\`\`\`excel
=XLOOKUP("P002", A2:A5, B2:C5)   → يرجع اسم وسعر في نفس الوقت!
\`\`\`

## البحث العكسي

\`\`\`excel
=XLOOKUP("تفاح", B2:B5, A2:A5)   → يرجع الكود من عمود A
\`\`\`

## البحث من الأسفل للأعلى

\`\`\`excel
=XLOOKUP("أحمد", A2:A100, B2:B100, , 0, -1)
\`\`\`
آخر معامل \`-1\` = ابدأ البحث من آخر الجدول.

> 💡 لو شغّال على Excel 365، استخدم XLOOKUP دايماً. أبسط وأقوى.`,
    contentEn: `## XLOOKUP — The Next Generation

\`\`\`excel
=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])
\`\`\`

## Quick Comparison

| | VLOOKUP | XLOOKUP |
|--|---------|---------|
| Search direction | Left → right only | Any direction |
| Not found | #N/A | You define the fallback value |
| Ease of use | Count column numbers | Direct range references |

## Simple Example

\`\`\`excel
=XLOOKUP("P002", A2:A5, C2:C5, "Not found")
\`\`\`

- **"P002"** — the value to look up
- **A2:A5** — the lookup column
- **C2:C5** — the return column
- **"Not found"** — returned if no match exists

## Returning Multiple Columns

\`\`\`excel
=XLOOKUP("P002", A2:A5, B2:C5)   → returns both name and price at once!
\`\`\`

## Reverse Lookup

\`\`\`excel
=XLOOKUP("Apple", B2:B5, A2:A5)   → returns the code from column A
\`\`\`

## Search from Bottom to Top

\`\`\`excel
=XLOOKUP("Ahmed", A2:A100, B2:B100, , 0, -1)
\`\`\`
The last argument \`-1\` = start searching from the end of the table.

> 💡 If you are using Excel 365, always use XLOOKUP. It is simpler and more capable.`,
    example: '=XLOOKUP("P003", A2:A5, C2:C5, "غير موجود")',
    sheet: {
      headers: ['الكود', 'الاسم', 'السعر'],
      headersEn: ['Code', 'Name', 'Price'],
      rows: [
        ['P001', 'تفاح', 5],
        ['P002', 'برتقال', 3],
        ['P003', 'موز', 4],
        ['P004', 'عنب', 8],
      ],
    },
    exercises: [
      {
        id: 26,
        type: 'mcq',
        question: 'ما الفرق الرئيسي بين XLOOKUP وVLOOKUP؟',
        questionEn: 'What is the main difference between XLOOKUP and VLOOKUP?',
        hint: 'فكّر في مرونة الاستخدام',
        hintEn: 'Think about flexibility of use',
        options: [
          'XLOOKUP أبطأ في الحساب',
          'XLOOKUP يعمل فقط مع الأرقام',
          'XLOOKUP يبحث في أي اتجاه ويدعم قيمة افتراضية عند عدم الإيجاد',
          'XLOOKUP لا يحتاج لتحديد نطاق'
        ],
        optionsEn: [
          'XLOOKUP is slower to calculate',
          'XLOOKUP works only with numbers',
          'XLOOKUP searches in any direction and supports a default value when no match is found',
          'XLOOKUP does not require specifying a range'
        ],
        correctIndex: 2,
      },
      {
        id: 27,
        type: 'mcq',
        question: 'في XLOOKUP، ما المعامل الذي تكتبه لتعود "غير موجود" بدل #N/A؟',
        questionEn: 'In XLOOKUP, which argument do you use to return "Not found" instead of #N/A?',
        hint: 'هو المعامل الرابع في الدالة',
        hintEn: 'It is the fourth argument in the function',
        options: [
          'لا يوجد طريقة لذلك في XLOOKUP',
          'تكتبه في المعامل الرابع: XLOOKUP(val, arr, ret, "غير موجود")',
          'تضيف IFERROR في الخارج فقط',
          'تكتب FALSE في آخر المعاملات'
        ],
        optionsEn: [
          'There is no way to do that in XLOOKUP',
          'Write it as the fourth argument: XLOOKUP(val, arr, ret, "Not found")',
          'You must wrap with IFERROR externally',
          'Write FALSE as the last argument'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 24,
    title: 'SUMIF و COUNTIF',
    titleEn: 'SUMIF & COUNTIF',
    description: 'اجمع أو عدّ البيانات بناءً على شرط محدد',
    descriptionEn: 'Sum or count data based on a specific condition',
    type: 'formula',
    content: `## SUMIF — جمع بشرط

\`\`\`excel
=SUMIF(range, criteria, [sum_range])
\`\`\`

**مثال:** اجمع مبيعات قسم "المبيعات" فقط:
\`\`\`excel
=SUMIF(A2:A10, "مبيعات", B2:B10)
\`\`\`

- **A2:A10** — العمود اللي فيه الشرط (أسماء الأقسام)
- **"مبيعات"** — الشرط
- **B2:B10** — العمود اللي هنجمعه

## COUNTIF — عدّ بشرط

\`\`\`excel
=COUNTIF(range, criteria)

=COUNTIF(A2:A10, "مكتمل")      ← عدّ الطلبات المكتملة
=COUNTIF(B2:B10, ">1000")      ← عدّ القيم الأكبر من 1000
=COUNTIF(A2:A10, "*أحمد*")    ← عدّ اللي يحتوي كلمة أحمد
\`\`\`

## Wildcards — أحرف البدل

\`\`\`excel
*   → أي عدد من الأحرف     "مبي*" = مبيعات، مبيوعات...
?   → حرف واحد بالظبط      "أحم?" = أحمد، أحمر...
\`\`\`

## AVERAGEIF — متوسط بشرط

\`\`\`excel
=AVERAGEIF(A2:A10, "مبيعات", B2:B10)
\`\`\`

## مثال عملي

| A - القسم | B - المبيعات |
|-----------|-------------|
| مبيعات | 5000 |
| تسويق | 3000 |
| مبيعات | 4500 |
| عمليات | 2000 |

\`\`\`excel
=SUMIF(A2:A5, "مبيعات", B2:B5)    → 9500
=COUNTIF(A2:A5, "مبيعات")         → 2
\`\`\``,
    contentEn: `## SUMIF — Conditional Sum

\`\`\`excel
=SUMIF(range, criteria, [sum_range])
\`\`\`

**Example:** Sum sales for the "Sales" department only:
\`\`\`excel
=SUMIF(A2:A10, "Sales", B2:B10)
\`\`\`

- **A2:A10** — the column containing the condition (department names)
- **"Sales"** — the condition
- **B2:B10** — the column to sum

## COUNTIF — Conditional Count

\`\`\`excel
=COUNTIF(range, criteria)

=COUNTIF(A2:A10, "Completed")   ← count completed orders
=COUNTIF(B2:B10, ">1000")       ← count values greater than 1000
=COUNTIF(A2:A10, "*Ahmed*")     ← count cells containing "Ahmed"
\`\`\`

## Wildcards

\`\`\`excel
*   → any number of characters    "Sal*" = Sales, Salary...
?   → exactly one character       "Jo?" = Joe, Joy...
\`\`\`

## AVERAGEIF — Conditional Average

\`\`\`excel
=AVERAGEIF(A2:A10, "Sales", B2:B10)
\`\`\`

## Practical Example

| A - Department | B - Sales |
|----------------|-----------|
| Sales | 5000 |
| Marketing | 3000 |
| Sales | 4500 |
| Operations | 2000 |

\`\`\`excel
=SUMIF(A2:A5, "Sales", B2:B5)    → 9500
=COUNTIF(A2:A5, "Sales")         → 2
\`\`\``,
    example: '=SUMIF(A2:A5, "مبيعات", B2:B5)',
    sheet: {
      headers: ['القسم', 'المبيعات'],
      headersEn: ['Department', 'Sales'],
      rows: [
        ['مبيعات', 5000],
        ['تسويق', 3000],
        ['مبيعات', 4500],
        ['عمليات', 2000],
      ],
    },
    exercises: [
      {
        id: 28,
        type: 'formula',
        question: 'اجمع مبيعات قسم "مبيعات" فقط من الجدول (A2:A5 و B2:B5)',
        questionEn: 'Sum the sales for the "مبيعات" department only from the table (A2:A5 and B2:B5)',
        hint: 'استخدم SUMIF(A2:A5, "مبيعات", B2:B5)',
        hintEn: 'Use SUMIF(A2:A5, "مبيعات", B2:B5)',
        sheet: {
          headers: ['القسم', 'المبيعات'],
          headersEn: ['Department', 'Sales'],
          rows: [['مبيعات', 5000], ['تسويق', 3000], ['مبيعات', 4500], ['عمليات', 2000]],
        },
        checkFunction: (result) => result === 9500,
      },
      {
        id: 29,
        type: 'formula',
        question: 'عدّ كم مرة ظهر قسم "تسويق" في العمود A (A2:A5)',
        questionEn: 'Count how many times "تسويق" appears in column A (A2:A5)',
        hint: 'استخدم COUNTIF(A2:A5, "تسويق")',
        hintEn: 'Use COUNTIF(A2:A5, "تسويق")',
        sheet: {
          headers: ['القسم', 'المبيعات'],
          headersEn: ['Department', 'Sales'],
          rows: [['مبيعات', 5000], ['تسويق', 3000], ['مبيعات', 4500], ['تسويق', 2500]],
        },
        checkFunction: (result) => result === 2,
      },
    ]
  },

  {
    id: 25,
    title: 'SUMIFS و COUNTIFS — شروط متعددة',
    titleEn: 'SUMIFS & COUNTIFS — Multiple Conditions',
    description: 'اجمع أو عدّ البيانات بأكثر من شرط في نفس الوقت',
    descriptionEn: 'Sum or count data using more than one condition simultaneously',
    type: 'formula',
    content: `## SUMIFS — جمع بأكثر من شرط

\`\`\`excel
=SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2, ...)
\`\`\`

**انتبه:** في SUMIFS، sum_range يجي **أول** (عكس SUMIF).

## مثال

اجمع مبيعات قسم "مبيعات" في شهر "يناير" فقط:

\`\`\`excel
=SUMIFS(C2:C10,        ← العمود اللي هنجمعه
        A2:A10, "مبيعات",   ← شرط 1: القسم
        B2:B10, "يناير")    ← شرط 2: الشهر
\`\`\`

## COUNTIFS — عدّ بأكثر من شرط

\`\`\`excel
=COUNTIFS(A2:A10, "مبيعات", C2:C10, ">5000")
\`\`\`
عدّ الصفوف اللي قسمها "مبيعات" وقيمتها أكبر من 5000.

## مقارنة SUMIF vs SUMIFS

| | SUMIF | SUMIFS |
|--|-------|--------|
| عدد الشروط | 1 | 1 أو أكثر |
| ترتيب المعاملات | range, criteria, sum_range | **sum_range** أولاً ثم pairs |

## مثال عملي شامل

| A - القسم | B - المنطقة | C - المبيعات |
|-----------|------------|-------------|
| مبيعات | شمال | 8000 |
| مبيعات | جنوب | 5000 |
| تسويق | شمال | 3000 |
| مبيعات | شمال | 6000 |

\`\`\`excel
=SUMIFS(C2:C5, A2:A5, "مبيعات", B2:B5, "شمال")   → 14000
=COUNTIFS(A2:A5, "مبيعات", B2:B5, "شمال")        → 2
\`\`\``,
    contentEn: `## SUMIFS — Sum with Multiple Conditions

\`\`\`excel
=SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2, ...)
\`\`\`

**Note:** In SUMIFS, the sum_range comes **first** (opposite of SUMIF).

## Example

Sum sales for the "Sales" department in the month of "January" only:

\`\`\`excel
=SUMIFS(C2:C10,           ← the column to sum
        A2:A10, "Sales",  ← condition 1: department
        B2:B10, "January") ← condition 2: month
\`\`\`

## COUNTIFS — Count with Multiple Conditions

\`\`\`excel
=COUNTIFS(A2:A10, "Sales", C2:C10, ">5000")
\`\`\`
Counts rows where the department is "Sales" and the value exceeds 5000.

## SUMIF vs SUMIFS Comparison

| | SUMIF | SUMIFS |
|--|-------|--------|
| Number of conditions | 1 | 1 or more |
| Argument order | range, criteria, sum_range | **sum_range** first, then condition pairs |

## Comprehensive Practical Example

| A - Department | B - Region | C - Sales |
|----------------|------------|-----------|
| Sales | North | 8000 |
| Sales | South | 5000 |
| Marketing | North | 3000 |
| Sales | North | 6000 |

\`\`\`excel
=SUMIFS(C2:C5, A2:A5, "Sales", B2:B5, "North")   → 14000
=COUNTIFS(A2:A5, "Sales", B2:B5, "North")         → 2
\`\`\``,
    example: '=SUMIFS(C2:C5, A2:A5, "مبيعات", B2:B5, "شمال")',
    sheet: {
      headers: ['القسم', 'المنطقة', 'المبيعات'],
      headersEn: ['Department', 'Region', 'Sales'],
      rows: [
        ['مبيعات', 'شمال', 8000],
        ['مبيعات', 'جنوب', 5000],
        ['تسويق', 'شمال', 3000],
        ['مبيعات', 'شمال', 6000],
      ],
    },
    exercises: [
      {
        id: 30,
        type: 'formula',
        question: 'اجمع مبيعات قسم "مبيعات" في المنطقة "شمال" فقط',
        questionEn: 'Sum sales for the "مبيعات" department in the "شمال" region only',
        hint: 'SUMIFS(C2:C5, A2:A5, "مبيعات", B2:B5, "شمال")',
        hintEn: 'SUMIFS(C2:C5, A2:A5, "مبيعات", B2:B5, "شمال")',
        sheet: {
          headers: ['القسم', 'المنطقة', 'المبيعات'],
          headersEn: ['Department', 'Region', 'Sales'],
          rows: [['مبيعات', 'شمال', 8000], ['مبيعات', 'جنوب', 5000], ['تسويق', 'شمال', 3000], ['مبيعات', 'شمال', 6000]],
        },
        checkFunction: (result) => result === 14000,
      },
      {
        id: 31,
        type: 'mcq',
        question: 'في SUMIFS، أين يجي sum_range؟',
        questionEn: 'In SUMIFS, where does the sum_range argument go?',
        hint: 'هذا الفرق الأساسي بين SUMIF وSUMIFS',
        hintEn: 'This is the fundamental difference between SUMIF and SUMIFS',
        options: [
          'في آخر المعاملات',
          'في أول المعاملات قبل أي شرط',
          'في المنتصف بين الشروط',
          'المكان مش مهم'
        ],
        optionsEn: [
          'At the end of the arguments',
          'As the first argument before any conditions',
          'In the middle between conditions',
          'The position does not matter'
        ],
        correctIndex: 1,
      },
    ]
  },

  {
    id: 26,
    title: 'OFFSET و INDIRECT — مراجع ديناميكية',
    titleEn: 'OFFSET & INDIRECT — Dynamic References',
    description: 'إنشاء مراجع تتغير تلقائياً بناءً على قيم أخرى',
    descriptionEn: 'Create references that update automatically based on other values',
    type: 'formula',
    content: `## OFFSET — الإزاحة من خلية محددة

\`\`\`excel
=OFFSET(reference, rows, cols, [height], [width])
\`\`\`

- **reference**: نقطة البداية
- **rows**: عدد الصفوف للتحرك (موجب = أسفل، سالب = أعلى)
- **cols**: عدد الأعمدة للتحرك (موجب = يمين، سالب = يسار)
- **height/width**: حجم النطاق المُرجَع (اختياري)

### أمثلة
\`\`\`excel
=OFFSET(A1, 2, 1)         → الخلية B3 (نزلنا صفين، تحركنا عموداً)
=OFFSET(A1, 0, 0, 5, 1)   → نطاق A1:A5
=SUM(OFFSET(A1, 0, 0, COUNTA(A:A), 1))   → مجموع ديناميكي
\`\`\`

### تطبيق: آخر قيمة في العمود
\`\`\`excel
=OFFSET(A1, COUNTA(A:A)-1, 0)   → آخر خلية غير فارغة في العمود A
\`\`\`

### تطبيق: نطاق ديناميكي للـ Chart
\`\`\`excel
اسمه: مبيعات_ديناميكية
القيمة: =OFFSET(Sheet1!$B$2, 0, 0, COUNTA(Sheet1!$B:$B)-1, 1)
\`\`\`

## INDIRECT — تحويل نص إلى مرجع

\`\`\`excel
=INDIRECT("A1")          → قيمة الخلية A1
=INDIRECT("Sheet2!A1")   → من ورقة أخرى
=INDIRECT(A1)            → إذا A1 تحتوي "B5"، يُرجع قيمة B5
\`\`\`

### تطبيق: اختيار الورقة بناءً على قيمة خلية
\`\`\`excel
=INDIRECT(B1 & "!A1")
\`\`\`
إذا B1 = "يناير"، يُرجع قيمة A1 من ورقة "يناير".

### تطبيق: Validation قائمة ديناميكية
إذا كان لديك جداول باسم كل قسم:
\`\`\`excel
مصدر الـ Validation = INDIRECT(A2)
\`\`\`
عندما يختار المستخدم قسماً في A2، تتغير القائمة المنسدلة تلقائياً.

## متى تستخدم كلاً منهما؟

| | OFFSET | INDIRECT |
|--|--------|---------|
| الاستخدام | نطاق ديناميكي بالإزاحة | تحويل نص إلى مرجع |
| الأداء | أبطأ قليلاً (volatile) | أبطأ قليلاً (volatile) |
| الأفضل مع | SUM, AVERAGE, Named Ranges | ملفات متعددة، Validation |

> ⚠️ **ملاحظة:** كلتا الدالتين **volatile** — تُعاد حسابهما عند كل تغيير في الملف. تجنّب استخدامهما في نطاقات ضخمة.`,
    contentEn: `## OFFSET — Offset from a Starting Cell

\`\`\`excel
=OFFSET(reference, rows, cols, [height], [width])
\`\`\`

- **reference**: the starting point
- **rows**: rows to move (positive = down, negative = up)
- **cols**: columns to move (positive = right, negative = left)
- **height/width**: size of the returned range (optional)

### Examples
\`\`\`excel
=OFFSET(A1, 2, 1)         → cell B3 (moved 2 rows down, 1 column right)
=OFFSET(A1, 0, 0, 5, 1)   → range A1:A5
=SUM(OFFSET(A1, 0, 0, COUNTA(A:A), 1))   → dynamic sum
\`\`\`

### Application: Last Value in a Column
\`\`\`excel
=OFFSET(A1, COUNTA(A:A)-1, 0)   → last non-empty cell in column A
\`\`\`

### Application: Dynamic Chart Range
\`\`\`excel
Name: DynamicSales
Value: =OFFSET(Sheet1!$B$2, 0, 0, COUNTA(Sheet1!$B:$B)-1, 1)
\`\`\`

## INDIRECT — Convert Text to a Reference

\`\`\`excel
=INDIRECT("A1")          → value of cell A1
=INDIRECT("Sheet2!A1")   → from another sheet
=INDIRECT(A1)            → if A1 contains "B5", returns the value of B5
\`\`\`

### Application: Select Sheet Based on a Cell Value
\`\`\`excel
=INDIRECT(B1 & "!A1")
\`\`\`
If B1 = "January", it returns the value of A1 from the "January" sheet.

### Application: Dynamic Validation List
If you have named tables for each department:
\`\`\`excel
Validation source = INDIRECT(A2)
\`\`\`
When the user selects a department in A2, the dropdown list updates automatically.

## When to Use Each?

| | OFFSET | INDIRECT |
|--|--------|---------|
| Use case | Dynamic range by offset | Convert text to a reference |
| Performance | Slightly slower (volatile) | Slightly slower (volatile) |
| Best with | SUM, AVERAGE, Named Ranges | Multi-sheet files, Validation |

> ⚠️ **Note:** Both functions are **volatile** — they recalculate on every change in the workbook. Avoid using them over large ranges.`,
    example: '=OFFSET(A2, 1, 1)',
    sheet: {
      headers: ['المنتج', 'يناير', 'فبراير', 'مارس'],
      headersEn: ['Product', 'January', 'February', 'March'],
      rows: [
        ['لابتوب', 120, 135, 98],
        ['ماوس', 45, 52, 61],
        ['شاشة', 80, 77, 90],
      ],
    },
    exercises: [
      {
        id: 40,
        type: 'formula',
        question: 'اكتب صيغة OFFSET تبدأ من A2 وتتحرك صفاً واحداً للأسفل وعموداً واحداً لليمين',
        questionEn: 'Write an OFFSET formula starting from A2, moving one row down and one column to the right',
        hint: 'OFFSET(A2, 1, 1) — صف واحد أسفل، عمود واحد يمين',
        hintEn: 'OFFSET(A2, 1, 1) — one row down, one column to the right',
        sheet: {
          headers: ['المنتج', 'يناير'],
          headersEn: ['Product', 'January'],
          rows: [['لابتوب', 120], ['ماوس', 45]],
        },
        checkFunction: (result) => result === 45,
      },
      {
        id: 41,
        type: 'mcq',
        question: 'ما الدالة المناسبة لاسترجاع قيمة من ورقة يتغير اسمها بناءً على خلية؟',
        questionEn: 'Which function is appropriate for retrieving a value from a sheet whose name changes based on a cell value?',
        hint: 'نحتاج تحويل نص (اسم الورقة) إلى مرجع حقيقي',
        hintEn: 'We need to convert text (the sheet name) into a real reference',
        options: ['OFFSET', 'INDIRECT', 'VLOOKUP', 'INDEX'],
        optionsEn: ['OFFSET', 'INDIRECT', 'VLOOKUP', 'INDEX'],
        correctIndex: 1,
      },
      {
        id: 42,
        type: 'mcq',
        question: 'ما معنى كون OFFSET و INDIRECT دالتَي "Volatile"؟',
        questionEn: 'What does it mean that OFFSET and INDIRECT are "Volatile" functions?',
        hint: 'فكّر في متى تُعاد حسابهما',
        hintEn: 'Think about when they are recalculated',
        options: [
          'تُحسب مرة واحدة فقط عند فتح الملف',
          'تُعاد حسابهما عند أي تغيير في أي خلية بالملف',
          'لا تعمل مع الأرقام الكبيرة',
          'تحتاج Excel 365 فقط'
        ],
        optionsEn: [
          'They calculate only once when the file is opened',
          'They recalculate whenever any cell in the workbook changes',
          'They do not work with large numbers',
          'They require Excel 365 only'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 27,
    title: 'CHOOSE وأنماط البحث المتقدمة',
    titleEn: 'CHOOSE & Advanced Lookup Patterns',
    description: 'دالة CHOOSE وتقنيات البحث المتقدمة لحل مشاكل معقدة',
    descriptionEn: 'The CHOOSE function and advanced lookup techniques for solving complex problems',
    type: 'formula',
    content: `## CHOOSE — الاختيار من قائمة

\`\`\`excel
=CHOOSE(index_num, value1, value2, value3, ...)
\`\`\`

يختار قيمة بناءً على رقمها في القائمة:
\`\`\`excel
=CHOOSE(2, "يناير", "فبراير", "مارس")   → "فبراير"
=CHOOSE(A2, "منخفض", "متوسط", "مرتفع")  → حسب قيمة A2
\`\`\`

### تطبيق: ترجمة أيام الأسبوع
\`\`\`excel
=CHOOSE(WEEKDAY(A2,2), "الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت","الأحد")
\`\`\`

### CHOOSE كبديل لـ Nested IF
\`\`\`excel
بدلاً من:
=IF(A2=1,"Q1", IF(A2=2,"Q2", IF(A2=3,"Q3","Q4")))

استخدم:
=CHOOSE(A2, "Q1", "Q2", "Q3", "Q4")
\`\`\`

## VLOOKUP من اليمين — الحل الاحترافي

مشكلة VLOOKUP: لا تبحث إلا في اتجاه واحد (يسار لليمين).

### الحل 1: INDEX/MATCH
\`\`\`excel
=INDEX(A2:A10, MATCH(D2, C2:C10, 0))   ← يبحث في C ويُرجع من A
\`\`\`

### الحل 2: CHOOSE مع VLOOKUP
\`\`\`excel
=VLOOKUP(D2, CHOOSE({1,2}, C2:C10, A2:A10), 2, 0)
\`\`\`
CHOOSE يُعيد ترتيب الأعمدة مؤقتاً.

## MATCH وحده — إيجاد الموقع

\`\`\`excel
=MATCH(lookup, lookup_array, match_type)
\`\`\`

\`\`\`excel
=MATCH("أحمد", A2:A10, 0)   → رقم الصف الذي يحتوي "أحمد"
=MATCH(MAX(B:B), B:B, 0)    → موقع أعلى قيمة
\`\`\`

## بحث ثنائي الاتجاه (Two-Way Lookup)

البحث باستخدام صف وعمود معاً:
\`\`\`excel
=INDEX(B2:D5, MATCH(G1, A2:A5, 0), MATCH(G2, B1:D1, 0))
\`\`\`

مثال: إيجاد مبيعات "أحمد" في "مارس" من جدول:

| | يناير | فبراير | مارس |
|--|-------|--------|------|
| أحمد | 100 | 120 | 135 |
| سارة | 80 | 95 | 110 |

\`\`\`excel
=INDEX(B2:D3, MATCH("أحمد", A2:A3, 0), MATCH("مارس", B1:D1, 0))   → 135
\`\`\`

## XLOOKUP مع wildcard

\`\`\`excel
=XLOOKUP("أحمد*", A2:A10, B2:B10)   → يبحث عن أي اسم يبدأ بـ "أحمد"
\`\`\`

> 💡 **قاعدة الاختيار:** XLOOKUP للمستخدمين الجدد، INDEX/MATCH للتوافق مع الإصدارات القديمة والمرونة.`,
    contentEn: `## CHOOSE — Select from a List

\`\`\`excel
=CHOOSE(index_num, value1, value2, value3, ...)
\`\`\`

Returns a value based on its position in the list:
\`\`\`excel
=CHOOSE(2, "January", "February", "March")   → "February"
=CHOOSE(A2, "Low", "Medium", "High")          → based on the value in A2
\`\`\`

### Application: Translate Weekday Numbers
\`\`\`excel
=CHOOSE(WEEKDAY(A2,2), "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday")
\`\`\`

### CHOOSE as a Nested IF Replacement
\`\`\`excel
Instead of:
=IF(A2=1,"Q1", IF(A2=2,"Q2", IF(A2=3,"Q3","Q4")))

Use:
=CHOOSE(A2, "Q1", "Q2", "Q3", "Q4")
\`\`\`

## Right-to-Left VLOOKUP — The Professional Solution

VLOOKUP's limitation: it only searches left-to-right.

### Solution 1: INDEX/MATCH
\`\`\`excel
=INDEX(A2:A10, MATCH(D2, C2:C10, 0))   ← searches in C, returns from A
\`\`\`

### Solution 2: CHOOSE with VLOOKUP
\`\`\`excel
=VLOOKUP(D2, CHOOSE({1,2}, C2:C10, A2:A10), 2, 0)
\`\`\`
CHOOSE temporarily reorders the columns.

## MATCH Alone — Finding a Position

\`\`\`excel
=MATCH(lookup, lookup_array, match_type)
\`\`\`

\`\`\`excel
=MATCH("Ahmed", A2:A10, 0)   → row number containing "Ahmed"
=MATCH(MAX(B:B), B:B, 0)     → position of the highest value
\`\`\`

## Two-Way Lookup

Search using both a row and a column simultaneously:
\`\`\`excel
=INDEX(B2:D5, MATCH(G1, A2:A5, 0), MATCH(G2, B1:D1, 0))
\`\`\`

Example: Find Ahmed's sales in March from a table:

| | January | February | March |
|--|---------|----------|-------|
| Ahmed | 100 | 120 | 135 |
| Sara | 80 | 95 | 110 |

\`\`\`excel
=INDEX(B2:D3, MATCH("Ahmed", A2:A3, 0), MATCH("March", B1:D1, 0))   → 135
\`\`\`

## XLOOKUP with Wildcard

\`\`\`excel
=XLOOKUP("Ahmed*", A2:A10, B2:B10)   → finds any name starting with "Ahmed"
\`\`\`

> 💡 **Choosing the right tool:** Use XLOOKUP for new projects, INDEX/MATCH for backward compatibility with older Excel versions and maximum flexibility.`,
    example: '=CHOOSE(2, "يناير", "فبراير", "مارس")',
    sheet: {
      headers: ['رقم الربع', 'اسم الربع'],
      headersEn: ['Quarter Number', 'Quarter Name'],
      rows: [
        [1, null],
        [3, null],
        [2, null],
      ],
    },
    exercises: [
      {
        id: 43,
        type: 'formula',
        question: 'استخدم CHOOSE لتحويل الرقم 3 في A2 إلى "Q3"',
        questionEn: 'Use CHOOSE to convert the number 3 in A2 to "Q3"',
        hint: 'CHOOSE(A2, "Q1", "Q2", "Q3", "Q4") حيث A2=3',
        hintEn: 'CHOOSE(A2, "Q1", "Q2", "Q3", "Q4") where A2=3',
        sheet: {
          headers: ['رقم الربع'],
          headersEn: ['Quarter Number'],
          rows: [[3]],
        },
        checkFunction: (result) => result === 'Q3',
      },
      {
        id: 44,
        type: 'mcq',
        question: 'تريد البحث عن قيمة في العمود C وإرجاع قيمة من العمود A (على يساره). أي دالة تُستخدم؟',
        questionEn: 'You want to look up a value in column C and return a value from column A (to its left). Which function do you use?',
        hint: 'VLOOKUP لا يبحث إلى اليسار',
        hintEn: 'VLOOKUP cannot search to the left',
        options: [
          'VLOOKUP مع عدد العمود سالب',
          'INDEX/MATCH أو XLOOKUP',
          'HLOOKUP',
          'FIND مع LEFT'
        ],
        optionsEn: [
          'VLOOKUP with a negative column number',
          'INDEX/MATCH or XLOOKUP',
          'HLOOKUP',
          'FIND combined with LEFT'
        ],
        correctIndex: 1,
      },
      {
        id: 45,
        type: 'mcq',
        question: 'ما نتيجة =MATCH("مارس", {"يناير","فبراير","مارس","أبريل"}, 0)؟',
        questionEn: 'What is the result of =MATCH("March", {"January","February","March","April"}, 0)?',
        hint: 'MATCH يُرجع رقم الموقع، ليس القيمة نفسها',
        hintEn: 'MATCH returns the position number, not the value itself',
        options: ['مارس', '2', '3', '4'],
        optionsEn: ['March', '2', '3', '4'],
        correctIndex: 2,
      }
    ]
  },
];

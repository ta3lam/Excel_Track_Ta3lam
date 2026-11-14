# Ta3lam Excel

An Arabic-first interactive Excel learning experience designed to help learners move from spreadsheet basics to practical business analysis skills.

## Overview

Ta3lam Excel is a structured learning project built to make Excel easier to learn, practice, and apply in real work scenarios.

This project is designed for Arabic-speaking learners who want more than random tips and scattered tutorials. Instead of isolated lessons, it offers a clearer path that starts from Excel fundamentals and develops into more practical analytical use cases.

This repository is part of the broader Ta3lam mission to make data and analytics education more practical, accessible, and better organized for Arabic learners.

## Who This Is For

- Beginners who want to learn Excel from the ground up
- Business users who want to improve reporting and day-to-day spreadsheet work
- Students preparing for analytics roles
- Professionals who want a stronger Excel foundation before moving into Power BI or data analysis

## What Makes It Different

- Arabic-first learning experience
- Structured lesson progression instead of random tutorials
- Interactive educational design
- Practical focus on real spreadsheet skills
- Built as part of a wider analytics learning ecosystem

## What You Will Learn

Nine levels, 145 lessons, and 252 exercises. 146 exercises are checked by running the formula. 106 are multiple choice, used where the topic is a ribbon feature or a language the in-app engine cannot execute.

- Excel basics, formulas, and data cleaning
- Lookups, dynamic arrays, pivots, charts, and sheet protection
- Power Query, the data model, and DAX
- VBA, and a practical Excel + AI level that never calls an outside model
- 64 business cases and 4 capstones, with a practice workbook and a download for each case

## Learning Approach

The goal of this project is not only to teach Excel features.

The bigger goal is to help learners understand how Excel is used in practical business work:

- organizing information
- reducing manual effort
- improving reporting quality
- preparing data for analysis
- building stronger analytical habits

## Why I Built This

Many Arabic learners can find Excel tips online, but they often struggle to find a clear path that connects beginner learning with real, practical use.

This project was built to close that gap by offering a more intentional learning experience that helps learners build confidence step by step.

It also supports the larger Ta3lam vision of making analytics learning more practical and more accessible in Arabic.

## How This Fits Into Ta3lam

This repo is part of a broader learning stack that includes tools and educational projects around:

- Excel
- SQL
- Power BI
- data analysis
- practical business intelligence education

Together, these projects are meant to help learners grow from foundational spreadsheet skills into stronger analytical and BI capabilities.

## Project Status

This project is actively being developed and improved as part of the Ta3lam learning ecosystem.

The practice file is `public/excel-exercises.xlsx`. Each business case also has its own file under `public/cases/`, and each capstone has a solution file under `public/capstones/`. Names, companies, and figures are fictional. Rates such as overtime, commission, insurance, and loan interest are training rules inside the case, not statutory or bank prices.

GitHub Actions deploys the `main` branch to GitHub Pages. A pull request does not update that site until it is merged.

## Syllabus

### تحت الصفر / Under Zero

1. ما هو تحليل البيانات؟
2. واجهة Excel
3. أنواع البيانات في Excel
4. Excel Tables وتنسيق البيانات
5. أساسيات الصيغ والمراجع
6. اختصارات لوحة المفاتيح الأساسية
7. تنسيق الخلايا بالتفصيل
8. Named Ranges

### الأساسيات / Fundamentals

11. SUM و AVERAGE و COUNT
12. MAX و MIN و ROUND
13. دوال النصوص: LEFT و RIGHT و MID و LEN
14. دوال النصوص: TRIM و SUBSTITUTE و CONCAT
15. IF
16. AND و OR و NOT مع IF
17. دوال التاريخ والوقت
18. IFERROR و IFNA
19. ABS و MOD و CEILING و FLOOR و POWER

### البحث والمرجع / Lookup & Reference

21. VLOOKUP
22. INDEX و MATCH
23. XLOOKUP
24. SUMIF و COUNTIF
25. SUMIFS و COUNTIFS
26. OFFSET و INDIRECT
27. CHOOSE
28. AVERAGEIFS
29. HLOOKUP
30. XMATCH

### المستوى المتقدم / Advanced Excel

31. تنظيف البيانات
32. Pivot Tables
33. الرسوم البيانية والـ Dashboards
34. Data Validation
35. Dynamic Arrays: FILTER و SORT و UNIQUE و SEQUENCE
36. What-If Analysis
37. Array Formulas
38. LET
39. LAMBDA والأسماء المعرفة
40. TEXTSPLIT و TEXTBEFORE و TEXTAFTER
70. RANDARRAY
71. CHOOSECOLS و TAKE و DROP و VSTACK و HSTACK
72. الحقل المحسوب في Pivot
73. GETPIVOTDATA
74. Timeline
75. Pivot Chart
76. Sparklines
77. Combo و Waterfall
78. حماية الورقة وبنية الملف

### Power Query

41. مقدمة Power Query
42. التحويلات الأساسية
43. لغة M
44. Append و Merge
45. Pivot و Unpivot
46. Group By والأعمدة المخصصة

### DAX والـ Data Model

51. Data Model
52. مقدمة DAX
53. CALCULATE
54. Time Intelligence
55. RANKX و TOPN
56. Measures و Calculated Columns
57. ALL و ALLEXCEPT
58. VAR و RETURN
59. SUMX و AVERAGEX
60. RELATED و RELATEDTABLE
69. USERELATIONSHIP

### الاحتراف / VBA

61. مقدمة VBA
62. أساسيات الكود
63. الحلقات والأحداث
64. مسارات الشهادات
65. UserForms
66. الدوال المخصصة

### حالات بيزنس عملية / Business cases

64 cases. 22 beginner, 24 intermediate, 18 advanced. 77 checked formula tasks. Currencies are EGP or SAR. Datasets are seeded and frozen.

المبيعات والعمولات: 101 إجمالي مندوب قبل قفل العمولة، 102 فواتير لازم يعدّيها المدير، 103 عمولة 4% لمندوبة جدة، 104 مبيعات مارس بعد ما التواريخ جت نص، 105 فاتورة اتسجلت مرتين، 106 اسم مندوب بمسافة، 107 مبلغ متخزن كنص، 108 تارجت المنطقة وعمولة الشرائح.

التجزئة والمخزون: 109 قيمة المخزون، 110 أصناف تحت حد الطلب، 111 قيمة عجز القاهرة، 112 تغطية الحليب، 113 بضاعة راكدة، 114 تكلفة أجهزة تحت الحد، 115 سحب صنف من فرع آخر.

المالية والموازنة: 116 انحراف المبيعات، 117 نسبة انحراف التسويق، 118 أقسام عدّت الموازنة، 119 بند موازنة كنص، 120 تجاوز أكثر من 10%، 121 انحراف القسم ومين صاحبه، 122 توقع السنة.

الموارد البشرية: 123 أوفر تايم، 124 صافي الراتب، 125 أيام العمل، 126 رصيد الإجازات، 127 مكافأة الخمس سنين، 128 معدل الدوران، 129 صافي قسم المبيعات، 130 أوفر تايم التشغيل.

المشتريات: 131 صافي عرض مورد، 132 أرخص عرض، 133 أوامر المورد المختار، 134 فرق عرضين، 135 اسم مورد بمسافة، 136 درجة الترسية الموزونة.

خدمة العملاء: 137 متوسط زمن المكالمة، 138 نسبة الالتزام بالانتظار، 139 الحل من أول مكالمة، 140 رضا طابور الدعم، 141 مكالمات خرقت الانتظار، 142 زمن التعامل لشريحة الذهبي.

التسويق: 143 عائد حملة رمضان، 144 أعلى حملة إيراداً، 145 تكلفة اكتساب العميل، 146 إنفاق السوشيال، 147 معدل النقر، 148 ربح قناة البحث.

التوصيل: 149 نسبة الالتزام بالموعد، 150 متوسط التأخير، 151 تكلفة الطلب المسلّم، 152 تأخير جدة، 153 غرامة الرياض، 154 تكلفة الناقل.

التمويل: 155 قسط السيارة، 156 فايدة أول شهر، 157 إجمالي الفايدة، 158 فرق قسط عرضين، 159 الأصل المسدّد في أول سنة.

تسرب الاتصالات: 160 نسبة التسرب، 161 إيراد معرّض للخطر، 162 التسرب الطوعي، 163 نسبة الإنقاذ، 164 إيراد المتسربين من باقة لامحدود.

مشاريع ختامية: 201 لوحة مبيعات مارس، 202 مسير رواتب وحضور، 203 تقرير مركز الاتصال، 204 تقرير تسرب باقة لامحدود. Each one has step-by-step deliverables and a solution workbook.

### Excel + AI

The level teaches Copilot in Excel, Python in Excel (`PY`), asking ChatGPT or Claude or Gemini for a formula, LAMBDA and VBA and Office Scripts drafts, a prompt pattern, cleaning, Analyze Data, and privacy. The copy-prompt button copies text only. The app does not store an API key and does not call an outside model. Availability is stated the way Microsoft documents it: Microsoft 365 where the feature is subscription-only, and a note when a channel or license can change.

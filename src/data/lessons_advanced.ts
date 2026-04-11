import { Lesson } from '../types';

export const lessonsAdvanced: Lesson[] = [
  {
    id: 31,
    title: 'تنظيف البيانات',
    description: 'كيف تتعامل مع البيانات المكررة والخاطئة قبل أي تحليل',
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
    exercises: [
      {
        id: 32,
        type: 'mcq',
        question: 'ما الصيغة الصحيحة لاكتشاف القيم المكررة في العمود A؟',
        hint: 'استخدم COUNTIF مع نطاق مطلق',
        options: [
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
        hint: 'مش Ctrl + F — فكّر في حرف E',
        options: ['Ctrl + F', 'Ctrl + E', 'Alt + F', 'Ctrl + D'],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 32,
    title: 'Pivot Tables — الجداول المحورية',
    description: 'لخّص آلاف الصفوف في ثوانٍ بدون ما تكتب صيغة واحدة',
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
    exercises: [
      {
        id: 34,
        type: 'mcq',
        question: 'في Pivot Table، أي منطقة تضع فيها "مجموع المبيعات"؟',
        hint: 'هي المنطقة اللي بتحسب الأرقام',
        options: ['Rows', 'Columns', 'Filters', 'Values'],
        correctIndex: 3,
      },
      {
        id: 35,
        type: 'mcq',
        question: 'كيف تضيف Slicer لـ Pivot Table؟',
        hint: 'من تبويب Insert',
        options: [
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
    description: 'اختار الرسم الصح لبياناتك واصنع Dashboard احترافي',
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
    exercises: [
      {
        id: 36,
        type: 'mcq',
        question: 'أي نوع رسم بياني تستخدم لعرض تغير المبيعات على مدار 12 شهر؟',
        hint: 'فكّر في أي رسم يُظهر الاتجاهات عبر الزمن',
        options: ['Pie Chart', 'Column Chart', 'Line Chart', 'Scatter Plot'],
        correctIndex: 2,
      },
      {
        id: 37,
        type: 'mcq',
        question: 'كيف تربط Slicer واحد بأكثر من Pivot Table؟',
        hint: 'ابحث في تبويب PivotTable Analyze',
        options: [
          'تنسخ الـ Slicer لكل Pivot',
          'PivotTable Analyze → Report Connections',
          'Data → Connect Slicers',
          'مستحيل — كل Pivot يحتاج Slicer منفصل'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 34,
    title: 'Data Validation — التحقق من البيانات',
    description: 'تحكّم فيما يُدخله المستخدم في الخلايا ومنع الأخطاء من البداية',
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
    exercises: [
      {
        id: 38,
        type: 'mcq',
        question: 'لإنشاء قائمة منسدلة في خلية، تختار في Data Validation تحت Allow:',
        hint: 'ابحث عن الخيار اللي يعطيك dropdown',
        options: ['Dropdown', 'List', 'Custom', 'Text length'],
        correctIndex: 1,
      },
      {
        id: 39,
        type: 'mcq',
        question: 'ما الصيغة المخصصة اللي تمنع التكرار في العمود A؟',
        hint: 'تحتاج تعدّ كم مرة ظهرت القيمة',
        options: [
          '=UNIQUE(A1)',
          '=COUNTIF($A:$A,A1)=1',
          '=NOT(DUPLICATE(A1))',
          '=ISUNIQUE(A1)'
        ],
        correctIndex: 1,
      }
    ]
  },
];

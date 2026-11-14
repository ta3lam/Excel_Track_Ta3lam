import { Lesson } from '../types';
import { fx } from './fxLesson';

const copilotSheet = {
  headers: ['المندوب', 'الحالة', 'المبلغ'],
  headersEn: ['Rep', 'Status', 'Amount'],
  rows: [
    ['أحمد محمود', 'مؤكد', 12000],
    ['منى عبد الرحمن', 'ملغي', 30000],
    ['أحمد محمود', 'مؤكد', 8000],
    ['يوسف حسن', 'مؤكد', 15000],
    ['أحمد محمود', 'ملغي', 4000],
  ],
};

const pySheet = {
  headers: ['المدينة', 'المبيعات'],
  headersEn: ['City', 'Sales'],
  rows: [
    ['القاهرة', 20000],
    ['جدة', 15000],
    ['القاهرة', 12000],
    ['الدمام', 9000],
    ['جدة', 7000],
  ],
};

const badSumSheet = {
  headers: ['الفاتورة', 'الحالة', 'المبلغ'],
  headersEn: ['Invoice', 'Status', 'Amount'],
  rows: [
    [11, 'مؤكد', 10000],
    [12, 'ملغي', 25000],
    [13, 'مؤكد', 8000],
    [14, 'مؤكد', 6000],
    [15, 'ملغي', 4000],
  ],
};

const lambdaSheet = {
  headers: ['المبلغ'],
  headersEn: ['Amount'],
  rows: [[86000], [24000]],
};

const roiSheet = {
  headers: ['الحملة', 'التكلفة', 'الإيراد'],
  headersEn: ['Campaign', 'Cost', 'Revenue'],
  rows: [
    ['رمضان', 45000, 72000],
    ['اليوم الوطني', 20000, 26000],
  ],
};

const cleanSheet = {
  headers: ['المدينة', 'التصنيف', 'المبلغ'],
  headersEn: ['City', 'Category', 'Amount'],
  rows: [
    ['القاهرة', 'أجهزة', 15000],
    ['القاهرة ', 'أجهزة', 8000],
    ['جدة', 'خطوط', 12000],
    ['القاهرة', 'أجهزة', excelTextAmount(9000)],
  ],
};

function excelTextAmount(value: number): string {
  return `'${value}`;
}

const cleanPrompt = `عندي جدول Excel بالأعمدة: المدينة (نص، وفيه مسافة زيادة أحيانًا)، التصنيف (نص)، المبلغ (بعضه رقم وبعضه نص).
صفوف عينة:
القاهرة | أجهزة | 15000
القاهرة[مسافة] | أجهزة | 8000
جدة | خطوط | 12000
المطلوب: إجمالي تصنيف "أجهزة" في القاهرة بعد تنظيف المسافة، مع تحويل المبلغ النص. اكتب صيغة Microsoft 365، واذكر الحالة اللي SUM هيتجاهل فيها النص.
متستخدمش أسماء عملاء ولا أرقام هواتف.`;

const cleanPromptEn = `I have an Excel table with columns: City (text, sometimes with a trailing space), Category (text), Amount (some numbers, some stored as text).
Sample rows:
Cairo | Appliances | 15000
Cairo[space] | Appliances | 8000
Jeddah | Lines | 12000
Task: total of category "أجهزة" in Cairo after cleaning the space, and convert the text amount. Write a Microsoft 365 formula, and say when SUM ignores text.
Do not use customer names or phone numbers.`;

export const aiLessons: Lesson[] = [
  {
    id: 81,
    title: 'Copilot في Excel',
    titleEn: 'Copilot in Excel',
    description: 'إيه اللي Copilot بيعمله جوه الشيت، وإيه اللي لازم تراجعه قبل ما تبعت الرقم.',
    descriptionEn: 'What Copilot does inside the sheet, and what you still have to check before you send the number.',
    type: 'concept',
    sheet: copilotSheet,
    content: `## إيه هو

Copilot في Excel مساعد جوه الشيت. من وثائق Microsoft: تقدر تسأله بلغة عادية عن ملخص، اتجاه، قيمة شاذة، صيغة، أو صف إجمالي. تقدر تطلب الناتج كجدول أو رسم أو Pivot. في بعض التراخيص فيه كمان Copilot مع Python، والتوفر بيتغير حسب القناة، فراجع صفحة Microsoft الحالية قبل ما تبني تدريبًا عليه.

الزر مش هيظهر من غير ترخيص مناسب. Microsoft بتذكر من التراخيص: Microsoft 365 Personal أو Family مع رصيد AI، أو Microsoft 365 Premium، أو اشتراك Copilot تجاري، أو اشتراك أعمال مؤهل لـ Copilot Chat. الإعدادات عند الشركة ممكن تقفل التجربة حتى لو الترخيص موجود.

بيشتغل أحسن لما البيانات Excel Table، والملف على OneDrive أو SharePoint، و AutoSave شغّال.

## حدود لازم تتقري

- الصيغة المقترحة ممكن تكون غلط أو تجمع صفوف ملغية.
- دعم اللغات بيتغير. لو الطلب بالعربي اتلخبط، كرره بالإنجليزي وسيب أسماء الأعمدة زي ما هي.
- مش بديل عن إنك تعرف العمود والحالة اللي المفروض تتقري.
- متبعتش أرقام عملاء حقيقية. التفاصيل في درس الخصوصية.

## تمرين

Copilot اقترح \`=SUMIF(A2:A6,"أحمد محمود",C2:C6)\` وجمع الصف الملغي. الصح يستبعد الحالة "ملغي".`,
    contentEn: `## What it is

Copilot in Excel is an assistant inside the workbook. Microsoft’s docs say you can ask in plain language for a summary, a trend, an outlier, a formula, or a summary row. You can ask for a table, a chart, or a Pivot. On some licenses there is also Copilot with Python, and that availability moves by channel, so check Microsoft’s current page before you build a class on it.

The button does not appear without an eligible license. Microsoft lists Microsoft 365 Personal or Family with AI credits, Microsoft 365 Premium, a commercial Copilot subscription, or a business subscription eligible for Copilot Chat. A company’s tenant settings can turn the experience off even when the license is there.

It works better when the data is an Excel Table, the file is on OneDrive or SharePoint, and AutoSave is on.

## Limits worth reading

- A suggested formula can be wrong, or it can include cancelled rows.
- Language support changes. If an Arabic request comes back muddled, repeat it in English and keep the column names as they are.
- It does not replace knowing which column and which status should be included.
- Do not send real customer numbers. The privacy lesson covers that.

## Exercise

Copilot suggested \`=SUMIF(A2:A6,"أحمد محمود",C2:C6)\` and included a cancelled row. The correct total excludes status "ملغي".`,
    exercises: [
      {
        ...fx(
          811,
          'الصيغة المقترحة جمعت صف أحمد الملغي. كام إجمالي صفوفه المؤكدة بس؟',
          'The suggested formula included Ahmed’s cancelled row. What is the total of his confirmed rows only?',
          'SUMIFS على الاسم وعلى الحالة مؤكد',
          'SUMIFS on the name and on status مؤكد',
          copilotSheet,
          '=SUMIFS(C2:C6,A2:A6,"أحمد محمود",B2:B6,"مؤكد")',
        ),
        prompt: 'الجدول أعمدته: المندوب، الحالة (مؤكد أو ملغي)، المبلغ.\nعايز إجمالي المندوب أحمد محمود للحالة مؤكد فقط.\nاكتب SUMIFS، ومتجمعش الصفوف الملغية.\nدي بيانات تدريب وهمية.',
        promptEn: 'Columns: Rep, Status (confirmed or cancelled), Amount.\nI need Ahmed Mahmoud’s total for confirmed rows only.\nWrite a SUMIFS, and do not include cancelled rows.\nThis is fictional training data.',
      },
      {
        id: 812,
        type: 'mcq',
        question: 'زر Copilot مش ظاهر. أنهي سبب من وثائق Microsoft وارد؟',
        questionEn: 'The Copilot button is missing. Which cause does Microsoft’s documentation allow?',
        hint: 'الترخيص وإعدادات الشركة',
        hintEn: 'License and tenant settings',
        options: [
          'Copilot موجود في كل نسخ Excel 2016 من غير اشتراك',
          'الترخيص أو إعداد الشركة مش مؤهل، حتى لو Excel نفسه شغال',
          'الزر بيختفي لأن الملف فيه أكثر من ورقة',
          'Copilot بيشتغل أوفلاين من غير حساب',
        ],
        optionsEn: [
          'Copilot is in every Excel 2016 copy with no subscription',
          'The license or the company settings are not eligible, even if Excel itself opens',
          'The button hides because the file has more than one sheet',
          'Copilot works offline with no account',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 82,
    title: 'Python في Excel',
    titleEn: 'Python in Excel',
    description: 'صيغة PY بتشغّل pandas على سحابة Microsoft، ومحتاجة نت ومراجعة.',
    descriptionEn: 'A PY formula runs pandas on Microsoft’s cloud, and it needs a network and a review.',
    type: 'code',
    codeLang: 'python',
    example: `df = xl("A1:B6", headers=True)
df.groupby("المدينة")["المبيعات"].sum()`,
    sheet: pySheet,
    content: `## إزاي تتفتح

من وثائق Microsoft: من Formulas ثم Insert Python، أو تكتب \`=PY\` وتختار الدالة من الإكمال التلقائي. المحرر بيتحول لمحرر Python. الصيغة \`=PY\` مش بتتشارك الخلية مع دالة Excel تانية.

الكود يقرأ الشيت بدالة \`xl\`:

\`\`\`python
df = xl("A1:B6", headers=True)
df.groupby("المدينة")["المبيعات"].sum()
\`\`\`

\`headers=True\` يعني الصف الأول أسماء أعمدة. pandas موجودة من المكتبات المتاحة. الرسم بـ matplotlib ممكن يرجع صورة في الخلية.

## التوفر، من غير ما نثبّت رقم قناة

الحساب بيتم على سحابة Microsoft ومحتاج إنترنت. مش متاح على Excel لـ iPad أو iPhone أو Android. النسخ المؤهلة بتختلف: أعمال ومؤسسات على قنوات Windows وعلى Excel للويب، وعائلات في معاينة، وتعليم عبر Insider، وللماك شروط بناء خاصة. في الحساب العادي سرعة قياسية، والسرعة الأعلى إضافة منفصلة. اشتراك الجهاز المشترك مش مدعوم. التفاصيل بتتحرك، فصفحة Microsoft اسمها Python in Excel availability هي المرجع.

## المراجعة

خلية Python قالت إن القاهرة 32000. التمرين يتأكد بـ SUMIF. لو الرقمين مختلفين، متبعتش رقم الخلية.`,
    contentEn: `## How it opens

Microsoft’s docs: Formulas, then Insert Python, or type \`=PY\` and pick the function from autocomplete. The cell becomes a Python editor. A \`=PY\` formula does not share the cell with another Excel function.

The code reads the sheet with \`xl\`:

\`\`\`python
df = xl("A1:B6", headers=True)
df.groupby("المدينة")["المبيعات"].sum()
\`\`\`

\`headers=True\` means the first row is column names. pandas is one of the available libraries. A matplotlib chart can come back as an image in the cell.

## Availability, without freezing a channel number

Calculation runs on the Microsoft Cloud and needs the internet. It is not available on Excel for iPad, iPhone, or Android. Eligible copies differ: business and enterprise on Windows channels and Excel for the web, family plans in preview, education through Insider, and Mac on its own builds. Standard compute is included; faster compute is a separate add-on. Device-based shared activation is not supported. The details move, so Microsoft’s page “Python in Excel availability” is the reference.

## The check

The Python cell said Cairo is 32000. The exercise confirms it with SUMIF. If the two numbers differ, do not send the cell’s number.`,
    exercises: [
      {
        ...fx(
          821,
          'خلية Python قالت مبيعات القاهرة 32000. اتأكد بالصيغة. الرقم الصح كام؟',
          'The Python cell said Cairo sales are 32000. Confirm it with a formula. What is the right number?',
          'SUMIF على المدينة',
          'SUMIF on the city',
          pySheet,
          '=SUMIF(A2:A6,"القاهرة",B2:B6)',
        ),
        prompt: 'الجدول عمودان: المدينة، المبيعات. الصف الأول عناوين.\nاكتب كود Python in Excel يستخدم xl(..., headers=True) و pandas groupby لمجموع كل مدينة.\n afterward اكتب SUMIF المكافئة للقاهرة عشان أراجع الرقم.\nالبيانات تدريب وهمي.',
        promptEn: 'Two columns: City, Sales. The first row is headers.\nWrite Python in Excel that uses xl(..., headers=True) and a pandas groupby for the sum of each city.\nThen write the SUMIF equivalent for Cairo so I can reconcile the number.\nThe data is fictional training data.',
      },
    ],
  },
  {
    id: 83,
    title: 'صيغة من ChatGPT أو Claude أو Gemini',
    titleEn: 'A formula from ChatGPT, Claude, or Gemini',
    description: 'النموذج كتب SUM على كل الصفوف. المطلوب تشيل الملغي وتتحقق.',
    descriptionEn: 'The model wrote SUM on every row. You have to drop the cancelled ones and check.',
    type: 'formula',
    sheet: badSumSheet,
    content: `## طريقة الشغل

الأدوات دي خارج Excel: ChatGPT و Claude و Gemini. بتديهم وصف الجدول وصفوف عينة وهمية، وتاخد صيغة، وبعدين تجربها على الشيت. متبعتش ملف العملاء.

النموذج هنا اقترح:

\`\`\`excel
=SUM(C2:C6)
\`\`\`

دي بتجمع الفواتير الملغية. المدير عايز المؤكد بس.

انسخ الـ prompt من التمرين، قارنه باللي انت كنت هتكتبه، وبعدين اكتب الصيغة الصح في المحرر. الزر بينسخ النص بس، ومفيش اتصال بأي نموذج.`,
    contentEn: `## The working method

These tools sit outside Excel: ChatGPT, Claude, and Gemini. You give them the table shape and fictional sample rows, take a formula, then try it on the sheet. Do not send the customer file.

The model suggested:

\`\`\`excel
=SUM(C2:C6)
\`\`\`

That includes cancelled invoices. The manager wants confirmed rows only.

Copy the prompt from the exercise, compare it with what you would have written, then type the correct formula in the editor. The button only copies text. There is no call to any model.`,
    exercises: [
      {
        ...fx(
          831,
          'الصيغة المقترحة =SUM(C2:C6) جمعت الملغي. كام إجمالي الحالة مؤكد؟',
          'The suggested formula =SUM(C2:C6) included cancelled rows. What is the confirmed total?',
          'SUMIF على الحالة',
          'SUMIF on the status',
          badSumSheet,
          '=SUMIF(B2:B6,"مؤكد",C2:C6)',
        ),
        prompt: 'أعمدة الجدول: الفاتورة، الحالة (مؤكد أو ملغي)، المبلغ.\nصفوف عينة وهمية: 11 مؤكد 10000، 12 ملغي 25000، 13 مؤكد 8000.\nاكتب صيغة Excel تجمع المبلغ للحالة مؤكد فقط.\nاشرح ليه SUM على العمود كله غلط.\nمتطلبش بيانات أكتر من الأعمدة دي.',
        promptEn: 'Columns: Invoice, Status (confirmed or cancelled), Amount.\nFictional sample rows: 11 confirmed 10000, 12 cancelled 25000, 13 confirmed 8000.\nWrite an Excel formula that sums Amount for confirmed status only.\nExplain why SUM of the whole column is wrong.\nDo not ask for data beyond these columns.',
      },
    ],
  },
  {
    id: 84,
    title: 'LAMBDA و VBA و Office Scripts بمساعدة نموذج',
    titleEn: 'LAMBDA, VBA, and Office Scripts with a model',
    description: 'النموذج يكتب الدالة، وأنت تشغّلها على رقم معروف قبل ما تحفظ الاسم.',
    descriptionEn: 'The model writes the function, and you run it on a known number before you save the name.',
    type: 'formula',
    sheet: lambdaSheet,
    content: `## تلات أماكن مختلفة

- **LAMBDA** بالاسم من Formulas ثم Name Manager. في Microsoft 365 و Excel 2024، مش في Excel 2021.
- **VBA** ماكرو على Excel لسطح المكتب. مش بيشتغل في Excel للويب.
- **Office Scripts** مكتوبة بـ TypeScript من تبويب Automate في Excel على الويب مع Microsoft 365.

نموذج المحادثة يقدر يكتب مسودة لأي واحد فيهم. المسودة مش اعتماد. اقرأها: هل بتمسح ورق؟ هل بتطلب كلمة مرور؟ هل النسبة هي سياسة الشركة؟

مثال مسودة:

\`\`\`excel
Commission = LAMBDA(amount,IF(amount>=80000,amount*0.08,IF(amount>=40000,amount*0.05,amount*0.03)))
\`\`\`

جرّب \`=Commission(86000)\` على رقم أنت حاسبه قبل ما توزع الاسم على الفريق. المحرر هنا مش بيقيم LAMBDA، فاحسب الشريحة مباشرة.`,
    contentEn: `## Three different homes

- A named **LAMBDA** lives in Formulas, then Name Manager. It is in Microsoft 365 and Excel 2024, not in Excel 2021.
- **VBA** is a desktop Excel macro. It does not run in Excel for the web.
- **Office Scripts** are TypeScript from the Automate tab in Excel on the web with Microsoft 365.

A chat model can draft any of the three. A draft is not an approval. Read it: does it delete sheets? Does it ask for a password? Is the rate the company’s policy?

A sample draft:

\`\`\`excel
Commission = LAMBDA(amount,IF(amount>=80000,amount*0.08,IF(amount>=40000,amount*0.05,amount*0.03)))
\`\`\`

Try \`=Commission(86000)\` on a number you already computed before you hand the name to the team. This editor does not evaluate LAMBDA, so compute the tier directly.`,
    exercises: [
      {
        ...fx(
          841,
          'المسودة Commission(86000) المفروض ترجع كام؟ 8% من 80 ألف، و 5% من 40 ألف، و 3% تحتها.',
          'What should the draft Commission(86000) return? 8% from 80,000, 5% from 40,000, otherwise 3%.',
          'IF على الخلية B2',
          'IF on cell B2',
          lambdaSheet,
          '=IF(B2>=80000,B2*0.08,IF(B2>=40000,B2*0.05,B2*0.03))',
        ),
        prompt: 'اكتب LAMBDA اسمها Commission لمبلغ واحد.\nالشرائح: 8% من 80000، و 5% من 40000، و 3% غير كده.\nاكتب كمان سطر Name Manager، ومثال =Commission(86000).\nمتكتبش كود يمسح ورق أو يغيّر حماية الملف.',
        promptEn: 'Write a LAMBDA named Commission for one amount.\nTiers: 8% from 80000, 5% from 40000, otherwise 3%.\nAlso write the Name Manager line and an example =Commission(86000).\nDo not write code that deletes sheets or changes file protection.',
      },
      {
        id: 842,
        type: 'mcq',
        question: 'النموذج كتب ماكرو VBA. فين تجربه؟',
        questionEn: 'The model wrote a VBA macro. Where do you try it?',
        hint: 'VBA مش بتاعة المتصفح',
        hintEn: 'VBA is not the browser’s tool',
        options: [
          'في Excel للويب على نفس ملف الإنتاج',
          'في Excel لسطح المكتب على نسخة تدريب من الملف',
          'جوه خلية PY',
          'في Power Query',
        ],
        optionsEn: [
          'In Excel for the web, on the production file',
          'In desktop Excel, on a training copy of the file',
          'Inside a PY cell',
          'In Power Query',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 85,
    title: 'قالب طلب لمحلل',
    titleEn: 'A prompt pattern for an analyst',
    description: 'الأعمدة، خمس صفوف عينة، والناتج المطلوب. من غير كده النموذج بيخمّن.',
    descriptionEn: 'The columns, five sample rows, and the output you expect. Without that, the model guesses.',
    type: 'formula',
    sheet: roiSheet,
    content: `## القالب

1. أسماء الأعمدة ونوع كل واحد.
2. ثلاث إلى خمس صفوف عينة وهمية، مش تصدير الشركة.
3. الناتج: رقم واحد، ولا عمود جديد، ولا فلتر.
4. نسخة Excel اللي عندك: Microsoft 365 ولا 2019، لأن TEXTSPLIT و LAMBDA مش في كل النسخ.
5. اطلب التفسير وحالات الحافة: قسمة على صفر، صف فاضي، نص متخزن كرقم.
6. بعد الرد، شغّل الصيغة على الشيت وقارن برقم أنت حاسبه.

التمرين فيه prompt جاهز لعائد حملة. انسخه، وبعدين احسب العائد بنفسك. 0.6 يعني 60%.`,
    contentEn: `## The pattern

1. Column names and the type of each one.
2. Three to five fictional sample rows, not a company export.
3. The output: one number, a new column, or a filter.
4. The Excel you have: Microsoft 365 or 2019, because TEXTSPLIT and LAMBDA are not in every copy.
5. Ask for the explanation and the edge cases: divide by zero, a blank row, a number stored as text.
6. After the reply, run the formula on the sheet and compare it with a number you computed.

The exercise includes a ready-made prompt for a campaign return. Copy it, then compute the return yourself. 0.6 means 60%.`,
    exercises: [
      {
        ...fx(
          851,
          'عائد حملة رمضان كام ككسر عشري مقرب لـ 4 خانات؟ (الإيراد - التكلفة) / التكلفة.',
          'What is the Ramadan campaign return as a decimal rounded to 4 places? (revenue - cost) / cost.',
          'ROUND على (C2-B2)/B2',
          'ROUND of (C2-B2)/B2',
          roiSheet,
          '=ROUND((C2-B2)/B2,4)',
        ),
        prompt: 'أعمدة: الحملة (نص)، التكلفة (رقم)، الإيراد (رقم).\nعينة وهمية: رمضان، تكلفة 45000، إيراد 72000.\nالمطلوب رقم واحد: (الإيراد-التكلفة)/التكلفة مقرب لـ 4 خانات عشرية، مش نسبة مئوية.\nالنسخة Microsoft 365. اذكر ماذا يحدث لو التكلفة صفر.\nمتطلبش باقي الحملات.',
        promptEn: 'Columns: Campaign (text), Cost (number), Revenue (number).\nFictional sample: Ramadan, cost 45000, revenue 72000.\nI need one number: (revenue-cost)/cost rounded to 4 decimal places, not a percent.\nExcel version: Microsoft 365. Say what happens if cost is zero.\nDo not ask for the rest of the campaigns.',
      },
    ],
  },
  {
    id: 86,
    title: 'تنظيف وتصنيف بمساعدة نموذج',
    titleEn: 'Cleaning and categorising with a model',
    description: 'المسافة والمبلغ النص اتسببوا في إجمالي أجهزة أقل من الحقيقة.',
    descriptionEn: 'A trailing space and a text amount made the appliances total smaller than the truth.',
    type: 'formula',
    sheet: cleanSheet,
    content: `## إيه اللي النموذج بينفع فيه

تصنيف نص حر إلى خانات، واقتراح TRIM أو VALUE أو SUBSTITUTE. بتديه خمس صفوف وهمية وقائمة التصنيفات المسموحة، وهو يكتب الصيغة أو عمودًا جديدًا.

## إيه اللي بيحصل لو سلّمت من غير تجربة

اقتراح شائع: \`=SUMIFS(C2:C5,A2:A5,"القاهرة",B2:B5,"أجهزة")\`.

دي بتفوّت الصف اللي آخر المدينة فيه مسافة، و SUMIFS بتتجاهل المبلغ المتخزن كنص. العلامة T في الجدول معناها نص. العلامة ␣ معناها مسافة.

الصيغة الصح تجمع النسخ النظيفة، وتزود الصف اللي فيه مسافة، وترجّع النص بـ VALUE. الصف النص هو الصف 5.`,
    contentEn: `## Where the model helps

Classifying free text into buckets, and suggesting TRIM, VALUE, or SUBSTITUTE. You give it five fictional rows and the allowed categories, and it writes the formula or a new column.

## What happens if you ship it untested

A common suggestion: \`=SUMIFS(C2:C5,A2:A5,"القاهرة",B2:B5,"أجهزة")\`.

That misses the row whose city ends with a space, and SUMIFS ignores the amount stored as text. A T mark in the grid means text. ␣ means a space.

The correct formula adds the clean rows, includes the spaced row, and converts the text with VALUE. The text amount is on row 5.`,
    exercises: [
      {
        ...fx(
          861,
          'كام إجمالي أجهزة القاهرة بعد حساب المسافة والمبلغ النص في الصف 5؟',
          'What is the Cairo appliances total after including the spaced city and the text amount on row 5?',
          'SUMIFS للاسم النضيف زائد الصف 3 زائد VALUE للصف 5',
          'SUMIFS for the clean name, plus row 3, plus VALUE of row 5',
          cleanSheet,
          '=SUMIFS(C2:C5,A2:A5,"القاهرة",B2:B5,"أجهزة")+C3+VALUE(C5)',
        ),
        prompt: cleanPrompt,
        promptEn: cleanPromptEn,
      },
    ],
  },
  {
    id: 87,
    title: 'Analyze Data ومراجعة الناتج',
    titleEn: 'Analyze Data and checking the output',
    description: 'الاسم القديم Ideas. الاقتراح يتراجع على الجدول، وبالذات لو السؤال بالعربي.',
    descriptionEn: 'The old name was Ideas. You reconcile the suggestion to the table, especially if the question was in Arabic.',
    type: 'concept',
    sheet: pySheet,
    content: `## Analyze Data

من Home ثم Analyze Data. Microsoft غيّرت الاسم من Ideas، والوظيفة هي هي. متاحة لمشتركي Microsoft 365، ومش محتاجة ترخيص Copilot.

الاستعلامات باللغة الطبيعية، حسب وثائق Microsoft، متاحة بالإنجليزية والفرنسية والإسبانية والألمانية والصينية المبسطة واليابانية. العربي مش مذكور في القائمة دي. لو الشغل بالعربي، متفترضش إن السؤال هيتفهم؛ راجع الرقم بنفسك أو اكتب السؤال بلغة مدعومة وأسماء الأعمدة واضحة.

بتشتغل أحسن على Excel Table برؤوس فريدة ومن غير خلايا مدموجة. الحد المذكور حوالي 1.5 مليون خلية. التاريخ النص بيتقري كنص لحد ما تحوّله.

## المراجعة

الاقتراح قال القاهرة 32000. التمرين يعيد الحساب. لو مختلف، الاقتراح هو اللي يتساب.`,
    contentEn: `## Analyze Data

Home, then Analyze Data. Microsoft renamed it from Ideas; the job is the same. It is available to Microsoft 365 subscribers and does not need a Copilot license.

Natural-language queries, according to Microsoft’s docs, are available in English, French, Spanish, German, Simplified Chinese, and Japanese. Arabic is not on that list. If the work is in Arabic, do not assume the question will be understood; reconcile the number yourself, or ask in a supported language with clear column names.

It works better on an Excel Table with unique headers and no merged cells. The stated limit is about 1.5 million cells. A text date is read as text until you convert it.

## The check

The suggestion said Cairo is 32000. The exercise recomputes it. If it differs, the suggestion is the thing you drop.`,
    exercises: [
      fx(
        871,
        'Analyze Data قال مبيعات القاهرة 32000. الرقم الصح من الجدول كام؟',
        'Analyze Data said Cairo sales are 32000. What is the right number from the table?',
        'SUMIF على المدينة',
        'SUMIF on the city',
        pySheet,
        '=SUMIF(A2:A6,"القاهرة",B2:B6)',
      ),
      {
        id: 872,
        type: 'mcq',
        question: 'سؤال بالعربي جوه Analyze Data. أنهي جملة أدق حسب وثائق Microsoft؟',
        questionEn: 'An Arabic question inside Analyze Data. Which sentence is the careful one given Microsoft’s docs?',
        hint: 'قائمة اللغات المنشورة',
        hintEn: 'The published language list',
        options: [
          'العربي موثّق رسميًا ضمن لغات الاستعلام',
          'اللغات الموثقة مش بتشمل العربي، فلازم تراجع الرقم',
          'Analyze Data هو نفسه Copilot ومحتاج نفس الترخيص',
          'الأداة بتشتغل من غير إنترنت على أي ملف xls قديم',
        ],
        optionsEn: [
          'Arabic is officially documented as a query language',
          'The documented languages do not include Arabic, so you have to reconcile the number',
          'Analyze Data is the same product as Copilot and needs the same license',
          'The tool works offline on any old xls file',
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 88,
    title: 'خصوصية البيانات مع أدوات الذكاء',
    titleEn: 'Privacy when you use AI tools',
    description: 'مسير المرتبات وقائمة العملاء مش بيتحطوا في حساب شخصي عشان الصيغة تتظبط.',
    descriptionEn: 'A payroll run and a customer list do not go into a personal account so a formula can be fixed.',
    type: 'concept',
    content: `## الخط الفاصل

حساب الشغل على Microsoft 365 Copilot يخضع لسياسة المؤسسة. ده غير لصق نفس الجدول في حساب شخصي على ChatGPT أو Claude أو Gemini. متخلطش الاتنين في جملة "الذكاء الاصطناعي آمن".

متبعتش:

- رقم قومي أو إقامة أو جواز
- رقم خط أو عنوان عميل
- مرتب مربوط باسم حقيقي
- أرقام مالية لسه متتنشرش
- مفتاح API أو كلمة مرور

ابعت بدل كده: أسماء الأعمدة، خمس صفوف وهمية، والناتج المطلوب. التطبيق ده بيعمل كده: زر نسخ الـ prompt بينسخ نص الدرس، ومفيش مفتاح ومفيش اتصال بخدمة خارجية.

لو محتاج صياغة تعليق على تقرير تسرب، ابعت النسبة والعدد المجمّع، مش قائمة المتسربين.`,
    contentEn: `## The line

A work account on Microsoft 365 Copilot follows the organization’s policy. That is not the same as pasting the same table into a personal ChatGPT, Claude, or Gemini account. Do not collapse the two into “AI is safe”.

Do not send:

- A national ID, residency number, or passport number
- A phone number or a customer address
- A salary tied to a real name
- Financial figures that are not public yet
- An API key or a password

Send column names, five fictional rows, and the output you need. This app does that: the copy-prompt button copies lesson text. There is no key and no call to an outside service.

If you need commentary on a churn report, send the rate and the aggregated count, not the list of people who left.`,
    exercises: [
      {
        id: 881,
        type: 'mcq',
        question: 'الصيغة بتطلع غلط على مسير مرتبات حقيقي. أنهي حاجة تتبعت لنموذج شخصي؟',
        questionEn: 'The formula is wrong on a real payroll file. What may go to a personal model?',
        hint: 'العينة الوهمية مش المسير',
        hintEn: 'A fictional sample, not the payroll',
        options: [
          'ملف المسير بالأسماء والرواتب',
          'وصف الأعمدة وخمس صفوف بأسماء وهمية ومبالغ مستديرة',
          'صورة من نظام الموارد البشرية',
          'إيميل الموظف مع رقمه القومي',
        ],
        optionsEn: [
          'The payroll file with names and salaries',
          'A description of the columns and five rows with fictional names and round amounts',
          'A screenshot of the HR system',
          'The employee’s email plus their national ID',
        ],
        correctIndex: 1,
      },
      {
        id: 882,
        type: 'mcq',
        question: 'زر انسخ الـ prompt في التطبيق بيعمل إيه؟',
        questionEn: 'What does the copy-prompt button in this app do?',
        hint: 'مفيش مفتاح API',
        hintEn: 'There is no API key',
        options: [
          'يبعت الجدول لحساب نموذج ويحفظ الرد',
          'ينسخ نص الطلب فقط، من غير اتصال خارجي',
          'يخزّن مفتاح OpenAI في المتصفح',
          'يشغّل Copilot على ملف الشركة',
        ],
        optionsEn: [
          'It sends the table to a model account and stores the reply',
          'It copies the prompt text only, with no outside call',
          'It stores an OpenAI key in the browser',
          'It runs Copilot on the company file',
        ],
        correctIndex: 1,
      },
    ],
  },
];

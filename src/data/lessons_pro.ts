import { Lesson } from '../types';

export const lessonsPro: Lesson[] = [
  {
    id: 61,
    title: 'مقدمة VBA',
    titleEn: 'Introduction to VBA',
    description: 'أتمتة المهام المتكررة وبناء أدوات Excel مخصصة بـ VBA',
    descriptionEn: 'Automate repetitive tasks and build custom Excel tools with VBA',
    type: 'concept',
    content: `## إيه هو VBA؟

اسمه VBA، وهو اختصار لـ Visual Basic for Applications — وهي لغة برمجة طوّرتها شركة Microsoft وبتشتغل مدمجة جوّا Excel.
بتستخدمها لـ:
- تشغيل مهام متكررة بضغطة زرار
- بناء نماذج وأدوات مخصصة
- التحكم في Excel برمجياً

## امتى تستخدم VBA؟

✅ مهام متكررة يومياً بتاخد وقت
✅ تنسيق تقارير بشكل موحد تلقائياً
✅ نماذج لإدخال البيانات — Forms
✅ أتمتة عمليات معقدة

❌ مش محتاجه لو Power Query أو الصيغ تكفي

## فتح محرر VBA

**Alt + F11** لفتح Visual Basic Editor — اختصاره VBE

الواجهة:
\`\`\`
┌─────────────┬─────────────────────┐
│ Project     │                     │
│ Explorer    │    Code Window      │
│             │    هنا تكتب كودك   │
├─────────────┤                     │
│ Properties  │                     │
└─────────────┴─────────────────────┘
\`\`\`

## تسجيل Macro — أسهل بداية

1. View ← Macros ← Record Macro
2. افعل اللي عايز تأتمته
3. View ← Macros ← Stop Recording
4. شوف الكود المسجّل بـ Alt + F11

## حفظ الملف

ملفات VBA لازم تتحفظ بامتداد **.xlsm** — اختصاره Excel Macro-Enabled Workbook

> ⚠️ **أمان:** فعّل الـ Macros بس من ملفات بتثق فيها.`,
    contentEn: `## What is VBA?

VBA = Visual Basic for Applications
A programming language built into Excel that lets you:
- Run repetitive tasks at the click of a button
- Build custom forms and tools
- Control Excel programmatically

## When Should You Use VBA?

✅ Daily repetitive tasks that consume too much time
✅ Automatically formatting reports in a consistent style
✅ Data entry forms
✅ Automating complex multi-step operations

❌ Not needed if Power Query or formulas can handle it

## Opening the VBA Editor

**Alt + F11** opens the Visual Basic Editor (VBE)

The interface layout:
\`\`\`
┌─────────────┬─────────────────────┐
│ Project     │                     │
│ Explorer    │    Code Window      │
│             │  (write code here)  │
├─────────────┤                     │
│ Properties  │                     │
└─────────────┴─────────────────────┘
\`\`\`

## Recording a Macro — The Easy Starting Point

1. View → Macros → Record Macro
2. Perform the actions you want to automate
3. View → Macros → Stop Recording
4. Inspect the recorded code (Alt + F11)

## Saving the File

VBA files must be saved as **.xlsm** (Excel Macro-Enabled Workbook)

> ⚠️ **Security:** Only enable Macros from files you trust.`,
    exercises: [
      {
        id: 58,
        type: 'mcq',
        question: 'ما الاختصار لفتح Visual Basic Editor في Excel؟',
        questionEn: 'What is the keyboard shortcut to open the Visual Basic Editor in Excel?',
        hint: 'اختصار من حرفين',
        hintEn: 'A two-key shortcut',
        options: ['Ctrl + F11', 'Alt + F11', 'Ctrl + Alt + V', 'F12'],
        optionsEn: ['Ctrl + F11', 'Alt + F11', 'Ctrl + Alt + V', 'F12'],
        correctIndex: 1,
      },
      {
        id: 59,
        type: 'mcq',
        question: 'ما امتداد ملف Excel اللي يحتوي Macros؟',
        questionEn: 'What file extension does an Excel file containing Macros use?',
        hint: 'مختلف عن .xlsx',
        hintEn: 'Different from the standard .xlsx extension',
        options: ['.xlsb', '.xlsm', '.xlsx', '.xlvba'],
        optionsEn: ['.xlsb', '.xlsm', '.xlsx', '.xlvba'],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 62,
    title: 'VBA — أساسيات الكود',
    titleEn: 'VBA — Code Fundamentals',
    description: 'المتغيرات والشروط والحلقات في VBA بأمثلة عملية',
    descriptionEn: 'Variables, conditionals, and loops in VBA with practical examples',
    type: 'code',
    codeLang: 'vba',
    content: `## هيكل الـ Macro الأساسي

\`\`\`vba
Sub اسم_الماكرو()
    ' كود هنا
    ' السطر ده تعليق (Comment)
End Sub
\`\`\`

## المتغيرات (Variables)

\`\`\`vba
Sub VariablesExample()
    Dim name As String
    Dim age As Integer
    Dim salary As Double
    Dim isActive As Boolean

    name = "أحمد"
    age = 30
    salary = 8500.5
    isActive = True

    MsgBox "الاسم: " & name & ", العمر: " & age
End Sub
\`\`\`

## الشرط If...Then...Else

\`\`\`vba
Sub CheckGrade()
    Dim grade As Integer
    grade = Range("B2").Value

    If grade >= 90 Then
        Range("C2").Value = "ممتاز"
    ElseIf grade >= 75 Then
        Range("C2").Value = "جيد جداً"
    ElseIf grade >= 60 Then
        Range("C2").Value = "جيد"
    Else
        Range("C2").Value = "راسب"
    End If
End Sub
\`\`\`

## الحلقة For Loop

\`\`\`vba
Sub FormatRows()
    Dim i As Integer
    Dim lastRow As Integer

    lastRow = Cells(Rows.Count, 1).End(xlUp).Row

    For i = 2 To lastRow
        If Cells(i, 2).Value > 5000 Then
            Cells(i, 2).Interior.Color = RGB(144, 238, 144)  ' أخضر فاتح
        End If
    Next i
End Sub
\`\`\`

## العمل مع الخلايا

\`\`\`vba
' قراءة قيمة
Dim val As Double
val = Range("B2").Value
' أو
val = Cells(2, 2).Value   ' (row, col)

' كتابة قيمة
Range("C2").Value = val * 1.15

' تنسيق
Range("A1").Font.Bold = True
Range("B2:B10").Interior.Color = RGB(255, 255, 0)  ' أصفر
\`\`\``,
    contentEn: `## Basic Macro Structure

\`\`\`vba
Sub MacroName()
    ' Code goes here
    ' This line is a comment
End Sub
\`\`\`

## Variables

\`\`\`vba
Sub VariablesExample()
    Dim name As String
    Dim age As Integer
    Dim salary As Double
    Dim isActive As Boolean

    name = "Ahmed"
    age = 30
    salary = 8500.5
    isActive = True

    MsgBox "Name: " & name & ", Age: " & age
End Sub
\`\`\`

## If...Then...Else Conditional

\`\`\`vba
Sub CheckGrade()
    Dim grade As Integer
    grade = Range("B2").Value

    If grade >= 90 Then
        Range("C2").Value = "Excellent"
    ElseIf grade >= 75 Then
        Range("C2").Value = "Very Good"
    ElseIf grade >= 60 Then
        Range("C2").Value = "Good"
    Else
        Range("C2").Value = "Fail"
    End If
End Sub
\`\`\`

## For Loop

\`\`\`vba
Sub FormatRows()
    Dim i As Integer
    Dim lastRow As Integer

    lastRow = Cells(Rows.Count, 1).End(xlUp).Row

    For i = 2 To lastRow
        If Cells(i, 2).Value > 5000 Then
            Cells(i, 2).Interior.Color = RGB(144, 238, 144)  ' Light green
        End If
    Next i
End Sub
\`\`\`

## Working with Cells

\`\`\`vba
' Read a value
Dim val As Double
val = Range("B2").Value
' Or equivalently
val = Cells(2, 2).Value   ' (row, col)

' Write a value
Range("C2").Value = val * 1.15

' Formatting
Range("A1").Font.Bold = True
Range("B2:B10").Interior.Color = RGB(255, 255, 0)  ' Yellow
\`\`\``,
    example: `Sub HighlightHighSales()
    Dim i As Integer
    Dim lastRow As Integer
    lastRow = Cells(Rows.Count, 1).End(xlUp).Row

    For i = 2 To lastRow
        If Cells(i, 2).Value > 10000 Then
            Cells(i, 2).Interior.Color = RGB(144, 238, 144)
        End If
    Next i

    MsgBox "تم تمييز المبيعات العالية!"
End Sub`,
    exercises: [
      {
        id: 60,
        type: 'mcq',
        question: 'كيف تعرّف متغير رقم صحيح في VBA؟',
        questionEn: 'How do you declare an integer variable in VBA?',
        hint: 'الكلمة المحجوزة لتعريف المتغيرات في VBA',
        hintEn: 'The reserved keyword used to declare variables in VBA',
        options: [
          'var x As Integer',
          'Dim x As Integer',
          'int x = 0',
          'let x: number'
        ],
        optionsEn: [
          'var x As Integer',
          'Dim x As Integer',
          'int x = 0',
          'let x: number'
        ],
        correctIndex: 1,
      },
      {
        id: 61,
        type: 'mcq',
        question: 'في VBA، ما الفرق بين Range("B2") وCells(2, 2)؟',
        questionEn: 'In VBA, what is the difference between Range("B2") and Cells(2, 2)?',
        hint: 'كلاهما يشير لنفس الخلية لكن بطريقتين',
        hintEn: 'Both reference the same cell but in different ways',
        options: [
          'Range أسرع وCells أبطأ',
          'كلاهما يشير لنفس الخلية B2 — Range بالاسم، Cells بأرقام الصف والعمود',
          'Range للقراءة فقط وCells للكتابة',
          'لا فرق بينهما على الإطلاق'
        ],
        optionsEn: [
          'Range is faster and Cells is slower',
          'Both refer to cell B2 — Range uses the address name, Cells uses row and column numbers',
          'Range is read-only and Cells is for writing',
          'There is absolutely no difference between them'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 63,
    title: 'VBA — الحلقات المتقدمة والأحداث',
    titleEn: 'VBA — Advanced Loops and Events',
    description: 'For Each و Do While والـ Events اللي بتشغّل كودك تلقائياً',
    descriptionEn: 'For Each, Do While loops, and Events that trigger your code automatically',
    type: 'code',
    codeLang: 'vba',
    content: `## For Each — للتكرار على مجموعة

\`\`\`vba
Sub ProcessAllSheets()
    Dim ws As Worksheet
    For Each ws In ThisWorkbook.Worksheets
        ws.Range("A1").Value = "مُحدَّث: " & Date
    Next ws
End Sub
\`\`\`

## Do While — تكرار بشرط

\`\`\`vba
Sub FillDown()
    Dim i As Integer
    i = 2
    Do While Cells(i, 1).Value <> ""
        Cells(i, 3).Value = Cells(i, 1).Value * Cells(i, 2).Value
        i = i + 1
    Loop
End Sub
\`\`\`

## With — تقليل التكرار

\`\`\`vba
' بدون With (مكرر)
Range("A1").Font.Bold = True
Range("A1").Font.Size = 14
Range("A1").Font.Color = RGB(0, 0, 255)

' مع With (أنظف)
With Range("A1").Font
    .Bold = True
    .Size = 14
    .Color = RGB(0, 0, 255)
End With
\`\`\`

## Events — أحداث تلقائية

\`\`\`vba
' هذا الكود يُشغَّل تلقائياً عند تغيير أي خلية في الورقة
Private Sub Worksheet_Change(ByVal Target As Range)
    If Not Intersect(Target, Range("B:B")) Is Nothing Then
        If Target.Value > 10000 Then
            Target.Interior.Color = RGB(144, 238, 144)
        Else
            Target.Interior.ColorIndex = xlNone
        End If
    End If
End Sub
\`\`\`

## Error Handling

\`\`\`vba
Sub SafeCalc()
    On Error GoTo ErrorHandler

    Dim result As Double
    result = Range("A1").Value / Range("B1").Value
    Range("C1").Value = result
    Exit Sub

ErrorHandler:
    MsgBox "خطأ: " & Err.Description
    Range("C1").Value = "خطأ"
End Sub
\`\`\``,
    contentEn: `## For Each — Iterating Over a Collection

\`\`\`vba
Sub ProcessAllSheets()
    Dim ws As Worksheet
    For Each ws In ThisWorkbook.Worksheets
        ws.Range("A1").Value = "Updated: " & Date
    Next ws
End Sub
\`\`\`

## Do While — Condition-Based Loop

\`\`\`vba
Sub FillDown()
    Dim i As Integer
    i = 2
    Do While Cells(i, 1).Value <> ""
        Cells(i, 3).Value = Cells(i, 1).Value * Cells(i, 2).Value
        i = i + 1
    Loop
End Sub
\`\`\`

## With — Reducing Repetition

\`\`\`vba
' Without With (repetitive)
Range("A1").Font.Bold = True
Range("A1").Font.Size = 14
Range("A1").Font.Color = RGB(0, 0, 255)

' With With (cleaner)
With Range("A1").Font
    .Bold = True
    .Size = 14
    .Color = RGB(0, 0, 255)
End With
\`\`\`

## Events — Automatic Triggers

\`\`\`vba
' This code runs automatically whenever any cell in the sheet changes
Private Sub Worksheet_Change(ByVal Target As Range)
    If Not Intersect(Target, Range("B:B")) Is Nothing Then
        If Target.Value > 10000 Then
            Target.Interior.Color = RGB(144, 238, 144)
        Else
            Target.Interior.ColorIndex = xlNone
        End If
    End If
End Sub
\`\`\`

## Error Handling

\`\`\`vba
Sub SafeCalc()
    On Error GoTo ErrorHandler

    Dim result As Double
    result = Range("A1").Value / Range("B1").Value
    Range("C1").Value = result
    Exit Sub

ErrorHandler:
    MsgBox "Error: " & Err.Description
    Range("C1").Value = "Error"
End Sub
\`\`\``,
    example: `Sub AutoFormat()
    Dim cell As Range
    For Each cell In Range("B2:B100")
        If cell.Value = "" Then Exit For
        If cell.Value >= 10000 Then
            cell.Interior.Color = RGB(144, 238, 144)
        ElseIf cell.Value < 5000 Then
            cell.Interior.Color = RGB(255, 182, 193)
        Else
            cell.Interior.ColorIndex = xlNone
        End If
    Next cell
End Sub`,
    exercises: [
      {
        id: 62,
        type: 'mcq',
        question: 'ما مميزة For Each مقارنةً بـ For...Next؟',
        questionEn: 'What advantage does For Each have over For...Next?',
        hint: 'فكّر في الأشياء اللي ممكن تتكرر عليها',
        hintEn: 'Think about the types of things you can iterate over',
        options: [
          'For Each أسرع دايماً',
          'For Each بيتكرر على مجموعة من العناصر (خلايا، أوراق...) بدون الحاجة لمعرفة العدد',
          'For Each مخصص للأرقام فقط',
          'لا فرق بينهما'
        ],
        optionsEn: [
          'For Each is always faster',
          'For Each iterates over a collection of objects (cells, sheets, etc.) without needing to know the count',
          'For Each is only for numbers',
          'There is no difference between them'
        ],
        correctIndex: 1,
      },
      {
        id: 63,
        type: 'mcq',
        question: 'في أي Module تكتب كود الـ Worksheet Events مثل Worksheet_Change؟',
        questionEn: 'In which module do you write Worksheet Event code such as Worksheet_Change?',
        hint: 'مش في Module عادي',
        hintEn: 'Not in a standard module',
        options: [
          'في Module عادي (Module1)',
          'في كود الورقة نفسها (Sheet module) مش في Module عادي',
          'في ThisWorkbook',
          'في أي module — المكان مش مهم'
        ],
        optionsEn: [
          'In a standard module (Module1)',
          'In the sheet\'s own code module (Sheet module), not in a standard module',
          'In ThisWorkbook',
          'In any module — location doesn\'t matter'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 64,
    title: 'مسارات الشهادات',
    titleEn: 'Certification Pathways',
    description: 'احتراف Excel رسمياً — شهادات Microsoft وPower BI لتقوية ملفك المهني',
    descriptionEn: 'Official Excel mastery — Microsoft and Power BI certifications to strengthen your professional profile',
    type: 'concept',
    content: `## شهادات Microsoft Excel الرسمية

### MO-210 — Excel Associate
\`\`\`
المستوى: مبتدئ - متوسط
المحتوى: إدارة الملفات، الصيغ، الجداول، الرسوم البيانية
مناسب لك لو: أتقنت المستويات 0-3 من هذه الدورة
\`\`\`

### MO-211 — Excel Expert
\`\`\`
المستوى: متقدم - خبير
المحتوى: Pivot Tables، Power Query، Data Validation المتقدم
مناسب لك لو: أتقنت المستويات 4-6 من هذه الدورة
\`\`\`

## Power BI — التطور الطبيعي

بعد إتقان Excel وDAX، Power BI هو الخطوة التالية:

\`\`\`
Excel + DAX + Power Query  →  Power BI Desktop  →  PL-300 Cert
\`\`\`

### PL-300 — Power BI Data Analyst Associate
\`\`\`
المستوى: متقدم
المحتوى: DAX، Data Model، Report Building، Service
المتطلبات: Excel متقدم + DAX
\`\`\`

## خريطة طريقك المهني

\`\`\`
المستوى 0-1  →  Data Entry / Admin
المستوى 2-3  →  Junior Data Analyst
المستوى 4-5  →  Data Analyst
المستوى 6    →  Senior Analyst / BI Developer
+ Power BI   →  Business Intelligence Analyst
\`\`\`

## نصائح للاستعداد للشهادة

1. **طبّق كل شيء** — لا تكتفي بالقراءة
2. **ملفات تدريبية** — اصنع ملفات عملية من الصفر
3. **محاكاة الامتحان** — جرّب أسئلة شبيهة بالامتحان الحقيقي
4. **وقت الامتحان** — 50 دقيقة، سرعة الإجراءات مهمة

> 💡 أهم من الشهادة هو **Portfolio** — مشاريع حقيقية تُظهرها في LinkedIn وCV.`,
    contentEn: `## Official Microsoft Excel Certifications

### MO-210 — Excel Associate
\`\`\`
Level: Beginner – Intermediate
Content: File management, formulas, tables, charts
Suitable if: You have mastered Levels 0–3 of this course
\`\`\`

### MO-211 — Excel Expert
\`\`\`
Level: Advanced – Expert
Content: Pivot Tables, Power Query, advanced Data Validation
Suitable if: You have mastered Levels 4–6 of this course
\`\`\`

## Power BI — The Natural Next Step

After mastering Excel and DAX, Power BI is the logical progression:

\`\`\`
Excel + DAX + Power Query  →  Power BI Desktop  →  PL-300 Cert
\`\`\`

### PL-300 — Power BI Data Analyst Associate
\`\`\`
Level: Advanced
Content: DAX, Data Modeling, Report Building, Power BI Service
Prerequisites: Advanced Excel + DAX knowledge
\`\`\`

## Your Career Roadmap

\`\`\`
Level 0–1  →  Data Entry / Admin
Level 2–3  →  Junior Data Analyst
Level 4–5  →  Data Analyst
Level 6    →  Senior Analyst / BI Developer
+ Power BI →  Business Intelligence Analyst
\`\`\`

## Tips for Exam Preparation

1. **Practice everything** — don't just read passively
2. **Build practice files** — create real workbooks from scratch
3. **Simulate the exam** — work through practice questions similar to the real test
4. **Exam timing** — 50 minutes; speed and precision in performing actions matters

> 💡 More valuable than any certification is a strong **Portfolio** — real projects you can showcase on LinkedIn and your CV.`,
    exercises: [
      {
        id: 64,
        type: 'mcq',
        question: 'ما المتطلب الأساسي للتسجيل لامتحان PL-300 Power BI؟',
        questionEn: 'What is the core prerequisite for the PL-300 Power BI exam?',
        hint: 'فكّر في ما تتعلمه في هذه الدورة',
        hintEn: 'Think about what you learn in this course',
        options: [
          'Python وSQL فقط',
          'إتقان Excel المتقدم وDAX وفهم Data Modeling',
          'خبرة في Java أو C#',
          'لا توجد متطلبات'
        ],
        optionsEn: [
          'Python and SQL only',
          'Proficiency in advanced Excel, DAX, and understanding of Data Modeling',
          'Experience in Java or C#',
          'No prerequisites required'
        ],
        correctIndex: 1,
      },
      {
        id: 65,
        type: 'mcq',
        question: 'ما الفرق بين MO-210 وMO-211؟',
        questionEn: 'What is the difference between MO-210 and MO-211?',
        hint: 'فكّر في المستوى',
        hintEn: 'Think about the skill level each targets',
        options: [
          'لا فرق — نفس الشهادة باسمين',
          'MO-210 للمستوى الأساسي والمتوسط، MO-211 للمستوى المتقدم والخبير',
          'MO-210 لـ Windows وMO-211 لـ Mac',
          'MO-211 أقدم إصدار'
        ],
        optionsEn: [
          'No difference — it\'s the same certification under two names',
          'MO-210 targets the beginner and intermediate level; MO-211 targets the advanced and expert level',
          'MO-210 is for Windows and MO-211 is for Mac',
          'MO-211 is an older version'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 65,
    title: 'VBA — UserForms وواجهات المستخدم',
    titleEn: 'VBA — UserForms and User Interfaces',
    description: 'بناء نماذج إدخال احترافية بـ UserForm لجمع البيانات بشكل آمن وسهل',
    descriptionEn: 'Build professional data entry forms with UserForm to collect data safely and efficiently',
    type: 'code',
    codeLang: 'vba',
    content: `## إيه هو UserForm؟

اسمه UserForm — وهو نافذة مخصصة بتبنيها بنفسك جوّا Excel، زي نموذج إدخال بيانات احترافي.

## إنشاء UserForm

\`\`\`
VBA Editor (Alt+F11) → Insert → UserForm
\`\`\`

تظهر نافذة التصميم وشريط أدوات Toolbox.

## أدوات Toolbox الأساسية

| الأداة | الاستخدام |
|--------|-----------|
| TextBox | حقل إدخال نص |
| Label | نص توضيحي ثابت |
| ComboBox | قائمة منسدلة |
| ListBox | قائمة اختيار |
| CheckBox | خانة اختيار |
| OptionButton | زر اختيار (Radio) |
| CommandButton | زر أمر |

## مثال: نموذج إدخال موظف

\`\`\`vba
' كود زر "حفظ"
Private Sub btnSave_Click()
    ' التحقق من البيانات
    If txtName.Value = "" Then
        MsgBox "أدخل الاسم أولاً", vbExclamation
        txtName.SetFocus
        Exit Sub
    End If

    If Not IsNumeric(txtSalary.Value) Then
        MsgBox "الراتب يجب أن يكون رقماً", vbExclamation
        Exit Sub
    End If

    ' إيجاد أول صف فارغ
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Sheets("الموظفون")
    Dim lastRow As Long
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row + 1

    ' حفظ البيانات
    ws.Cells(lastRow, 1).Value = txtName.Value
    ws.Cells(lastRow, 2).Value = cmbDept.Value
    ws.Cells(lastRow, 3).Value = CDbl(txtSalary.Value)
    ws.Cells(lastRow, 4).Value = Now()

    ' إعادة تعيين النموذج
    Call ClearForm
    MsgBox "تم حفظ البيانات بنجاح ✅", vbInformation
End Sub

Private Sub ClearForm()
    txtName.Value = ""
    txtSalary.Value = ""
    cmbDept.ListIndex = -1
End Sub

Private Sub btnCancel_Click()
    Unload Me   ' إغلاق النموذج
End Sub
\`\`\`

## تحميل الـ ComboBox من نطاق

\`\`\`vba
Private Sub UserForm_Initialize()
    ' تحميل قائمة الأقسام
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Sheets("الأقسام")
    Dim lastRow As Long
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row

    cmbDept.RowSource = "الأقسام!A2:A" & lastRow

    ' قيمة افتراضية للتاريخ
    txtDate.Value = Format(Now(), "dd/mm/yyyy")
End Sub
\`\`\`

## فتح UserForm من زر في الورقة

\`\`\`vba
Sub ShowEmployeeForm()
    frmEmployee.Show
End Sub
\`\`\`

## نصائح احترافية

\`\`\`vba
' جعل النموذج يفتح في منتصف الشاشة
Private Sub UserForm_Initialize()
    Me.StartUpPosition = 2  ' Center Screen
End Sub

' منع إغلاق النموذج بالـ X
Private Sub UserForm_QueryClose(Cancel As Integer, CloseMode As Integer)
    If CloseMode = vbFormControlMenu Then
        Cancel = True
        MsgBox "استخدم زر الإلغاء"
    End If
End Sub
\`\`\`

> 💡 UserForms أفضل من الإدخال المباشر في الخلايا لأنها تتيح التحقق من البيانات قبل حفظها.`,
    contentEn: `## What is a UserForm?

A UserForm is a custom dialog window you design inside Excel — essentially a professional data entry form.

## Creating a UserForm

\`\`\`
VBA Editor (Alt+F11) → Insert → UserForm
\`\`\`

A design canvas appears along with the Toolbox toolbar.

## Essential Toolbox Controls

| Control | Purpose |
|---------|---------|
| TextBox | Text input field |
| Label | Static descriptive text |
| ComboBox | Dropdown list |
| ListBox | Selection list |
| CheckBox | Toggle checkbox |
| OptionButton | Radio button |
| CommandButton | Action button |

## Example: Employee Data Entry Form

\`\`\`vba
' Code for the "Save" button
Private Sub btnSave_Click()
    ' Validate inputs
    If txtName.Value = "" Then
        MsgBox "Please enter a name first", vbExclamation
        txtName.SetFocus
        Exit Sub
    End If

    If Not IsNumeric(txtSalary.Value) Then
        MsgBox "Salary must be a number", vbExclamation
        Exit Sub
    End If

    ' Find the first empty row
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Sheets("Employees")
    Dim lastRow As Long
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row + 1

    ' Save the data
    ws.Cells(lastRow, 1).Value = txtName.Value
    ws.Cells(lastRow, 2).Value = cmbDept.Value
    ws.Cells(lastRow, 3).Value = CDbl(txtSalary.Value)
    ws.Cells(lastRow, 4).Value = Now()

    ' Reset the form
    Call ClearForm
    MsgBox "Data saved successfully!", vbInformation
End Sub

Private Sub ClearForm()
    txtName.Value = ""
    txtSalary.Value = ""
    cmbDept.ListIndex = -1
End Sub

Private Sub btnCancel_Click()
    Unload Me   ' Close the form
End Sub
\`\`\`

## Loading a ComboBox from a Range

\`\`\`vba
Private Sub UserForm_Initialize()
    ' Load the department list
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Sheets("Departments")
    Dim lastRow As Long
    lastRow = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row

    cmbDept.RowSource = "Departments!A2:A" & lastRow

    ' Default value for date field
    txtDate.Value = Format(Now(), "dd/mm/yyyy")
End Sub
\`\`\`

## Launching a UserForm from a Worksheet Button

\`\`\`vba
Sub ShowEmployeeForm()
    frmEmployee.Show
End Sub
\`\`\`

## Professional Tips

\`\`\`vba
' Open the form centered on screen
Private Sub UserForm_Initialize()
    Me.StartUpPosition = 2  ' Center Screen
End Sub

' Prevent closing the form with the X button
Private Sub UserForm_QueryClose(Cancel As Integer, CloseMode As Integer)
    If CloseMode = vbFormControlMenu Then
        Cancel = True
        MsgBox "Please use the Cancel button"
    End If
End Sub
\`\`\`

> 💡 UserForms are superior to direct cell entry because they allow data validation before anything is saved to the sheet.`,
    exercises: [
      {
        id: 80,
        type: 'mcq',
        question: 'ما الحدث الذي يُنفَّذ عند فتح UserForm لأول مرة؟',
        questionEn: 'Which event fires when a UserForm is first opened?',
        hint: 'يستخدم لتحميل البيانات الافتراضية والقوائم',
        hintEn: 'Used to load default data and populate lists',
        options: ['UserForm_Open', 'UserForm_Load', 'UserForm_Initialize', 'UserForm_Start'],
        optionsEn: ['UserForm_Open', 'UserForm_Load', 'UserForm_Initialize', 'UserForm_Start'],
        correctIndex: 2,
      },
      {
        id: 81,
        type: 'mcq',
        question: 'ما الكود الصحيح لإغلاق UserForm؟',
        questionEn: 'What is the correct code to close and unload a UserForm?',
        hint: 'يُزيل النموذج من الذاكرة',
        hintEn: 'Removes the form from memory entirely',
        options: ['Me.Close', 'UserForm.Exit', 'Unload Me', 'Me.Hide'],
        optionsEn: ['Me.Close', 'UserForm.Exit', 'Unload Me', 'Me.Hide'],
        correctIndex: 2,
      },
      {
        id: 82,
        type: 'mcq',
        question: 'أيٌّ من أدوات Toolbox مناسب لقائمة اختيار منسدلة؟',
        questionEn: 'Which Toolbox control is appropriate for a dropdown selection list?',
        hint: 'تريد عرض خيارات ويختار المستخدم واحداً منها',
        hintEn: 'You want to display a list of options for the user to pick one from',
        options: ['TextBox', 'Label', 'ComboBox', 'CheckBox'],
        optionsEn: ['TextBox', 'Label', 'ComboBox', 'CheckBox'],
        correctIndex: 2,
      }
    ]
  },

  {
    id: 66,
    title: 'VBA — Custom Functions (UDFs)',
    titleEn: 'VBA — Custom Functions (UDFs)',
    description: 'بناء دوال Excel مخصصة بـ VBA تستخدمها مثل SUM وVLOOKUP تماماً',
    descriptionEn: 'Build custom Excel functions with VBA that you use just like SUM and VLOOKUP',
    type: 'code',
    codeLang: 'vba',
    content: `## إيه هي UDF؟

اسمها UDF، وهو اختصار لـ User Defined Function — يعني دالة بتكتبها أنت بـ VBA وبتستخدمها في خلايا Excel زي أي دالة عادية:
\`\`\`excel
=MyFunction(A1, B1)
\`\`\`

## بناء أول UDF

\`\`\`vba
' دالة تحوّل الدرجة إلى تقدير
Function Grade(score As Double) As String
    If score >= 90 Then
        Grade = "ممتاز"
    ElseIf score >= 75 Then
        Grade = "جيد جداً"
    ElseIf score >= 60 Then
        Grade = "جيد"
    Else
        Grade = "راسب"
    End If
End Function
\`\`\`

الاستخدام في Excel:
\`\`\`excel
=Grade(85)   → "جيد جداً"
=Grade(A2)   → حسب قيمة A2
\`\`\`

## UDF تعمل على نطاق

\`\`\`vba
' تجمع فقط الخلايا الملوّنة
Function SumByColor(rngSum As Range, rngColor As Range) As Double
    Dim cell As Range
    Dim targetColor As Long
    targetColor = rngColor.Interior.Color

    For Each cell In rngSum
        If cell.Interior.Color = targetColor Then
            SumByColor = SumByColor + cell.Value
        End If
    Next cell
End Function
\`\`\`

الاستخدام:
\`\`\`excel
=SumByColor(A1:A20, C1)   ' يجمع الخلايا بنفس لون C1
\`\`\`

## UDF مع معاملات اختيارية

\`\`\`vba
Function TaxCalc(amount As Double, Optional taxRate As Double = 0.14) As Double
    TaxCalc = amount * taxRate
End Function
\`\`\`

\`\`\`excel
=TaxCalc(1000)       → 140  (يستخدم 14% الافتراضي)
=TaxCalc(1000, 0.1)  → 100  (يستخدم 10%)
\`\`\`

## UDF للنصوص العربية

\`\`\`vba
' دالة لعكس النص
Function ReverseText(txt As String) As String
    Dim i As Integer
    Dim result As String
    For i = Len(txt) To 1 Step -1
        result = result & Mid(txt, i, 1)
    Next i
    ReverseText = result
End Function

' دالة لاستخراج الأرقام من النص
Function ExtractNumbers(txt As String) As String
    Dim i As Integer
    Dim result As String
    For i = 1 To Len(txt)
        If Mid(txt, i, 1) >= "0" And Mid(txt, i, 1) <= "9" Then
            result = result & Mid(txt, i, 1)
        End If
    Next i
    ExtractNumbers = result
End Function
\`\`\`

## قواعد UDF

1. تبدأ بـ \`Function\` لا \`Sub\`
2. لا يمكنها تعديل خلايا أو تنسيقات (Read-Only)
3. يجب حفظ الملف بصيغة \`.xlsm\`
4. تظهر في Autocomplete مع باقي الدوال

## إضافة توثيق للدالة

\`\`\`vba
Function Grade(score As Double) As String
    ' وصف يظهر في Function Wizard
    Application.MacroOptions _
        Macro:="Grade", _
        Description:="تحوّل الدرجة الرقمية إلى تقدير نصي", _
        Category:="دوال مخصصة"
End Function
\`\`\`

> 💡 UDFs ممتازة لمنطق الأعمال المخصص — لكن تجنب استخدامها على نطاقات ضخمة لأنها أبطأ من الدوال المدمجة.`,
    contentEn: `## What is a UDF?

**User Defined Function** — a function you write in VBA and use in Excel cells exactly like any built-in function:
\`\`\`excel
=MyFunction(A1, B1)
\`\`\`

## Building Your First UDF

\`\`\`vba
' Function that converts a numeric score to a letter grade
Function Grade(score As Double) As String
    If score >= 90 Then
        Grade = "Excellent"
    ElseIf score >= 75 Then
        Grade = "Very Good"
    ElseIf score >= 60 Then
        Grade = "Good"
    Else
        Grade = "Fail"
    End If
End Function
\`\`\`

Usage in Excel:
\`\`\`excel
=Grade(85)   → "Very Good"
=Grade(A2)   → depends on the value in A2
\`\`\`

## UDF Operating on a Range

\`\`\`vba
' Sums only cells that match a given background color
Function SumByColor(rngSum As Range, rngColor As Range) As Double
    Dim cell As Range
    Dim targetColor As Long
    targetColor = rngColor.Interior.Color

    For Each cell In rngSum
        If cell.Interior.Color = targetColor Then
            SumByColor = SumByColor + cell.Value
        End If
    Next cell
End Function
\`\`\`

Usage:
\`\`\`excel
=SumByColor(A1:A20, C1)   ' Sums cells with the same color as C1
\`\`\`

## UDF with Optional Parameters

\`\`\`vba
Function TaxCalc(amount As Double, Optional taxRate As Double = 0.14) As Double
    TaxCalc = amount * taxRate
End Function
\`\`\`

\`\`\`excel
=TaxCalc(1000)       → 140  (uses default 14%)
=TaxCalc(1000, 0.1)  → 100  (uses 10%)
\`\`\`

## Text Utility UDFs

\`\`\`vba
' Function to reverse a string
Function ReverseText(txt As String) As String
    Dim i As Integer
    Dim result As String
    For i = Len(txt) To 1 Step -1
        result = result & Mid(txt, i, 1)
    Next i
    ReverseText = result
End Function

' Function to extract numeric digits from a string
Function ExtractNumbers(txt As String) As String
    Dim i As Integer
    Dim result As String
    For i = 1 To Len(txt)
        If Mid(txt, i, 1) >= "0" And Mid(txt, i, 1) <= "9" Then
            result = result & Mid(txt, i, 1)
        End If
    Next i
    ExtractNumbers = result
End Function
\`\`\`

## UDF Rules

1. Must begin with \`Function\`, not \`Sub\`
2. Cannot modify cells or apply formatting (effectively Read-Only)
3. The workbook must be saved as \`.xlsm\`
4. Appears in Excel's Autocomplete alongside built-in functions

## Adding Documentation to a UDF

\`\`\`vba
Function Grade(score As Double) As String
    ' Description shown in the Function Wizard
    Application.MacroOptions _
        Macro:="Grade", _
        Description:="Converts a numeric score to a text grade", _
        Category:="Custom Functions"
End Function
\`\`\`

> 💡 UDFs are excellent for custom business logic — but avoid using them on very large ranges as they are slower than built-in functions.`,
    exercises: [
      {
        id: 83,
        type: 'mcq',
        question: 'ما الفرق بين Sub وFunction في VBA؟',
        questionEn: 'What is the difference between Sub and Function in VBA?',
        hint: 'فكّر في القيمة المُرجَعة',
        hintEn: 'Think about whether a return value is involved',
        options: [
          'لا فرق — كلاهما متطابق',
          'Function تُرجع قيمة يمكن استخدامها في خلايا Excel، Sub لا تُرجع قيمة',
          'Sub أسرع في التنفيذ',
          'Function فقط للأرقام، Sub للنصوص'
        ],
        optionsEn: [
          'No difference — they are identical',
          'Function returns a value that can be used in Excel cells; Sub does not return a value',
          'Sub executes faster',
          'Function is only for numbers; Sub is for text'
        ],
        correctIndex: 1,
      },
      {
        id: 84,
        type: 'mcq',
        question: 'بأي امتداد يجب حفظ ملف Excel يحتوي UDFs؟',
        questionEn: 'What file extension must an Excel file containing UDFs be saved as?',
        hint: 'يجب أن يدعم الـ Macros',
        hintEn: 'The format must support Macros',
        options: ['.xlsx', '.xlsb', '.xlsm', '.xltx'],
        optionsEn: ['.xlsx', '.xlsb', '.xlsm', '.xltx'],
        correctIndex: 2,
      },
      {
        id: 85,
        type: 'mcq',
        question: 'ما قيود UDF في Excel VBA؟',
        questionEn: 'What are the limitations of a UDF in Excel VBA?',
        hint: 'هناك شيء لا تستطيع فعله',
        hintEn: 'There is something a UDF cannot do',
        options: [
          'لا تستطيع استقبال معاملات',
          'لا تستطيع تعديل خلايا أو تنسيقات في الورقة',
          'تعمل فقط على أعداد صحيحة',
          'لا تظهر في Autocomplete'
        ],
        optionsEn: [
          'Cannot accept parameters',
          'Cannot modify cells or apply formatting to the worksheet',
          'Only works with integers',
          'Does not appear in Autocomplete'
        ],
        correctIndex: 1,
      }
    ]
  },
];

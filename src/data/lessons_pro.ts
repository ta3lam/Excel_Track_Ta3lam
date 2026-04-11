import { Lesson } from '../types';

export const lessonsPro: Lesson[] = [
  {
    id: 61,
    title: 'مقدمة VBA',
    description: 'أتمتة المهام المتكررة وبناء أدوات Excel مخصصة بـ VBA',
    type: 'concept',
    content: `## إيه هو VBA؟

VBA = Visual Basic for Applications
لغة برمجة مدمجة في Excel بتخليك:
- تشغّل مهام متكررة بضغطة زرار
- تبني نماذج وأدوات مخصصة
- تتحكم في Excel برمجياً

## متى تستخدم VBA؟

✅ مهام متكررة يومياً تاخد وقت
✅ تنسيق تقارير بشكل موحد تلقائياً
✅ نماذج (Forms) لإدخال البيانات
✅ أتمتة عمليات معقدة

❌ مش محتاجه لو Power Query أو الصيغ تكفي

## فتح محرر VBA

**Alt + F11** لفتح Visual Basic Editor (VBE)

الواجهة:
\`\`\`
┌─────────────┬─────────────────────┐
│ Project     │                     │
│ Explorer    │    Code Window      │
│             │   (هنا تكتب كودك)  │
├─────────────┤                     │
│ Properties  │                     │
└─────────────┴─────────────────────┘
\`\`\`

## تسجيل Macro — البداية السهلة

1. View → Macros → Record Macro
2. افعل ما تريد أتمتته
3. View → Macros → Stop Recording
4. شوف الكود المسجّل (Alt + F11)

## حفظ الملف

ملفات VBA لازم تتحفظ كـ **.xlsm** (Excel Macro-Enabled Workbook)

> ⚠️ **أمان:** فعّل الـ Macros فقط من ملفات تثق بها.`,
    exercises: [
      {
        id: 58,
        type: 'mcq',
        question: 'ما الاختصار لفتح Visual Basic Editor في Excel؟',
        hint: 'اختصار من حرفين',
        options: ['Ctrl + F11', 'Alt + F11', 'Ctrl + Alt + V', 'F12'],
        correctIndex: 1,
      },
      {
        id: 59,
        type: 'mcq',
        question: 'ما امتداد ملف Excel اللي يحتوي Macros؟',
        hint: 'مختلف عن .xlsx',
        options: ['.xlsb', '.xlsm', '.xlsx', '.xlvba'],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 62,
    title: 'VBA — أساسيات الكود',
    description: 'المتغيرات والشروط والحلقات في VBA بأمثلة عملية',
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
        hint: 'الكلمة المحجوزة لتعريف المتغيرات في VBA',
        options: [
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
        hint: 'كلاهما يشير لنفس الخلية لكن بطريقتين',
        options: [
          'Range أسرع وCells أبطأ',
          'كلاهما يشير لنفس الخلية B2 — Range بالاسم، Cells بأرقام الصف والعمود',
          'Range للقراءة فقط وCells للكتابة',
          'لا فرق بينهما على الإطلاق'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 63,
    title: 'VBA — الحلقات المتقدمة والأحداث',
    description: 'For Each و Do While والـ Events اللي بتشغّل كودك تلقائياً',
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
        hint: 'فكّر في الأشياء اللي ممكن تتكرر عليها',
        options: [
          'For Each أسرع دايماً',
          'For Each بيتكرر على مجموعة من العناصر (خلايا، أوراق...) بدون الحاجة لمعرفة العدد',
          'For Each مخصص للأرقام فقط',
          'لا فرق بينهما'
        ],
        correctIndex: 1,
      },
      {
        id: 63,
        type: 'mcq',
        question: 'في أي Module تكتب كود الـ Worksheet Events مثل Worksheet_Change؟',
        hint: 'مش في Module عادي',
        options: [
          'في Module عادي (Module1)',
          'في كود الورقة نفسها (Sheet module) مش في Module عادي',
          'في ThisWorkbook',
          'في أي module — المكان مش مهم'
        ],
        correctIndex: 1,
      }
    ]
  },

  {
    id: 64,
    title: 'مسارات الشهادات',
    description: 'احتراف Excel رسمياً — شهادات Microsoft وPower BI لتقوية ملفك المهني',
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
    exercises: [
      {
        id: 64,
        type: 'mcq',
        question: 'ما المتطلب الأساسي للتسجيل لامتحان PL-300 Power BI؟',
        hint: 'فكّر في ما تتعلمه في هذه الدورة',
        options: [
          'Python وSQL فقط',
          'إتقان Excel المتقدم وDAX وفهم Data Modeling',
          'خبرة في Java أو C#',
          'لا توجد متطلبات'
        ],
        correctIndex: 1,
      },
      {
        id: 65,
        type: 'mcq',
        question: 'ما الفرق بين MO-210 وMO-211؟',
        hint: 'فكّر في المستوى',
        options: [
          'لا فرق — نفس الشهادة باسمين',
          'MO-210 للمستوى الأساسي والمتوسط، MO-211 للمستوى المتقدم والخبير',
          'MO-210 لـ Windows وMO-211 لـ Mac',
          'MO-211 أقدم إصدار'
        ],
        correctIndex: 1,
      }
    ]
  },
];

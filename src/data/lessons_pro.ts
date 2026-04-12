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

  {
    id: 65,
    title: 'VBA — UserForms وواجهات المستخدم',
    description: 'بناء نماذج إدخال احترافية بـ UserForm لجمع البيانات بشكل آمن وسهل',
    type: 'code',
    codeLang: 'vba',
    content: `## ما هو UserForm؟

UserForm هو نافذة مخصصة تبنيها بنفسك بداخل Excel — مثل نموذج إدخال بيانات احترافي.

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
    exercises: [
      {
        id: 80,
        type: 'mcq',
        question: 'ما الحدث الذي يُنفَّذ عند فتح UserForm لأول مرة؟',
        hint: 'يستخدم لتحميل البيانات الافتراضية والقوائم',
        options: ['UserForm_Open', 'UserForm_Load', 'UserForm_Initialize', 'UserForm_Start'],
        correctIndex: 2,
      },
      {
        id: 81,
        type: 'mcq',
        question: 'ما الكود الصحيح لإغلاق UserForm؟',
        hint: 'يُزيل النموذج من الذاكرة',
        options: ['Me.Close', 'UserForm.Exit', 'Unload Me', 'Me.Hide'],
        correctIndex: 2,
      },
      {
        id: 82,
        type: 'mcq',
        question: 'أيٌّ من أدوات Toolbox مناسب لقائمة اختيار منسدلة؟',
        hint: 'تريد عرض خيارات ويختار المستخدم واحداً منها',
        options: ['TextBox', 'Label', 'ComboBox', 'CheckBox'],
        correctIndex: 2,
      }
    ]
  },

  {
    id: 66,
    title: 'VBA — Custom Functions (UDFs)',
    description: 'بناء دوال Excel مخصصة بـ VBA تستخدمها مثل SUM وVLOOKUP تماماً',
    type: 'code',
    codeLang: 'vba',
    content: `## ما هي UDF؟

**User Defined Function** — دالة تكتبها أنت بـ VBA وتستخدمها في خلايا Excel مثل أي دالة عادية:
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
    exercises: [
      {
        id: 83,
        type: 'mcq',
        question: 'ما الفرق بين Sub وFunction في VBA؟',
        hint: 'فكّر في القيمة المُرجَعة',
        options: [
          'لا فرق — كلاهما متطابق',
          'Function تُرجع قيمة يمكن استخدامها في خلايا Excel، Sub لا تُرجع قيمة',
          'Sub أسرع في التنفيذ',
          'Function فقط للأرقام، Sub للنصوص'
        ],
        correctIndex: 1,
      },
      {
        id: 84,
        type: 'mcq',
        question: 'بأي امتداد يجب حفظ ملف Excel يحتوي UDFs؟',
        hint: 'يجب أن يدعم الـ Macros',
        options: ['.xlsx', '.xlsb', '.xlsm', '.xltx'],
        correctIndex: 2,
      },
      {
        id: 85,
        type: 'mcq',
        question: 'ما قيود UDF في Excel VBA؟',
        hint: 'هناك شيء لا تستطيع فعله',
        options: [
          'لا تستطيع استقبال معاملات',
          'لا تستطيع تعديل خلايا أو تنسيقات في الورقة',
          'تعمل فقط على أعداد صحيحة',
          'لا تظهر في Autocomplete'
        ],
        correctIndex: 1,
      }
    ]
  },
];

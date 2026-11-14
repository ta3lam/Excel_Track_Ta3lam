import { Lesson, LevelSection } from '../../types';
import { buildCase, CaseFn, CaseSpec } from './buildCase';
import { fieldCaseSpecs } from './casesField';
import { opsCaseSpecs } from './casesOps';
import { peopleCaseSpecs } from './casesPeople';
import { salesCaseSpecs } from './casesSales';

export const businessCaseSpecs: CaseSpec[] = [
  ...salesCaseSpecs,
  ...opsCaseSpecs,
  ...peopleCaseSpecs,
  ...fieldCaseSpecs,
];

export const businessCaseLessons: Lesson[] = businessCaseSpecs.map(buildCase);

const SECTION_META: { id: CaseFn; label: string; labelEn: string }[] = [
  { id: 'sales', label: 'المبيعات والعمولات', labelEn: 'Sales & commissions' },
  { id: 'retail', label: 'التجزئة والمخزون', labelEn: 'Retail & inventory' },
  { id: 'finance', label: 'المالية والموازنة', labelEn: 'Finance & budget' },
  { id: 'hr', label: 'الموارد البشرية', labelEn: 'HR' },
  { id: 'procurement', label: 'المشتريات', labelEn: 'Procurement' },
  { id: 'service', label: 'خدمة العملاء', labelEn: 'Customer service' },
  { id: 'marketing', label: 'التسويق', labelEn: 'Marketing' },
  { id: 'logistics', label: 'التوصيل واللوجستيات', labelEn: 'Logistics' },
  { id: 'banking', label: 'التمويل والقروض', labelEn: 'Banking & loans' },
  { id: 'telecom', label: 'تسرب عملاء الاتصالات', labelEn: 'Telecom churn' },
];

export const businessCaseSections: LevelSection[] = SECTION_META.map(section => ({
  id: section.id,
  label: section.label,
  labelEn: section.labelEn,
  lessonIds: businessCaseSpecs.filter(spec => spec.fn === section.id).map(spec => spec.id),
}));

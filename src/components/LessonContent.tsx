import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Lesson } from '../types';
import { ReactNode, useState, useCallback } from 'react';
import { LEVEL_GROUPS, LEVEL_COLORS } from '../data/lessons';
import { useAppContext } from '../contexts/AppContext';
import { renderBidi } from '../utils/bidi';

function CodeBlock({ code, lang }: { code: string; lang?: string }) {
  const { t } = useAppContext();
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  const langLabel =
    lang === 'dax'   ? 'DAX' :
    lang === 'm'     ? 'M Language' :
    lang === 'vba'   ? 'VBA' :
    lang === 'excel' ? 'Excel' :
    lang?.toUpperCase() || 'CODE';

  return (
    <div className="my-3 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 relative group" dir="ltr">
      <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1.5 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
        <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{langLabel}</span>
        <button
          onClick={handleCopy}
          className="text-xs px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors"
        >
          {copied ? t.copied : t.copy}
        </button>
      </div>
      <pre className="bg-gray-900 p-4 overflow-x-auto text-sm">
        <code className="text-gray-100 font-mono text-xs leading-relaxed">{code.trim()}</code>
      </pre>
    </div>
  );
}

interface LessonContentProps { lesson: Lesson }

export function LessonContent({ lesson }: LessonContentProps) {
  const { lang } = useAppContext();
  const isEn = lang === 'en';
  const group  = LEVEL_GROUPS.find(g => g.lessonIds.includes(lesson.id));
  const colors = group ? LEVEL_COLORS[group.color] : LEVEL_COLORS['slate'];
  const levelLabel = group ? (isEn ? group.labelSub : group.label) : '';
  const title       = (isEn && lesson.titleEn)       ? lesson.titleEn       : lesson.title;
  const description = (isEn && lesson.descriptionEn) ? lesson.descriptionEn : lesson.description;
  const content     = (isEn && lesson.contentEn)     ? lesson.contentEn     : lesson.content;
  const contentDir  = isEn ? 'ltr' : 'rtl';
  const bidi = (children?: ReactNode) => (isEn ? children : renderBidi(children));

  return (
    <div className="space-y-0">
      {/* Header */}
      <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 mb-0 border border-gray-200 dark:border-gray-700/50 shadow-sm`} dir={contentDir}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {group && (
              <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3 ${colors.badge}`}>
                {levelLabel}
              </span>
            )}
            {lesson.tags && lesson.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {lesson.tags.map(tag => (
                  <span key={tag.label} className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    {isEn && tag.labelEn ? tag.labelEn : tag.label}
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{bidi(title)}</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{bidi(description)}</p>
            {lesson.resources && lesson.resources.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {lesson.resources.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    {isEn && link.labelEn ? link.labelEn : link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold border ${colors.border} ${colors.text}`}>
            {lesson.type === 'formula' ? 'fx' : lesson.type === 'code' ? '</>' : '📖'}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`bg-gray-50 dark:bg-gray-800/50 rounded-xl rounded-t-none border border-gray-200 dark:border-gray-700/50 border-t-0 p-5`} dir={contentDir}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }: { children?: ReactNode }) => (
              <h2 className="text-base font-bold text-gray-900 dark:text-white mt-6 mb-3 flex items-center gap-2 first:mt-0">
                <span className="w-1 h-4 bg-emerald-500 rounded-full flex-shrink-0" />
                {bidi(children)}
              </h2>
            ),
            h3: ({ children }: { children?: ReactNode }) => (
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mt-4 mb-2">{bidi(children)}</h3>
            ),
            p: ({ children }: { children?: ReactNode }) => (
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">{bidi(children)}</p>
            ),
            code: ({ className, children }: { className?: string; children?: ReactNode }) => {
              const match = /language-(\w+)/.exec(className || '');
              if (match) return <CodeBlock code={String(children ?? '')} lang={match[1]} />;
              return (
                <code className="bg-gray-200 dark:bg-gray-700 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded text-xs font-mono" dir="ltr">
                  {children}
                </code>
              );
            },
            pre: ({ children }: { children?: ReactNode }) => <>{children}</>,
            ul: ({ children }: { children?: ReactNode }) => (
              <ul className="list-disc list-outside me-5 space-y-1.5 text-gray-600 dark:text-gray-300 text-sm mb-3">{children}</ul>
            ),
            ol: ({ children }: { children?: ReactNode }) => (
              <ol className="list-decimal list-outside me-5 space-y-1.5 text-gray-600 dark:text-gray-300 text-sm mb-3">{children}</ol>
            ),
            li: ({ children }: { children?: ReactNode }) => (
              <li className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{bidi(children)}</li>
            ),
            table: ({ children }: { children?: ReactNode }) => (
              <div className="overflow-x-auto my-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <table className="min-w-full text-sm" dir="auto">{children}</table>
              </div>
            ),
            thead: ({ children }: { children?: ReactNode }) => (
              <thead className="bg-gray-100 dark:bg-gray-700/50">{children}</thead>
            ),
            tbody: ({ children }: { children?: ReactNode }) => (
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700/50">{children}</tbody>
            ),
            tr: ({ children }: { children?: ReactNode }) => (
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/20 transition-colors">{children}</tr>
            ),
            th: ({ children }: { children?: ReactNode }) => (
              <th className="px-3 py-2 text-start text-xs font-semibold text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600 whitespace-nowrap">
                {bidi(children)}
              </th>
            ),
            td: ({ children }: { children?: ReactNode }) => (
              <td className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200/50 dark:border-gray-700/50">{bidi(children)}</td>
            ),
            strong: ({ children }: { children?: ReactNode }) => (
              <strong className="font-semibold text-gray-800 dark:text-gray-100">{bidi(children)}</strong>
            ),
            blockquote: ({ children }: { children?: ReactNode }) => (
              <blockquote className="border-s-4 border-emerald-500 ps-4 my-3 bg-emerald-500/5 py-2 pe-3 rounded-e-lg text-emerald-700 dark:text-emerald-200 text-sm">
                {bidi(children)}
              </blockquote>
            ),
            hr: () => <hr className="border-gray-200 dark:border-gray-700 my-5" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

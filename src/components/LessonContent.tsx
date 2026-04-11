import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Lesson } from '../types';
import { ReactNode, useState, useCallback } from 'react';
import { LEVEL_GROUPS, LEVEL_COLORS } from '../data/lessons';

interface LessonContentProps {
  lesson: Lesson;
}

function CodeBlock({ code, lang }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  const langLabel = lang === 'dax' ? 'DAX' : lang === 'm' ? 'M Language' : lang === 'vba' ? 'VBA' : lang === 'excel' ? 'Excel' : lang?.toUpperCase() || 'CODE';

  return (
    <div className="my-3 rounded-lg overflow-hidden border border-gray-700 relative group" dir="ltr">
      <div className="bg-gray-800 px-3 py-1.5 flex items-center justify-between border-b border-gray-700">
        <span className="text-xs font-mono text-gray-400">{langLabel}</span>
        <button
          onClick={handleCopy}
          className="text-xs px-2 py-0.5 rounded bg-gray-700 hover:bg-gray-600 text-gray-300 transition-colors"
        >
          {copied ? '✓ تم النسخ' : 'نسخ'}
        </button>
      </div>
      <pre className="bg-gray-900 p-4 overflow-x-auto text-sm">
        <code className="text-gray-100 font-mono text-xs leading-relaxed">{code.trim()}</code>
      </pre>
    </div>
  );
}

export function LessonContent({ lesson }: LessonContentProps) {
  // Find level group for badge
  const group = LEVEL_GROUPS.find(g => g.lessonIds.includes(lesson.id));
  const colors = group ? LEVEL_COLORS[group.color] : LEVEL_COLORS['slate'];

  return (
    <div className="space-y-0">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-850 rounded-2xl p-6 mb-0 border border-gray-700/50">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {group && (
              <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3 ${colors.badge}`}>
                {group.label} · {group.labelSub}
              </span>
            )}
            <h1 className="text-xl font-bold text-white mb-2">{lesson.title}</h1>
            <p className="text-gray-400 text-sm leading-relaxed">{lesson.description}</p>
          </div>
          <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold border ${colors.border} ${colors.text}`}>
            {lesson.type === 'formula' ? 'fx' : lesson.type === 'code' ? '</>' : '📖'}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-gray-800/50 rounded-xl rounded-t-none border border-gray-700/50 border-t-0 p-5">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }: { children?: ReactNode }) => (
              <h2 className="text-base font-bold text-white mt-6 mb-3 flex items-center gap-2 first:mt-0">
                <span className="w-1 h-4 bg-emerald-500 rounded-full flex-shrink-0" />
                {children}
              </h2>
            ),
            h3: ({ children }: { children?: ReactNode }) => (
              <h3 className="text-sm font-semibold text-gray-200 mt-4 mb-2">{children}</h3>
            ),
            p: ({ children }: { children?: ReactNode }) => (
              <p className="text-gray-300 text-sm leading-relaxed mb-3">{children}</p>
            ),
            code: ({ className, children }: { className?: string; children?: ReactNode }) => {
              const match = /language-(\w+)/.exec(className || '');
              if (match) {
                return <CodeBlock code={String(children ?? '')} lang={match[1]} />;
              }
              return (
                <code className="bg-gray-700 text-emerald-300 px-1.5 py-0.5 rounded text-xs font-mono" dir="ltr">
                  {children}
                </code>
              );
            },
            pre: ({ children }: { children?: ReactNode }) => <>{children}</>,
            ul: ({ children }: { children?: ReactNode }) => (
              <ul className="list-disc list-outside mr-5 space-y-1.5 text-gray-300 text-sm mb-3">{children}</ul>
            ),
            ol: ({ children }: { children?: ReactNode }) => (
              <ol className="list-decimal list-outside mr-5 space-y-1.5 text-gray-300 text-sm mb-3">{children}</ol>
            ),
            li: ({ children }: { children?: ReactNode }) => (
              <li className="text-gray-300 text-sm leading-relaxed">{children}</li>
            ),
            table: ({ children }: { children?: ReactNode }) => (
              <div className="overflow-x-auto my-4 rounded-lg border border-gray-700">
                <table className="min-w-full text-sm" dir="auto">{children}</table>
              </div>
            ),
            thead: ({ children }: { children?: ReactNode }) => (
              <thead className="bg-gray-700/50">{children}</thead>
            ),
            tbody: ({ children }: { children?: ReactNode }) => (
              <tbody className="divide-y divide-gray-700/50">{children}</tbody>
            ),
            tr: ({ children }: { children?: ReactNode }) => (
              <tr className="hover:bg-gray-700/20 transition-colors">{children}</tr>
            ),
            th: ({ children }: { children?: ReactNode }) => (
              <th className="px-3 py-2 text-right text-xs font-semibold text-gray-300 border-b border-gray-600 whitespace-nowrap">
                {children}
              </th>
            ),
            td: ({ children }: { children?: ReactNode }) => (
              <td className="px-3 py-2 text-sm text-gray-300 border-b border-gray-700/50">{children}</td>
            ),
            strong: ({ children }: { children?: ReactNode }) => (
              <strong className="font-semibold text-gray-100">{children}</strong>
            ),
            blockquote: ({ children }: { children?: ReactNode }) => (
              <blockquote className="border-r-4 border-emerald-500 pr-4 my-3 bg-emerald-500/5 py-2 pl-3 rounded-l-lg text-emerald-200 text-sm">
                {children}
              </blockquote>
            ),
            hr: () => <hr className="border-gray-700 my-5" />,
          }}
        >
          {lesson.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

import { Children, Fragment, ReactNode } from 'react';

const LATIN = /([A-Za-z][A-Za-z0-9.+#_/:%-]*)/g;

/** Keep English tokens in their own direction so Arabic sentences stay readable. */
export function renderBidi(children: ReactNode): ReactNode {
  return Children.map(children, (child, index) => {
    if (typeof child !== 'string') return child;
    const parts = child.split(LATIN);
    if (parts.length === 1) return child;
    return (
      <Fragment key={index}>
        {parts.map((part, partIndex) =>
          partIndex % 2 === 1 ? (
            <bdi key={`${index}-${partIndex}`} dir="ltr">{part}</bdi>
          ) : (
            part
          ),
        )}
      </Fragment>
    );
  });
}

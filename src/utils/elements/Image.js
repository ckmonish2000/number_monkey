import React from 'react';

export default function Image({ src, className, id, alt }) {
  return src ? <img
    alt={alt}
    id={id}
    className={className}
    src={`data:image/svg+xml;utf8,${encodeURIComponent(src)}`} /> : null;
}

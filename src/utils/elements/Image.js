import React from 'react';

export default function Image({ src, className, id, alt, onClick = null }) {
  return src ? <img
    alt={alt}
    id={id}
    className={className}
    onClick={onClick}
    src={`data:image/svg+xml;utf8,${encodeURIComponent(src)}`} /> : null;
}

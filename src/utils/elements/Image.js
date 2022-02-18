import React from 'react';

export default function Image({ src, className, id, alt, onClick = null, style = {} }) {
  return src ? <img
    alt={alt}
    id={id}
    className={className}
    onClick={onClick}
    style={style}
    src={`data:image/svg+xml;utf8,${encodeURIComponent(src)}`} /> : null;
}

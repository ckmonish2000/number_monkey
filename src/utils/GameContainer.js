import { useEffect, useState } from 'react';

export default function GameContainer({ children }) {
  const ratio = 16 / 9
  const [width, setwidth] = useState(window.innerWidth);
  const [height, setheight] = useState(width / ratio);

  useEffect(() => {
    window.addEventListener("resize", () => onResize())

    return () => {
      window.removeEventListener("resize", () => onResize())
    }
  }, [])

  useEffect(() => {
    if (height > window.innerHeight) {
      setheight(window.innerHeight)
      setwidth(window.innerHeight * ratio)
    }
  }, [height])

  const onResize = () => {
    setwidth(window.innerWidth)
    setheight(window.innerWidth / ratio)
  }


  return <div styles={{ height: `${height}px`, width: `${width}px` }}>
    {children}
  </div>;
}

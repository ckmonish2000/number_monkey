import { useEffect, useState } from 'react';

export default function GameContainer({ children }) {
  const ratio = 16 / 9
  const [width, setwidth] = useState(window.innerWidth);
  const [height, setheight] = useState(width / ratio);

  const onResize = () => {
    setwidth(window.innerWidth)
    setheight(window.innerWidth / ratio)
  }

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
  }, [height, ratio])



  const styles = { height: `${height}px`, width: `${width}px`, position: "fixed", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }

  return <div className="GameContainer" style={styles}>
    {children}
  </div>;
}

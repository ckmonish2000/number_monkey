import { useEffect, useState } from 'react';

export default function GameContainer({ children }) {
  const [scale, setscale] = useState(window.innerWidth * 0.65 / 1000);

  useEffect(() => {
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const onResize = () => {
    const scale = (window.innerWidth * 0.65 / 1000)
    setscale(scale)
  }




  return <div className="vendorWrapper">
    <div className="playHold" style={{
      position: "absolute",
      width: "1920px",
      height: "900px",
      transformOrigin: "210px 900px",
      left: "-210px",
      bottom: "0px",
      transform: `scale(${scale})`
    }}>
      {children}
    </div>
  </div>
    ;
}

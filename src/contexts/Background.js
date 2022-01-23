import { createContext, useState } from "react"



export const BGContext = createContext();


export default function BackgroundProvider({ children }) {
  const [Bg, setBg] = useState({ scene1: "" })

  return (
    <BGContext.Provider value={{ Bg, setBg }} >
      {children}
    </BGContext.Provider>


  )
}

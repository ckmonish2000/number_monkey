import { createContext, useState } from "react"


export const SelectorContext = createContext();

export default function SelectorContextProvider({ children }) {
  const [Selector, setSelector] = useState([])

  return (
    <SelectorContext.Provider value={{ Selector, setSelector }}>
      {children}
    </SelectorContext.Provider>
  )
}

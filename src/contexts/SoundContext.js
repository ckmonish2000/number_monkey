import { createContext, useState } from "react"


export const SoundContext = createContext()

export default function SoundContextProvider({ children }) {
  const [Sound, setSound] = useState(null)

  return <SoundContext.Provider value={{ Sound, setSound }}>
    {children}
  </SoundContext.Provider>
}


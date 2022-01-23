import { createContext, useState, useEffect } from "react"


export const SceneContext = createContext();

export default function SceneContextProvider({ children }) {
  const [SceneId, setSceneId] = useState("/")
  const [isLoading, setisLoading] = useState(true)
  const [Stripes, setStripes] = useState({})
  const [StripeSound, setStripeSound] = useState({})

  useEffect(() => {

    setTimeout(() => {
      setisLoading(false)
    }, 3500)

  }, [isLoading])

  return (
    <SceneContext.Provider value={{ SceneId, setSceneId, isLoading, setisLoading, Stripes, setStripes, StripeSound, setStripeSound }}>
      {children}
    </SceneContext.Provider>
  )
}

import { createContext, useState, useEffect } from "react"


export const SceneContext = createContext();

export default function SceneContextProvider({ children }) {
  const [SceneId, setSceneId] = useState("/home")
  const [isLoading, setisLoading] = useState(true)
  // state to manage sounds and images for each scene
  const [Assets, setAssets] = useState({})
  const [Ipad, setIpad] = useState(false)
  const [LandScape, setLandScape] = useState(false)
  const [count, setcount] = useState(0)
  const [starCount, setstarCount] = useState(1)

  // loading part
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 3500)

  }, [isLoading])

  return (
    <SceneContext.Provider value={{ starCount, setstarCount, count, setcount, SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, Ipad, setIpad, LandScape, setLandScape }}>
      {children}
    </SceneContext.Provider>
  )
}

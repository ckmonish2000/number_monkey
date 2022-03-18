import { useContext, useEffect, useState, Fragment } from 'react'
import { SceneContext } from '../contexts/SceneContext'
// import "../styles/Scenes.css"
// import apple from "./apple.svg"

export default function Scenes({ sprites, Bg = "" }) {
  const { setSceneId, setisLoading, isLoading } = useContext(SceneContext)


  return (
    <div id="vision">
      {Bg !== "" && <img
        className="Bg_Image"
        id="vision"
        alt="background"
        src={`data:image/svg+xml;utf8,${encodeURIComponent(Bg)}`} />}

      {isLoading && <div className="isloading">
      </div>}
      {sprites}
    </div>
  )
}

import { useContext, useEffect, useState, Fragment } from 'react'
import { SceneContext } from '../contexts/SceneContext'
import "../styles/Scenes.css"
import apple from "./Apple.svg"

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
        <img alt="" src={apple} className="applelogo" />
      </div>}
      {sprites}
    </div>
  )
}

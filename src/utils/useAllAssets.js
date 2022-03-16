import { useState, useContext, useEffect } from 'react'
import { BGContext } from '../contexts/Background'
import { SoundContext } from '../contexts/SoundContext'
import { SceneContext } from "../contexts/SceneContext"
import { LoadImage } from '../utils/loadImage'
import { AudioPlayer } from './loadAudio'
import { LoadJson } from "./loadJson"

export default function useAllAsset(ArrayMap) {
  const [Loading, setLoading] = useState(true)
  // const [mainAudio, setmainAudio] = useState({})
  const { Bg, setBg } = useContext(BGContext)
  const { Sound, setSound } = useContext(SoundContext)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext)



  useEffect(() => {

    const Assetz = {}
    ArrayMap?.forEach(Map => {
      console.log(Map.id)
      const newSceneData = {
        sounds: [],
        Bg: "",
        sprites: []
      }

      const loadImage = new Promise((resolve, reject) => {
        LoadImage(Map.Bg)
          .then(v => {
            // setBg(v)
            newSceneData["Bg"] = v
            resolve(v)
          })
          .catch(err => {
            reject("unable to loadImage")
          })
      })

      const loadAudio = Promise.all(Map.sounds.map(v => {
        return AudioPlayer(v)
      }))

      loadAudio
        .then(v => { newSceneData["sounds"] = v })
        .catch(err => { console.log(err) })

      const loadSprites = Promise.all(Map.sprites.map(v => {
        return LoadImage(v)
      }))

      loadSprites
        .then(v => { newSceneData["sprites"] = v })
        .catch(err => { console.log(err) })



      const loadLottie = Promise.all(Map.lottie.map(v => {
        return LoadJson(v)
      }))

      loadLottie
        .then(v => { newSceneData["lottie"] = v })
        .catch(err => { console.log(err) })

      // setAssets({ ...Assets, [Map.id]: newSceneData })
      Assetz[Map?.id] = newSceneData
      // Promise.all([loadImage, loadAudio, loadSprites, loadLottie])
      //   .then(v => {
      //     // console.log(v)
      //     setLoading(false)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })

    })
    setAssets(Assetz)
    setLoading(false)

  }, [])


  return { Loading, Bg }

}
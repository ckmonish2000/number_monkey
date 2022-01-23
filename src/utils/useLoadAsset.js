import { useState, useContext, useEffect } from 'react'
import { BGContext } from '../contexts/Background'
import { SoundContext } from '../contexts/SoundContext'
import { SceneContext } from "../contexts/SceneContext"
import { LoadImage } from '../utils/loadImage'
import { AudioPlayer } from './loadAudio'

export default function useLoadAsset(Map) {
  const [Loading, setLoading] = useState(true)
  // const [mainAudio, setmainAudio] = useState({})
  const { Bg, setBg } = useContext(BGContext)
  const { Sound, setSound } = useContext(SoundContext)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext)



  useEffect(() => {
    const newSceneData = {
      sounds: ["xyz"],
      sprites: []
    }

    const loadImage = new Promise((resolve, reject) => {
      LoadImage(Map.Bg)
        .then(v => {
          setBg(v)
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

    setAssets({ ...Assets, [Map.id]: newSceneData })

    Promise.all([loadImage, loadAudio, loadSprites])
      .then(v => {
        // console.log(v)
        setisLoading(false)
      })
      .catch(err => {
        console.log(err)
      })

  }, [])



  // const LoadSound = async () => {
  //   const data = await AudioPlayer(main_audio_url)
  //   setSound(data)
  // }

  return { Loading, Bg }

}

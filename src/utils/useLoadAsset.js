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
  const { SceneId, setSceneId, isLoading, setisLoading, Stripes, setStripes, StripeSound, setStripeSound } = useContext(SceneContext)



  useEffect(() => {
    const newSceneData = {}

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


    // LoadSound()
    // setLoading(false)
  }, [])



  // const LoadSound = async () => {
  //   const data = await AudioPlayer(main_audio_url)
  //   setSound(data)
  // }

  return { Loading, Bg }

}

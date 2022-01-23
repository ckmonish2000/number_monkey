import { useState, useContext, useEffect } from 'react'
import { BGContext } from '../contexts/Background'
import { SoundContext } from '../contexts/SoundContext'
import { LoadImage } from '../utils/loadImage'
import { AudioPlayer } from './loadAudio'

export default function useLoadAsset(BG_url, main_audio_url) {
  const [Loading, setLoading] = useState(true)
  // const [mainAudio, setmainAudio] = useState({})
  const { Bg, setBg } = useContext(BGContext)
  const { Sound, setSound } = useContext(SoundContext)



  useEffect(() => {
    SetBackground()
    LoadSound()
    setLoading(false)
  }, [])

  const SetBackground = async () => {
    setBg(await LoadImage(BG_url))
  }

  const LoadSound = async () => {
    const data = await AudioPlayer(main_audio_url)
    setSound(data)
  }

  return { Loading, Bg }

}

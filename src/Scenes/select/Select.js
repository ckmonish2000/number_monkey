import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';
import "../../styles/monkey.css"
import SelectMap from './selectMap';
import { BGContext } from '../../contexts/Background';


export default function Select() {
  // const { Bg, Loading } = useLoadAsset(SelectMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { Bg, setBg } = useContext(BGContext)
  const [Sound, setSound] = useState(null)


  useEffect(() => {
    setBg(Assets?.select2?.Bg)
    if (Assets) {
      setSound(Assets?.select2?.sounds[0])
    }
  }, [Assets])

  useEffect(() => {
    if (Sound) {
      Sound?.play()
    }
  }, [Sound])


  const stop_all_sounds = () => {
    Assets?.select2?.sounds?.map(v => v.stop())
  }

  return <Scenes
    Bg={Bg}
    sprites={
      <>

        <div className="select_bg">.</div>
        <Image
          onClick={() => {
            stop_all_sounds()
            setSceneId("/frog")
          }}
          src={Assets?.select2?.sprites[0]} className="first_circle" />
        <Image
          onClick={() => {
            stop_all_sounds()
            setSceneId("/")
          }}
          src={Assets?.select2?.sprites[0]} className="second_circle" />

        <Image
          onClick={() => {
            stop_all_sounds()
            setSceneId("/frog")
          }}
          src={Assets?.select2?.sprites[1]} className="frog_selct_char" />
        <Image
          onClick={() => {
            stop_all_sounds()
            setSceneId("/")
          }}
          src={Assets?.select2?.sprites[2]} className="monkey_select_char" />


      </>
    }
  />;
}

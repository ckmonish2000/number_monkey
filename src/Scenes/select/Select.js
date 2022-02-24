import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';
import "../../styles/monkey.css"
import SelectMap from './selectMap';


export default function Select() {
  const { Bg, Loading } = useLoadAsset(SelectMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const [Sound, setSound] = useState(null)

  useEffect(() => {
    if (Assets && !Loading) {
      setSound(Assets?.select?.sounds[0])
    }
  }, [Assets, Loading])

  useEffect(() => {
    if (Sound) {
      Sound?.play()
    }
  }, [Sound])


  const stop_all_sounds = () => {
    Assets?.select?.sounds?.map(v => v.stop())
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
          src={Assets?.select?.sprites[0]} className="first_circle" />
        <Image
          onClick={() => {
            stop_all_sounds()
            setSceneId("/")
          }}
          src={Assets?.select?.sprites[0]} className="second_circle" />

        <Image
          onClick={() => {
            stop_all_sounds()
            setSceneId("/frog")
          }}
          src={Assets?.select?.sprites[1]} className="frog_selct_char" />
        <Image
          onClick={() => {
            stop_all_sounds()
            setSceneId("/")
          }}
          src={Assets?.select?.sprites[2]} className="monkey_select_char" />


      </>
    }
  />;
}

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

  return <Scenes
    Bg={Bg}
    sprites={
      <>

        <div className="select_bg">.</div>
        <Image
          onClick={() => { setSceneId("/frog") }}
          src={Assets?.select?.sprites[0]} className="first_circle" />
        <Image
          onClick={() => { setSceneId("/") }}
          src={Assets?.select?.sprites[0]} className="second_circle" />

        <Image
          onClick={() => { setSceneId("/frog") }}
          src={Assets?.select?.sprites[1]} className="frog_selct_char" />
        <Image
          onClick={() => { setSceneId("/") }}
          src={Assets?.select?.sprites[2]} className="monkey_select_char" />


      </>
    }
  />;
}

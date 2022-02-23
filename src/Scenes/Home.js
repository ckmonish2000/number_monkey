import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../contexts/SceneContext';
import Scenes from "../utils/Scenes"
import useLoadAsset from '../utils/useLoadAsset';
import "../styles/intro.css"
import Image from '../utils/elements/Image';
import "../styles/monkey.css"
import HomeMap from './HomeMap';


export default function Home() {
  const { Bg, Loading } = useLoadAsset(HomeMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);

  useEffect(() => {
    const BG_IMG = document.querySelector(".Bg_Image")
    BG_IMG.style.background = "#CDE4F2"
  }, [])


  return <Scenes
    Bg={Bg}
    sprites={
      <>

        <Image
          onClick={() => { setSceneId("/select") }}
          src={Assets?.select?.sprites[0]} className="play_butn" />

        {/* <div className="select_bg">.</div>
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
          src={Assets?.select?.sprites[2]} className="monkey_select_char" /> */}


      </>
    }
  />;
}

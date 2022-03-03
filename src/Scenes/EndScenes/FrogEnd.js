import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"
import lottie from "lottie-web"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';

import FrogEndMap from './frogEndMap';


export default function FrogEnd() {
  const { Bg, Loading } = useLoadAsset(FrogEndMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { frog } = Assets


  const Ref2 = useRef(null);
  const waterRef = useRef(null);
  const BigFrogRef = useRef(null);


  useEffect(() => {
    const bg = document.querySelector(".Bg_Image")

    bg.style.transform = "scale(1.6) translate(-23%, 0px)"
  }, [])


  // loading animation
  useEffect(() => {

    if (frog && Ref2.current && !Loading) {
      try {


        const ch2 = lottie.loadAnimation({
          name: "swing",
          container: Ref2.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: frog?.lottie[0],
        })



        const Bigfrog = lottie.loadAnimation({
          name: "swing",
          container: BigFrogRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: frog?.lottie[3],
        })

        // ch2.addEventListener('enterFrame', () => {
        //   if (Math.floor(ch2.currentFrame) === 33) {
        //     setswing(false)
        //     console.log("completed honey");
        //   }

        // })
      } catch (err) {
        console.log(err)
      }
    }

    if (Assets && !Loading) {
      Assets?.frog?.sounds[0]?.play()
    }
  }, [Assets, Loading])


  // useEffect(() => {
  //   if (count === 5) {
  //     stop_all_sounds()
  //     Assets?.frog?.sounds[2]?.play()
  //   }
  // }, [count])





  return <Scenes
    Bg={Bg}
    sprites={
      <>

        {/* <div ref={Ref} className='frog_start_jump'></div> */}
        <div
          style={{
            left: "49%",
            bottom: "21%",
            width: "22%"

          }}
          className='Big_frog'
          ref={BigFrogRef}></div>

        <div
          style={{
            position: "absolute",
            left: "44%",
            bottom: "26%",
            width: "10%"
          }}
          ref={Ref2} className={""}></div>

        <Image
          onClick={() => {
            const bg = document.querySelector(".Bg_Image")
            Assets?.frog?.sounds?.map(v => v.stop())
            bg.style.transform = ""
            setSceneId("/home")
          }}
          src={Assets?.frog?.sprites[0]} className="replayBtn" />
      </>
    }
  />;
}

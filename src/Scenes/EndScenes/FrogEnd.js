import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"
import lottie from "lottie-web"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';

import FrogEndMap from './frogEndMap';
import { BGContext } from '../../contexts/Background';


export default function FrogEnd({ stop }) {
  // const { Bg, Loading } = useLoadAsset(FrogEndMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { frog2 } = Assets
  const { Bg, setBg } = useContext(BGContext)

  const Ref2 = useRef(null);
  const waterRef = useRef(null);
  const BigFrogRef = useRef(null);


  useEffect(() => {
    const bg = document.querySelector(".Bg_Image")

    bg.style.transform = "scale(1.6) translate(-23%, 0px)"
  }, [])


  // loading animation
  useEffect(() => {

    if (frog2 && Ref2.current) {
      try {


        const ch2 = lottie.loadAnimation({
          name: "swing",
          container: Ref2.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: frog2?.lottie[1],
        })



        const Bigfrog = lottie.loadAnimation({
          name: "swing",
          container: BigFrogRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: frog2?.lottie[3],
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

    if (Assets) {
      const sound = Assets?.frog2?.sounds[0]
      sound?.play()
      sound?.on("end", () => { Assets?.frog2?.sounds[1]?.play() })
      Assets?.frog2?.sounds[2]?.play()
      // sound?.on("ended", () =>{
      //   Assets?.frog2?.sounds[0]?.play()
      // })

    }
  }, [Assets])


  // useEffect(() => {
  //   if (count === 5) {
  //     stop_all_sounds()
  //     Assets?.frog2?.sounds[2]?.play()
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
            // left: "44%",
            // bottom: "26%",
            // width: "10%"
            left: "33.5%",
            bottom: "20%",
            width: "22%"
          }}
          ref={Ref2} className={""}></div>

        <Image
          onClick={() => {
            const bg = document.querySelector(".Bg_Image")
            Assets?.frog2?.sounds?.map(v => v.stop())
            bg.style.transform = ""
            stop()
            setSceneId("/home")
          }}
          src={Assets?.frog2?.sprites[0]} className="replayBtn" />
      </>
    }
  />;
}

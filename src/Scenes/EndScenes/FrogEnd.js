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
  const { SceneId, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const { frog2 } = Assets
  const { Bg, setBg } = useContext(BGContext)
  const [IsLoading, setIsLoading] = useState(true);

  const Ref2 = useRef(null);
  const Ref22 = useRef(null);
  const BigFrogRef = useRef(null);


  useEffect(() => {
    setBg(Assets?.frog?.Bg)
    const bg = document.querySelector(".Bg_Image")
    bg.style.transform = "scale(1.6) translate(-23%, 0px)"

    const ch = lottie.loadAnimation({
      name: "hang",
      container: Ref22.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: frog2?.lottie[4],
    })

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])


  // loading animation
  useEffect(() => {

    if (frog2 && Ref2.current && !IsLoading) {
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

    if (Assets && !IsLoading) {
      const sound = Assets?.frog2?.sounds[0]
      sound?.play()
      sound?.on("end", () => { Assets?.frog2?.sounds[1]?.play() })
      // Assets?.frog2?.sounds[2]?.play()
      // sound?.on("ended", () =>{
      //   Assets?.frog2?.sounds[0]?.play()
      // })

    }
  }, [Assets, IsLoading])


  // useEffect(() => {
  //   if (count === 5) {
  //     stop_all_sounds()
  //     Assets?.frog2?.sounds[2]?.play()
  //   }
  // }, [count])



  const stone_2 = Assets?.select?.sprites[4]
  const stone_1 = Assets?.select?.sprites[3]

  return <Scenes
    Bg={Bg}
    sprites={
      <>

        {IsLoading && <div ref={Ref22} className='trans'></div>}
        <div
          style={{
            left: "50%",
            bottom: "15%",
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
            bottom: "19%",
            width: "22%",
            zIndex: 9
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

        <Image src={stone_2} className="big_rock_end" />

        <Image src={stone_1} className="rock_2" style={{ left: "7.5%", bottom: "20%" }} />
        <Image src={stone_1} className="rock_3" style={{ left: "16.5%", bottom: "19%" }} />
        <Image src={stone_1} className="rock_4" style={{ left: "25%", bottom: "18.5%" }} />
        <Image src={stone_1} className="rock_5" style={{ left: "33%", bottom: "16%" }} />
      </>
    }
  />;
}

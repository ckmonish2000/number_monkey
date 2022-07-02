import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"
import lottie from "lottie-web"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';
import FrogMap from './frogAssetmap';
import Stars from './Stars';
import { BGContext } from '../../contexts/Background';


export default function Frog() {
  // const { Bg, Loading } = useLoadAsset(FrogMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets, Ipad, count, setcount } = useContext(SceneContext);
  const { frog } = Assets


  const [swing, setswing] = useState(false)

  const Ref2 = useRef(null);
  const waterRef = useRef(null);
  const BigFrogRef = useRef(null);

  const [num1, setnum1] = useState(null)
  const [num2, setnum2] = useState(null)
  const [Wrong, setWrong] = useState(0)
  const [Correct, setCorrect] = useState(0)
  const [playing, setplaying] = useState(true)
  const [jumpcomplete, setjumpcomplete] = useState(true)

  const { Bg, setBg } = useContext(BGContext)

  const randomInt = (max, min) => Math.round(Math.random() * (max - min)) + min;

  const gen_nums = () => {
    const one = randomInt(41, 50)
    let two = randomInt(41, 50)

    while (two === one) {
      two = randomInt(41, 50)
    }


    setnum1(one)
    setnum2(two)
  }

  useEffect(() => {
    setBg(frog?.Bg)
  }, [])

  // loading animation
  useEffect(() => {
    if (num1 == null && num2 === null) {
      gen_nums()
    }

    if (frog && Ref2.current) {
      try {


        const ch2 = lottie.loadAnimation({
          name: "swing",
          container: Ref2.current,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData: frog?.lottie[1],
        })

        ch2.addEventListener("complete", () => {
          setjumpcomplete(true)
        })

        const water = lottie.loadAnimation({
          name: "swing",
          container: waterRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: frog?.lottie[2],
        })

        const Bigfrog = lottie.loadAnimation({
          name: "swing",
          container: BigFrogRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: frog?.lottie[3],
        })


      } catch (err) {
        console.log(err)
      }
    }

    if (Assets) {
      let sound = Assets?.frog?.sounds[0]
      sound?.play()
      sound?.on("end", () => setplaying(false))
    }
  }, [Assets])


  let timer = null

  useEffect(() => {
    if (!playing) {
      timer = setTimeout(() => {
        setplaying(true)
        const sound = Assets?.frog?.sounds[1]
        sound?.play()
        sound?.on("end", () => { setplaying(false) })
      }, 15000);
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [playing])


  useEffect(() => {
    if (count === 5) {
      stop_all_sounds()
      setTimeout(() => {
        setSceneId("/fend")
      }, 1500)
    }
  }, [count])


  useEffect(() => {
    setTimeout(() => {
      setWrong(0)
    }, 2000)
  }, [Wrong])


  useEffect(() => {
    setTimeout(() => {
      setCorrect(0)
    }, 2100)
  }, [Correct])



  const get_pos = () => {
    switch (count) {
      case 0:
        return "frog_start"
        break;

      case 1:
        return "frog_start_jump"
        break;

      case 2:
        return "frog_second_jump"
        break;

      case 3:
        return "frog_third_jump"
        break

      case 4:
        return "frog_fourth_jump"
        break;

      case 5:
        return "frog_fifth_jump"
        break;

      default:
        break;
    }
  }

  const stop_all_sounds = () => {
    Assets?.frog?.sounds?.map(v => v.stop())
  }


  const Next = () => {
    stop_all_sounds()
    const sound = Assets?.frog?.sounds[3]
    sound?.play()
    setplaying(true)
    setswing(true)
    lottie.stop("swing")
    lottie.play("swing")
    setcount(count + 1)
    setTimeout(() => {
      gen_nums()
    }, 2000)
    if (count !== 4) {
      sound.on('end', () => {
        stop_all_sounds()
        const sound = Assets?.frog?.sounds[1]
        sound?.play()
        sound?.on("end", () => { setplaying(false) })


      })
    }
  }


  const NUM1 = () => {
    if (timer) clearTimeout(timer)
    stop_all_sounds()
    if (jumpcomplete) {
      if (num1 > num2) {
        setjumpcomplete(false)
        setCorrect(1)
        setWrong(0)
        setTimeout(() => { Next() }, 1000)
      } else {
        setWrong(1)
        setCorrect(0)
        const sound = Assets?.frog?.sounds[4]
        sound?.play()
        sound?.on("end", () => { Assets?.frog?.sounds[5]?.play() })
      }
    }
  }

  const NUM2 = () => {
    if (timer) clearTimeout(timer)
    stop_all_sounds()
    if (jumpcomplete) {
      if (num1 < num2) {
        setjumpcomplete(false)
        setCorrect(2)
        setWrong(0)
        setTimeout(() => { Next() }, 1000)

      } else {
        setCorrect(0)
        setWrong(2)
        const sound = Assets?.frog?.sounds[4]
        sound?.play()
        sound?.on("end", () => { Assets?.frog?.sounds[5]?.play() })
      }
    }
  }

  const stone_1 = Assets?.select?.sprites[3]
  const stone_2 = Assets?.select?.sprites[4]
  return <Scenes
    Bg={Bg}
    sprites={
      <>


        {count !== 5 && <>
          <span className='num_pos_1'
            style={
              `${num1}`.length !== 3 ?
                { left: `${num1}`.length === 2 ? "35%" : "" } :
                {
                  fontSize: "700%",
                  left: "35.5%",
                  bottom: "41px"
                }
            }
            onClick={NUM1}
          >{num1}</span>


          <span
            style={
              `${num2}`.length !== 3 ?
                { left: `${num2}`.length === 2 ? "52%" : "" } :
                {
                  fontSize: "700%",
                  left: "55%",
                  bottom: "41px"
                }
            }
            onClick={NUM2}
            className='num_pos_2'>{num2}</span>

          {/* border 1 */}
          {Wrong === 1 && <Image
            src={frog?.sprites[4]}
            className='_1st_pebel' />}

          {Correct === 1 && <Image
            src={frog?.sprites[5]}
            className='_1st_pebel' />}


          {/* border 2 */}
          {Wrong === 2 && <Image
            src={frog?.sprites[4]}
            className='_2nd_pebel' />}

          {Correct === 2 && <Image
            src={frog?.sprites[5]}
            className='_2nd_pebel' />}



          <Image
            onClick={NUM1}
            style={{ zIndex: 8 }}
            src={frog?.sprites[0]}
            className='_1st_pebel' />

          <Image
            style={{ zIndex: 8 }}
            onClick={NUM2}
            src={frog?.sprites[0]}
            className="_2nd_pebel" />

        </>}
        {/* Title */}


        {/* <div ref={Ref} className='frog_start_jump'></div> */}
        <div className='Big_frog' ref={BigFrogRef}></div>
        <div className='water_ripple_pos' ref={waterRef}></div>
        <div ref={Ref2} className={get_pos()}></div>


        {/* stones */}
        <Image src={stone_1} className="rock_1" />
        <Image src={stone_1} className="rock_2" />
        <Image src={stone_1} className="rock_3" />
        <Image src={stone_1} className="rock_4" />
        <Image src={stone_1} className="rock_5" />

        {/* big rock */}
        <Image src={stone_2} className="big_rock_1" />
        <Image src={stone_2} className="big_rock_2" />

      </>
    }
  />;
}

import { imgurl, soundurl, lottieurl } from "../../utils/path"

const FrogEndMap = {
  id: "frog2",

  Bg: `${imgurl}sb_42_bg_01.svg`,

  sprites: [
    // `${imgurl}intro_text.svg`,
    // `${imgurl}play.svg`,
    // `${imgurl}fg_monkey.svg`
    `${imgurl}replay.svg`
  ],


  sounds: [
    // `${soundurl}intro.mp3`
    `${soundurl}frog_2.mp3`,
    `${soundurl}replayaudio.mp3`,
    `${soundurl}claps.mp3`,
  ],

  lottie: [
    // `${lottieurl}scene_01.json`,
    `${lottieurl}frog/sb42_frog_idle.json`,
    `${lottieurl}frog/sb42_frog_jump_01.json`,
    `${lottieurl}frog/water_ripple.json`,
    `${lottieurl}frog/sb42_big_frog_idle.json`,
    `${lottieurl}trans.json`
  ]
}

export default FrogEndMap;
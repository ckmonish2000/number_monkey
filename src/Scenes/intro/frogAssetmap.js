import { imgurl, soundurl, lottieurl } from "../../utils/path"

const FrogMap = {
  id: "frog",

  Bg: `${imgurl}sb_42_bg_01.svg`,

  sprites: [
    `${imgurl}pink_box.svg`,
    `${imgurl}frog/board.svg`,
    `${imgurl}frog/grey_flower.svg`,
    `${imgurl}frog/flower.svg`,
    `${imgurl}red_border.svg`,
    `${imgurl}green_border.svg`
  ],


  sounds: [
    // `${soundurl}intro.mp3`
    `${soundurl}frog_1.mp3`,
    `${soundurl}tap.mp3`,
    `${soundurl}frog_2.mp3`,
    `${soundurl}jump.mp3`,
    `${soundurl}wrong.mp3`,
    `${soundurl}look.mp3`,
  ],

  lottie: [
    // `${lottieurl}scene_01.json`,
    `${lottieurl}frog/sb42_frog_idle.json`,
    `${lottieurl}frog/sb42_frog_jump_01.json`,
    `${lottieurl}frog/water_ripple.json`,
    `${lottieurl}frog/sb42_big_frog_idle.json`
  ]
}

export default FrogMap;
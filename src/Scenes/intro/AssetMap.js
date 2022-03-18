import { imgurl, soundurl, lottieurl } from "../../utils/path"

const IntroMap = {
  id: "intro",

  Bg: `${imgurl}sb_42_bg_02.svg`,

  sprites: [
    // `${imgurl}intro_text.svg`,
    // `${imgurl}play.svg`,
    `${imgurl}fg_monkey.svg`,
    `${imgurl}pink_box.svg`,
    `${imgurl}monkey/bar.svg`,
    `${imgurl}monkey/grey.svg`,
    `${imgurl}monkey/banana.svg`,
    `${imgurl}red_border.svg`,
    `${imgurl}green_border.svg`
  ],


  sounds: [
    // `${soundurl}intro.mp3`
    `${soundurl}monkey_1.mp3`,
    // `${soundurl}monkey_2.mp3`,
    `${soundurl}monkey_correct.mp3`,
    `${soundurl}wrong.mp3`,
    `${soundurl}look.mp3`,
    `${soundurl}tap.mp3`,
  ],

  lottie: [
    // `${lottieurl}scene_01.json`,
    `${lottieurl}monkey_hanging.json`,
    `${lottieurl}monkey_02.json`
  ]
}

export default IntroMap;
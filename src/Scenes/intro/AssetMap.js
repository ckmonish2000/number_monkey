import { imgUrl, soundUrl, lottieUrl } from "../../utils/path"

const IntroMap = {
  id: "intro",

  Bg: `${imgUrl}SB_42_BG_02.svg`,

  sprites: [
    // `${imgUrl}Intro-Text.svg`,
    // `${imgUrl}play.svg`,
    `${imgUrl}FG_monkey.svg`,
    `${imgUrl}pink_box.svg`,
    `${imgUrl}monkey/bar.svg`,
    `${imgUrl}monkey/grey.svg`,
    `${imgUrl}monkey/banana.svg`,
    `${imgUrl}red_border.svg`,
    `${imgUrl}green_border.svg`
  ],


  sounds: [
    // `${soundUrl}Intro.mp3`
    `${soundUrl}monkey_1.mp3`,
    // `${soundUrl}monkey_2.mp3`,
    `${soundUrl}monkey_correct.mp3`,
    `${soundUrl}wrong.mp3`,
  ],

  lottie: [
    // `${lottieUrl}Scene_01.json`,
    `${lottieUrl}Monkey_Hanging.json`,
    `${lottieUrl}Monkey_02.json`
  ]
}

export default IntroMap;
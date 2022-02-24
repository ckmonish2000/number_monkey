import { imgUrl, soundUrl, lottieUrl } from "../../utils/path"

const MonkeyEndMap = {
  id: "intro",

  Bg: `${imgUrl}SB_42_BG_02.svg`,

  sprites: [
    // `${imgUrl}Intro-Text.svg`,
    // `${imgUrl}play.svg`,
    `${imgUrl}FG_monkey.svg`,
    `${imgUrl}monkey_3.svg`,
    `${imgUrl}banana.svg`
  ],


  sounds: [
    // `${soundUrl}Intro.mp3`
    `${soundUrl}monkey_1.mp3`,
    `${soundUrl}monkey_2.mp3`,
  ],

  lottie: [
    // `${lottieUrl}Scene_01.json`,
    `${lottieUrl}Monkey_Hanging.json`,
    `${lottieUrl}Monkey_02.json`
  ]
}

export default MonkeyEndMap;
import { imgUrl, soundUrl, lottieUrl } from "../../utils/path"

const MonkeyMap = {
  id: "monkey",

  Bg: `${imgUrl}SB_42_BG_02.svg`,

  sprites: [
    // `${imgUrl}Intro-Text.svg`,
    // `${imgUrl}play.svg`,
    `${imgUrl}FG_monkey.svg`,
    `${imgUrl}pink_box.svg`
  ],


  sounds: [
    // `${soundUrl}Intro.mp3`
  ],

  lottie: [
    // `${lottieUrl}Scene_01.json`,
    `${lottieUrl}Monkey_Hanging.json`,
    `${lottieUrl}Monkey_02.json`
  ]
}

export default MonkeyMap;
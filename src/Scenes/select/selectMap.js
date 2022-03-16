import { imgUrl, soundUrl, lottieUrl } from "../../utils/path"

const SelectMap = {
  id: "select2",

  Bg: `${imgUrl}SB_42_BG_01.svg`,

  sprites: [
    `${imgUrl}select_circle.svg`,
    `${imgUrl}FROG_3.svg`,
    `${imgUrl}monkey_3.svg`
  ],


  sounds: [
    `${soundUrl}select_audio.mp3`
  ],

  lottie: [
    // `${lottieUrl}Scene_01.json`,
    `${lottieUrl}Monkey_Hanging.json`,
    `${lottieUrl}Monkey_02.json`
  ]
}

export default SelectMap;
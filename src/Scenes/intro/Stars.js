import React from 'react'
import Image from '../../utils/elements/Image'

export default function Stars({ board, grey, color, styles, count }) {
  return (
    <div className={styles[0]}>
      <Image src={board} />
      <Image src={grey} style={styles[1]} />

      {count >= 1 && <Image src={color} className={styles[2]} />}
      {count >= 2 && <Image src={color} className={styles[3]} />}
      {count >= 3 && <Image src={color} className={styles[4]} />}
      {count >= 4 && <Image src={color} className={styles[5]} />}
      {count >= 5 && <Image src={color} className={styles[6]} />}

    </div>
  )
}


export function Stars2({ board, grey, color, styles, count }) {
  return (
    <div className={styles[0]}>
      <Image src={board} />
      <Image src={grey} style={styles[1]} />

      {count > 1 && <Image src={color} className={styles[2]} />}
      {count > 2 && <Image src={color} className={styles[3]} />}
      {count > 3 && <Image src={color} className={styles[4]} />}
      {count > 4 && <Image src={color} className={styles[5]} />}
      {count > 5 && <Image src={color} className={styles[6]} />}

    </div>
  )
}
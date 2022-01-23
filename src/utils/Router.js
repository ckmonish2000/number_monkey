import React from 'react'
import { SceneContext } from '../contexts/SceneContext'

export default function Router({ children, sceneId }) {
  const { SceneId } = React.useContext(SceneContext)

  return SceneId === sceneId ? (
    <React.Fragment>
      {children}
    </React.Fragment>
  ) : null
}

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BackgroundProvider from './contexts/Background';
import SceneContextProvider from './contexts/SceneContext';
// import SelectorContextProvider from './contexts/SelectorContext';
import SoundContextProvider from './contexts/SoundContext';
import "./index.css"


ReactDOM.render(
  <BackgroundProvider>
    <SceneContextProvider>
      <SoundContextProvider>
        {/* <SelectorContextProvider> */}
        <App />
        {/* </SelectorContextProvider> */}
      </SoundContextProvider>
    </SceneContextProvider>
  </BackgroundProvider>
  ,
  document.getElementById('root')
);

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import VMposter from "./images/Varsham.jpg"
import VMSong1 from "./assets/varshamaudio/Nuvvosthanante.mp3"
import VMSong2 from "./assets/varshamaudio/Kopama Napina.mp3"
import VMSong3 from "./assets/varshamaudio/Neeti Mullai.mp3"
import VMTrailer from "./assets/Video/Varsham Movie 4K Trailer.mp4"

function App() {
  
  return (
  <div>

  <div className='bodyBG'>
    <h1 className='mainHeading'>Whistle</h1>
    <div className='movie'>
      <img className='poster' src='https://www.socialnews.xyz/wp-content/uploads/2019/11/01/Thalapathy-Vijay-s-Whistle-movie-second-week-posters-.jpg'></img>
    <div className='audio'>
      <h5>1.Sivangivey.mp3</h5>
      <audio className='audio' src='https://services.brninfotech.com/tws/media2/songs/Whistle/01 - Sivangivey.mp3' controls></audio>
      <h5>2.Verrekkiddam.mp3</h5>
      <audio className='audio' src='https://services.brninfotech.com/tws/media2/songs/Whistle/02 - Verrekkiddam.mp3' controls></audio>
      <h5>3.Neethone.mp3</h5>
      <audio className='audio' src='https://services.brninfotech.com/tws/media2/songs/Whistle/03 - Neethone.mp3' controls></audio>
    </div>
      <video className='video' src='https://services.brninfotech.com/tws/media2/trailers/Whistle.mp4'controls autoPlay muted></video>
    </div>
    <hr></hr>
    <h1 className='mainHeading'>Jailer</h1>
    <div className='movie'>
      <img className='poster' src='../images/jailer1.jpg'></img>
    <div className='audio'>
      <h5>1.Rathamaarey.mp3</h5>
      <audio className='audio' src='../Jailer/Rathamaarey.mp3' controls></audio>
      <h5>2.Hukum.mp3</h5>
      <audio className='audio' src='../Jailer/Hukum.mp3' controls></audio>
      <h5>3.Kaavaali.mp3</h5>
      <audio className='audio' src='../Jailer/Kaavaali.mp3' controls></audio>
    </div>
      <video className='video' src='../Jailer/jailer-tralier.mp4' controls autoPlay muted></video>
    </div>
    <hr></hr>
    <h1 className='mainHeading'>Varsham</h1>
    <div className='movie'>
      <img className='poster' src={VMposter}></img>
    <div className='audio'>
        <h5>1.Nuvvosthanante.mp3</h5>
        <audio className='audio' src={VMSong1} controls></audio> 
        <h5>2.Kopama Napina.mp3</h5>
        <audio className='audio' src={VMSong2} controls></audio>
        <h5>3.Neeti Mullai.mp3</h5>
        <audio className='audio' src={VMSong3} controls></audio> 
    </div>
      <video className='video' src={VMTrailer} controls autoPlay muted></video>
    </div>
  </div>
      
  </div>
  )
}

export default App

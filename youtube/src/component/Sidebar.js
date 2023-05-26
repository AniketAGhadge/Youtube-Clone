import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMeanuOpen = useSelector(store=> store.app.isMeanuOpen);
  
  if(!isMeanuOpen) return null;

  return (
    <div className='p-2 m-2 col-span-1'>
      <div className='flex p-1'>
        <img className='h-8' alt='Home' src='https://logowik.com/content/uploads/images/795_home.jpg'/>
        <Link to= '/'>Home</Link>
      </div>
      <div className='flex p-1'>
        <img className='h-8' alt='Shorts' src='https://logowik.com/content/uploads/images/youtube-shorts-black3609.jpg'/>
        <span>Shorts</span>
      </div>
      <div className='flex p-1'>
        <img className='h-8' alt='Subscriptions' src='https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png'/>
        <span className='px-3' >Subscriptions</span>
      </div>
      <div className='flex p-1'>
        <img className='h-8' alt='Libery' src='https://cdn3.iconfinder.com/data/icons/video-33/24/video_library_movie_film-512.png'/>
        <span className='px-3'>Libery</span>
      </div>
      <div className='flex p-1'>
        <img className='h-8' alt='History' src='https://img.uxwing.com/wp-content/themes/uxwing/download/time-date-calendar/history-icon.png'/>
        <span className='px-3'>History</span>
      </div>
      <div className='flex p-1'>
        <img className='h-8' alt='Your Videos' src='https://cdn4.iconfinder.com/data/icons/social-media-line-3/64/Social-media-expand_Youtube-512.png'/>
        <span className='px-3'>Your Videos</span>
      </div>
      <div className='flex p-1'>
        <img className='h-8' alt='Watch Later' src='https://static.thenounproject.com/png/106663-200.png'/>
        <span className='px-3'>Watch Later</span>
      </div>
      <div className='flex p-1'>
        <img className='h-8' alt='Love Songs' src='https://icon-library.com/images/song-icon-png/song-icon-png-27.jpg'/>
        <span className='px-3'>Love Songs</span>
      </div>
      <div className='flex p-1'>
        <img className='h-8' alt='Liked Videos' src='https://www.kindpng.com/picc/m/11-114955_transparent-like-icon-png-youtube-like-button-svg.png'/>
        <span className='px-3'>Liked Videos</span>
      </div>
    </div>
  )
}

export default Sidebar
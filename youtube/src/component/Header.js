import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/navBarSlice';

const Header = () => {

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-2 m-2'>
      <div className='flex col-span-1 cursor-pointer'>
        <img onClick={()=> toggleMenuHandler()} className='h-5' alt='Hamburger Img' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///9vc4BiZnVpbnuChZD4+fmtr7VobHpscH5manhjaHZgZHPBw8jl5ui8vsNxdYLU1dmRlJ7NztK2uL7v7/Hb3N+anKWIi5Wkpq58gIu4usDGx8zZ2t3q6uy/wMaqrLPesr9gAAACMklEQVR4nO3d4XKqMBCG4QhHA0EQREsVq/d/l6Xt9HTOL/vFGcNy3ucK8g3KkplN1jkAAAAAAAAAAAAAAAAAAIBnWs/bg+m2XVFl81YV3TY6374oi9X8TavcxwXcZKnX/mvVJibg2U7A1So76wHrKvWqJVUtJ+ws/AV/FJ0acB1Sr1kU1LqxL1MvWVSq79PGp16yyDdiwj5PvWRRrr5NR3PPcBQTHi1Vww+ZXC52qZcs2qkBXWPrZVpe5YRuZ6nkF/ojdO5gYmPxpfCHiITucLLyQy1PUQEnZx+8z+fNT2uM2Fj8dWw2c9ccH8gHAAAAAAAAAAAAAADwRHXzMvyZt+Gl0Vu8vx264PNi7nIfusiGodZM21dRtjEBL5aOI1QXPeDaSlPbl1I/4vVqqw3av8oJbQWcIqoBL+ZOlKj/xKu5Z6i2QffmEvZiwq25hOpJ0tZWsZjKhVz0zT1DNeB/UA+NHUCUjx9OWlPfpVGf3m0ws7cIUQGdexsyn3r39ws+G97iAk7qvpv9Hr/r4/f4AAAAAAAAAAAAAAAAT1WPfeq7Le/ox0daMRoj95eql5V/Wxu6gzZqGMvy7xE+2Qk4RTzpAa3d563fJbz4O9nrxd+rv/xefXPnLXL1vIW9GSXqmZnlz5kx1qof06y/+HlP5mZ2RTSz95Z+p0F9k3662Sn62S0moHOjmfmH6iSkH9chpJ5ReVcYIobo/CP1oNE7HkwHAAAAAAAAAAAAAAAAAACgeQeo1VEIDtSz5gAAAABJRU5ErkJggg=='/>
        <img className='h-5 mx-3' alt='Youtube Logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhiVnMweLAzELwhyJvWWJUVPk7f2ihdDRTgdgvRvPj2rAI2bUMu71ZLFjxDVzpLqjD5VigB5q6qQ&usqp=CAU&ec=48600113s'/>
      </div>
      <div className='flex col-span-10 px-10'>
        <input className='w-1/2 border border-gray-400 rounded-l-full' type='text'></input>
        <img className='h-8 border border-gray-400 rounded-r-full px-5 py-2' alt='Search' src='https://p.kindpng.com/picc/s/11-115171_search-icon-vector-png-transparent-png.png'/>
      </div>
      <div className='flex col-span-1'>
        <img className='h-5 mx-3' alt='Create' src='https://static-00.iconduck.com/assets.00/video-plus-icon-512x358-fpbzlocu.png'/>
        <img className='h-5 mx-3' alt='Notification' src='https://www.kindpng.com/picc/m/151-1511653_transparent-alarm-clipart-transparent-youtube-notification-bell-png.png'/>
        <img className='h-5 mx-3' alt='Login' src='https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg'/>
      </div>
    </div>
  )
}

export default Header
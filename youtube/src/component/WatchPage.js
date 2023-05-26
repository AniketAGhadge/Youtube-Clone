import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/navBarSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(closeMenu());
    })

  return (
    <div className='p-10'>
        <iframe width="950" height="500" src={"https://www.youtube.com/embed/"+searchParams.get('v')} 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>
    </div>
  )
}

export default WatchPage
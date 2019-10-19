import React, { useCallback, useRef } from 'react';

import body from './assets/body.png'
import head from './assets/head.png'
import hand from './assets/hand.png'

import './Artash.css'

const Artash = ({ location }) => {
  // const scrollRef = useCallback(node => {
  //   if (node && window.scrollX === 0) {
  //     node.scrollIntoView({ inline: 'center' })
  //   }
  // })

  const handleScroll = (node) => {
    if (node) node.scrollIntoView({ inline: 'center', behavior: 'smooth' })
  }

  const ref = useRef(null)
  
  return (
    <>
      <button className='find-artash' onClick={() => handleScroll(ref.current)}>
        Find Artash
      </button>
      <figure ref={ref} style={{ transform: `translateX(${ location }px)` }}>
        {/* <img id='hand-behind' src={hand} alt='Hand' /> */}
        <img id='body' src={body} alt='Body' />
        <img id='hand' src={hand} alt='Hand' />
        <img id='head' src={head} alt='Head' />
      </figure>
    </>
  )
}

export default Artash

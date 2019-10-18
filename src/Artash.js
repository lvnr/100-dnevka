import React from 'react';

import body from './assets/body.png'
import head from './assets/head.png'
import hand from './assets/hand.png'

import './Artash.css'

const Artash = () => (
  <figure>
    <img id='body' src={body} alt='Body' />
    <img id='hand' src={hand} alt='Hand' />
    <img id='head' src={head} alt='Head' />
  </figure>
)

export default Artash

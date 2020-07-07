import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';

const Rating = function(props) {
  var stars = props.rating;
  var starsArray= [];

  for(var i = 0; i < Math.floor(stars); i++) {
    starsArray.push(<FaStar />)
  }

  if(stars % 1 !== 0) {
    starsArray.push(<FaStarHalfAlt/>)
  }

  while(starsArray.length !== 5) {
    starsArray.push(<FaRegStar/>)
  }

  if(starsArray.length === 5) {
    starsArray.push(' ')
  }

  return(
    <div className='rating-me'>
      <span className='stars'>
        {starsArray.map((star, i) =>
          <span key={i}>
            {star}
          </span>
        )}
      </span>
     {props.ratings} <img className='personLogo' src='https://banner2.cleanpng.com/20180509/klq/kisspng-person-logo-computer-icons-5af2c2026fcf79.460327751525858818458.jpg'></img>
    </div>
  )
}

export default Rating;
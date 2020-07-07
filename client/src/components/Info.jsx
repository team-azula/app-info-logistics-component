import React, { Component } from 'react';

import Rating from './Rating.jsx';
import AdditionalInfo from './AdditionalInfo.jsx';

const Info = function(props) {
  var editorsChoiceLogo = '';
  var editorsChoice = '';

  if (props.app.editorChoice === true) {
    editorsChoiceLogo = 'https://lh3.googleusercontent.com/HotsP0KmK4tn0Q8p9szRXtwjD7fZRKu4mFcfJUFoddrGiZefxY7gz4dEGMuH6HsfCymJP6a8MvAwYWrU=s14-rw';
    editorsChoice = " Editors' Choice";
  }

  return (
    <div className='info'>
      <img className='image' src={props.app.imageUrl}></img>
      <div className='name'>{props.app.name}</div>
      <div className='editorsChoice'> <img src={editorsChoiceLogo}></img> {editorsChoice}</div>
      <div className='author'>{props.app.author}</div>
      <div className='category'> {props.app.category}</div>
      <div className='ads'><div className='contains'>Contains Ads</div><img className='caution' src='https://w1.pngwave.com/png/693/31/638/warning-icon-red-triangle-sign-line-signage-traffic-sign-symbol-png-clip-art.png'></img>You don't have any devices.</div>
      <div className='wishlist'><img className='wishlistLogo' src='https://cdn0.iconfinder.com/data/icons/mix-of-simple-vol-4/57/02-512.png'></img>Add to Wishlist</div>
      <button className='install-button'>Install</button>
      <Rating rating={props.app.rating} ratings={props.app.ratings}/>
      <AdditionalInfo size={props.app.size} currentVersion={props.app.currentVersion} installs={props.app.installs} updatedAt={props.app.updatedAt}/>
    </div>
  )
}


export default Info;
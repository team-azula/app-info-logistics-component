import React, { Component } from 'react';

const AdditionalInfo = function(props) {
  return (
    <div className ='add-info'>
      <div className='add-info-title'> ADDITIONAL INFORMATION</div>
      <div className='currentVersion'><div className='title'>Current Version</div> {props.currentVersion}</div>
      <div className='size'> <div className='title'>Size</div> {props.size}</div>
      <div className='installs'><div className='title'>Installs</div> {props.installs}</div>
      <div className='updatedAt'><div className='title'>Updated </div> {props.updatedAt}</div>
    </div>
  )
}

export default AdditionalInfo;
import React from 'react';
import './popup.css';

export default function Popup(props) {
  return (
    <div className='popup'>
      <div className='popup-inner'>
        {props.children}
      </div>
    </div>
  )
}

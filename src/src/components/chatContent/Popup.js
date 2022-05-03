import React from 'react'
import "./Popup.css"

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-ineer'>
            <button className='close-btn' onClick={props.close}>close</button>
            <input type="file" name= "file" onChange={(e) => props.submit(e)} />
        </div>
    </div>
  ) : "";
}

export default Popup
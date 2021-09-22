import React from 'react'
import LocationIcon from '../../assets/icon-arrow.svg'
const Form = ({onClick,reference}) => (
    <div className="input">
        <input type="text" className="input-IP" ref={reference} placeholder='Search for any IP address or domain' />
        <button className="btn" onClick={onClick}>
            <img src={LocationIcon} className="arrow" />
        </button>
    </div>
)
export default Form

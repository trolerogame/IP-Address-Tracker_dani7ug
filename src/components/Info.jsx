import React from 'react'

const Info = ({title,info}) => (
    <div className="info-container">
        <p className="title-info">{title}</p>
        <h3 className="info">{info}</h3>
    </div>
)

export default Info

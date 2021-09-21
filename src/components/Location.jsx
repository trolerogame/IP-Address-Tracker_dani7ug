import React from 'react'
import Info from './Info'
const CardLocation = ({IP,region,timezone,isp}) => (
    <div className="location">
        <Info title="IP ADDRESS" info={IP} />
        <Info title="LOCATION" info={region} />
        <Info title="TIMEZONE" info={timezone} />
        <Info title="ISP" info={isp} />
    </div>
)

export default CardLocation

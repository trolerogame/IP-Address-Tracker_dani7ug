import React from 'react'
import IconMarker from '../../public/icon-location.svg'
import { withScriptjs, withGoogleMap,GoogleMap,Marker} from 'react-google-maps'
const Map = withScriptjs(withGoogleMap(({center}) => (
    <>
        <GoogleMap
            defaultZoom={10}
            zoom={10}
            center={center}
        />
        <Marker position={center} icon={IconMarker}/>
    </>
)))

export default Map
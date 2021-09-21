import React,{useState} from 'react'
import './style.css'
import Map from './components/Map'
import CardLocation from './components/Location'
import Form from './components/Form'
function App() {
  const input = React.useRef(null)
  const [center,setCenter] = useState({lat:-1.2884,lng:36.8233})
  const [data,setData] = useState({IP:'8.8.8.8',isp:'Google LLC',timezone:'-07:00',region:'California'})
  const searchIP = async e => {
    e.preventDefault()
    const IP = input.current.value
    const url = 'https://geo.ipify.org/api/v1?apiKey=at_2qflegQJygeapwveDlaVqaAY48dYf&ipAddress=' + IP
    const data = (await (await fetch(url)).json())
    const {lat,lng,region,timezone} = data.location
    setCenter({lat,lng})
    setData({region,timezone,isp:data.isp,IP})
  }
  
  return (
    <article className="container">
      <section className="contain-input">
        <h1 className="title">IP Address Tracker</h1>
        <Form onClick={searchIP} reference={input} />
        <CardLocation {...data}/>
      </section>
      <Map 
        center={center}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div className='map' />}
        containerElement={<div style={{height:'100%'}} />}
        mapElement={<div className='map' />}
      />
    </article>
  )
}


export default App

'use client'
import {GoogleMap,LoadScript,Marker} from '@react-google-maps/api'

const GoogleMaps = () => {

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY 

  const containerStyle = {
    width: '500px',
    height: '450px',
  };
  const center = {
    lat:29.82602982285074,
    lng:-5.723413749655118,
  
  };
  const position = {
    lat:29.82602982285074,
    lng:-5.723413749655118,
  
  };
  

  return (
    <LoadScript googleMapsApiKey={apiKey!}>
      <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      >
        <Marker
        position={position}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMaps
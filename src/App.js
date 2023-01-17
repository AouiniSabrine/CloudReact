import React from 'react'

import Map from './Components/map/Map' 
import './App.css'

const location = {
  address: '5 Rue du lac el Bibane, Tunis 1053.',
  lat: 36.835806, 
  lng: 10.238942,
} 
const App = () => (
  <div className="App">
   
    <Map location={location} zoomLevel={17} /> {/* include it here */}
    
  </div>
)

export default App
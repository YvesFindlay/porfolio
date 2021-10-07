import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './Location.scss';

const Location = () => {
    return(
        <section className="location">
            <div className="location-content">
                <div className="location__text">
                    <h2 className="location__text-title">Location</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut suscipit esse, itaque voluptatum dicta?</p>
                </div>
                <div className="location__map-container">
                    <div id="map" className="location__map">
                    <MapContainer style={{height: '100%'}} center={[51.3887, 0.0745]} zoom={10} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://api.maptiler.com/maps/topo/256/{z}/{x}/{y}@2x.png?key=aJhzAxwXLADyKaiFKori"
                        />
                        <Marker position={[51.3887, 0.0745]}>
                            <Popup>Find me Coding it up  <br /> In Kent.</Popup>
                        </Marker>
                    </MapContainer>
                    </div>
                </div>
            </div> 
        </section>
    )
} 

export default Location;
import React from 'react';
import styled from 'styled-components'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import './map.css';


const Container = styled.div`
    position:absolute;
    width:100%;
    height:90vh;
    border-radius:4px;
`

const data = [
    {
        latLong:[43.6532, -79.3832],
        description:"dave to poodle was spotted here"
    },
    {
        latLong:[44.6488, -63.5752],
        description:"Tim the mut"
    }
]


const MapComponent =({match})=>{
 

    return(
        <Container>
            <MapContainer center={[44.6488, -63.5752]} zoom={5} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                 data.map((item,index)=>{
                        return <Marker position={item.latLong} key={index}>
                            <Popup>
                                {item.description}
                            </Popup>
                        </Marker>
                    })
                }
            </MapContainer>
        </Container>
    )
}


export default MapComponent
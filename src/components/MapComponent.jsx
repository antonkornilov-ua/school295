import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css'

function MapComponent() {
    const position = [50.40653690367758, 30.645180505780928];

    const myIcon = L.icon({
        iconUrl: icon,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -41],
        shadowUrl: iconShadow,
        shadowSize: [41, 41],
        shadowAnchor: [12, 41],
    });

    return (
        <MapContainer
            center={position}
            zoom={16}
            scrollWheelZoom={false}
            className='lg:mt-20 mt-2 w-full h-[250px] lg:h-[400px] lg:w-[550px]'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> Слава Україні!'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={position} icon={myIcon}>
                <Popup>
                    вулиця Олександра Кошиця, 6,
                    <br /> Київ, 02068
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default MapComponent;

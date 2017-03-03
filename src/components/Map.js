import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, google } from 'react-google-maps'

export default class Map extends Component {

    // geocodeAddress(address) {
    //     this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {

    //         if (status === google.maps.GeocoderStatus.OK) {

    //             this.map.setCenter(results[0].geometry.location);
    //             this.markers.setPosition(results[0].geometry.location);

    //             return;
    //         }

    //         this.map.setCenter({
    //             lat: ATLANTIC_OCEAN.latitude,
    //             lng: ATLANTIC_OCEAN.longitude
    //         });

    //         this.markers.setPosition({
    //             lat: ATLANTIC_OCEAN.latitude,
    //             lng: ATLANTIC_OCEAN.longitude
    //         });

    //     }.bind(this));
    // }


    render() {
        const mapContainer = <div style={{ height: '100%', width: '100%' }}></div>

        const markers = this.props.markers.map((venue, i) => {
            const marker = {
                position: {
                    lat: venue.location.lat,
                    lng: venue.location.lng
                }
            }


            return <Marker key={i} {...marker} />
        })


        // const search = this.props.search
        // this.geocoder = new google.maps.Geocoder();

        // address = this.props.center
        
        // this.geocodeAddress(address)


        return (

            <GoogleMapLoader
                containerElement={mapContainer}

                googleMapElement={
                    <GoogleMap
                        defaultZoom={15}
                        defaultCenter={this.props.center}
                        options={{ streetViewControl: false, mapTypeContainer: false }}>
                        {markers}

                    </GoogleMap>
                } />
        )
    }
}



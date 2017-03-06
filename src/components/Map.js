import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, google } from 'react-google-maps'

export default class Map extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lat: 40.7575285,
            lng: -73.9884469
        }
    }

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


        //var geocoder = new google.maps.Geocoder();
        var address = this.props.search
        console.log('Address:' + address)
        // this.geocoder.geocode({ 'address': address }, function (results, status) {
        //     if (status === google.maps.GeocoderStatus.OK) {
        //         this.setState({
        //             lat: results[0].geometry.location.lat(),
        //             lng: results[0].geometry.location.lng()
        //         })
        //     }
        //     else {
        //         alert("Geocode was not successful for the following reason: " + status);
        //     }
        // });

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



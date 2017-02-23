import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, Places } from './components'


class App extends Component {
    render() {

        const location = {
            lat: 40.7575285,
            lng: -73.9884469
        }

        const markers = [
            {
                location: {
                    lat: 40.7575285,
                    lng: -73.9884469
                }
            }
        ]

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3>Zipcode Search</h3>
                    


                </div>
                <div>
                    <input type="text" placeholder="Type a zipcode here"/><br/>
                </div>                

                
                <div style={{ width: 1250, height: 430, background: 'red' }}>
                    <Map center={location } markers = {markers}  />
                </div>

                <Places />
            </div>
        );
    }
}

export default App;

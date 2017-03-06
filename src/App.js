import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import { Map, Places, Search } from './components'



const location = ['bla']

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            location
        }
    }


    searchZipcode(location) {

        this.state.location[0] = location

        this.setState({
            location: this.state.location
        })

        console.log('location:' + JSON.stringify(this.state.location))
    }

    render() {

        const markers = [
            {
                location: {
                    lat: 40.7575285,
                    lng: -73.9884469
                }
            }
        ]

        const aux = {
            lat: 40.7575285,
            lng: -73.9884469
        }

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3>Zipcode Search</h3>
                </div>

                <Search searchZipcode={this.searchZipcode.bind(this)} />

                <div style={{ width: 1285, height: 430, background: 'red' }}>
                    <Map center={aux} markers={markers} search={this.state.location} />
                </div>

            </div>
        );
    }
}

export default App;

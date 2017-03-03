import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Map, Places } from './components'


class App extends Component {

    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    submitSearch(event) {
        console.log('Submit Search:' + event.target.value)
    }

    updateSearch(event) {
        console.log('Change Search:' + event.target.value)
        let updateSearch = Object.assign({}, this.state.search)
        updateSearch['search'] = event.targer.value
        this.setState({
            search: updateSearch
        })
    }

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

        const search = ''

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h3>Zipcode Search</h3>



                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">

                            <form className="form-inline">
                                <div className="row">
                                    <div className="col-xs-8 col-sm-10">

                                        <div className="form-group">
                                            <input onChange={this.updateSearch.bind(this)} type="text"
                                                className="form-control input-lg"
                                                placeholder="Type a zipcode here"
                                                required />
                                            <button onClick={this.submitSearch.bind(this)}>Search</button><br />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                <div style={{ width: 1285, height: 430, background: 'red' }}>
                    <Map center={location} markers={markers} search = {search}/>
                </div>
            </div>
        );
    }
}

export default App;

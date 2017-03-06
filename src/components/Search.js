import React, { Component } from 'react';

export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search:''
        }
    }


    submitSearch(event) {
        //let updatedText = Object.assign({}, text)
        // var aux = JSON.stringify(this.state.search)
        // console.log('Submit Search2:' + aux)
        
        // console.log('Submit Search2:' + aux)
        const createInput = this.refs.createInput;
        const task = createInput.value;
        console.log('search:' + task)
        this.props.searchZipcode(task)
    }

    updateSearch(event) {
        console.log('Change Search:' + event.target.value)
        let updateSearch = Object.assign({}, this.state.search)
        updateSearch['search'] = event.target.value
        this.setState({
            search: updateSearch
        })
    }

    render() {

        return (
            <div>
                <input onChange={this.updateSearch.bind(this)} type="text"
                    placeholder="Type a zipcode here"
                    ref="createInput"
                    required />
                <button onClick={this.submitSearch.bind(this)}>Search</button><br />
            </div>
        )
    }
}





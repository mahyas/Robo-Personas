import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {personas} from './Persona.js';

class App extends Component {
    constructor() {
        super()
        this.state = {
            personas: personas,
            searchfield:''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const filteredPersonas = this.state.personas.filter(personas => {
            return personas.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1>Personas</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList personas = {filteredPersonas} />
            </div>
        )
    }
}

export default App;
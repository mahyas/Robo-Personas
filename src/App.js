import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll.js';

class App extends Component {
    constructor() {
        super()
        this.state = {
            personas: [],
            searchfield:''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> this.setState({personas: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const filteredPersonas = this.state.personas.filter(personas => {
            return personas.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.personas.length ===0){
            return <h1>Loading</h1>
        }else{
            return(
                <div className='tc'>
                    <h1>Personas</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList personas = {filteredPersonas} />
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;
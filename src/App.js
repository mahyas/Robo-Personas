import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {personas} from './Persona.js';

const App = () => {
    return(
        <div className='tc'>
            <h1>Personas</h1>
            <SearchBox />
            <CardList personas = {personas} />
        </div>
    )
}

export default App;
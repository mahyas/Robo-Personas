import React from 'react';
import Card from './Card.js';

const CardList = ({personas}) => {
    return(
        <div>
            {
                personas.map((user, i) => {
                    return (<Card 
                        key={i}
                        id={personas[i].id} 
                        name={personas[i].name} 
                        email={personas[i].email} 
                        />
                    )
                })
            } 
        </div>
    )
}

export default CardList;
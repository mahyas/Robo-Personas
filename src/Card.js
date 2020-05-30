import React from 'react';

const Card = ({id, name, email}) =>{
    return(
        <div className='tc mw=10 bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt= 'Robot' src= {`https://robohash.org/${id}`} width="200" height="200"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
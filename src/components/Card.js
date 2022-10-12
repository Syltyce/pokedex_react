import React from 'react';

const Card = ({pokemon}) => {

    return (
        <li className='card'>
            <img src="pokemon.img" alt="" />
            <div className='infos'>
                <h2> Nom du pokemon </h2>
            </div>
        </li>
    );
};

export default Card;
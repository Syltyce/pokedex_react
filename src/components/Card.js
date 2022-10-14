import React from 'react';
import Pokemon from './Pokemon';

const Card = ({name, image}) => {
    
    return (
        
            <li className='card'>
                <img src={image} alt={name} />
                <div className='infos'> 
                    <h2> {name} </h2>
                </div>
            </li>
        
    );
};

export default Card;
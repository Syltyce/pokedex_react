import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Pokemon = () => {

    const [data, setData] = useState([]);
    // Vérifier l'API et ses données
    useEffect(() => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon/")
        .then((res) => setData(res.data.results));
    }, [])

    return (
        <div className='pokemons'>
            <h1> Pokemon </h1>

            {/* On liste les pokemon de l'API en récupérant la bonne valeur */}
            <ul>
                {data.map((pokemon, index) => (
                    <Card key={index} pokemon={pokemon}/>
                ))}
            </ul>
        </div>
    );
};

export default Pokemon;
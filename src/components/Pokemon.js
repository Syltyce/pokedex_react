import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Pokemon = () => {

    //Stocke les données
    const [pokemons, setPokemons] = useState([]);
    //const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=151");

    useEffect(() => {
        getPokemon();
    }, []);
    
    // Fontion qui récupère les 151 pokémons 
    const getPokemon = () => {

        // Création d'un tableau qui prendra l'URL de chaque pokemon de l'API
        var tableauUrlPokemon = [];
        for (var i = 1; i<152; i++) {
        tableauUrlPokemon.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }

        // On récupère les données API du tableau de chaque pokemon qu'on vient de créer
        var response = axios.all(tableauUrlPokemon.map((tableauUrlPokemon) =>
        axios
        .get(tableauUrlPokemon)))
        .then((res) => setPokemons(res));
        return response;

        // axios
        // .get('https://pokeapi.co/api/v2/pokemon?limit=151')
        // .then((res) => setPokemons(res.data.results));
    }

    // API qui permet de récupérer les pokemons
    // Objectif : retirer le nom du pokemon pour le mettre dans une variable (ex : pokemonName)
    

    return (
        <div className='pokemons'>
            <h1> Pokemon </h1>
            <ul>
            {pokemons.map((pokemon, index) => (
                <Card key={index} 
                name={pokemon.data.name} 
                image={pokemon.data.sprites.front_default} />
            ))}
            </ul>
        </div>
    );
};

export default Pokemon;
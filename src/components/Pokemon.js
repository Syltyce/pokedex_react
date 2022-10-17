import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Pokemon = () => {

    //Stocke les données
    const [pokemons, setPokemons] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedTypeRadio, setSelectedTypeRadio] = useState("");
    const typesPokemon = ["normal", "grass", "fire", "water", "electric", "flying", "ice", "fighting", "bug", "poison", "psychic", "rock", "ground", "ghost", "dragon"];
    

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

    //Afficher les données du tableau des pokemons
    console.log(pokemons);

    // API qui permet de récupérer les pokemons
    // Objectif : retirer le nom du pokemon pour le mettre dans une variable (ex : pokemonName)
    

    return (
        <div className='pokemons'>

            <h1> Pokemon </h1>
            

            {/* Trie le nombre de pokemon affiché avec un slider */}
            <input type="range" 
            min="1" max="151" 
            defaultValue={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)} />
                
            {/* Permet de trier les pokemon selon leur type avec un radio (pour cocher)     */}
            <ul className="radio-container">
                {/* Affiche les types des pokemon à cocher */}
                {typesPokemon.map((type) => (
                    <li>
                        <input type="radio"
                        id={type} 
                        name="typeRadio"
                        checked={type === selectedTypeRadio}
                        onClick={(e) => setSelectedTypeRadio(e.target.id)} />
                        <label htmlFor={type}>{type}</label>
                    </li>
                ))}

            </ul>

            {/* Permet d'annuler la sélection par type grâce à un bouton */}
            {selectedTypeRadio && <button onClick={() => setSelectedTypeRadio("")}> Annuler la recherche par type </button> }

            <ul>

            {pokemons.filter((pokemon) => pokemon.data.types[0].type.name.includes(selectedTypeRadio))
            .slice(0, rangeValue)
            .map((pokemon, index) => (
                <Card key={index} 
                name={pokemon.data.name} 
                image={pokemon.data.sprites.front_default} />
            ))}
            </ul>
            
        </div>
    );
};

export default Pokemon;
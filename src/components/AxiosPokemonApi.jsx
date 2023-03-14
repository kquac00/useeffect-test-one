import React, {useState} from 'react'
import DisplayPokemon from './DisplayPokemon';
import axios from "axios"

const AxiosPokemonApi = () => {
    const [pokemonList, setPokemonList] = useState ([]);

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => response.json())
            .then(jsonResponse => {
                console.log(jsonResponse)
                setPokemonList(jsonResponse.results)
            })
            .catch(err => console.log(err))
    }
    const fetchPokemonAwait = async() => {
        const response =await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        const jsonResponse = await response.json()
        setPokemonList(jsonResponse.results)
    }
    const fetchPokemonAxios = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(response=> {
            console.log(response)
            setPokemonList(response.data.results)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='center'>
            <button onClick={fetchPokemon}>Fetch using Then</button>
            <button onClick={fetchPokemonAwait}>Fetch using Await</button>
            <button onClick={fetchPokemonAxios}>Fetch using Axios</button>
        {
            pokemonList?
            <DisplayPokemon pokemonList={pokemonList} />:
            <h1>Fetch a pokemon!</h1>
        }
            
        </div>
    )
}

export default AxiosPokemonApi
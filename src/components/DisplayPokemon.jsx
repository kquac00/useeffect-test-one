import React from 'react'

const DisplayPokemon = (props) => {
    const {pokemonList} = props
    return (
        <ol>
            <h1>{pokemonList.results}</h1>
            {pokemonList.map((eachPokemon, idx)=>{
                return <li key={idx}>{eachPokemon.name}</li>
            })
        }

        </ol>
    )
}

export default DisplayPokemon
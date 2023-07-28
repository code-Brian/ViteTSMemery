import {PokemonListProps} from '../types/Pokemon.types'
import {Pokemon} from './Pokemon'
import {useState} from 'react'

export const PokemonList: React.FC<PokemonListProps> = ({pokemon}) => {
    return (
        <div>
            <ul>
                {
                    pokemon.map((pokemon, index) => 
                        <Pokemon key={index} name={pokemon.name} url={pokemon.url} />
                    )
                }
            </ul>
        </div>
    )
}

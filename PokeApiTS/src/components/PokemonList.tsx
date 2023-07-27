import {PokemonListProps} from '../types/Pokemon.types'
import {Pokemon} from './Pokemon'

export const PokemonList: React.FC<PokemonListProps> = ({pokemon}) => {
    return (
        <div>
            <ul>
                {
                    pokemon.map((pokemon, index) => 
                    <Pokemon index={index} name={pokemon.name} type={pokemon.type}/>
                    )
                }
            </ul>
        </div>
    )
}

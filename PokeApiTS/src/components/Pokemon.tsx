import {PokemonProps} from '../types/Pokemon.types'

export const Pokemon: React.FC<PokemonProps> = ({name, type}) => {
    return (
        <li>Name:{name} | Type:{type}</li>
    )
}

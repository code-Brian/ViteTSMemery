import {PokemonProps} from '../types/Pokemon.types'
import axios from 'axios'
import {useState, useEffect} from 'react'

export const Pokemon: React.FC<PokemonProps> = ({name, url}) => {
    const [pokeInfo, setPokeInfo] = useState<{}[]>([])
    useEffect(() => {
        axios.get(url).then(response => setPokeInfo(response.data))
        console.log(pokeInfo)
    },[])
    return (
        <li>
            {name}
        </li>
    )
}

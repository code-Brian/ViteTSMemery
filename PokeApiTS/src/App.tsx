import {useEffect, useState} from 'react'
import {PokemonListProps} from './types/Pokemon.types'

function App() {
const [pokemonList, setPokemonList] = useState<[]>([])
useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
  .then(response => response.json())
  .then(response => console.log(response.results))
},[])
  return (
    <>
    </>
  )
}

export default App

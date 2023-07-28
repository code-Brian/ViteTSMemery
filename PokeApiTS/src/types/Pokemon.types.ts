export type PokemonApiData = {
    name: string
    url: string 
}

export type PokemonListProps = {
    pokemon: PokemonApiData[]
}

export type PokemonProps = {
    name: string
    url: string
}

export type PokemonFullData = {
    name: string
    info: {}
}

const pokeApi = {}   

function convertPokeApiDetailToPokemon(pokeDetail) { 
    const pokemon = new Pokemon() //new é uma palavra reservada que cria um novo objeto.
    pokemon.name = pokeDetail.name 
    pokemon.number = pokeDetail.id  


    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name) //essa linha retorna uma lista de tipos de pokemons. 
    const [type] = types
    pokemon.types = types
    pokemon.type = type 

    pokemon.photo = pokeDetail.sprites.versions['generation-v']['black-white']['animated']['front_default'] //essa linha retorna a foto do pokemon.
    pokemon.photoDesactive = pokeDetail.sprites.versions['generation-v']['black-white']['front_default'] //essa linha retorna a foto do pokemon desativada.
    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => { 
   return fetch(pokemon.url) 
    .then((response) => response.json()) //essa linha retorna a lista de detalhes dos pokemons  
    .then(convertPokeApiDetailToPokemon) //essa linha retorna uma lista de pokemons.
}

pokeApi.getPokemons = (offset=0, limit=15) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`  


    return fetch(url) 
            .then((response) => response.json()) //essa linha converte o response em json. 
            .then((jsonBody) => jsonBody.results) //essa linha pega a lista que está dentro do json. 
            .then((pokemons)=> pokemons.map(pokeApi.getPokemonDetail)) //essa linha retorna uma lista de promises.
            .then((detailRequest) => Promise.all(detailRequest)) //essa linha retorna uma promise que resolve quando todas as promises no argumento iterável forem resolvidas ou quando o iterável passado como argumento não contém promises.
            .then((pokemonsDetails) => pokemonsDetails)
}  


// getPokemons é um método que recebe um pokemon como parâmetro. 
// pokeApi é um objeto que possui um método chamado getPokemons. 
// pokeApi.getPokemons é um método que recebe um pokemon como parâmetro. 


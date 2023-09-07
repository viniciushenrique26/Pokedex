const pokeApi = {}   

function convertPokeApiDetailToPokemon(pokeDetail) { 
    const pokemon = new Pokemon() //new é uma palavra reservada que cria um novo objeto.
    
    pokemon.id = pokeDetail.id //essa linha retorna o id do pokemon.
    
    pokemon.name = pokeDetail.name //essa linha retorna o nome do pokemon.
    pokemon.number = pokeDetail.id  //essa linha retorna o número do pokemon.


    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name) //essa linha retorna uma lista de tipos de pokemons. 
    const [type] = types //essa linha retorna o primeiro tipo da lista de tipos de pokemons.
    pokemon.types = types //essa linha retorna a lista de tipos de pokemons.
    pokemon.type = type  //essa linha retorna o primeiro tipo da lista de tipos de pokemons.

    const stats = pokeDetail.stats.map((statSlot) => statSlot) //essa linha retorna uma lista de status de pokemons.
    const [stat] = stats //essa linha retorna o primeiro status da lista de status de pokemons.
    pokemon.stats = stats //essa linha retorna a lista de status de pokemons.
    pokemon.stat = stat //essa linha retorna o primeiro status da lista de status de pokemons.

    pokemon.photo = pokeDetail.sprites.versions['generation-v']['black-white']['animated']['front_default'] //essa linha retorna a foto do pokemon.
    pokemon.photoDesactive = pokeDetail.sprites.versions['generation-v']['black-white']['front_default'] //essa linha retorna a foto do pokemon desativada.
    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => { 
   return fetch(pokemon.url || url) 
    .then((response) => response.json()) //essa linha retorna a lista de detalhes dos pokemons  
    .then(convertPokeApiDetailToPokemon) //essa linha retorna uma lista de pokemons.
}
pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
} 

pokeApi.getPokemons = (offset=0, limit=5) => {
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


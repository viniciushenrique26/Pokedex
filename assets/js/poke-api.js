const pokeApi = {}  

pokeApi.getPokemons = (offset=0, limit=10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` 
    return fetch(url) 
            .then((response) => response.json()) //essa linha converte o response em json. 
            .then((jsonBody) => jsonBody.results) //essa linha retorna o jsonBody.results. 
            .catch((error) => console.error(error)) //essa linha imprime o erro no console.
} 

// getPokemons é um método que recebe um pokemon como parâmetro. 
// pokeApi é um objeto que possui um método chamado getPokemons. 
// pokeApi.getPokemons é um método que recebe um pokemon como parâmetro. 

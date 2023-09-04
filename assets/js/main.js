
// O fetch nos retorna uma Promise, que é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Uma Promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função. 
// Processamento assincrono é um modelo de programação que permite que o script seja executado em "paralelo" com o restante do código. 
// .then é um método que retorna uma Promise. Ele pode ser encadeado com outros métodos, como .catch() e .finally().  
// .catch é um método que retorna uma Promise e lida apenas com casos de rejeição. Ele é o mesmo que .then(null, rejection) (ou .then(undefined, rejection)). 
// .finally é um método que retorna uma Promise. Ele é executado quando a Promise é resolvida ou rejeitada. 
// O fetch por padrão sempre usa o método GET, mas podemos passar um segundo parâmetro com as configurações da requisição, como o método HTTP, headers, body, mode, cache, redirect, referrer, etc. 

// porque eu tenho que converter para json? deve converter para json porque o fetch retorna um objeto Response, que representa a resposta a uma solicitação de rede.
// O método json() retorna um objeto Promise, que contém os dados no formato JSON.  
// callbacks são funções que são passadas como argumentos para outras funções. Não é recomendado ter callbacks demtro de outros callbacks, pois isso pode gerar o que chamamos de callback hell. 
// callback hell é quando temos muitos callbacks aninhados, o que torna o código difícil de ler e dar manutenção.  
// O segundo then sempre irá retornar o primeiro then, ou seja, o segundo then sempre irá receber o retorno do primeiro then.

// arrow function é uma forma mais curta de escrever uma função. Trocamos a palavra function por =>. 
// se a função tiver apenas um parâmetro, podemos omitir os parênteses. 

// debugger é uma palavra reservada que pausa a execução do código. 
// o debbuger serve para debugar o código, ou seja, para encontrar erros no código.

// O innerHTML é uma propriedade que define ou retorna a sintaxe HTML descrevendo os elementos descendentes. 
// o .map é um método que retorna um novo array, com base em uma função que recebe um parâmetro. 


function convertPokemonToLi(pokemon) {
    return `
        <li id="pokemonList" class="pokemon"> 
            <span class="number">#001</span> 
            <span class="name">${pokemon.name}</span>
            <div class="detail">  
                <ol class="types"> 
                    <li class="type">cabeca de gelo</li>
                    <li class="type">quebradeira</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
        </li> 
    `

} 
const pokemonList = document.getElementById('pokemonList') //essa linha seleciona a classe pokemons. 

pokeApi.getPokemons().then((pokemons = []) => {  
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
   
    console.log(pokemons)

}) 
    

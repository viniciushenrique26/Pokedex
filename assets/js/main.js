
// O fetch nos retorna uma Promise, que é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Uma Promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função. 
// Processamento assincrono é um modelo de programação que permite que o script seja executado em "paralelo" com o restante do código. 
// .then é um método que retorna uma Promise. Ele pode ser encadeado com outros métodos, como .catch() e .finally().  
// .catch é um método que retorna uma Promise e lida apenas com casos de rejeição. Ele é o mesmo que .then(null, rejection) (ou .then(undefined, rejection)). 
// .finally é um método que retorna uma Promise. Ele é executado quando a Promise é resolvida ou rejeitada. 
// O fetch por padrão sempre usa o método GET, mas podemos passar um segundo parâmetro com as configurações da requisição, como o método HTTP, headers, body, mode, cache, redirect, referrer, etc. 
// .path parameters são parâmetros que fazem parte da URL. serve para identificar um recurso específico.
// porque eu tenho que converter para json? deve converter para json porque o fetch retorna um objeto Response, que representa a resposta a uma solicitação de rede.
// O método json() retorna um objeto Promise, que contém os dados no formato JSON.  
// callbacks são funções que são passadas como argumentos para outras funções. Não é recomendado ter callbacks demtro de outros callbacks, pois isso pode gerar o que chamamos de callback hell. 
// callback hell é quando temos muitos callbacks aninhados, o que torna o código difícil de ler e dar manutenção.  
// O segundo then sempre irá retornar o primeiro then, ou seja, o segundo then sempre irá receber o retorno do primeiro then.
// os headers de uma requisicao servem para passar informacoes adicionais para o servidor.
// arrow function é uma forma mais curta de escrever uma função. Trocamos a palavra function por =>. 
// se a função tiver apenas um parâmetro, podemos omitir os parênteses. 

// debugger é uma palavra reservada que pausa a execução do código. 
// o debbuger serve para debugar o código, ou seja, para encontrar erros no código.

// O innerHTML é uma propriedade que define ou retorna a sintaxe HTML descrevendo os elementos descendentes. 
// o .map é um método que retorna um novo array, com base em uma função que recebe um parâmetro. 
// .join é um método que junta todos os elementos de um array em uma string. 
// parametros são variáveis que são passadas para uma função.
// Promisse.All é um método que retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas ou quando o iterável passado como argumento não contém promises.

const pokemonList = document.getElementById('pokemonList') //essa linha seleciona a classe pokemons.  
const loadMoreButton = document.getElementById('loadMoreButton') //essa linha seleciona a classe loadMoreButton. 
const limit = 5; 
let offset = 0;

const maxRecords = 151; 



function loadPokemonItems(offset,limit){ 
   
    pokeApi.getPokemons(offset,limit).then((pokemons = []) => {  
        const newHtml = pokemons.map((pokemon) => ` 
           
            <li class="pokemon ${pokemon.type}">  
                
                <span class="number">#00${pokemon.number}</span> 
                <span class="name">${pokemon.name}</span> 

                <div class="detail">  
                    <ol class="types"> 
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol> 
                    <img class="pokemon-image" src="${pokemon.photo}" alt="${pokemon.name}">  
                    
                </div> 
            
            </li>`).join('') 
        pokemonList.innerHTML += newHtml; //essa linha adiciona o conteúdo de newHtml dentro de pokemonList.
    
    }) 
}  

loadPokemonItems(offset,limit)
loadMoreButton.addEventListener('click', () => {  
    offset += limit
    const qtdRecordNextPage = offset + limit;

    if(qtdRecordNextPage >= maxRecords){  
        const newLimit = maxRecords - offset;
        loadPokemonItems(offset,newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else {
        loadPokemonItems(offset,limit)

    }
})



    


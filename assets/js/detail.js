const loadPokemon = document.getElementById('loadPokemon') //essa linha seleciona a classe loadPokemon

const pagURL = window.location.href // pega a url da página

const splitURL = pagURL.split("=") // faz um split na url

let id = 0 // define o id como 0

if (splitURL.length > 1) {
    id = splitURL.pop()
} else {
    id = 1
} // se o split for maior que 1, o id recebe o último valor do split, se não, o id recebe 1

const url = `https://pokeapi.co/api/v2/pokemon/${id}` // define a url com o id
console.log(url)

// função para pegar os detalhes do pokemon e retornar no HTML
function toLoadPokemon(url) {
    pokeApi.getPokemonDetail(url).then((pokemon = []) => {
        const newHtml =
            `<div class="pokemon-individual container">
                <div class="pokemon-infos">
                    <div class="pokemon-img slideInLeft">
                        <img src="${pokemon.photo}" width="300" height="300" alt="${pokemon.name}"> 
                    </div>
                    <div class="pokemon-conteudo">
                        <span class="number slideInDown" aria-label="número do Pokemon">#${pokemon.number}</span>
                        <h1 class="name slideInRight">${pokemon.name}</h1>

                        <ol class="types fadeIn" aria-label="Lista de tipos do Pokemon">
                                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                    </div>
                </div>
                <div class="pokemon-detail fadeIn">
                        <h2>Statistic</h2>
                        <ul class="stats">
                            ${pokemon.stats.map((stat) => `
                            <li class="stat ${stat.stat.name}">
                                <h3>
                                    ${stat.stat.name}
                                </h3> 
                                <div class="progress">
                                    <span>${stat.base_stat}</span>
                                    <progress value="${stat.base_stat}" max="100"></progress>
                                </div>
                                    
                            </li>`).join('')}
                        </ul>
            </div>
        </div> 
        `
        loadPokemon.innerHTML += newHtml
    })
}

// evento de load adicionado a tela para ao carregar chamar a função acima
window.addEventListener('load', () => {
    toLoadPokemon(url)
})
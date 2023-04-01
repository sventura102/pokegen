import { renderWithTemplate, renderListWithTemplate, getLocalStorage } from "./utils.mjs";

function pokeListMainTemplate(category) {
    return `<h1>Pokémon List by ${category}</h1>
            <h2>These are the pokémons that were introduced in the selected ${category}</h2>
            <ul class="pokemon-list"></ul>`;
}

function pokemonListCardTemplate(pokemon) {
    return `<li class="pokemon-card">
                <a href="/#/poke-details">
                    <h3 class="poke-name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                    <p>${pokemon.url}</p>
                </a>
            </li>`;
}

export default class PokemonList {
    constructor(dataSource, mainContainer) {
        this.dataSource = dataSource;
        this.mainContainer = mainContainer;
        this.category = getLocalStorage("category");
        this.pokeList = [];
        this.listElement = document.querySelector(".pokemon-list");
    }

    async init() {
    
    // Fill the title with the name of the page:
    document.querySelector(".page-title").textContent = `Pokémon List by ${this.category} | PokéGen`;

    // Render PokeList main:
    renderWithTemplate(pokeListMainTemplate(this.category), this.mainContainer);

    // Get number of generation from LocalStorage:
    let generation = getLocalStorage("generation");
    
    // Await promise from dataSource:
    this.pokeList = await this.dataSource.getPokemonsByGeneration(generation);

    // Render list of generations:
    renderListWithTemplate(pokemonListCardTemplate, this.listElement, this.pokeList);
    }

}

/* <img src="${pokemon}" alt="Image of ${pokemon}"/>
<p class="poke-color">${pokemon}</p>
<p class="poke-type">${pokemon}</p>
<p class="poke-growth">${pokemon}</p> */

/*
addProductToCart() {
    let cart = getLocalStorage("so-cart") || [];
    cart.push(this.product);
    setLocalStorage("so-cart", cart);
}
      */
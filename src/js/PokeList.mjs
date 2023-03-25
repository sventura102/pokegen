import { renderWithTemplate, renderListWithTemplate, getLocalStorage } from "./utils.mjs";

export function pokeListMainTemplate(category) {
    return `<h1>Pokémon List by ${category}</h1>
            <h2>These are the pokémons that were introduced in the selected ${category}</h2>
            <ul class="poke-list"></ul>`;
}

export function pokemonListCardTemplate(pokemon) {
    return `<li class="pokemon-card">
                <a href="#">
                    <img src="${pokemon}" alt="Image of ${pokemon}"/>
                    <h3 class="poke-name">${pokemon}</h3>
                    <ul class="poke-general">
                        <p class="poke-color">${pokemon}</p>
                        <p class="poke-type">${pokemon}</p>
                        <p class="poke-growth">${pokemon}</p>
                    </ul>
                </a>
            </li>`
}

export default class PokemonList {
    constructor(dataSource, mainContainer) {
        this.dataSource = dataSource;
        this.mainContainer = mainContainer;
        this.category = getLocalStorage("category");
        this.pokeList = [];
    }

    async init() {
    // Render PokeList main:
    renderWithTemplate(pokeListMainTemplate(this.category), this.mainContainer);

    // Fill the title with the name of the page:
    document.querySelector(".page-title").textContent = `Pokémon List by ${this.category} | PokéGen`;

    // Get number of generation from LocalStorage:
    let generation = getLocalStorage("generation");
    console.log(generation);

    // Render list of generations:
    const genList = this.dataSource.getPokemonsByGeneration(generation);
    renderListWithTemplate(pokemonListCardTemplate, this.listElement, genList, "afterbegin");
    }

}

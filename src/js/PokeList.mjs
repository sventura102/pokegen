import { renderListWithTemplate } from "./utils.mjs";

function pokeListMainTemplate(category) {
    return `<h1>Pokémon List by ${category}</h1>
            <h2>These are the pokémons that were introduced in the selected ${category}</h2>
            <ul></ul>`;
}

function pokemonListCardTemplate(pokemon) {
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
    constructor(dataSource, mainContainer, category) {
        this.dataSource = dataSource;
        this.mainContainer = mainContainer;
        this.category = category;
    }

    async init() {
    // Fill the title with the name of the page:
    document.querySelector(".page-title").textContent = `Pokémon List by ${this.category} | PokéGen`;
    // Await promise from dataSource:
    const list = await this.dataSource.getData(this.category);
    // Render the list
    renderListWithTemplate(pokemonListCardTemplate, this.listElement, list, "afterbegin");
    }
}

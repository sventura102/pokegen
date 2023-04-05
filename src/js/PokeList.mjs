import { renderWithTemplate, renderListWithTemplate, getLocalStorage, setLocalStorage } from "./utils.mjs";

function pokeListMainTemplate(category) {
    return `<h1>Pokémon List by ${category}</h1>
            <h2>These are the pokémons that were introduced in the selected ${category}</h2>
            <ul id="pokemon-list"></ul>`;
}

function pokemonListCardTemplate(pokemon) {
    return `<li class="pokemon-card">
                <a href="/#/poke-details" id="${pokemon.id}">
                    <h3 class="poke-name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                </a>
                <button type="submit" id="${pokemon.name}">Vote for Me!</button>
            </li>`;
}

export default class PokemonList {
    constructor(dataSource, mainContainer) {
        this.dataSource = dataSource;
        this.mainContainer = mainContainer;
        this.category = getLocalStorage("category");
        this.pokeList = [];
        this.pokeInfo = [];
        this.sortBy = "name"; // initialize the default sorting order
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

    // Sort the list based on the default sorting order(name):
    this.sortPokeList(this.pokeList);

    // Set the pokemon information in the pokeList:
    this.pokeList.forEach(pokemon => {
        const url = pokemon.url.slice(0, -1);
        const pokeId = url.substring(url.lastIndexOf("/") + 1);
        pokemon.id = pokeId;

        // //Get pokemon info from API:
        // this.getPokeInfo(pokeId);s

    });

    // Get the options parent elements:
    const pokemonListElement = document.querySelector("#pokemon-list");

    // Render list of generations:
    renderListWithTemplate(pokemonListCardTemplate, pokemonListElement, this.pokeList);

    // Listen for click on button:
    document.querySelectorAll("button").forEach(occurence => {
        let name = occurence.getAttribute("id");

        occurence.addEventListener("click", function() {
            let voteList = getLocalStorage("votes");

            // Check pokemons inside the votes object:
            for (const pokemon in voteList) {
                if (pokemon == name) {
                    if (voteList[pokemon] > 0) {
                        voteList[pokemon] += 1;
                    } else {
                        voteList[pokemon] = 1;
                    }
                } else {
                    Object.assign(voteList, {[name] : 1});
                }
            }
            // Set new values in localStorage:
            setLocalStorage("votes", voteList);
        } );
      });

    // Listen for click on the link to set pokémon ID in localStorage:s
    document.querySelectorAll("a").forEach(occurence => {
        let id = occurence.getAttribute("id");

        occurence.addEventListener("click", function() {
            setLocalStorage("pokeId", id);
        } );
    });


    }

    // Sorts the pokeList alphabetically:
    sortPokeList(pokeList) {
        if (this.sortBy === "name") {
            pokeList.sort((a, b) => a.name.localeCompare(b.name));
        }
    }

    // Get pokémon information:
    async getPokeInfo(pokeId) {
        this.pokeInfo = await this.dataSource.findPokemonById(pokeId);
    }

}
/* const pokeInfo = await this.dataSource.findPokemonById(pokeId); */

/* <img src="${pokemon.sprites}" alt="Image of ${pokemon.name}">"/>
<p class="poke-color">${pokemon}</p>
<p class="poke-type">${pokemon}</p>
<p class="poke-growth">${pokemon}</p> */

import { renderWithTemplate, renderListWithTemplate, getLocalStorage, setLocalStorage } from "./utils.mjs";

function pokeListMainTemplate(headerInfo) {
    let h2 = "";
    if (headerInfo[0] == "generation") {
        h2 = `<h2>These are the pokémons that were introduced in ${headerInfo[0]} ${headerInfo[1]}</h2>`;
    } else {
        h2 = `<h2>These are the pokémons that have ${headerInfo[0]} "${headerInfo[1]}"</h2>`;
    }
    return `<h1>Pokémon List by ${headerInfo[0]}</h1>
            ${h2}
            <ul id="pokemon-list"></ul>`;
}

function pokemonListCardTemplate(pokemon) {
    let id = 0;
    let name = "";
    if (getLocalStorage("category") == "generation") {
        id = pokemon.id;
        name = pokemon.name;
    } else if (getLocalStorage("category") == "types") {
        id = pokemon.pokemon.id;
        name = pokemon.pokemon.name;
    }
    return `<li>
                <a href="/#/poke-details" id="${id}">
                    <h3 class="poke-name">${name}</h3>
                    <p>Click to see details!</p>
                </a>
                <button type="submit" id="${name}">Vote for Me!</button>
            </li>`;
}

export default class PokemonList {
    constructor(dataSource, mainContainer) {
        this.dataSource = dataSource;
        this.mainContainer = mainContainer;        
        this.category = getLocalStorage("category");
        this.selection = getLocalStorage(this.category);
        this.headerInfo = [this.category, this.selection];
        this.pokeList = [];
        this.pokeInfo = [];
        this.sortBy = "name"; // initialize the default sorting order
    }

    async init() {
    
    // Fill the title with the name of the page:
    document.querySelector(".page-title").textContent = `Pokémon List by ${this.category} | PokéGen`;

    // Render PokeList main:
    renderWithTemplate(pokeListMainTemplate(this.headerInfo), this.mainContainer);

    // Get the options parent elements:
    const pokemonListElement = document.querySelector("#pokemon-list");

    if (this.category == "generation") {

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
        });

    } else {

        // Get types from localStorage (array with types):
        let types = getLocalStorage("types");
        let pokeByTypes = [];
        // Await promise from dataSource:
        for (let type in types) {
            console.log(types[type])
            pokeByTypes.push( await this.dataSource.getPokemonsByType(types[type]));
            //Object.assign(this.pokeList, {[types[type]] : await this.dataSource.getPokemonsByType(types[type])});
        }
        this.pokeList = pokeByTypes;

        // Set the pokemon information in the pokeList:
        this.pokeList.forEach(type => {
            type.forEach( pokemon => {
                const url = pokemon.pokemon.url.slice(0, -1);
                const pokeId = url.substring(url.lastIndexOf("/") + 1);
                pokemon.pokemon.id = pokeId;

                this.pokeList.push(pokemon);
            })
        });
        this.pokeList.splice(0, 3);

    }

    // Render list of pokémons:
    renderListWithTemplate(pokemonListCardTemplate, pokemonListElement, this.pokeList);

    // Listen for click on button:
    document.querySelectorAll("button").forEach(occurence => {
        const name = occurence.getAttribute("id");

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

    //Get pokémons based on types:
    async getPokemonsByType(type) {
        return await this.dataSource.getPokemonsByType(type);
    }

}
/* const pokeInfo = await this.dataSource.findPokemonById(pokeId); */

/* <img src="${pokemon.sprites}" alt="Image of ${pokemon.name}">"/>
<p class="poke-color">${pokemon}</p>
<p class="poke-type">${pokemon}</p>
<p class="poke-growth">${pokemon}</p> */

import { renderWithTemplate, renderListWithTemplate, getLocalStorage, setLocalStorage } from "./utils.mjs";

function pokeDetailsMainTemplate(pokemon) {
    return `<h1>Welcome to the ${pokemon.name}</h1>
            <div id="pokemon-card">
                <img src="${pokemon.sprites.front_default}" alt="Image of ${pokemon.name}">
                <h2>${pokemon.name.toUpperCase()}</h2>
                <p>Type: ${pokemon.types.map(type => type.type.name).join(", ")}</p>    
                <ul>Abilities:<br><br>
                    ${pokemon.abilities.map(ability => `<li>${ability.ability.name}</li>`).join("")}
                </ul>
                <button type="submit" id="poke-vote" value="${pokemon.name}">Vote for Me!</button>
            </div>`;
}

export default class PokemonDetails {
    constructor(dataSource, mainContainer) {
        this.dataSource = dataSource;
        this.mainContainer = mainContainer;
        this.pokeInfo = [];
    }

    async init() {
    
    // Fill the title with the name of the page:
    document.querySelector(".page-title").textContent = `Pokémon Details | PokéGen`;

    // Get pokémon ID from localStorage:
    const pokeId = getLocalStorage("pokeId");
    
    // Await promise from dataSource:
    this.pokeInfo = await this.dataSource.findPokemonById(pokeId);

    // Render PokeList main:
    renderWithTemplate(pokeDetailsMainTemplate(this.pokeInfo), this.mainContainer);

    // Listen for click on the button:
    document.querySelector("#poke-vote").addEventListener("click", () => {
        let name = document.querySelector("#poke-vote").getAttribute("value");

        // Get votes from localStorage:
        let voteList = getLocalStorage("votes") || {[name] : 1};

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
    });

    }
}
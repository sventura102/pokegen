import {renderListWithTemplate, renderWithTemplate} from "utils.mjs";

function homePageTemplate(generationOptions, typeOptions) {
    return `<h1>Welcome to the Pokémon Generator!</h1>

            <h2>Select Pokémons based on generation</h2>
            <form id="generationForm">
                <label for="dropdown">Generation:</label>
                <datalist id="generations">
                    ${generationOptions}
                </datalist>
                <button type="submit">Show Pokemons!</button>
            </form>

            <h2>Select Pokémons based on type</h2>
            <form id="typeForm">
                ${typeOptions}
                <button type="submit">Show Pokemons!</button>
            </form>`;
}

export default class HomePage {
    constructor(generations, types, listElement) {
        this.generations = generations;
        this.types = types;
        this.listElement = listElement;
    }

    async init () {
        
    }
}
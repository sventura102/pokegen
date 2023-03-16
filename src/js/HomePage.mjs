import {renderListWithTemplate, renderWithTemplate} from "./utils.mjs";

function homePageTemplate() {
    return `<h1>Welcome to the Pokémon Generator!</h1>

            <h2>Select Pokémons based on generation</h2>
            <form id="generation-form">
                <label for="generations">Generation:</label>
                <select name="generations" id="generations" required>
                </select>
                <button type="submit">Show Pokemons!</button>
            </form>

            <h2>Select Pokémons based on type</h2>
            <form id="type-form">
                <button type="submit">Show Pokemons!</button>
            </form>`;
}

function genOptions(genJSON) {
    return `<option value="${genJSON.results.name}">
                ${genJSON.results.url.slice(-2, -1)}
            </option>`;
}

function typeOptions(typeJSON) {
    return `<label for="${typeJSON.results.name}">
                ${typeJSON.results.name.charAt(0).toUpperCase() + typeJSON.results.name.slice(1)}
            </label>
            <input type="checkbox" name="${typeJSON.results.name}" value="${typeJSON.results.name}">
            `;
}

export default class HomePage {
    constructor(dataSource, genOptionsElement, typeOptionsElement, parentElement) {
        this.dataSource = dataSource;
        this.genOptionsElement = genOptionsElement;
        this.typeOptionsElement = typeOptionsElement;
        this.parentElement = parentElement;
    }

    async init () {
        // Fill the title with the name of the page:
        document.querySelector(".page-title").textContent = "Home Page | PokéGen";
        // Await promise from dataSource:
        const generationsList = await this.dataSource.getPokeGenerations();
        const typesList = await this.dataSource.getPokeTypes();

        //Render Home Page main:
        renderWithTemplate(homePageTemplate(), this.parentElement);

        // Render inner form elements:
        const gens = renderListWithTemplate(genOptions, this.genOptionsElement, generationsList);
        const types = renderListWithTemplate(typeOptions, this.typeOptionsElement, typesList);
    }
}
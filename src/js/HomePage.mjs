import {renderListWithTemplate, renderWithTemplate} from "./utils.mjs";

function homePageTemplate() {
    return `<h1>Welcome to the Pokémon Generator!</h1>

            <h2>Select Pokémons based on generation</h2>
            <form id="generation-form" name="gen-form">
                <label for="generations">Generation:</label>
                <select name="generations" id="generations" required></select>
                <button id="gen-btn" type="submit">Show Pokemons!</button>
            </form>

            <h2>Select Pokémons based on type</h2>
            <form id="type-form" name="type-form">
                <button id="type-btn" type="submit">Show Pokemons!</button>
            </form>`;
}

function genOptions(genJSON) {
    return `<option value="${genJSON.name}">${genJSON.url.slice(-2, -1)}</option>`;
}

function typeOptions(typeJSON) {
    return `<input type="checkbox" id="${typeJSON.name}" value="${typeJSON.name}">
            <label for="${typeJSON.name}">${typeJSON.name.charAt(0).toUpperCase() + typeJSON.name.slice(1)}</label>`;
}

export default class HomePage {
    constructor(dataSource, mainContainer) {
        this.dataSource = dataSource;
        this.mainContainer = mainContainer;
    }

    async init () {
        // Fill the title with the name of the page:
        document.querySelector(".page-title").textContent = "Home Page | PokéGen";

        // Add footer year:
        document.querySelector("#footer-year").textContent =  new Date().getFullYear();
        
        // Await promise from dataSource:
        const generationsList = await this.dataSource.getPokeGenerations();
        const typesList = await this.dataSource.getPokeTypes();

        //Render Home Page main:
        renderWithTemplate(homePageTemplate(), this.mainContainer);

        // Get the options parent elements:
        const genOptionsElement = document.querySelector("#generations");
        const typeOptionsElement = document.querySelector("#type-form");

        // Render inner form elements:
        renderListWithTemplate(genOptions, genOptionsElement, generationsList);
        renderListWithTemplate(typeOptions, typeOptionsElement, typesList);
    }
}
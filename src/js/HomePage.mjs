import {renderListWithTemplate, renderWithTemplate, setLocalStorage} from "./utils.mjs";
function homePageTemplate() {
    return `<h1>Welcome to the Pokémon Generator!</h1>

            <h2>Select Pokémons based on generation</h2>
            <form action="/#/poke-list" id="generation-form" name="gen-form">
                <label for="generations">Generation:</label>
                <select id="gen-select" required></select>
                <button id="gen-btn" type="submit">Show Pokemons!</button>
            </form>

            <h2>Select Pokémons based on type</h2>
            <form action="/#/poke-list" id="type-form" name="type-form">
                <button id="type-btn" type="submit">Show Pokemons!</button>
            </form>`;
}

function genOptions(genJSON) {
    return `<option value="${genJSON.name}">${genJSON.url.slice(-2, -1)}</option>`;
}

function typeOptions(typeJSON) {
    return `<input class="type" type="checkbox" id="${typeJSON.name}" value="${typeJSON.name}">
            <label for="${typeJSON.name}">${typeJSON.name.charAt(0).toUpperCase() + typeJSON.name.slice(1)}</label>`;
}

function getCheckedTypes() {
    let types = document.querySelectorAll(".type");
    let typesChecked = [];
    for (let i = 0; i < types.length; i++) {
        if (types[i].checked == true){
            let type = types[i].value;
            typesChecked.push(type);
          }
    }
    setLocalStorage("types", typesChecked);
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
        const genOptionsElement = document.querySelector("#gen-select");
        const typeOptionsElement = document.querySelector("#type-form");

        // Render inner form elements:
        renderListWithTemplate(genOptions, genOptionsElement, generationsList);
        renderListWithTemplate(typeOptions, typeOptionsElement, typesList);

        // Listen for click on the button:
        document.querySelector("#gen-btn").addEventListener("click", (e) => {
            e.preventDefault();
            // Check form validity (no empty input fields):
            var myForm = document.forms[0];
            var chk_status = myForm.checkValidity();
            myForm.reportValidity();
            if (chk_status) {
                const generation = document.getElementById("gen-select").options[document.getElementById("gen-select").selectedIndex].text;
                setLocalStorage("category", "generations");
                setLocalStorage("generation", `${generation}`);

            }
        });

        // Listen for click on the button:
        document.querySelector("#type-btn").addEventListener("click", (e) => {
            e.preventDefault();
            // Check form validity (no empty input fields):
            var myForm = document.forms[0];
            var chk_status = myForm.checkValidity();
            myForm.reportValidity();
            if (chk_status) {
                getCheckedTypes();
                setLocalStorage("category", "types");
                location.assign("#/poke-list");
            }
            
        });
    }
}

// const generation = document.getElementById("gen-select").options[document.getElementById("gen-select").selectedIndex].text;
// document.querySelector("#send-gen").value = generation;

//<input type="hidden" name="generation" value="" id="send-type">
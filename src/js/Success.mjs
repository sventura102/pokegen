import { renderWithTemplate } from "./utils.mjs";
function successPageTemplate() {
    return `<div class="success" id="success">
        <h1>Thank you!</h1>
        <h2>You've created your account. Thanks!</h2>
        <p>You've been signed up to receive updates on new Pokémon as new games are released!</p> 
</div>`
}

export default class Success {
    constructor(dataSource, mainContainer) {
        this.dataSource = dataSource;
        this.mainContainer = mainContainer;
    }

async init() {
    //Fill title with the name of the page:
    document.querySelector(".page-title").textContent = "Thank you! | PokéGen";

    //Render Success main:
    renderWithTemplate(successPageTemplate(), this.mainContainer);
}
}
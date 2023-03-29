import ExternalServices from "./ExternalServices.mjs";
import HomePage from "./HomePage.mjs";
import PokemonList from "./PokeList.mjs";


const mainContainer = document.querySelector(".main-content");
// Delete previous main content:
mainContainer.innerHtml = "";
const dataSource = new ExternalServices();
initRouter(dataSource, mainContainer);

export function initRouter(dataSource, mainContainer) {

    function hashToRoute(hash) {
        switch(hash) {
            case "#/home-page":
                // Delete previous main content:
                mainContainer.innerHtml = "";
                const homePage = new HomePage(dataSource, mainContainer);
                homePage.init();

                break;

            case "#/poke-list":
                // Delete previous main content:
                mainContainer.innerHtml = "";
                const pokeList = new PokemonList(dataSource, mainContainer);
                pokeList.init();

                break;

            case "#/page3":
                // Delete previous main content:
                mainContainer.innerHtml = "";

                break;

            default:
                // Delete previous main content:
                mainContainer.innerHtml = "";
                //updateView(createElement("h3",  {textContent: "404 Page Not Found"}));
                break;
        }
    }

    const defaultHash = window.location.hash || "#/home-page";
    hashToRoute(defaultHash);

    window.addEventListener("hashchange", (e) => {
        const newUrl = new URL(e.newURL);
        const hash = newUrl.hash;

        hashToRoute(hash);
    });
}
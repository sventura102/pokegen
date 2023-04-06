import ExternalServices from "./ExternalServices.mjs";
import HomePage from "./HomePage.mjs";
import PokemonList from "./PokeList.mjs";
import PokemonDetails from "./PokeDetails.mjs";
import PokemonVotingPoll from "./PollPorcess.mjs";
import SignUp from "./SignUp.mjs";

const mainContainer = document.querySelector(".main-content");
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
            
            case "#/poke-details":
                // Delete previous main content:
                mainContainer.innerHtml = "";
                const pokeDetails = new PokemonDetails(dataSource, mainContainer);
                pokeDetails.init();
                break;

            case "#/poke-poll":
                // Delete previous main content:
                mainContainer.innerHtml = "";
                const pokePoll = new PokemonVotingPoll(dataSource, mainContainer);
                pokePoll.init();
                break;

            case "#/poke-signup":
                // Delete previous main content:
                mainContainer.innerHtml = "";
                const signup = new SignUp(dataSource, mainContainer);
                signup.init();
                break;

            default:
                // Delete previous main content:
                mainContainer.innerHtml = "";
                //updateView(createElement("h3",  {textContent: "404 Page Not Found"}));
                break;
        }
    }
    function setFooterYear() {
        // Add footer year:
        document.querySelector("#footer-year").textContent =  new Date().getFullYear();
    }

    const defaultHash = window.location.hash || "#/home-page";
    setFooterYear();
    hashToRoute(defaultHash);

    window.addEventListener("hashchange", (e) => {
        const newUrl = new URL(e.newURL);
        const hash = newUrl.hash;
        window.location.reload();

        hashToRoute(hash);
    });
}
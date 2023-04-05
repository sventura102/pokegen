import {renderWithTemplate, getLocalStorage } from "./utils.mjs";

//display poll
function pollTemplate() {
    return `<h1>Poll Page</h1>
            <h2>The top 4 pokemons:</h2>
            <div class="poll">
                <ul class="topPokemon">
                </ul>
            </div>
            <div class ="comments">
            <h2>Leave Your Comments</h2>
            <form id=comment-form>
                <label for="fullName">Name:</label>
                <input type="fullName" name="fullName" id="fullName" required>
                <label for="email">E-mail:</label>
                <input type="email" name="email" id="email" required>
                <textarea placeholder='Add Your Comment'></textarea>
                <div class="button">
                    <input type="submit" value="Comment">
                    <button>Cancel</button>
                </div>
            </form>
            </div>
            `;
}

function showResults(topPokemon) {
    return `<li>
                ${topPokemon.pokemon1[0]}-${topPokemon.pokemon1[1]}
            </li>
            <li>
                ${topPokemon.pokemon2[0]}-${topPokemon.pokemon2[1]}
            </li>
            <li>
                ${topPokemon.pokemon3[0]}-${topPokemon.pokemon3[1]}
            </li>
            <li>
                ${topPokemon.pokemon4[0]}-${topPokemon.pokemon4[1]}
            </li>`
};

export default class PokemonVotingPoll {
    constructor(dataSource, mainContainer) {
        this.dataSource = dataSource;
        this.mainContainer = mainContainer;
        this.listElement = document.querySelector(".topPokemon");
    }

    async init() {
        // Fill the title with the name of the page:
        document.querySelector(".page-title").textContent = "Poll Page | PokéGen";

        //Render Poll Page main:
        renderWithTemplate(pollTemplate(), this.mainContainer);
        
        let voteList = getLocalStorage("votes");

        // Check pokemon inside the votes object:

        let maxVote = 0;
        let maxVote2 = 0;
        let maxVote3 = 0;
        let maxVote4 = 0;
        let pokemon1 = "";
        let pokemon2 = "";
        let pokemon3 = "";
        let pokemon4 = "";

        // Compare votes to find the pokemon with the most votes:
        let topPokemon = {}
            for (let pokemon in voteList) {
                if (voteList[pokemon] > maxVote) {
                    maxVote = voteList[pokemon];
                    pokemon1 = pokemon;
                }
                else if (voteList[pokemon] > maxVote2 && voteList[pokemon] < maxVote) {
                    maxVote2 = voteList[pokemon];
                    pokemon2 = pokemon;
                }
                else if (voteList[pokemon] > maxVote3 && voteList[pokemon] < maxVote2) {
                    maxVote3 = voteList[pokemon];
                    pokemon3 = pokemon;
                }
                else if (voteList[pokemon] > maxVote4 && voteList[pokemon] < maxVote3) {
                    maxVote4 = voteList[pokemon];
                    pokemon4 = pokemon;
                }
            };

        Object.assign(topPokemon,{pokemon1:[[pokemon1],[maxVote]], pokemon2:[[pokemon2], [maxVote2]], pokemon3:[[pokemon3],[maxVote3]], pokemon4:[[pokemon4],[maxVote4]]})

        console.log(topPokemon);

        //Render Votes:
        renderWithTemplate(showResults(topPokemon), this.listElement);
        }
    }
import { renderWithTemplate } from "./utils.mjs";
function signupPageTemplate() {
    return `<h1>Signup</h1>
            <h2>Please fill in this form to receive updates when new Pokémons are released!</h2>
            <form id="sign-up-form">
                <label for="user-name">Name:</label>
                <input type="text" id="user-name" placeholder="Jane Doe" required>

                <label for="user-email">Email:</label>
                <input type="email" id="user-email" placeholder="poke-fan@example.com" required>

                <label for="user-pass">Password:</label>
                <input type="password" id="user-pass" required>

                <button type="submit" id="signup-btn">Sign-up</button>
            </form>`;
}

function successMessageTemplate() {
    return `<div class="popup" id="popUp">
                <h2>Thank you!</h2>
                <p>You've created your account. Be sure to check your email for updates! Gotta catch 'em all!! ;)</p>
            </div>`;
}

export default class SignUp {
    constructor(dataSource, mainContainer) {
        this.dataSource = dataSource;
        this.mainContainer = mainContainer;
    }
async init() {
    // Fill title with the name of the page:
    document.querySelector(".page-title").textContent = "Sign Up | PokéGen";

    // Render SignUp main:
    renderWithTemplate(signupPageTemplate(), this.mainContainer);

    // Listen for click on the form button:
    document.querySelector("#signup-btn").addEventListener("click", () => {
        this.mainContainer.innerHTML += successMessageTemplate();
    })

    }
}
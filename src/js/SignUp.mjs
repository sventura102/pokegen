import { renderListWithTemplate, renderWithTemplate, setLocalStorage } from "./utils.mjs";
function signupPageTemplate() {
    return `<h1>Signup</h1>
            <form action="" method="post">
                <input type="text" name="user-name" placeholder=User Name">
                <input type="email" name="user-email" placeholder="Email">
                <input type="password" name="user-pass" placeholder="Password">
                <input type="button" name="signup-btn" value="Signup">
                </form>`
}

let signupBtn = document.getElementById("signup-btn");
let username = document.getElementById("user-name");

async init() {
    
}
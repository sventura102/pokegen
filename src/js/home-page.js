import ExternalServices from "./ExternalServices.mjs";
import HomePage from "./HomePage.mjs";

const dataSource = new ExternalServices();
const genOptionsElement = document.querySelector("#generations");
const typeOptionsElement = document.querySelector("type-form");
const parentElement = document.querySelector(".main-content");
const homePage = new HomePage(dataSource, genOptionsElement, typeOptionsElement, parentElement);

homePage.init();
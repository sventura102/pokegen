import ExternalServices from "./ExternalServices.mjs";
import HomePage from "./HomePage.mjs";

const dataSource = new ExternalServices();
const mainContainer = document.querySelector(".main-content");
const homePage = new HomePage(dataSource, mainContainer);

homePage.init();
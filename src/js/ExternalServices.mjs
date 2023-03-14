const baseURL = "https://pokeapi.co/api/v2/";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw { name: 'servicesError', message: res };
  }
}

export default class ExternalServices {

  async getPokemonsByGeneration(genNumber) {
    const response = await fetch(baseURL + `generation/${genNumber}/`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async getPokemonsByType(type) {
    const products = await fetch(baseURL + `type/${type}/`);
    const data = await convertToJson(products);
    return data.Result;
  }

}

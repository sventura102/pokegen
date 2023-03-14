const baseURL = "https://pokeapi.co/api/v2/";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw { name: 'servicesError', message: res };
  }
}

export default class ExternalServices {

    // Get JSON of types (count,results->name[0]->url[1]):
    async getPokeTypes() {
        const response = await fetch(baseURL + "type/");
        const data = await convertToJson(response);
        return data.Result;
    }

    // Gets JSON (with pokemon_species->[6] and types->[7]) from given URL:
    async getPokemonsByGeneration(genNumber) {
        const response = await fetch(baseURL + `generation/${genNumber}/`);
        const data = await convertToJson(response);
        return data.Result;
    }
    // Gets JSON (with name->[5] and pokemon->[9]) from given URL:
    async getPokemonsByType(type) {
        const products = await fetch(baseURL + `type/${type}/`);
        const data = await convertToJson(products);
        return data.Result;
    }

}

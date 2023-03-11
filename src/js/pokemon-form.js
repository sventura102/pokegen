//create generation dropdown form
function generationForm() {
    return `<form id="generationForm" required>
                <label for="dropdown">Generation:</label>
                <datalist id="generations">
                    <option value="1">
                    <option value="2">
                    <option value="3">
                    <option value="4">
                    <option value="5">
                    <option value="6">
                    <option value="7">
                    <option value="8">
                    <option value="9">
                </datalist>
            </form>`;
}

//create pokemon type checkbox form
function typeForm() {
    return `<form id="typeForm" required>
                <input type="checkbox" id="type1" name="normal" value="normal">
                <label for="type1">Normal</label><br>
                <input type="checkbox" id="type2" name="fighting" value="fighting">
                <label for="type2">Fighting</label><br>
                <input type="checkbox" id="type3" name="flying" value="flying">
                <label for="type3">Flying</label><br>
                <input type="checkbox" id="type4" name="poison" value="poison">
                <label for="type4">Poison</label><br>
                <input type="checkbox" id="type5" name="ground" value="ground">
                <label for="type5">Ground</label><br>
                <input type="checkbox" id="type6" name="rock" value="rock">
                <label for="type6">Rock</label><br>
                <input type="checkbox" id="type7" name="bug" value="bug">
                <label for="type7">Bug</label><br>
                <input type="checkbox" id="type8" name="ghost" value="ghost">
                <label for="type8">Ghost</label><br>
                <input type="checkbox" id="type9" name="steel" value="steel">
                <label for="type9">Steel</label><br>
                <input type="checkbox" id="type10" name="fire" value="fire">
                <label for="type10">Fire</label><br>
                <input type="checkbox" id="type11" name="water" value="water">
                <label for="type11">Water</label><br>
                <input type="checkbox" id="type12" name="grass" value="grass">
                <label for="type12">Grass</label><br>
                <input type="checkbox" id="type13" name="electric" value="electric">
                <label for="type13">Electric</label><br>
                <input type="checkbox" id="type14" name="psychic" value="psychic">
                <label for="type14">Psychic</label><br>
                <input type="checkbox" id="type15" name="ice" value="ice">
                <label for="type15">Ice</label><br>
                <input type="checkbox" id="type16" name="dragon" value="dragon">
                <label for="type16">Dragon</label><br>
                <input type="checkbox" id="type17" name="dark" value="dark">
                <label for="type17">Dark</label><br>
                <input type="checkbox" id="type18" name="fairy" value="fairy">
                <label for="type18">Fairy</label><br>
                <input type="checkbox" id="type19" name="unknown" value="unknown">
                <label for="type19">Unknown</label><br>
                <input type="checkbox" id="type20" name="shadow" value="shadow">
                <label for="type20">Shadow</label><br>
            </form>`;
}


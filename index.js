let img = document.getElementById('PokemonImg');
let txt = document.getElementById('namePokemon');
let numero = document.getElementById('numberPokemon');
let numeroPoke = numero.value;
numeroPoke = 0;

function nextPokemon(){
    numeroPoke += 1;
    verPokemon(numeroPoke);
}

function previousPokemon(){
    numeroPoke -= 1;
    if(numeroPoke == 0){
        numeroPoke = 1;
    }
    verPokemon(numeroPoke);
}

function renderPokemon(imagen, name, orden){
    img.setAttribute('src', imagen);
    txt.innerHTML = name;
    numero.innerHTML = orden;
}


function verPokemon(numeroPok){
    fetch(`https://pokeapi.co/api/v2/pokemon/${numeroPok}/`)
        .then(response => response.json())
        .then(pokemon => {
            let imagen = pokemon.sprites.front_default;
            let nombre = pokemon.name;
            let orden = numeroPok;
            renderPokemon(imagen, nombre.toUpperCase(), orden);
     });
}
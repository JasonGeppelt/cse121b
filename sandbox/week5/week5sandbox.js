


const urlList = "https://pokeapi.co/api/v2/pokemon"
let results = null
async function getPokemonList(urlList) {
    const response = await fetch(urlList)
    console.log(response);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        doStuffList(data);
    }
}

const data = getPokemonList(urlList)

console.log(data);

function doStuffList(data) {
    const pokeList = data.results;
    console.log(pokeList);
    pokeList.sort(obj_sort_asc);
    console.log(pokeList);
    pokeList.sort(obj_sort_desc);
    console.log(pokeList);

    const outputListElement = document.querySelector('#outputList');
    pokeList.forEach((item) => {
        outputListElement.innerHTML += `<li>${item.name}</li>`
    })
}

function obj_sort_asc(a,b) {
    if (a.name > b.name) {
        return -1;
    } else if (a.name < b.name) {
        return 1;
    } else {
        return 0;
    }
}

function obj_sort_desc(a,b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    } else {
        return 0;
    }
}
$(function(){
    let vegpont=" https://pokeapi.co/api/v2/pokemon/ditto";
getAdatok(vegpont)

});

function getAdatok(vegpont){
fetch(vegpont)
.then((response)=>response.json())
.then((data)=> myDisplay(data))
.catch((error)=>console.log(error))
};
function pokemonMegjelenit(){

}
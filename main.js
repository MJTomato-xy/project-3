//project1
var project1 = {
    title: "Slowking",
    class: "cardClass",
    description: "Slowking undertakes research every day in an effort to solve the mysteries of the world. However, this Pokémon apparently forgets everything it has learned if the Shellder on its head comes off.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/199.png"
};
function checkCard1() {
    var container1 = document.querySelector("#card1");
    var title = document.createElement("h2");
    var pokemonImage = document.createElement("img");
    var description = document.createElement("p");
    var background = document.querySelector("#card1").classList.toggle("container1");
    
    description.innerHTML = project1.description;
    pokemonImage.src = project1.image;
    title.innerHTML = project1.title;
  
    title.className = "titleClass";
    description.className = "descriptionClass";
    pokemonImage.className = "imageClass";
  
    container1.appendChild(pokemonImage);
    container1.appendChild(title);
    container1.appendChild(description);
    container1.appendChild(background);
}

//project2
var project2 = {
    title: "Celebi",
    class: "cardClass",
    description: "This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png", 
};
function checkCard2() {
    var container2 = document.querySelector("#card2");
    var title = document.createElement("h2");
    var pokemonImage = document.createElement("img");
    var description = document.createElement("p");
    var background = document.querySelector("#card2").classList.toggle("container2");

    description.innerHTML = project2.description;
    pokemonImage.src = project2.image;
    title.innerHTML = project2.title;
  
    title.className = "titleClass";
    description.className = "descriptionClass";
    pokemonImage.className = "imageClass";
  
    container2.appendChild(pokemonImage);
    container2.appendChild(title);
    container2.appendChild(description);
    container2.appendChild(background);
}

//project3
var project3 = {
    title: "Pikachu",
    class: "cardClass",
    description: "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", 
};
function checkCard3() {
    var container3 = document.querySelector("#card3");
    var title = document.createElement("h2");
    var pokemonImage = document.createElement("img");
    var description = document.createElement("p");
    var background = document.querySelector("#card3").classList.toggle("container3");

    description.innerHTML = project3.description;
    pokemonImage.src = project3.image;
    title.innerHTML = project3.title;
  
    title.className = "titleClass";
    description.className = "descriptionClass";
    pokemonImage.className = "imageClass";
  
    container3.appendChild(pokemonImage);
    container3.appendChild(title);
    container3.appendChild(description);
    container3.appendChild(background);
}
//project4
var project4 = {
    title: "Froslass",
    class: "cardClass",
    description: "It freezes foes with an icy breath nearly -60 degrees Fahrenheit. What seems to be its body is actually hollow.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/478.png",
};
function checkCard4() {
    var container4 = document.querySelector("#card4");
    var title = document.createElement("h2");
    var pokemonImage = document.createElement("img");
    var description = document.createElement("p");
    var background = document.querySelector("#card4").classList.toggle("container4");
    
    description.innerHTML = project4.description;
    pokemonImage.src = project4.image;
    title.innerHTML = project4.title;
  
    title.className = "titleClass";
    description.className = "descriptionClass";
    pokemonImage.className = "imageClass";
  
    container4.appendChild(pokemonImage);
    container4.appendChild(title);
    container4.appendChild(description);
    container4.appendChild(background);
}
//project5
var project5 = {
    title: "Misdreavus",
    class: "cardClass",
    description: "Misdreavus frightens people with a creepy, sobbing cry. The Pokémon apparently uses its red spheres to absorb the fearful feelings of foes and turn them into nutrition.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/200.png",
};
function checkCard5() {
    var container5 = document.querySelector("#card5");
    var title = document.createElement("h2");
    var pokemonImage = document.createElement("img");
    var description = document.createElement("p");
    var background = document.querySelector("#card5").classList.toggle("container5");
    
    description.innerHTML = project5.description;
    pokemonImage.src = project5.image;
    title.innerHTML = project5.title;
  
    title.className = "titleClass";
    description.className = "descriptionClass";
    pokemonImage.className = "imageClass";
  
    container5.appendChild(pokemonImage);
    container5.appendChild(title);
    container5.appendChild(description);
    container5.appendChild(background);
}
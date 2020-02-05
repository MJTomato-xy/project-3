//project1
var project1 = {
    title: "Slowking",
    class: "cardClass",
    description: "Slowking undertakes research every day in an effort to solve the mysteries of the world. However, this Pokémon apparently forgets everything it has learned if the Shellder on its head comes off.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/199.png"
};
var counter1 = 0;
function checkCard1() {
    var container1 = document.querySelector("#card1");
    var title = document.createElement("h2");
    var pokemonImage = document.createElement("img");
    var description = document.createElement("p");
    counter1 += 1;
    if (counter1 < 2) {
    description.innerHTML = project1.description;
    pokemonImage.src = project1.image;
    title.innerHTML = project1.title;
    container1.style.backgroundImage = "linear-gradient(to bottom right, #f0477c, #9e0b4d)";
  
    title.className = "titleClass";
    description.className = "descriptionClass";
    pokemonImage.className = "imageClass";
  
    container1.appendChild(pokemonImage);
    container1.appendChild(title);
    container1.appendChild(description);
    container1.appendChild(background);
    }
}

//project2
var project2 = {
    title: "Celebi",
    class: "cardClass",
    description: "This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png", 
};

var counter2 = 0;
function checkCard2() {
    var container2 = document.querySelector("#card2");
    var title = document.createElement("h2");
    var pokemonImage = document.createElement("img");
    var description = document.createElement("p");
  
    counter2 += 1;
    if (counter2 < 2)
    {
    description.innerHTML = project2.description;
    pokemonImage.src = project2.image;
    title.innerHTML = project2.title;
    container2.style.backgroundImage = "linear-gradient(to bottom right, #d0f549, #278352)";
  
    title.className = "titleClass";
    description.className = "descriptionClass";
    pokemonImage.className = "imageClass";
  
    container2.appendChild(pokemonImage);
    container2.appendChild(title);
    container2.appendChild(description);
    container2.appendChild(background);
    }

}

//project3
var project3 = {
    title: "Pikachu",
    class: "cardClass",
    description: "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png", 
};
var counter3 = 0;
function checkCard3() {
    var container3 = document.querySelector("#card3");
    var title = document.createElement("h2");
    var pokemonImage = document.createElement("img");
    var description = document.createElement("p");
   
    counter3 += 1;
    if (counter3 < 2) {
    description.innerHTML = project3.description;
    pokemonImage.src = project3.image;
    title.innerHTML = project3.title;
    container3.style.backgroundImage = "linear-gradient(to bottom right, #f2d50f, #ff8819)";

    title.className = "titleClass";
    description.className = "descriptionClass";
    pokemonImage.className = "imageClass";
  
    container3.appendChild(pokemonImage);
    container3.appendChild(title);
    container3.appendChild(description);
    container3.appendChild(background);
    }
}
//project4
var project4 = {
    title: "Froslass",
    class: "cardClass",
    description: "It freezes foes with an icy breath nearly -60 degrees Fahrenheit. What seems to be its body is actually hollow.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/478.png",
};
var counter4 = 0;
function checkCard4() {
    var container4 = document.querySelector("#card4");
    var title = document.createElement("h2");
    var pokemonImage = document.createElement("img");
    var description = document.createElement("p");
    counter4 += 1;
    if (counter4 < 2) {
    description.innerHTML = project4.description;
    pokemonImage.src = project4.image;
    title.innerHTML = project4.title;
    container4.style.backgroundImage = "linear-gradient(to bottom right, #93a5cf, #6fd6ff)";

    title.className = "titleClass";
    description.className = "descriptionClass";
    pokemonImage.className = "imageClass";
  
    container4.appendChild(pokemonImage);
    container4.appendChild(title);
    container4.appendChild(description);
    container4.appendChild(background);
    }
}
//project5
var project5 = {
    title: "Misdreavus",
    class: "cardClass",
    description: "Misdreavus frightens people with a creepy, sobbing cry. The Pokémon apparently uses its red spheres to absorb the fearful feelings of foes and turn them into nutrition.",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/200.png",
};
var counter5 = 0;
function checkCard5() {
    var container5 = document.querySelector("#card5");
    var title = document.createElement("h2");
    var pokemonImage = document.createElement("img");
    var description = document.createElement("p");

    counter5 += 1;
    if (counter5 < 2) {
    description.innerHTML = project5.description;
    pokemonImage.src = project5.image;
    title.innerHTML = project5.title;
    container5.style.backgroundImage = "linear-gradient(to bottom right, #1d2671, #764ba2)";

    title.className = "titleClass";
    description.className = "descriptionClass";
    pokemonImage.className = "imageClass";
  
    container5.appendChild(pokemonImage);
    container5.appendChild(title);
    container5.appendChild(description);
    container5.appendChild(background);
    }
}

/*movemouse*/
function mouseLog() {
    var x = event.pageX;
    var y = event.pageY;
    var pokeball = document.querySelector("#poke-container");
    pokeball.style.left = x - 10 + "px";
    pokeball.style.top = y - 50 + "px";
}
///animation 1
function waggleOn1() {
  var pokemon = document.querySelector("#card1");
  pokemon.style.animation = "waggle 1s ease-in-out infinite alternate";
  pokemon.style.boxShadow = "0 0 3rem";
}

function waggleOff1() {
  var pokemon = document.querySelector("#card1");
  pokemon.style.animation = "";
  pokemon.style.boxShadow = "";
}
///animation 2
function waggleOn2() {
    var pokemon = document.querySelector("#card2");
    pokemon.style.animation = "waggle 1s ease-in-out infinite alternate";
    pokemon.style.boxShadow = "0 0 3rem";
  }
  
  function waggleOff2() {
    var pokemon = document.querySelector("#card2");
    pokemon.style.animation = "";
    pokemon.style.boxShadow = "";
  }
///animation 3
function waggleOn3() {
    var pokemon = document.querySelector("#card3");
    pokemon.style.animation = "waggle 1s ease-in-out infinite alternate";
    pokemon.style.boxShadow = "0 0 3rem"; 
  }
  
  function waggleOff3() {
    var pokemon = document.querySelector("#card3");
    pokemon.style.animation = "";
    pokemon.style.boxShadow = "";
  }
///animation 4
function waggleOn4() {
    var pokemon = document.querySelector("#card4");
    pokemon.style.animation = "waggle 1s ease-in-out infinite alternate";
    pokemon.style.boxShadow = "0 0 3rem";
  }
  
  function waggleOff4() {
    var pokemon = document.querySelector("#card4");
    pokemon.style.animation = "";
    pokemon.style.boxShadow = "";
  }
///animation 5
function waggleOn5() {
    var pokemon = document.querySelector("#card5");
    pokemon.style.animation = "waggle 1s ease-in-out infinite alternate";
    pokemon.style.boxShadow = "0 0 3rem";
  }
  
  function waggleOff5() {
    var pokemon = document.querySelector("#card5");
    pokemon.style.animation = "";
    pokemon.style.boxShadow = "";
  }

  //  var top = ducument.querySelector(".pokemon-top-part");
  //  var bottom = document.querySelector("pokemon-bottom-part");
  //  var white = document.querySelector("white-part");
  //  var black = document.querySelector("black-line");
   
  //  bottom.appendChild(white);
  //  bottom.appendChild(black);
  //  ball.appendChild(top);
  //  ball.appendChild(bottom);

// $("show").click(function() {
//   $("#maincontainer").show(300);
// });

function showBall() {
  var ball = document.querySelector("#maincontainer");
  if (ball.style.display === "") {
    ball.style.display = "none";
  } else if (ball.style.display === "none") {
    ball.style.display = "";
  }
  ball.style.animation = "shake 0.5s infinite";
}
/*Menu*/

var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
    container.classList.toggle("active-cont");
});
if (screen.width < 992) {
  var sidebar = document.getElementById("sidebar");
  var mc = document.getElementById("mc");
  //alert(sidebar.classList('active-nav'));
  if(sidebar.classList.contains('active-nav')){
    sidebar.classList.remove('active-nav');
    mc.classList.remove('active-cont');
  }
}


/************/

/*Pokedex*/

const p = document.querySelector(".contenidopk");
const carga = document.querySelector("#carga");

/*Crea contenido elementos de cada pokemon*/
function datapokemon(pokemon){
  /*creando elemientos*/
  const col = document.createElement('div');
  const imgp = document.createElement('div');
  const img = document.createElement('img');
  const numero = document.createElement('p');
  const nombrep = document.createElement('p');

  /*colors*/
  const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
  }
  const main_types = Object.keys(colors);
  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type];
  // background is dependent on type
  imgp.style.backgroundColor = color;



  /*agregando clases*/ 
  col.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'col-6','flexc');
  imgp.classList.add('pokbox');
  img.classList.add('imgpok');
  nombrep.classList.add('nombrep');

  

  /*relacion*/
  imgp.appendChild(img);
  
  /*enviando data*/
  numero.textContent = `#${pokemon.id.toString().padStart(3,0)}`;
  img.src = pokemon.sprites.front_default;
  nombrep.textContent = pokemon.name;
  
  
  //rowb.appendChild(col);
  col.appendChild(imgp);
  col.appendChild(numero);
  col.appendChild(nombrep);
  p.appendChild(col);
}

arraypokemon(24);

/*llama a la funcion getpokemon para pasar el id del pokemon*/ 
function arraypokemon(n){
  carga.style.display = "block";
  for (let i = 1; i <= n; i++){
    getpokemon(i);
  }
}

/*obtiene el id de pokemon que viene de la funcion arraypokemon y pasa los datos a la vista*/ 
function getpokemon(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json()).then((data) => 
  {
    datapokemon(data);
    carga.style.display = "none";
  });
}


/************/


$(function() {
  $(".enviar").click(function() {
    swal(
      'Exito',
      'Este formulario aun no a sido programado',
      'success'
    )
  });
});
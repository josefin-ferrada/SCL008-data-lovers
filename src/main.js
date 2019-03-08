const pokemonData = window.POKEMON.pokemon;
let searchBtn = document.getElementById('search');
let logoInit = document.getElementById('logo-dexi');
let curiousBtn= document.getElementById('curius-data');
let firstScreen =  '\
                      <div id="carouselExampleIndicators" class="carousel slide back-movil" data-ride="carousel">\
                        <ol class="carousel-indicators">\
                          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>\
                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>\
                        </ol>\
                        <div class="carousel-inner">\
                          <div class="carousel-item active ">\
                            <img class="d-block mx-auto banner-image" id="banner1"  src="http://img.fenixzone.net/i/DlkVGPF.png" alt="First slide">\
                          </div>\
                          <div class="carousel-item">\
                            <img class="d-block mx-auto" style="width: 1000px; height:500px;" src="http://img.fenixzone.net/i/T4OjDSC.png" alt="Second slide">\
                          </div>\
                        </div>\
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">\
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
                          <span class="sr-only">Previous</span>\
                        </a>\
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">\
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>\
                            <span class="sr-only">Next</span>\
                        </a>\
                        </div>\
                        <div class= "banner-movil" id="movil">\
                        </div>\
                        <div class="col-md-6" >\
                          <div class="containerTitle" id="title-movil">\
                              <p class="font-title">BIENVENID@ A TU GUÍA POKÉMON</p>\
                              <hr class="my-4">\
                              <p class="font-subtitle">En DexiPoke encontrarás todos los pokémon de la región Kanto</p>\
                          </div>\
                        </div>';
let secondScreen = '\
                    <form>\
                      <div class="form-row margin-select">\
                        <div class="form-group col-md-3">\
                          <label for="exampleFormControlSelect1">Seleccione el tipo de Pokémon:</label>\
                          <select class="form-control" id="select-type" >\
                            <option value= "none">Ninguno</option>\
                            <option value="Poison">Poison</option>\
                            <option value="Grass">Grass </option>\
                            <option value="Fire">Fire</option>\
                            <option value="Electric">Electric</option>\
                            <option value="Water">Water</option>\
                            <option value="Psychic">Psychic</option>\
                            <option value="Dragon">Dragon </option>\
                            <option value="Flying">Flying</option>\
                            <option value="Ice">Ice</option>\
                            <option value="Rock">Rock</option>\
                          </select>\
                        </div>\
                        <div class="form-group col-md-3">\
                          <label for="exampleFormControlSelect1">Seleccione tipo de organización:</label>\
                          <select class="form-control" id="select-by" >\
                            <option value= "none">Ninguno</option>\
                            <option value="name">Nombre</option>\
                            <option value="id">Número</option>\
                          </select>\
                        </div>\
                        <div class="form-group col-md-3">\
                          <label for="order">Seleccione organización:</label>\
                          <select class="form-control" id="order" >\
                            <option value="none">Ninguno</option>\
                            <option value="asc">Ascendente</option>\
                            <option value="desc">Descendente</option>\
                          </select>\
                        </div>\
                        <div class="form-group col-md-2">\
                          <button class="btn btn-primary font-nav btn-color" id="clean">Limpiar</button>\
                        </div>\
                      </div>\
                    </form>\
                    <div class="row">\
                      <div class="col-md-12">\
                        <div class="card-group" id="id1">\
                         </div>\
                      </div>\
                    </div>';
let thirdCuriousData = '\
                        <div class="row row-curious-data">\
                        <div class="col-4 background-kanto">\
                          </div>\
                           <div class="col-7 container-curious-data">\
                            <p class="title-curious-data">DATOS CURIOSOS DE POKÉMONES DE LA REGIÓN KANTO</p>\
                            <hr class="my-4-curious">\
                            <p class="subtititle-curious">Aquí encontrarás estadisticas sobre tipo y peso de tus pokémones preferidos, conocer esta información te hará el mas culto maestro pokémon!</p>\
                          </div>\
                        </div>\
                        <div class="row row-curious-data">\
                          <div class="col-4 background-clock" id="percent">\
                          </div>\
                          <div class="col-7 container-curious-data">\
                            <p class="title-curious-data">¿Quieres saber que porcentaje de pokémon según su tipo hay en la región Kanto?</p>\
                            <hr class="my-4-curious">\
                            <label for="exampleFormControlSelect1">Seleccione el tipo de Pokémon:</label>\
                            <select class="form-control" id="select-type-curious" >\
                              <option value= "none">Ninguno</option>\
                              <option value="Poison">Poison</option>\
                              <option value="Grass"> Grass </option>\
                              <option value="Fire"> Fire</option>\
                              <option value="Electric"> Electric</option>\
                              <option value="Water"> Water</option>\
                              <option value="Ice"> Ice</option>\
                              <option value="Flying"> Flying</option>\
                              <option value="Psychic"> Psychic</option>\
                              <option value="Dragon"> Dragon</option>\
                              <option value="Rock"> Rock</option>\
                              <option value="Normal"> Normal</option>\
                              <option value="Fighting"> Fighting</option>\
                              <option value="Ghost"> Ghost</option>\
                              <option value="Ground"> Ground</option>\
                            </select>\
                          </div>\
                        </div>';


window.onload = document.getElementById('welcome').innerHTML = firstScreen;
function showPokemonCard(dataToPrint) {
  let text = ''; // comienza con string vacío para que por cada iteracion se rellene
  let cardContainer = document.getElementById("id1");
  dataToPrint.forEach(function(element) { //for each para que por cada uno saque los datos 
    let multipliers;
    let caramels;
    if (element.multipliers== null) {
      multipliers = "-";
    }
    else{
      multipliers = element.multipliers;
    }
    if (element.candy_count == undefined) {
      caramels = "-"
    }
    else{
      caramels = element.candy_count;
    }
        text += '\
                <div class="col-md-2">\
                  <div class="card" data-toggle="modal" data-target="#exampleModal' + element.id + '">\
                    <h6 class="card-text">' + element.num + '</h6>\
                    <img src="' + element.img + '" class="card-img-top card-img-poke" alt="...">\
                    <div class="card-body">\
                      <h5 class="card-title">' + element.name + '</h5>\
                      <p class="card-text">' + element.type + '</p>\
                    </div>\
                  </div>\
                </div>\
                <div class="modal fade" id="exampleModal' + element.id + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\
                  <div class="modal-dialog" role="document">\
                    <div class="modal-content">\
                      <div class="modal-header">\
                        <h5 class="modal-title" id="exampleModalLabel">' + element.name + '</h5>\
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                          <span aria-hidden="true">&times;</span>\
                        </button>\
                      </div>\
                      <div class="modal-body">\
                        <h6 class="card-text">' + element.num + '</h6>\
                        <img src="' + element.img + '" class="card-img-modal" alt="...">\
                        <table id="pokedetails">\
                          <tr>\
                          <th class="card-text">Caramelo:</th>\
                          <th class="card-text">' + element.candy + '</th>\
                          </tr>\
                          <tr>\
                          <th class="card-text">Caramelos para evolucionar:</th>\
                          <th class="card-text">' + caramels + '</th>\
                          </tr>\
                          <tr>\
                          <th class="card-text">Huevos:</th>\
                          <th class="card-text">' + element.egg + '</th>\
                          </tr>\
                          <tr>\
                          <th class="card-text">Oportunidades de aparición:</th>\
                          <th class="card-text">' + element.spawn_chance + '</th>\
                          </tr>\
                          <tr>\
                          <th class="card-text">Hora de aparición:</th>\
                          <th class="card-text">' + element.spawn_time + '</th>\
                          </tr>\
                          <tr>\
                          <th class="card-text">Multipliers:</th>\
                          <th class="card-text">' + multipliers + '</th>\
                          </tr>\
                          <tr>\
                          <th class="card-text">Debilidades:</th>\
                          <th class="card-text">' + element.weaknesses + '</th>\
                        </table>\
                    </div>\
                    <div class="modal-footer">\
                    </div>\
                  </div>\
                </div>\
              </div>';
    });

    cardContainer.innerHTML = text;
}
searchBtn.addEventListener('click', () => {
  document.getElementById('welcome').innerHTML = "";
  document.getElementById('welcome').innerHTML = secondScreen;
  showPokemonCard(pokemonData);
  let select = document.getElementById("select-type");
  let selectOrder = document.getElementById("order");
  let resultFilter;
  let selectSort = document.getElementById("select-by");
  let cleanBtn = document.getElementById('clean');

  select.addEventListener('change', () => {
    let condition = select.value;
    resultFilter = window.data.filterData(pokemonData, condition);
    showPokemonCard(resultFilter);

    selectOrder.addEventListener('change', () => {
      let sortOrder = selectOrder.value;
      let sortBy = selectSort.value;
      if (resultFilter === undefined) {
          resultFilter = window.data.sortData(pokemonData, sortOrder, sortBy);
          showPokemonCard(resultFilter);

      } else {
          resultFilter = window.data.sortData(resultFilter, sortOrder, sortBy);
          showPokemonCard(resultFilter);

      }
      cleanBtn.addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('select-type').value = "none";
        document.getElementById('select-by').value = "none";
        document.getElementById('order').value = "none";
        showPokemonCard(pokemonData);
      });
    });
  });
});

logoInit.addEventListener('click', () => {
  document.getElementById('welcome').innerHTML = '';
  document.getElementById('welcome').innerHTML = firstScreen;
});

curiousBtn.addEventListener('click', () =>{
  document.getElementById('welcome').innerHTML = '';
  document.getElementById('welcome').innerHTML = thirdCuriousData;
  let selectCurious = document.getElementById('select-type-curious');
  
  selectCurious.addEventListener('change', () =>{
    let valueSelect = selectCurious.value;
    let result;
    result = window.data.computeStats(pokemonData, valueSelect);
    document.getElementById('percent').innerHTML= '<p class="percent">'+result+'</p>\
                                                    <p class="text-percent"> de tipo '+valueSelect+'</p>';
  });
});



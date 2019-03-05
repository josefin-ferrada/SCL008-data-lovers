

const pokemonData = POKEMON.pokemon;
let searchBtn = document.getElementById('search');
let logoInit = document.getElementById('logo-dexi');
let firstScreen = '\
                  <div class="row margin-welcome" >\
                    <div class="col-md-6" >\
                      <div class="pokemonImage" id="welcomeContainer" >\
                      </div>\
                    </div>\
                    <div class="col-md-6" >\
                      <div class="containerTitle">\
                        <p class="font-title">BIENVENID@ A TU GUÍA POKÉMON</p>\
                        <p class="font-subtitle">Comienza la busqueda de tu Pokémon favorito, tenemos todos sus detalles para que seas el mejor maestro Pokémon</p>\
                      </div>\
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
                            <option value="Grass"> Grass </option>\
                            <option value="Fire"> Fire</option>\
                            <option value="Electric"> Electric</option>\
                            <option value="Water"> Water</option>\
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
                        <div class="card-group">\
                          <div class="row" id="id1">\
                            <!-- Clase Dispositivo Medida\
                            col-xs- móvil < 768 px\
                            col-sm- tablets >= 768 px\
                            col-md- desktop >= 992 px\
                            col-lg- Desktop más grande  >= 1200 px -->\
                          </div>\
                        </div>\
                      </div>\
                    </div>\
                  ';

window.onload = document.getElementById('welcome').innerHTML= firstScreen;

function showPokemonCard(dataToPrint) {
  let text = ''; // comienza con string vacío para que por cada iteracion se rellene
  let cardContainer = document.getElementById("id1");
  dataToPrint.forEach(function(element){ //for each para que por cada uno saque los datos 

  text += '\
      <div class="col-md-2">\
                 <div class="card" data-toggle="modal" data-target="#exampleModal'+element.id+'">\
                <div class="modal fade" id="exampleModal'+element.id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\
                  <div class="modal-dialog" role="document">\
                    <div class="modal-content">\
                      <div class="modal-header">\
                        <h5 class="modal-title" id="exampleModalLabel">'+element.name+'</h5>\
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                          <span aria-hidden="true">&times;</span>\
                        </button>\
                      </div>\
                      <div class="modal-body">\
                      <h6 class="card-text">'+element.num+'</h6>\
                         <img src="'+element.img+'" class="card-img-modal" alt="...">\
                         <table id="pokedetails">\
                         <tr>\
                         <th class="card-text">Caramelo:</th>\
                        <th class="card-text">'+element.candy+'</th>\
                       </tr>\
                       <tr>\
                       <th class="card-text">Caramelos para evolucionar:</th>\
                       <th class="card-text">'+element.candy_count+'</th>\
                       </tr>\
                       <tr>\
                       <th class="card-text">Huevos:</th>\
                       <th class="card-text">'+element.egg+'</th>\
                       </tr>\
                       <tr>\
                       <th class="card-text">Oportunidades de aparición:</th>\
                       <th class="card-text">'+element.spawn_chance+'</th>\
                       </tr>\
                       <tr>\
                       <th class="card-text">Hora de aparición:</th>\
                       <th class="card-text">'+element.spawn_time+'</th>\
                       </tr>\
                       <tr>\
                       <th class="card-text">Multipliers:</th>\
                       <th class="card-text">'+element.multipliers+'</th>\
                       </tr>\
                       <tr>\
                       <th class="card-text">Debilidades:</th>\
                       <th class="card-text">'+element.weaknesses+'</th>\
                      </table>\
                      </div>\
                      <div class="modal-footer">\
                        <button type="button" class="btn btn-primary">Cerrar</button>\
                      </div>\
                    </div>\
                  </div>\
                      </div>\
                      <h6 class="card-text">'+element.num+'</h6>\
                <img src="'+element.img+'" class="card-img-top card-img-poke" alt="...">\
                <div class="card-body">\
                  <h5 class="card-title">'+element.name+'</h5>\
                  <p class="card-text">'+element.type+'</p>\
                </div>\
                </div>\
            </div>\
\
    '
              });

    cardContainer.innerHTML = text;
}
searchBtn.addEventListener('click', () => {


  document.getElementById('welcome').innerHTML="";
  document.getElementById('welcome').innerHTML=secondScreen;
  showPokemonCard(pokemonData);
  let select = document.getElementById("select-type");
  let selectOrder = document.getElementById("order");
  let resultFilter;
  let selectSort = document.getElementById("select-by");
  let cleanBtn= document.getElementById('clean');
    

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
        
      }
      else{
        resultFilter = window.data.sortData(resultFilter, sortOrder, sortBy);
        showPokemonCard(resultFilter);
        
      }
    cleanBtn.addEventListener('click', (event)=> {
      event.preventDefault();
      document.getElementById('select-type').value="none";
      document.getElementById('select-by').value="none";
      document.getElementById('order').value="none";
      showPokemonCard(pokemonData);

   

      });
    });
  });
});



logoInit.addEventListener('click', () =>{

  document.getElementById('welcome').innerHTML='';
  document.getElementById('welcome').innerHTML= firstScreen;
                                            
});
window.onload = inicializacion(POKEMON.pokemon);

const pokemones1 = POKEMON.pokemon;
let select = document.getElementById("select-tipo");//donde pondré los elementos que quiero manipular
let select1 = document.getElementById("order");
let resultadoFiltro;
let selectSort = document.getElementById("select-orden");





function inicializacion(lista) {
  let texto = ''; // comienza con string vacío para que por cada iteracion se rellene
  let elemento = document.getElementById("id1");
  lista.forEach(function(element){ //for each para que por cada uno saque los datos 

  texto += '\
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
                <img src="'+element.img+'" class="card-img-top" alt="...">\
                <div class="card-body">\
                  <h5 class="card-title">'+element.name+'</h5>\
                  <p class="card-text">'+element.type+'</p>\
                </div>\
                </div>\
            </div>\
\
    '
              });

    elemento.innerHTML = texto;
}

select.addEventListener('change', () => {
     // comienza con string vacío para que por cada iteracion se rellene
    let condition = select.value;
   resultadoFiltro = window.data.filterData(pokemones1, condition);
   inicializacion(resultadoFiltro);
    
    
});



select1.addEventListener('change', () => {
    let sortOrder = select1.value;
     let sortPor = selectSort.value;

   if (resultadoFiltro === undefined) {
    resultadoFiltro = window.data.sortData(pokemones1, sortOrder, sortPor);
    inicializacion(resultadoFiltro);
    console.log("entre a undefinded")
  }
  else{
    resultadoFiltro = window.data.sortData(resultadoFiltro, sortOrder, sortPor);
    inicializacion(resultadoFiltro);
    console.log("entre a resultadoFiltro")
  }
});


window.data = {

    filterData: (pokemonData, condition) => {
        let result;
        if (condition === "none") {
            result = pokemonData;
        } else {
            result = pokemonData.filter(element => {
                if (element.type.includes(condition)) {
                    return element;
                }
            });
        }

        return result;

    },

    sortData: (pokemonData, Order, sortBy) => {
        let ordered;

        if (sortBy === "name") {
            if (Order === "asc") {
                ordered = pokemonData.sort((a, b) => {
                    if (a.name < b.name)
                        return -1;
                    else if (a.name > b.name)
                        return 1;
                    else
                        return 0;
                });
            } else if (Order === "desc") {
                ordered = pokemonData.sort((a, b) => {
                    if (a.name < b.name)
                        return 1;
                    else if (a.name > b.name)
                        return -1;
                    else
                        return 0;
                });
            }


        } else if (sortBy === "id") {
            if (Order === 'asc' || Order === 'none') {
                ordered = pokemonData.sort((a, b) => {
                    if (a.id < b.id)
                        return -1;
                    else if (a.id > b.id)
                        return 1;
                    else
                        return 0;
                });
            } else if (Order === 'desc') {
                ordered = pokemonData.sort((a, b) => {
                    if (a.id < b.id)
                        return 1;
                    else if (a.id > b.id)
                        return -1;
                    else
                        return 0;
                });
            }
        }

        return ordered;


    },

    /*computeStats: (data, tipo) => {

        En la region del Kanto que porcentaje de pokemones hay segun su tipo:
        tipo=Select tipo:
         
        let counter=0;
         data.forEach(function(element) {
             if (tipo===element)
             {
                 counter=counter+1;
             }
            } 
        let perType=(counter/150)*100;
             

             



    },*/
}
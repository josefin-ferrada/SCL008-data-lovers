window.data = {

    filterData: (pokemones, condition) => {
        let filtrada;
        if (condition === "none") {
            filtrada = pokemones;
        } else {
            filtrada = pokemones.filter(element => {
                if (element.type.includes(condition)) {
                    return element;
                }
            });
        }

        return filtrada;

    },

    sortData: (pokemones, Order, sortBy) => {
        let ordenada;

        if(sortBy === "name"){
                if (Order === "a-z") {
                ordenada = pokemones.sort((a, b) => {
                    if (a.name < b.name)
                        return -1;
                    else if (a.name > b.name)
                        return 1;
                    else
                        return 0;
                });
            } else if (Order === "z-a") {
                ordenada = pokemones.sort((a, b) => {
                    if (a.name < b.name)
                        return 1;
                    else if (a.name > b.name)
                        return -1;
                    else
                        return 0;
                });
            }


        } else if(sortBy === "id"){
                    if (Order === '1-150' || Order === 'none') {
                    ordenada = pokemones.sort((a, b) => {
                        if (a.id < b.id)
                            return -1;
                        else if (a.id > b.id)
                            return 1;
                        else
                            return 0;
                    });
                } else if (Order === '150-1') {
                    ordenada = pokemones.sort((a, b) => {
                        if (a.id < b.id)
                            return 1;
                        else if (a.id > b.id)
                            return -1;
                        else
                            return 0;
                    });
                }
        }

        return ordenada;


    },

    /*computeStats: (data) => {

    },*/
}


import axios from 'axios';
import { SHOW_POKEMONS, SEARCH_POKEMON, TYPES_POKEMON, POKE_POST, ORDER_ASCENDING, ORDER_DESCENDING, ORDER_ASCENDING_ATTACK, ORDER_DESCENDING_ATTACK, POKEMONS_DETAIL } from './action-types';

export const showPokemons = () => {
    return async (dispatch) => {
        try {
            const urlDB = await axios.get('http://localhost:3001/pokemons');
            return dispatch({
                type: SHOW_POKEMONS,
                payload: urlDB.data
            })
        } catch (error) {
            console.log(error.menssage);
        }
    }
}

export const getSearchName = (name) => {
    return async (dispatch) => {
        try {
            const endpoint = await axios.get(`http://localhost:3001/pokemons/?name=${name}`);
            return dispatch({
                type: SEARCH_POKEMON,
                payload: endpoint.data
            })
  
        } catch (error) {
            alert("Pokemon not found")
            } 
        }
}

export const orderPokemons = (order) => {
    return async (dispatch) => {
        if (order === "A") {
            dispatch ({type: ORDER_ASCENDING});
        }
        if (order === "Z") {
            dispatch ({type: ORDER_DESCENDING});
        }
        if (order === "less") {
            dispatch ({type: ORDER_DESCENDING_ATTACK});
          }
          if (order === "more") {
            dispatch ({type: ORDER_ASCENDING_ATTACK});
          }
    }
}

export const getPokemonsTypes = () => {
    return async (dispatch) => {
        try {
            let endpoint = await axios.get(`http://localhost:3001/types`);
            return dispatch({
                type: TYPES_POKEMON,
                payload: endpoint.data
            })
  
        } catch (error) {
            alert("Pokemon types not found")
            } 
        }
}


export const createPokemon = (pokemon) => {
    console.log(pokemon);
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/pokemons', pokemon);
            alert('Creado correctamente')
            return dispatch({
                type: POKE_POST,
                payload: response.data
            });
        } catch (error) {
            alert("Failed to create Pokemon");
        }
    };
};

export const getPokemonsDetail = (id) => {
    return async (dispatch) => {
        try {
            const endpoint = await axios.get(`http://localhost:3001/pokemons/${id}`)
            dispatch({
                type: POKEMONS_DETAIL,
                payload: endpoint.data
            });
  
        } catch (error) {
            alert(error.menssage)
        }
    }
};




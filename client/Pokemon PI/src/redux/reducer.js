import { SHOW_POKEMONS, SEARCH_POKEMON, ORDER_ASCENDING, ORDER_DESCENDING, TYPES_POKEMON, ORDER_DESCENDING_ATTACK, ORDER_ASCENDING_ATTACK, POKE_POST } from "./action-types";

const initialState = {
    pokemons: [],
    types: [],
    

    
      
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }
        case SEARCH_POKEMON:
            return {
                ...state,
                pokemons: action.payload.length > 0 ? action.payload : state.pokemons,
            }
        case ORDER_ASCENDING:
            console.log('Ordenando ascendente......');
                return {
                  ...state,
                  pokemons: [...state.pokemons].sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                  }),
            };
        case ORDER_DESCENDING:
            console.log('Ordenando descending......');
                return {
                    ...state,
                    pokemons: [...state.pokemons].sort((a, b) => {
                    if (a.name > b.name) return -1;
                    if (a.name < b.name) return 1;
                    return 0;
                }),
            };
            case ORDER_DESCENDING_ATTACK:
                console.log('Ordenando descendingAtack......');
                    return {
                        ...state,
                        pokemons: [...state.pokemons].sort((a, b) => {
                        if (a.attack < b.attack) return -1;
                        if (a.attack > b.attack) return 1;
                        return 0;
                    }),
            };
            case ORDER_ASCENDING_ATTACK:
                console.log('Ordenando ascendingAtack......');
                    return {
                        ...state,
                        pokemons: [...state.pokemons].sort((a, b) => {
                        if (a.attack > b.attack) return -1;
                        if (a.attack < b.attack) return 1;
                        return 0;
                    }),
          };
            case TYPES_POKEMON:
                return {
                    ...state,
                    types: action.payload,
            }
            case POKE_POST:
            // Agregar el nuevo Pokemon al estado
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload],
            };
        
        default:
            return{...state}
    }
}


export default reducer;
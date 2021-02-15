const ADD_POKEMON = 'ADD_POKEMON';

const initialState = {
  pokemons: [],
};

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMON: {
      return { 
        ...state, 
        pokemons : [ ...state.pokemons, {name: action.name, url: action.url, image: action.image}]
      };
    }

    default:
      return state;
  }
};

export default pokemons;

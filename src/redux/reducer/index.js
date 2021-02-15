import { combineReducers } from 'redux';
import pokemonReducer from './pokemon-reducer';
import profileReducer from './profile-reducer';

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  profiles: profileReducer,
});

export default rootReducer;

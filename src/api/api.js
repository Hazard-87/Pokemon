import axios from 'axios';
import { setPokemon } from '../redux/action/pokemonsAC';
import { setProfile } from '../redux/action/profileAC';


export const fetchPokemon = (size, page) => async (dispatch) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${size}&offset=${page}`);
  
  let resp = res.data.results;
 
 resp.map(async (item) => {
    let response = await axios.get(item.url);
    dispatch(setPokemon(item.name, item.url, response.data.sprites.other.dream_world.front_default));
  });
};

export const getPokemon = (path) => async (dispatch) => {
  let res = await axios.get(`https://pokeapi.co/api/v2${path}`);
  dispatch(setProfile(res.data));
};

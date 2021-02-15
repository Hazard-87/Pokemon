import React from 'react';
import {useDispatch} from 'react-redux'

import PokemonBlock from '../components/PokemonBlock';

function PokemonBlocks({ pokemons }) {

  return (
    <div className="content-blocks">
      <PokemonBlock pokemons={pokemons}  />
    </div>
  );
}

export default PokemonBlocks;

import React from 'react';

import PokemonBlock from '../components/PokemonBlock';

function PokemonBlocks({ pokemons }) {

  return (
    <div className="content-blocks">
      <PokemonBlock pokemons={pokemons} />
    </div>
  );
}

export default PokemonBlocks;

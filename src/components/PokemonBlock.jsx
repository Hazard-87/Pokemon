import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getPokemon } from '../api/api';

function PokemonBlock({ pokemons }) {
  const dispatch = useDispatch();

  const setPokemon = (name) => {
    const url = `/pokemon/${name}`;
    dispatch(getPokemon(url));
  };

  return (
    <>
      {pokemons.map((item, index) => (
        <Link
          className="content-blocks__item"
          to={`/pokemon/${item.name}`}
          key={item.name + index}
          onClick={() => setPokemon(item.name)}>
          <img className="content-blocks__img" src={item.image} alt="img" />
          <div className="content-blocks__title">{item.name[0].toUpperCase() + item.name.slice(1)}</div>
        </Link>
      ))}
    </>
  );
}

export default PokemonBlock;

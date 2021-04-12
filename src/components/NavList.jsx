import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPokemon } from '../api/api';

function NavList({ pokemons }) {
  const dispatch = useDispatch();

  const setPokemon = (name) => {
    const url = `/pokemon/${name}`;
    dispatch(getPokemon(url));
  };

  return (
    <div className='nav__menu-list'>
      {pokemons.map((item, index) => (
        <Link
          className="nav__list-item"
          to={`/pokemon/${item.name}`}
          key={item.name + index}
          onClick={() => setPokemon(item.name)}>
          {item.name[0].toUpperCase() + item.name.slice(1)}
        </Link>
      ))}
    </div>
  );
}

export default NavList;

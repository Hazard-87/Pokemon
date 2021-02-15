import React from 'react';
import { Link } from 'react-router-dom';

import NavList from '../components/NavList';

function Nav({ pokemons }) {

  return (
    <nav className="nav">
      <div className="nav__list">
        <Link className="nav__home" to={'/'}>
          HOME
        </Link>
        <NavList pokemons={pokemons} />
      </div>
    </nav>
  );
}

export default Nav;

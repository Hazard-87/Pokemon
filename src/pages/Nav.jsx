import React from 'react';
import { Link } from 'react-router-dom';

import NavList from '../components/NavList';

function Nav({ pokemons }) {

  return (
    <nav className="nav">

      <div className='nav__list-link'>
        <Link className="nav__home" to={'/'}>
          HOME
          </Link>
      </div>
      <div className='nav__list-items'>
        <NavList pokemons={pokemons} />
      </div>

    </nav>
  );
}

export default Nav;

import React from 'react';

import NavList from '../components/NavList'

import menuCloseSvg from '../assets/img/menuClose.svg';

function Menu({ visibleMenu, onVisibleMenu, pokemons }) {
  return (
    <>
      <div className={visibleMenu ? 'menu-popup' : 'menu-popup hidden'}>
        <div className="menu-popup__block">
          <div className="menu-popup__title">List</div>
          <img className="menu-popup__close" src={menuCloseSvg} onClick={onVisibleMenu} alt='' />
        </div>
        <div className="menu-list">

          <NavList pokemons={pokemons} />

        </div>
      </div>
    </>
  );
}

export default Menu;

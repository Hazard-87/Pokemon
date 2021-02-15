import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import PokemonBlocks from './pages/PokemonBlocks';
import PokemonPage from './pages/PokemonPage';
import Nav from './pages/Nav';
import Menu from './components/Menu';
import { fetchPokemon } from './api/api';

const App = () => {
  const [visibleMenu, setVisibleMenu] = React.useState(false);
  const dispatch = useDispatch();
  const { pokemons } = useSelector(({ pokemons }) => pokemons);
  const profile = useSelector(({ profiles }) => profiles);

  useEffect(() => {
    dispatch(fetchPokemon(100, 0));
  }, []);

  const onVisibleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <header className="header">
            <div className="header__menu" onClick={onVisibleMenu}>
              Menu
              <Menu visibleMenu={visibleMenu} onVisibleMenu={onVisibleMenu} pokemons={pokemons} />
            </div>
            <Link className="header__home" to="/">
              HOME
            </Link>
          </header>
          <Nav pokemons={pokemons} />
          <div className="content">
            <Route exact path="/" component={() => <PokemonBlocks pokemons={pokemons} />} />
            <Route path="/pokemon/" component={() => <PokemonPage profile={profile} />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

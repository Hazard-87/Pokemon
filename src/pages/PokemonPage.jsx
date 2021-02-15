import React from 'react';
import { useDispatch } from 'react-redux';

import { getPokemon } from '../api/api';

function PokemonPage({ profile }) {
  const dispatch = useDispatch();
  let types = null;
  let abilities = null;
  if (profile.sprites) {
    types = profile.types.map((item) => item.type.name).join(', ');

    abilities = profile.abilities.map((item) => item.ability.name).join(', ');
  }

  React.useEffect(() => {
    dispatch(getPokemon(window.location.pathname));
  }, []);

  return (
    <>
      {profile.sprites && (
        <div className="pokemon-page">
          
          <img
            className="pokemon-page__image"
            src={profile.sprites ? profile.sprites.other.dream_world.front_default : ''}
          />
          <div className="profile">
            <div className="profile__title">{profile.name}</div>
            <div className="profile__height">
              <div className="profile__height-title">Height: </div>
              <div className="profile__height-text">{profile.height}</div>
            </div>
            <div className="profile__weight">
              <div className="profile__weight-title">Weight: </div>
              <div className="profile__weight-text">{profile.weight}</div>
            </div>
            <div className="profile__types">
              <div className="profile__types-title">Types: </div>
              <div className="profile__types-text">{types}</div>
            </div>
            <div className="profile__abilities">
              <div className="profile__abilities-title">Abilities: </div>
              <div className="profile__abilities-text">{abilities}</div>
            </div>
            <div className="profile__base-experience">
              <div className="profile__base-experience-title">Base experience: </div>
              <div className="profile__base-experience-text">{profile.base_experience}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonPage;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState(null)
  useEffect(() => {
    const myRequest = "https://pokeapi.co/api/v2/pokemon/1/";
    fetch(myRequest).then(res => {
      res.json().then((data) => setPokemon(data))      
    }).catch(error => {
      console.error(error)
    })
  }, [])
  console.log(pokemon);

  function getRandomMoves(moves, count = 3) {
    const shuffled = [...moves].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count)
  }

  return (
    <div className="App">
      {pokemon && (
        <div className="card">
          <div className='card-header'>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className='pokemon-thumbnail'
            />
            <h2 className="card-title">{pokemon.name}</h2>
          </div>
          <div className="card-content">
            <div className="card-info">
              <p><strong>Height: </strong>{pokemon.height}</p>
              <p><strong>Weight: </strong>{pokemon.weight}</p>
              <div className='card-abilities'>
                <p><strong>Abilities: </strong></p>
                <ul>
                  {pokemon.abilities.map((a, index) => {
                    return <li key={index}>{a.ability.name}</li>;
                  })}
                </ul>
                <p><strong>Moves: </strong></p>
                <ul>
                  {getRandomMoves(pokemon.moves).map((move, index) => (
                    <li key={index}>{move.move.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

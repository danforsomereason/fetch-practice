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
  return (
    <div className="App">
      {pokemon && (
        <div>
          <div>Name:</div>
          {pokemon.name}
          <div>Abilities:</div>
          {pokemon.abilities.map((a) => {
            return (<div>{a.ability.name}</div>)
          })}
          <div>Height:</div>
          {pokemon.height}
          <div>Weight:</div>
          {pokemon.weight}
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';


const apikey = '18cc47a5-dc7b-445c-a855-2b4fb6aad982';
const url = 'https://api.thecatapi.com/v1/images/search';

function App() {
  const [ catUrl, SetCatUrl ] = useState('https://cdn2.thecatapi.com/images/bl0.jpg');

  useEffect(() => {
    console.log('Welcome to my App');
    getCat();
  }, []);

  const getCat = () => {
    console.log('Welcome to my App');

    fetch(url, {
      headers: {
        'x-api-key': apikey
      }
    })
    .then((res) => res.json())
    .then((cats) => {
      console.log('Cats: ', cats);
      const catUrl =cats[0].url;

      SetCatUrl(catUrl);
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
  }

  console.log('Cat URL: ', catUrl);


  //JSX
  return (
    <div className="app"> 
      <h1>Welcome to my App</h1>
      <img src={catUrl} alt=""/>
      <button onClick={getCat}>Get new random cat</button>
    </div>
  );
}

export default App;

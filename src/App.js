
//Sezione import
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';
import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';



//Dichiaro la classe App che eridta le caratteristiche della classe Component di React
//aggiungo il metodo render

class App extends Component {
  render() {
    //Propietà (className/props)
    return (
      // Serve il fragment jsx per racchiudere le due compontenti siccome react non accetta due componenti una dopo l'altra
      <>
        <Navbar />
        <div className="container">
          <h1>Cosa desideri ordinare?</h1>
          <hr />
          <div className="row">
            {/* //Passaggio di dati tramite props */}
            <Card
              immagine={california}
              nome="California"
              prezzo={1.99}
            />
            <Card
              immagine={dragon}
              nome="dragon"
              prezzo={0.99}
            />
            <Card
              immagine={dynamite}
              nome="dynamite"
              prezzo={5.99}
            />
            <Card
              immagine={philadelphia}
              nome="philadelphia"
              prezzo={8.99}
            />
            <Card
              immagine={rainbow}
              nome="rainbow"
              prezzo={5.99}
            />
            <Card
              immagine={shrimp}
              nome="shrimp"
              prezzo={1.99}
            />
          </div>
        </div>
      </>
    );
  }
}
//Esportare il componente per visualizzarlo a schermo
export default App;


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
  //definisco lo stato con oggetto card
  state = {
    cards: [
      { id: 0, nome: "California", prezzo: 1.99, immagine: california, quantità: 0 },
      { id: 1, nome: "dragon", prezzo: 1.99, immagine: dragon, quantità: 0 },
      { id: 2, nome: "dynamite", prezzo: 1.99, immagine: dynamite, quantità: 0 },
      { id: 3, nome: "philadelphia", prezzo: 1.99, immagine: philadelphia, quantità: 0 },
      { id: 4, nome: "rainbow", prezzo: 1.99, immagine: rainbow, quantità: 0 },
      { id: 5, nome: "shrimp", prezzo: 1.99, immagine: shrimp, quantità: 0 },

    ]
  }
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
            {/* Passaggio di dati tramite props, per ogni oggetto card contenuto nella lista abbiamo assegnato una compontente card */}
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                card={card}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
//Esportare il componente per visualizzarlo a schermo
export default App;

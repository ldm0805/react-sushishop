
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
      { id: 0, nome: "California", prezzo: 1.99, immagine: california, quantita: 0 },
      { id: 1, nome: "dragon", prezzo: 1.99, immagine: dragon, quantita: 0 },
      { id: 2, nome: "dynamite", prezzo: 1.99, immagine: dynamite, quantita: 0 },
      { id: 3, nome: "philadelphia", prezzo: 1.99, immagine: philadelphia, quantita: 0 },
      { id: 4, nome: "rainbow", prezzo: 1.99, immagine: rainbow, quantita: 0 },
      { id: 5, nome: "shrimp", prezzo: 1.99, immagine: shrimp, quantita: 0 },

    ]
  }

  // funzione per l'eliminazione delle card, filtro solo le card che hanno la chiave id diversa dal card id;
  handleDelete = cardId => {
    // quando aggiorniamo lo stato di updatedCards non basta scrivere: this.state.cards = updatedCards; perchè quando aggiorniamo lo stato di un componente react non possiamo farlo direttamente ma serve la funzione setState.
    //1 modo
    // const updatedCards = this.state.cards.filter(card => card.id !== cardId)
    // this.setState({ cards: updatedCards })
    //2 modo, se diamo alla costante lo stesso nome della costante dello state, basterà scrivere il nome (cards in questo caso)
    const cards = this.state.cards.filter(card => card.id !== cardId)
    this.setState({ cards });
  }

  //Questa volta facciamo una funzione passando l'intera card e non solo l'id
  handleIncrement = card => {
    //prendo tutto l'oggetto e lo inseriamo nella const cards
    const cards = [...this.state.cards];
    // Prendiamo la card dove viene premuto il pulsante tramite indexOf
    const id = cards.indexOf(card);
    //sulla nuova lista cards e nella posizione id copiamo la card passata
    cards[id] = { ...card };
    //aumentiamo il valore di quantià
    cards[id].quantita++;
    //aggiorniamo lo stato
    this.setState({ cards });
  }


  render() {
    //Propietà (className/props)
    return (
      // Serve il fragment jsx per racchiudere le due compontenti siccome react non accetta due componenti una dopo l'altra
      <>
        <Navbar />
        <div className="container">
          <h1 className="my-3">Cosa desideri ordinare?</h1>
          <hr />
          <div className="row">
            {/* Passaggio di dati tramite props, per ogni oggetto card contenuto nella lista abbiamo assegnato una compontente card */}
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                //passaggio di funzione tramite props. è convenzione iniziare con handle i nomi delle funzioni che risiedono nel componente padre in react, e on quella del figlio
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}

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

//Sezione import
import React, { Component } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';


//Dichiaro la funzione App
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
            <Card />
          </div>
        </div>
      </>
    );
  }
}
//Esportare il componente per visualizzarlo a schermo
export default App;

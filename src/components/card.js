//Bisogna trattare le propietà style come se fossero degli oggetti in js.
import React, { Component } from 'react';

//Dichiaro la classe Card che eridta le caratteristiche della classe Component di React
//aggiungo il metodo render
class Card extends Component {
    render() {
        return (
            <div className="col mb-4" >
                <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
                    <img className="card-img-top" src={this.props.card.immagine} alt="california" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.nome}</h5>
                        <p className="card-text">Prezzo: {this.props.card.prezzo}</p>
                        {/* Passo la funzione onDelete con la arrow function e gli do come argomento il card.id 
                        ATTENZIONE: se abbiamo bisogno di passare un'argomento in react, c'è bisono della arrow function in react, mentre se non dobbiamo passare un'argomento, possiamo chiamare la funzione senza arrow function
                        */}
                        <button className="btn btn-outline-danger" onClick={() => this.props.onDelete(this.props.card.id)}>Elimina</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
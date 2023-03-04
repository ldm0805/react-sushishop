//Bisogna trattare le propietà style come se fossero degli oggetti in js.
import React, { Component } from 'react';

//Dichiaro la classe Card che eridta le caratteristiche della classe Component di React
//aggiungo il metodo render
class Card extends Component {
    render() {
        return (
            <div className="col" >
                <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
                    <img className="card-img-top" src={this.props.card.immagine} alt="california" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.nome}</h5>
                        <p className="card-text">Prezzo: {this.props.card.prezzo}</p>
                        <button className="btn btn-outline-danger">Elimina</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
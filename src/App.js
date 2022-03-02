import React from "react"
import "./App.css"

import scooby from "./img/scooby.jpg"
import coragem from "./img/coragem.jpeg"
import pluto from "./img/pluto.png"

import garfield from "./img/garfield.png"
import gatoG from "./img/gatoG.jpg"
import frajola from "./img/frajola.png"

export default class App extends React.Component{
  state = {
    dogs:[
      {Name:`Scooby-Doo`,Raça:`dogue-alemão`, idade:`7 anos`,image:<img src={scooby}/>},
      {Name:`Coragem`,Raça:`SRD`, idade:`6 anos`,image:<img src={coragem}/>},
      {Name:`Pluto`,Raça:`dogue-alemão`, idade:`5 anos`,image:<img src={pluto}/>}  
    ],
    cats:[
      {Name:`Garfield`, Raça:`Persa`,idade:`9 anos`,image:<img src={garfield}/>},
      {Name:`Gato Guerreiro`, Raça:`Siberiano`,idade:`12 anos`,image:<img src={gatoG}/>},
      {Name:`Frajola`, Raça:`Shorthair`,idade:`10`,image:<img src={frajola}/>}
    ]
  }
  dog = () =>{
    let {dogs} = this.state
    this.setState ({list: dogs.map((item) =>(
      <div>
        <h1>{item.Name}</h1>
        <p>{item.Raça}</p>
        <p>{item.idade}</p>
        <div>{item.image}</div>
      </div>
    ))})
  }
  cat = () =>{
    let {cats} = this.state
    this.setState ({list: cats.map((item) =>(
      <div>
        <h1>{item.Name}</h1>
        <p>{item.Raça}</p>
        <p>{item.idade}</p>
        <div>{item.image}</div>
      </div>
    ))})
  }
  clear = () => {
    this.setState({ list:""})
  }
  render(){
    let {cat, dog} = this.state
    return(
      <main>
        <section className="adote">
          <div className="adoteTitle">
            <h1>Adote</h1>

            <nav>
              <ul>
                <li>Menu</li>
                <li>Sobre</li>
                <li>Adotar</li>
                <li>Pets</li>
              </ul>
            </nav>
          </div>
          <div className="adote-container">
            <h2>Salve seu amigo</h2>
            <div className="btn-container">
              <button className="btn-pets" value={dog} onClick={this.dog}>Dog</button>
              <button className="btn-pets" value={cat} onClick={this.cat}>Cat</button>
              <button className="btn-pets" onClick={this.clear}>C</button>
            </div>
            <div className="text-adote">
              <p>
                A Organização Mundial da Saúde estima que só no Brasil existam mais de 30 milhões de animais abandonados, entre 10 milhões de gatos e 20 milhões de cães. Em cidades de grande porte, para cada cinco habitantes há um cachorro. Destes, 10% estão abandonados.
                Segundo a Ampara Animal, durante a pandemia da Covid-19, o número aumentou 61% entre junho de 2020 e março de 2021.
              </p>
  
            </div>

          </div>
        </section>
        <h2>{this.state.list}</h2>
      </main>
    )
  }
}
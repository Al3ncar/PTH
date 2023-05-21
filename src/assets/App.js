import React from "react"; 
import "../assets/App.css"

import LogPec from "./pictures/logPec.png"

import {dog} from "../data/dog/dogs"
import {cat} from "../data/cat/cats"

export default class App extends React.Component{
  state = {
    dogs: dog,
    cats: cat,
    list:""
  }
  dog = () =>{
    let {dogs} = this.state
    this.setState ({list: dogs.map((item) =>(
      <div key={item.key}>
        <h1>{item.name}</h1>
        <p>{item.size}</p>
        <p>{item.yearsOld}</p>
        <img src={item.img} alt="cachorros"/>
      </div>
    ))})
  }
  cat = () =>{
    let {cats} = this.state
    this.setState ({list: cats.map((item) =>(
      <div key={item.key}>
        <h1>{item.name}</h1>
        <p>{item.size}</p>
        <p>{item.yearsOld}</p>
        <img src={item.img} alt="gatos"/>
      </div>
    ))})
  }
  clear = () => {
    this.setState({ list:""})
  }
  render(){
    let {cat, dog} = this.state
    return(
      <>
        <header>
          <section>
            <section>
              <div>
                <nav>
                  <ul>
                    <li> CATEGORIA </li>
                    <li> PETS </li>
                  </ul>
                </nav>
                <h1> <img src={LogPec} alt=""/> </h1>
                <nav>
                  <ul>
                    <li> SOBRE </li>
                    <li> DUVIDAS </li>
                  </ul>
                </nav>
              </div>
            </section>
            <section>
              <div>
                <div>
                  <p> A Organização Mundial da Saúde estima que só no Brasil existam mais de 30 milhões de animais abandonados. </p>
                </div>
                <div>
                  <button> SAIBA MAIS </button>
                </div>
              </div>
              <div>
                <p> entre 10 milhões de gatos e 20 milhões de cães. Em cidades de grande porte, para cada cinco habitantes há um cachorro.  </p>
              </div>
            </section>
          </section>
        </header>
      </>
    )
  }
}
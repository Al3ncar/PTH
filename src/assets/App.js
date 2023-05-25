import React from "react"; 
import "../assets/App.css"

import LogPec from "./pictures/logPec.png"
import LogP from "./pictures/logP.png"
import Dog from "./pictures/dog_bc.png"
import DogsBc from "./pictures/dogs.png"

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
          <section className="header_t_full">
            <section className="nav">
              <div className="nav_top">
                <nav className="nav_top_first">
                  <ul>
                    <li> CATEGORIA </li>
                    <li> PETS </li>
                  </ul>
                </nav>
                <h1> <img className="log_PEC" src={LogPec} alt=""/> </h1>
                <nav className="nav_bottom">
                  <ul>
                    <li> SOBRE </li>
                    <li> DUVIDAS </li>
                  </ul>
                </nav>
              </div>
            </section>
            <section className="header_full">
              <div className="header_left">
                <div className="cont_parg_left">
                  <p> 
                   A ORGANIZAÇÃO MUNDIAL DA SAÚDE ESTIMA QUE SÓ NO BRASIL EXISTAM MAIS DE 30 MILHÕES DE ANIMAIS ABANDONADOS.
                  </p>
                </div>
                <div className="btn_header_left">
                  <button> SAIBA MAIS </button>
                </div>
              </div>
              <div className="header_right">
                <div className="cont_parg_right">
                  <p>
                    ENTRE 10 MILHÕES DE GATOS E 20 MILHÕES DE CÃES. EM CIDADES DE GRANDE PORTE, PARA CADA CINCO HABITANTES HÁ UM CACHORRO.
                  </p>
                </div>
                <div className="box_dog"> 
                  <img src={Dog} alt="Cachorro Imagem"/> 
                </div>
              </div> 
            </section>
          </section>
        </header>
        <main>
          <section className="cont_Main">

            <section className="cont_box">

              <div className="box_LogP">
                <img src={LogP} alt="Logo, apenas um P"/>
              </div>

              <div>
                <div className="tilt_sobre"> <h2> SOBRE </h2> </div>
                <div className="cont_Pargs">
                  <p className="parg_sobre_first">
                    Pet em casa é uma ong, onde visa o bem estar dos animais em condições de ruas, para depois leva-los para doação.
                  </p>
                </div>
              </div>
            </section>

            <section className="cont_sobre">

              <div className="box_Dogs">
                <img className="Dogs" src={DogsBc} alt="cachorros juntos"/>
              </div>

              <div className="parg_sobre_second">
                <p>
                  Tambem é uma plataforma de doação para animais em condições de rua. Nos ajude nesse projeto!!!
                </p>
              </div>

            </section>

          </section>
        </main>
      </>
    )
  }
}
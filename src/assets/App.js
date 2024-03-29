import React from "react"; 
import "../assets/App.css"

import NukaSlid from "nuka-carousel"

import LogPec from "./pictures/logPec.png"
import LogP from "./pictures/logP.png"
import Dog from "./pictures/dog_bc.png"
import DogsBc from "./pictures/dogs.png"
import DCard from "./pictures/dog_card.png"
import CCard from "./pictures/cat_card.png"

import Df from "./pictures/df.png"
import Df2 from "./pictures/df2.png"
import Df3 from "./pictures/df3.png"
import Df4 from "./pictures/df4.png"

import {dog} from "../data/dog/dogs"
import {cat} from "../data/cat/cats"

const setting = {
  wrapAround: true,
  dragging: true,
  slidesToShow: 4,
  cellAlign: "center",
  adaptiveHeight: false,
  animation: "zoom",
  autoplay: true,
  autoplayInterval: 2000,
}

export default class App extends React.Component{
  state = {
    dogs: dog, cats: cat,
    listDog:"", listCat:"",
    btnDog:false, btnCat:false,
  }

  dog = () =>{
    let {dogs} = this.state
    this.setState({ btnDog: true})
    this.setState ({ listDog: dogs.map(item => (
        <div className="cardPet" key={item.key}>
          <div className="boxPet"><img src={item.img} alt="Dogs"/></div>
          <div className="cardInfoPet">
            <h4>{item.name}</h4>
            <p>Idade: {item.yearsOld}</p>
            <p>Porte: {item.size}</p>
            <a href="https://www.adotepetz.com.br/quero-adotar" target="_blank"><button> SAIBA MAIS </button></a>
          </div>
        </div>
      ))
    })
  }

  cat = () =>{
    let {cats} = this.state
    this.setState({ btnCat: true})
    this.setState ({ listCat: cats.map(item => (
      <div className="cardPet2" key={item.key}>
        <div className="boxPet">
          <img src={item.img} alt="Dogs"/>
        </div>
        <div className="cardInfoCat">
          <h4>{item.name}</h4>
          <p>Idade: {item.yearsOld}</p>
          <p>Porte: {item.size}</p>
          <a href="https://www.adotepetz.com.br/quero-adotar" target="_blank"><button> SAIBA MAIS </button></a>
        </div>
      </div>
    ))
  })
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
                <p className="parg_sobre_s">
                  Tambem é uma plataforma de doação para animais em condições de rua. Nos ajude nesse projeto!!!
                </p>
              </div>
            </section>
          </section>

          <section className="cont_main_pets">

            <section className="card_pet_dog">
              <button onClick={this.dog} className="btn_pet_dog"> 
                <div className="box_pet_dog"> 
                  <img className="img_pet" src={DCard} alt="" /> 
                </div>
                <div> <p> CACHORROS </p> </div>
              </button>
            </section>

            <section className="pets_card"> <h2 className="pets_titl"> PETS </h2> </section>

            <section className="card_pet_cat">
              <button onClick={this.cat} className="btn_pet_cat"> 
                <div className="box_pet_cat"> 
                  <img className="img_pet" src={CCard} alt="" /> 
                </div>
                <div> <p> GATOS </p> </div>
              </button>
            </section>
          </section>
          <section>
            <div>
              {!!this.state.btnDog && (
                <div className="NukSlid">
                  <h4>CACHORROS</h4>
                  <NukaSlid className="nuk"{...setting}>
                    {this.state.listDog}
                  </NukaSlid>
                </div>
              )}
            </div>
            <div>
              {!!this.state.btnCat && (
                <div className="NukSlid">
                  <h4>GATOS</h4>
                  <NukaSlid className="nuk"{...setting}>
                    {this.state.listCat}
                  </NukaSlid>
                </div>
              )}
            </div>
            <div className="parcContent">
              <a href="https://www.adotepetz.com.br" target="_blank">
                <button> Conheça nossa parceira </button>
              </a>
            </div>
          </section>
          <section className="containerDuvid">
            <section>
              <div className="titleDuv">
                <h2> Duvidas Frequentes </h2>
              </div>

              <div className="cardPetD2">
                <div className="boxPetD">
                  <img src={Df} alt="Dog adoção" />
                </div>
                <div className="cardInfoPetD2">
                    <h3> O que é preciso para adotar um pet? </h3>
                    <div>
                      <p>
                        É necessário o preenchimento do formulário de adoção (nas lojas Petz com espaço dedicado à adoção ou formulário online) e aguardar o contato da ONG/protetor parceiro responsável pelo pet para a entrevista. Após aprovação será preciso assinar o contrato de adoção na hora da retirada do pet
                      </p>
                    </div>
                </div>
              </div>
              <div className="boxPetDogs">
                <img src={Df2} alt="2 cachorros fofos" />
              </div>
            </section>
            <section>

            <div className="cardPetD">
                <div className="boxPetD">
                  <img src={Df3} alt="Dog adoção" />
                </div>
                <div className="cardInfoPetD">
                    <h3> Tem alguma taxa para a adoção? </h3>
                    <div>
                      <p>
                      Algumas ONGs/protetores solicitam uma colaboração para custear o gasto quetiveram com o animal adotado, a fim de conseguir realizar novos resgates.Esta cobrança fica a critério de cada organização e o valor varia conforme definição decada ONG/protetor parceiro do Programa.
                      </p>
                    </div>
                </div>
              </div>
              <div className="cardPetD">
                <div className="boxPetD">
                  <img src={Df4} alt="Dog adoção" />
                </div>
                <div className="cardInfoPetD">
                    <h3> Os animais para adoção são animais sociáveis? </h3>
                    <div>
                      <p>
                      Todos os animais passam por uma avaliação, mas cada pet tem a sua particularidade/personalidade. Esses animais são oriundos da rua e podem estar assustados, porém, enquanto estão no espaço do Adote Petz, os pets realizam diversas atividades físicas, passam por técnicas de comportamento, estimulação cognitiva e sensorial (percepção, memória e raciocínio), entre outras atividades.
                      </p>
                    </div>
                </div>
              </div>
            </section>
          </section>
        </main>

        <footer>
          <section className="contFooter">
            <div className="contBoxFooter">
              <div className="LogFooter">
                <img className="log_PEC" src={LogPec} alt="Logo pet em casa"/>
              </div>
            </div>
          </section>
        </footer>
      </>
    )
  }
} 
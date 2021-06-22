import React from 'react'
import ReactDOM from 'react-dom'
import Pessoa from './Pessoa'
import Contador from './Contador'
import Carro from './Carro'

ReactDOM.render(
  <>
    <Contador info="Número de pessoas"/>
    <Pessoa mostra='False' nome='Felipe' sobrenome='Cavalaro'/>
    <Pessoa mostra='False' nome='Jose' sobrenome='Silva'/>
    <Contador info="Conta carro"/>
    <Carro mostra='False' modelo="Sedan" marca="Sedan"/>
     </>,
  document.getElementById('root')
)


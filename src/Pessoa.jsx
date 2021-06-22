import React from 'react';
export default props =>
  <div>
    {
    props.mostra=='True' ?
    <p>Nome: {props.nome}</p> :
    <p>Sobrenome: {props.sobrenome}</p>
    }
  </div>



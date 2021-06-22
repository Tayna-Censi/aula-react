import React from 'react';
export default props =>
  <div>
    {
    props.mostra=='True' ?
    <p>Modelo: {props.modelo}</p> :
    <p>Marca: {props.marca}</p>
    }
  </div>



import React from 'react';
class Contador extends React.Component{
  constructor(props){
    super(props)
    this.state = {contador: 0 };
    this.aumenta = this.aumenta.bind(this);
    this.diminui = this.diminui.bind(this);
  }
  aumenta(){
    this.setState((prevState) => {
      return { contador: prevState.contador + 1 };
    });
  }
diminui(){   
   this.setState((prevState) => {
      return { contador: prevState.contador - 1 };
    });
  }
  render(){    
    return ( 
        <div>
           <p>{this.props.info}: {this.state.contador}</p>
           <button onClick={this.aumenta}>
	            Aumenta</button>
           <button onClick={this.diminui}>
	            Diminui</button>  </div>
    )  }}
export default Contador

import React from 'react';

const Formulario = props => {
    return (
        <form onSubmit={props.getData} >
            <div className="row">
                <input type="text" name="city" placeholder="Digite uma cidade"></input>
            </div>
           
            <button onSubmit> Obter informações climáticas</button>
        </form>
    );
}
  
export default Formulario;
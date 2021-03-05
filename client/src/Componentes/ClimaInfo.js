import React from 'react';

const ClimaInfo = (props) => {
 
  return(  
  <div className="weather_info">
    {props.city && 
      <p className="weather__key">cidade pesquisada: 
        <span className="weather__value">{props.city}</span> 
      </p>
    }

    {props.country && 
      <p className="weather__key">Sigla do país da cidade buscada: 
        <span className="weather__value"> {props.country}</span> 
      </p>
    }
        
    {props.temperature && 
      <p className="weather__key">Temperatura: 
        <span className="weather__value"> {props.temperature}º</span> 
      </p>
    }
        
    {props.humidity && 
      <p className="weather__key">Umidade: 
        <span className="weather__value"> {props.humidity}%</span> 
      </p>
    }
        
    {props.description && 
      <p className="weather__key">Descrição: 
        <span className="weather__value"> {props.description}</span> 
      </p>
    }

    {props.weather &&
      <p className="weather__key">Condição: 
        <span className="weather__value"> {props.weather} </span> 
      </p>
    }

     
    {props.error &&
      <p className="weather__error mt-4">{props.error}</p>
    }
  </div>
)};

export default ClimaInfo;
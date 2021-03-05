import React from "react";
import Logo from "../ComponenteMain/EstiloMain/tech4Humans.png";

const Listagens = ({ mostSearched, lastSearched }) => {
  return (
    <div className="text-center mx-auto">
      <div className="title">
        <img src={Logo} alt="smarkioLogo" />
      </div>

      <div>
        <div className="cities-container">
          <h3>Cidades mais Pesquisadas</h3>
          {mostSearched.map((data, i) => {
            return (
              <p className="cities-result" key={i}>   
                {data.name} pesquisado {data.was_checked} vezes
              </p>
            );
          })}
        </div>
      </div>

      <div>
        <div className="cities-container">
          <h3>Ultimas cidades pesquisas</h3>
          {lastSearched.map((data, i) => {
            
            return (
              <p className="cities-result"  key={i}>
                {i+1} - {data.last_searched_cities}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Listagens;

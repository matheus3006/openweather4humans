import React from "react";
import Logo from "../ComponenteMain/EstiloMain/tech4Humans.png";

const Listagens = (props) => {
  console.log(props)
  return (
    <div className="text-center mx-auto">
      <div className="title">
        <img src={Logo} alt="smarkioLogo" />
      </div>

      <div>
        <div className="cities-container">
        
          <h3>Cidades mais Pesquisadas <i class="fas fa-sync-alt att" onClick={props.mostSearched}> </i></h3>
          {props.most_search.map((data, i) => {
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
          <h3>Ultimas cidades pesquisas <i class="fas fa-sync-alt att" onClick={props.lastSearched}></i></h3>
          {props.last_search.map((data, i) => {
            
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

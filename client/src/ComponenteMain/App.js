import React from "react";
import "./EstiloMain/App.css";
import axios from "axios";

//Importação dos componentes carregados dentro de App()
import Listagens from "../Componentes/Listagens";
import Formulario from "../Componentes/Formulario";
import ClimaInfo from "../Componentes/ClimaInfo";


class App extends React.Component {
  //Pegando as alterações nos dados de busca por busca, armazenamento em estados(states), inicialmente "undefined"
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    weather: undefined,
    description: undefined,
    error: undefined,
    most_search: [],
    last_search: [],
  };

  getData = async (e) => {
    e.preventDefault(); //Previne que a requisição disparada não resete pelo reload do React
    try {
      const city = e.target.elements.city.value;

      if (city) {
        const api_req = await axios.get(
          `http://localhost:5000/api/v1/weather/city/${city}`
        );
        
        const data = api_req.data.data;

        //Validação de city
        this.setState({
          temperature: data.temperature,
          city: data.name,
          country: data.country,
          humidity: data.humidity,
          weather: data.weather,
          description: data.description,
          error: "",
        });
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          weather: undefined,
          description: undefined,
          error: "Por favor, Digite o nome correto da cidade",
        });
      }
    } catch (err) {
      console.error(err);
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        weather: undefined,
        description: undefined,
        error: "Por favor, Digite o nome correto da cidade",
      });
    }
  };


   mostSearched = async(e)=>{
    e.preventDefault()
      const mostSearched_resp = await axios.get(
      `http://localhost:5000/api/v1/weather/most_searched`
    );
    const mostSearched = mostSearched_resp.data.data;
    this.setState({
      most_search: mostSearched,
    });
  }
  lastSearched = async(e)=>{
   e.preventDefault()
    const lastSearched_resp = await axios.get(
          `http://localhost:5000/api/v1/weather/last_results`
        );
        const lastSearched = lastSearched_resp.data.data;
    
        this.setState({
          last_search: lastSearched,
        });
  }


  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-6 form-container pt-5">
                  <Formulario getData={this.getData} />
                  <ClimaInfo
                    temperature={this.state.temperature}
                    city={this.state.cidade}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    weather={this.state.weather}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
                <div className="col-6 title-container">
                  
                  <Listagens
                    mostSearched={this.mostSearched}
                    lastSearched={this.lastSearched}
                    most_search={this.state.most_search}
                    last_search={this.state.last_search}
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

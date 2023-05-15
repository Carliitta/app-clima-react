import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from "axios"
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About';
import Ciudad from '../components/Ciudad'
import swal from 'sweetalert';


function App() {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
    
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudadId = recurso.id;
  
          // Verificar si la ciudad ya existe en el array cities
          const ciudadExistente = cities.find(c => c.id === ciudadId);
  
          if (ciudadExistente) {
            swal("Message", "City already exists", "error");
          } else {
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: ciudadId,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };
  
            setCities(oldCities => [...oldCities, ciudad]);
          }
        } else {
          swal("Message", "City not found", "error");
        }
      });
  }
  

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Switch>
        <Route exact path='/'>
          <Cards
            cities={cities}
            onClose={onClose}
          />
        </Route>
      {/*   <Route path='/about'>
          <About />
        </Route> */}
        <Route path='/ciudad/:id'>
          <Ciudad onFilter={onFilter}/>
        </Route> 
      {/*   <Route
          path='/ciudad/:id'
          render={({match}) => <Ciudad city={onFilter(match.params.id)} />}
        /> */}
      </Switch>
      <hr/>
     
    </div>
  );
}

export default App;

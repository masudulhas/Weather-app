/* global google */
import React, { Component } from 'react';
import { render } from 'react-dom';
import Autocomplete from 'react-google-autocomplete';
import WeatherOutput from './components/WeatherOutput'
/* global google */

class App extends Component {
  state = {
    weather: {}
  };

render() {
     return (
       < div className = "container" >
        <Autocomplete
          style={{width: '50%'}}
          onPlaceSelected={(place) => {
            let latitute = place.geometry.location.lat();
            let lat = parseFloat(latitute).toFixed(2);
            let longitude = place.geometry.location.lng();
            let lng = parseFloat(longitude).toFixed(2);
            let apiReq = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/"+lng+"/lat/"+lat+"/data.json";
          
        fetch(apiReq).then(response => response.json()).then(
          data => { this.setState({
              weather: data.timeSeries[0].validTime,
              name: data.timeSeries[0].parameters[0].name,
              level: data.timeSeries[0].parameters[0].level,
              unit: data.timeSeries[0].parameters[0].unit,
              lan: data.geometry.coordinates[0][0],
              lat: data.geometry.coordinates[0][1]
            })
          }
        );
      }}
      types={['(regions)']}
      componentRestrictions={{country: "SE"}}
    />
    
    < WeatherOutput  
        weather = {this.state.weather}
        name = {this.state.name}
        level = {this.state.level}
        lan = {parseFloat(this.state.lan).toFixed(2)}
        lat = {parseFloat(this.state.lat).toFixed(2)}
    />
   </div>   
    );
  }
}
render(<App />, document.getElementById('root'));

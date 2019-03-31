/* global google */
import React, { Component } from 'react';
import { render } from 'react-dom';
import Autocomplete from 'react-google-autocomplete';
/* global google */

class App extends Component {
  state = {
    weather: {}
  };

render() {

     return (
      <Autocomplete
      style={{width: '90%'}}
      onPlaceSelected={(place) => {
        let latitute = place.geometry.location.lat();
        let lat = parseFloat(latitute).toFixed(2);
        let longitude = place.geometry.location.lng();
        let lng = parseFloat(longitude).toFixed(2);
        let apiReq = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/"+lng+"/lat/"+lat+"/data.json";
        
        fetch(apiReq).then(response => response.json()).then(
          data => {
            this.setState({weather: data.timeSeries})
          }
        );
      

      }}

      types={['(regions)']}
      componentRestrictions={{country: "SE"}}
  />
      
    );
  }
}

render(<App />, document.getElementById('root'));

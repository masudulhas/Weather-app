import React from 'react';

const WeatherOutput = props => {

    return(
        <div>
            < table>
                <thead>
                    <tr>
                        <th>ReferenceTime</th>
                        <th>Parameter</th>
                        <th>Level</th>
                        <th>Lan</th>
                        <th>Lat</th>
                    </tr>
                </thead>
                <tbody>
                    < tr > 
                        <td>{props.weather.toString()}</td>
                         <td>{props.name}</td>
                         <td>{props.level}</td>
                         <td>{props.lan}</td>
                         <td>{props.lat}</td>
                    </tr >
                </tbody>
            </table>
        </div>
    );

}
export default WeatherOutput

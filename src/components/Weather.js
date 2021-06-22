import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({result}) => {

    const {name,main}=result;

    if(!name) return null;

/*     //Grade Kelvin
    const kelvin =273.15 */
    return ( 
    <div className="card-panel white col s12">
        <div className="black-text">
            <h2>The weather of {name} is: </h2>
            <p className="temperatura">
                {parseFloat(main.temp).toFixed(2)}
                <span>&#x2103;</span>
            </p>
            <p>Temp Máxima: 
                {parseFloat(main.temp_max).toFixed(2)}
                <span>&#x2103;</span>
            </p>
            <p>Temp Mínima: 
                {parseFloat(main.temp_min).toFixed(2)}
                <span>&#x2103;</span>
            </p>
            <p>Humidity: 
                {parseFloat(main.humidity)}
                <span>%</span>
            </p>
        </div>
    </div>
    );
}
Weather.propTypes={
    result:PropTypes.object.isRequired
} 

export default Weather;
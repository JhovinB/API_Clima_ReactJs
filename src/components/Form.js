import React,{useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ({search,getSearch,getConsult}) => {

    const [error, getError]=useState(false);

    //Extract city and country
    const {city,country}=search;

    //Func elements state
    const handleChange=e=>{
        
        getSearch({...search,[e.target.name]:e.target.value});
    }
    const handleSubmit =e=>{
        e.preventDefault();
        
        if (city.trim()===''||country.trim()==='') {
            getError(true);
            return;
        }
        getError(false);
        getConsult(true);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            {error?<Error message="Ambos campos son requeridos"/>:null}
            <div className="input-field col s12">
                <input type="text" name="city" 
                id="city" value={city} onChange={handleChange}/>
                <label htmlFor="city">City: </label>
            </div>
            <div className="input-field col s12">
                <select name="country" id="country" 
                value={country} onChange={handleChange}>
                    <option value="">--Seleccione un país--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">Country: </label>
            </div>
            <div className="input-field col s12">
                <button  
                    type="submit"
                    value="Search Weather"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                >Search Weather</button>
            </div>
        </form>
     );
}
Form.propTypes={
    search: PropTypes.object.isRequired,
    getSearch: PropTypes.func.isRequired,
    getConsult:PropTypes.func.isRequired
}

 
export default Form;
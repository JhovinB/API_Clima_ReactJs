import React, { Fragment,useState,useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {

  const [search, getSearch] = useState({
    city:'',
    country:''
  });

  const [consult, getConsult] = useState(false);
  const [result, getResult] = useState({});
  const [error, getError] = useState(false);
  const {city,country}=search;


  useEffect(() => {

    const consultAPI=async()=>{
      if(consult){
      const appId='49286c95f627abed045531eed8b17618';
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}&units=metric`;

      const response = await fetch(url);
      const result = await response.json();

      getResult(result);
      getConsult(false);

      if (result.cod==='404') {
        getError(true);
      } else {
        getError(false); 
      }

      }
    }
    consultAPI();
    //eslint-disable-next-line
  }, [consult])

  let component;
  if (error) {
    component =<Error message="No hay resultados"/>
  }else{
    component =  <Weather
                  result={result}
                  />
  }

  return (
    <Fragment>
      <Header
        titulo="Weather React"
      />
         <div className="contenedor-form">
            <div className="container">
                <div className="row">
                    <div className="col m6 s12">
                      <Form
                      search={search}
                      getSearch={getSearch}
                      getConsult={getConsult}
                      />
                    </div>
                    <div className="col m6 s12">
                     {component}
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  );
}

export default App;

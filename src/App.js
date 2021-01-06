import React from 'react';

import { Route } from 'react-router-dom';
import ListCountryPage from './components/pages/ListCountryPage';
import InfoCountryPage from './components/pages/InfoCountryPage';


function App() {
  return (
    <div className='wrapper'>
      <div className='content'>

        <Route path='/' exact component={ListCountryPage} />
        <Route path='/info/:codeCountry' component={InfoCountryPage} />


      </div>
    </div>
  );
}

export default App;

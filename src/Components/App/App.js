import React from 'react'
import { Header} from './Header';
import { Welcome} from './Welcome';
import {Datasection} from './Datasection';


import '../styles/app.css';



function App() {
  return (
    <div className="App">
      <Header />
	    <Welcome />
	    <Datasection />

    </div>
  );
}

export default App;

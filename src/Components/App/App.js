import React, { Component } from 'react'
import { Header} from './Header';
import { Welcome} from './Welcome';


import '../styles/app.css';



function App() {
  return (
    <div className="App">
      <Header />
	  <Welcome />
    </div>
  );
}

export default App;

import React, { Component } from 'react'
import { Header} from './Header';

import '../styles/app.css';
fetch("https://covid-193.p.rapidapi.com/statistics", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "ee1c72e30dmshb0923a36f539943p1c489cjsnbc83887d6b42",
		"x-rapidapi-host": "covid-193.p.rapidapi.com"
	}
})
.then(res=>res.json())
.then(res=>console.log(res))

.catch(err => {
	console.error(err);
});



function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
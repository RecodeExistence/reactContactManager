import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Make state accessible globaly by importing the provider from Context.  
import { Provider } from './context';  
class App extends Component {  

  render() {
    return (
      <Provider>
      <div className = "App">
        <Header branding = "Contact Manager"/>
        <div className = "container">
          <Contacts />
        </div>
      </div>
      </Provider>
    );
  }
}


export default App;
 
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Testclasscomp from './Testclasscomp';
import Testfuncomp from './Testfuncomp';
import Teststate from './Teststate';
import Testshowhide from './Testshowhide';
import Testeventhandling from './Testeventhandling';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Testclasscomp info={{name:'Nilesh', age:'28'}} data='Joshi' />
        

        <Testfuncomp info={{name:'Nilesh', age:'28'}} data='Joshi' />

        <Teststate />
        <Testshowhide />
        <Testeventhandling />
        
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';



function App() {
  return (
    <div className="App">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src= {logo} alt="..." height="36"></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Categories</a>
        </li>
      </ul>
    </div>

  </div>
</nav>

<div className="container">
  <div className="row">
    <div className="col-sm">
     <div>

     </div>
    </div>
    <div className="col-sm">
      <div>

      </div>
    </div>

  </div>
</div>

      
    </div>
  );
}



export default App;

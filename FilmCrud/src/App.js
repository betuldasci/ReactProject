import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm">
              <Movie></Movie>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

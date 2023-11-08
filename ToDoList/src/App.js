import './App.css';
import Counter from './Counter.js';
import {Todo} from './todo.js';
import ProductList from './ProductList.js';

function App() {
  return (
    <div className="App">
     <div>
     <Counter/>

     </div>
    
     <div>
     <Todo/>

     </div>
     <div>
     <ProductList/>

     </div>
      
    </div>
  );
}

export default App;

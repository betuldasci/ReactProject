import React, {useState} from 'react'

function Counter() {
    const[count, setCount] = useState(0) 
    const increment = ()=>{
     if (count < 10){
        setCount(count + 1) 
     }
            

        
    }
    const decrement = ()=>{
      if(count>0){
        setCount(count - 1) 
      }
    }
  return (
    <div>
           <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
   
      <div className="container">
      <h2>Count: {count}</h2>
        <div className="row">

          <button className="btn btn-dark" onClick={increment}>Artır</button>
          <button className="btn btn-danger" onClick={decrement}>Azalt</button>

        </div>
      </div>

    </div>
  )
}

export default Counter
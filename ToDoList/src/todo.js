import React,{useState} from 'react'

export function Todo() {

    const[list, setList] = useState([])
    const[todo, setToDo] = useState('')
    const addToDo = ()=>{
        setList([...list, todo]); // ..list : eskileri tut yenileri icine at
        setToDo(''); // icini bosalt sonra yine ekleyebil
    }

  return (

    <div>
          {list.map((i,j) => {
            return(
                <span key = {j}>
                    {i}
                </span>
            )
        }) 
        }
  
    <input value={todo} onChange ={ (e) => setToDo(e.target.value )}/ >  

    
    <div>
        <button className='btn btn-dark' onClick={addToDo}>Ekle</button>
    </div>
    </div>
      
 
  )
}


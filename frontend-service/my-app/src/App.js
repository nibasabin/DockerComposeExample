
import './App.css';
import React, {useState} from 'react'


function App() {
  const [msg, setMsg] = useState('');

  const getHelloData= async()=>{
  


const data =fetch('http://localhost:3001/welcome')
  .then((response) => response.json())
  return await data.then((data)=> setMsg(data['data']));
  
}
  return (
    <div className="App">
      <p> this is response from backend </p>
      <input  type='button' onClick={()=>getHelloData()}></input>
 <p>{msg}</p>
      </div>
  );
}

export default App;

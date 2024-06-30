import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [tasks, useTasks] = useState([])


  const [input, setInput] = useState('')

  function AdicionaItem(){
      useTasks([...tasks,input])
      setInput('')
  }


  function preencheCampo(e){
    setInput(e.target.value)
  }

  function RecuperItens(){
    console.log([...JSON.parse(window.localStorage.getItem('userTasks'))]);
    useTasks([...JSON.parse(window.localStorage.getItem('userTasks'))])
  }
  
//É executado no momento de montagem do componente
  useEffect(()=>{
    RecuperItens()
  },
  []
)

  //Nesse caso é executado sempre que esse elemento for atualizado
  useEffect(()=>{
    window.localStorage.setItem('userTasks',JSON.stringify(tasks))

  },[tasks])


  return (
   <div>
    <h1>
      Olá, vamos falar sobre hooks !
    </h1>

    <ul>
    {
      tasks.map(item => 
        <li key={item}>{item}</li>
      )
    }
    <div>
      <input onChange={preencheCampo} type='text' />
      <button onClick={AdicionaItem}>oche</button>
    </div>
    </ul>
   
   </div>
  );
}

export default App;

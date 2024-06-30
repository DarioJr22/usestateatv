import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import User from './component/User';
import UserProvider from './models/UserContext';

function App() {

  /* Menção honrosa do use Callback só pra não passar batido */

  //ATÉ ACHAR UM CASO DE USO PRA O USE CALLBAKC
  //Pelo que eu entendi é para otimizar o uso de funções aqui no react, usando funções já memorizadas
  //Só alterando caso os valores mudem
  const [tasks, useTasks] = useState([])


  const [input, setInput] = useState('')

  function AdicionaItem(){
      useTasks([...tasks,input])
      setInput('')
  }


  function preencheCampo(e){
    setInput(e.target.value)
  }

 function RecItems(tasks){
    useTasks(tasks)
 }
  
//É executado no momento de montagem do componente
  useEffect(()=>{
    let tasks = window.localStorage.getItem('userTasks')
    if(tasks != "[]"){
        RecItems(JSON.parse(tasks))  
    }
  },
  []
)

  //Nesse caso é executado sempre que esse elemento for atualizado
  useEffect(()=>{
    window.localStorage.setItem('userTasks',JSON.stringify(tasks))
  },[tasks])


  return (
    <UserProvider>
<div>
    <h1>
      Olá, vamos falar sobre hooks !
    </h1>

    <User />

    <ul>
    {

      tasks.length ?
      tasks.map(item => 
        <li key={item}>{item}</li>
      ) : <p>O pai não tem valor</p>
    }
    <div>
      <input onChange={preencheCampo} type='text' />
      <button onClick={AdicionaItem}>oche</button>
    </div>
    </ul>
   
   </div>
    </UserProvider>
   
  );
}

export default App;

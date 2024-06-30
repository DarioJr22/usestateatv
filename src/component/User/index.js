import { UserContextProvider } from "../../models/UserContext"
import { useContext } from "react"


//Para utilizar o use contex pelo 'consumidor do serviço'
//VocÊ precisa importar o use context pelo hook useContext e passar o provider
// Esse parece ser um formato de injeção de dependências no react...
function User(){
    
    const {username,setUsername} = useContext(UserContextProvider)
    setUsername('Omacarena bombastic selin fantastic')
    console.log(username)
    
    return(
        <div>

            <span>Eu o usuário {username}</span>
            {() => { setUsername('Omacarena bombastic selin fantastic')}}
        </div>
    )
}


export default User
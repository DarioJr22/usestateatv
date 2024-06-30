import { createContext, useState } from "react";

export const UserContextProvider = createContext({})

//Essa entidade faz a passagem de parâmetros para multiplos componentes
//Algo parecido com oque um service faz, só que diferentezinho
function UserProvider({children}){

    //Nesse caso to querendo exportar o valor no meu use state para todos os componentes
    //("Username")
    const [username,setUsername] = useState('Odárius')

    //Lembrar de passar entre cochetes (Pesquisar pq)
    //Resposta > Épassado dentro do colchetes porque é uma props de jsx, e como toda expressão lógica de jsx precisa de colchetes para ser passado adequadamente
    return(
        <UserContextProvider.Provider value={{username,setUsername}}>
            {children}
        </UserContextProvider.Provider>
    )
}

export default UserProvider
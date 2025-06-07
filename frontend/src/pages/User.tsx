import { useEffect, useState } from "react";
// import axios from 'axios';

interface User{
    id:number;
    name:string;
}

export const User = () =>{
    const[users, setUsers] = useState<User[]>([]);
    const[error, setError] = useState<string | null>(null);
    const[loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        fetch('http://localhost:5000/users')
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            setUsers(data); // Atualiza o estado com os dados recebidos
            setLoading(false); // Define o carregamento como falso
          })
          .catch(error => {
            console.error('Erro ao buscar dados: ', error);
            setError('Falha ao carregar usuários. Tente novamente mais tarde.'); // Define a mensagem de erro
            setLoading(false); // Define o carregamento como falso mesmo em caso de erro
          });
      }, []);

    if(loading){
        return <div>Carregando usuários...</div>
    }

    if(error){
        return <div>Erro: {error}</div>
    }
    return(
        <div>
            <h1>Usuários</h1>
            {users.length === 0 ? (
                <p>Nenhum usuário encontrado.</p>
            ) : (
                <ul>
                    {users.map((user)=>(
                        <li
                        key={user.id}
                        >
                            {user.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// interface CreatingAccountProps{
//     name:string;
//     CPF:string;
//     email:string;
//     fone:string;
// }

// export const CreatingAccount:React.FC<CreatingAccountProps> = () =>{
export const CreatingAccount:React.FC = () =>{
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[CPF, setCPF] = useState('');
    const[fone, setFone] = useState('');
    const[password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleCreateAcc = async (e:React.FormEvent) => {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:5000/register',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({name, email, password}),              
            });
            if(!response.ok){
                const errorData = await response.json();
                console.log("Erro na resposta da api: ", errorData);
                throw new Error(errorData.message || `Erro de rede: ${response.status} ${response.statusText}`);
            }
            const responseData = await response.json();
            navigate('/login');
        }catch(error:any){            
            console.error("Erro no registro: ", error.response?.data || error.message);
            alert(`Erro ao registrar usuário: ${error.response?.data?.message}`);
        }
    };

    return(
        <div style={{
            backgroundColor:'linear-gradiente(180deg,rgba(181,182,242,1) 0%, rgba(228,217,255,1) 100%)',
            minHeight:'100vh',
            }}>
                <form onSubmit={handleCreateAcc}>
                    <input type="text" placeholder="Nome" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" placeholder="CPF" value={CPF} onChange={(e)=>setCPF(e.target.value)}/>
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="text" placeholder="Fone" value={fone} onChange={(e)=>setFone(e.target.value)}/>
                </form>
        </div>
    );

}
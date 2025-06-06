import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CreatingAccountProps{
    name:string;
    CPF:string;
    email:string;
    fone:string;
}

export const CreatingAccount:React.FC<CreatingAccountProps> = () =>{
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[CPF, setCPF] = useState('');
    const[fone, setFone] = useState('');

    const navigate = useNavigate();

    const handleCreateAcc = (e:React.FormEvent) => {
        e.preventDefault();
        console.log(`Cadastro de conta realizado com sucesso: ${name}, ${email}, ${CPF}, ${fone}`);
        alert('Cadastro efetuado');
        navigate('login');
    }

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
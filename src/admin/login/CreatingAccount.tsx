import { useState } from "react";

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

    const handleCreateAcc = (e:React.FormEvent) => {
        e.preventDefault();
        console.log(`Cadastro de conta realizado com sucesso: ${name}, ${email}`);
        console.log(`Cadastro de conta realizado com sucesso: ${CPF}, ${fone}`);
        alert('Cadastro efetuado');
        Navigate('login');
    }
    return(
        <div style={{
            backgroundColor:'linear-gradiente',
            minHeight:'100vh',
            }}>
        </div>
    );

}
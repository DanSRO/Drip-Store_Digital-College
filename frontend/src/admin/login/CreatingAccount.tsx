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
    const[endereco, setEndereco] = useState('');
    const[cidade, setCidade] = useState('');
    const[CEP, setCEP] = useState('');
    const[bairro, setBairro] = useState('');
    const[complemento, setComplemento] = useState('');
    
    const navigate = useNavigate();

    const handleCreateAcc = async (e:React.FormEvent) => {
        console.log('Clicado botão criar conta')
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:5000/register',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({name, email, CPF, fone, password, endereco, cidade, CEP, bairro, complemento}),              
            });
            if(!response.ok){
                const errorData = await response.json();
                console.log("Erro na resposta da api: ", errorData);
                throw new Error(errorData.message || `Erro de rede: ${response.status} ${response.statusText}`);
            }
            // const responseData = await response.json();
            navigate('/login');
        }catch(error:any){            
            // console.error("Erro no registro: ", error.response?.data || error.message);
            alert(`Erro ao registrar usuário: ${error.response || "Erro desconhecido." }`);
        }
    };

    return(
        <div>
            <h1>Criar Conta</h1>
            <hr />                           
            <div style={{
                backgroundColor:'linear-gradiente(180deg,rgba(181,182,242,1) 0%, rgba(228,217,255,1) 100%)',
                minHeight:'100vh',
            }}>
                <form onSubmit={handleCreateAcc}>
                <h2>Informações Pessoais</h2>
                    <div>                    
                        <label htmlFor="nome">Nome Completo *</label>
                        <input type="text" placeholder="Insira seu nome" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div>                    
                        <label htmlFor="cpf">CPF *</label>
                        <input type="text" placeholder="Insira seu CPF" value={CPF} onChange={(e)=>setCPF(e.target.value)}/>
                    </div>
                    <div>                    
                        <label htmlFor="email">E-mail *</label>
                        <input type="email" placeholder="Insira seu Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div>                    
                        <label htmlFor="fone">Celular *</label>
                        <input type="text" placeholder="Insira seu celular" value={fone} onChange={(e)=>setFone(e.target.value)}/>
                    </div>
                    <div>                    
                        <label htmlFor="password">Senha *</label>
                        <input type="password" placeholder="Insira sua senha" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                
                <h2>Informações de Entrega</h2>
                    <div>                    
                        <label htmlFor="endereco">Endereço *</label>
                        <input type="text" placeholder="Insira seu endereço" value={endereco} onChange={(e)=>setEndereco(e.target.value)}/>
                    </div>
                    <div>                    
                        <label htmlFor="bairro">Bairro *</label>
                        <input type="text" placeholder="Insira seu bairro" value={bairro} onChange={(e)=>setBairro(e.target.value)}/>
                    </div>
                    <div>                    
                        <label htmlFor="cidade">Cidade *</label>
                        <input type="text" placeholder="Insira sua cidade" value={cidade} onChange={(e)=>setCidade(e.target.value)}/>
                    </div>
                    <div>                    
                        <label htmlFor="CEP">CEP *</label>
                        <input type="text" placeholder="Insira seu CEP" value={CEP} onChange={(e)=>setCEP(e.target.value)}/>
                    </div>
                    <div>                    
                        <label htmlFor="complemento">Complemento *</label>
                        <input type="text" placeholder="Insira complemento" value={complemento} onChange={(e)=>setComplemento(e.target.value)}/>
                    </div>
                <div>                
                    <p style={{fontWeight:500, fontSize:'14px'}}><input type="checkbox" style={{backgroundColor:'var(--primary)', width:'3rem', height:'1.5rem', padding:'0.5rem 1rem', borderRadius:'5px', border:'2px solid var(--error)'}}></input>Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</p>
                </div>
                <button type="submit" style={{backgroundColor:'var(--primary)', width:'750px', height:'48px', borderRadius:'8px'}}>Criar Conta</button>
                </form>
            
            </div>
        </div>
    );

}
import { useState } from "react"
import { useNavigate } from "react-router-dom";

interface RegisterScreenProps{}

export const RegisterScreen: React.FC<RegisterScreenProps> = () =>{
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e:React.FormEvent) =>{
        e.preventDefault();
        console.log('Cadastro: ', {name, email, password});
        alert(`Cadastro realizado com sucesso:\nNome: ${name}\nEmail: ${email}\nPassword: ${password}`);
        navigate('/login');        
    }

    return(
        <div className="container-register">
            <h2>Cadastro</h2>
            <form onSubmit={handleRegister} className="form-register">
                <div className="form-group">
                    <label htmlFor="name">Nome: </label>
                    <input 
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha: </label>
                    <input 
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="button-ptimary">Cadastrar</button>
            </form>
            <p>
                Já tem conta? <a href="/login">Faça login</a>
            </p>
        </div>
    )
} 
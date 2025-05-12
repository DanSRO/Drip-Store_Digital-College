import { useState } from "react"
import { useNavigate } from "react-router-dom";

interface LoginScreenProps{}

export const LoginScreen: React.FC<LoginScreenProps> = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = (e:React.FormEvent) => {
        e.preventDefault();
        console.log('Login: ', {email, password});
        alert(`Login realizado com sucesso:\nEmail: ${email}\nSenha: ${password}`);
        navigate('/');
    };

    return(
        <div className="container-login">
            <h2>Cadastro</h2>
            <form onSubmit={handleLogin} className="form-login">
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password"
                        id="passord"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required                            
                    />
                </div>
                <button type="submit" className="button-primary">Entrar</button>
            </form>
            <p>
                Não tem conta? <a href="/register">Cadastre-se</a>
            </p>
        </div>
    );
}
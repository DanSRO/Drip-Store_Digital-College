import { useState } from "react"
import { useNavigate } from "react-router-dom";
import  imageTenisMelvin from '/tenis-melvin.png'

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
        <div  
            style={{
                backgroundColor:'linear-gradient(180deg, rgba(181,182,242,1) 0%, rgba(228,217,255,1) 100%)',
                minHeight:'100vh',
                position:'relative',
                overflow:'hidden',
                }}>
            <img src={imageTenisMelvin} alt="tenis-melvin"
                style={{
                    position:'absolute',
                    right:'30px',
                    top:'130px',
                    height:'500px',
                    transform:'rotate(35deg)'
                }}
            />
            <form onSubmit={handleLogin} 
                style={{
                        position:'absolute',
                        backgroundColor:'rgba(255,255,255,1)',
                        width:'583px',
                        height:'560px',
                        top:'40px',
                        left:'100px',
                        borderRadius:'4px',
                        padding:'30px',
                        boxSizing:'border-box',
                        boxShadow:'0px 10px 20px rgba(0,0,0,0.1)',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-between'

                    }}>
                <div>
                    <h3 style={{
                        fontFamily: 'Inter',
                        fontWeight: 700,
                        color: '#1F1F1F',
                        textAlign: 'left',
                        marginBottom: '10px'                                                                
                    }}>Acesse sua conta</h3>
                    <p style={{fontSize:'14px'}}>
                        Novo cliente? Então registre-se <a href="/register">aqui</a>
                    </p>
                </div>
                        
                <div>
                    <label htmlFor="email" style={{ fontWeight: 600, display: 'block', marginTop: '20px' }}>
                        Login *
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}
                        required
                        placeholder="Insira seu login ou email"
                        style={{
                            backgroundColor:'rgba(204,204,204,1)',
                            width: '100%',
                            height: '40px',
                            marginTop: '5px',
                            padding: '8px',
                            borderRadius: '6px',
                            border: '1px solid #ccc'
                        }}
                        />
                    <label htmlFor="password" style={{ fontWeight: 600, display: 'block', marginTop: '20px' }}>
                        Senha *
                    </label>
                    <input 
                        type="password"
                        id="passord"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required
                        placeholder="Insira sua senha"
                        style={{
                            backgroundColor:'rgba(204,204,204,1)',
                            width: '100%',
                            height: '40px',
                            marginTop: '5px',
                            padding: '8px',
                            borderRadius: '6px',
                            border: '1px solid #ccc',
                        }}
                    />
                    <p style={{marginTop:'10px', fontSize:'14px'}}><a href="#">Esqueci minha senha</a></p>
                </div>
                <button style={{width:'523px', height:'48px', borderRadius:'8px', backgroundColor:'rgba(201,32,113,1)', color:'#fff', border:'none', marginTop:'20px', cursor:'pointer'}}
                type="submit">Acessar Conta</button>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <span>Ou faça login com </span>
                    <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" style={{ marginLeft: '10px', cursor: 'pointer' }} />
                    <img src="https://img.icons8.com/color/24/000000/facebook-new.png" alt="Facebook" style={{ marginLeft: '10px', cursor: 'pointer' }} />
                </div>
            </form>            
        </div>
    );
};
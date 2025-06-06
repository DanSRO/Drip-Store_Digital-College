import { List, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import reactLogo from '../assets/logo-header.svg';
import { useEffect, useState } from "react";
import viteLogo from '../assets/mini-cart.svg';

export const MainHeader:React.FC = () => {
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    const [user, setUser] = useState(null);
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(()=>{
        const handleResize = ()=>{
            setIsMobile(window.innerWidth < 768);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    
    return (
        <header
            style={{
                backgroundColor:'#fff',
                boxShadow:'0 2px 4px rgba(0,0,0,0.1',
                padding:'10px 20px',
                position: 'sticky',
                top:0,
                zIndex:1000,
            }}
         >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                }}
            >
                <button
                    style={{
                        background:'none',
                        border: 'none',
                        cursor:' pointer',
                        padding: '5px',
                        // display: 'flex',
                        display: isMobile ? 'flex' : 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                    
                    }}                     
                    onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} color="#333" /> : <List size={24} color="#333" />}
                </button>

                <Link to="/" 
                    style={{
                        display:'flex',
                        alignItems:'center'
                    }}                
                >
                <img src={reactLogo}
                    style={{
                        height:'40px'
                    }}
                    alt="Digital Store Logo" />
                </Link>

                { !isMobile && (    
                <div 
                    style={{
                        display:'flex',
                        alignItems:'center',
                        border:'1px solid #CCC',
                        borderRadius:'4px',
                        padding:'5px 10px',
                        flexGrow:1,
                        maxWidth:'500px',
                        backgroundColor:'rgba(204,204,204,1)',
                    }}
                >
                <input
                    type="text"
                    placeholder="Pesquisar produto"
                    style={{
                        color:'black',
                        backgroundColor:'transparent',
                        border:'none',
                        outline:'none',
                        padding:'5px',
                        flexGrow:1,
                    }}
                />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    style={{width:'20px', height:'20px', fill:'#666', marginLeft:'8px', flexShrink:0, cursor:'pointer'}}
                    >
                    <path d="M10 2a8 8 0 0 1 6.32 12.94l5.38 5.39-1.41 1.41-5.38-5.39A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"/>
                </svg>
                
                </div>
                )}

                {isMobile && (
                    <button onClick={()=> setIsMobileSearchOpen(prev => !prev)}
                    style={{background:'none', border:'none',cursor:'pointer'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            style={{width:'20px', height:'20px', fill:'#666', marginLeft:'8px', flexShrink:0, cursor:'pointer'}}
                            >
                            <path d="M10 2a8 8 0 0 1 6.32 12.94l5.38 5.39-1.41 1.41-5.38-5.39A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"/>

                        </svg>
                    </button>
                )}

                {isMobile && isMobileSearchOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%', left: 0, right:0,
                    width: '100%',
                    height: '60px',
                    backgroundColor: '#fff !important',
                    padding: '10px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    zIndex: 999
                }}>
                    <input
                    autoFocus
                    type="text"
                    placeholder="Pesquisar produtos..."
                    style={{
                        color:'black',
                        backgroundColor:'transparent',
                        flex: 1,
                        height: '40px',
                        padding: '0 12px',
                        borderRadius: '4px',
                        border: '1px solid #ccc'
                    }}
                    />
                    <button onClick={() => setIsMobileSearchOpen(false)} style={{
                    background: 'none', border: 'none', marginLeft: '10px', cursor: 'pointer'
                    }}>
                    <X size={24} />
                    </button>
                </div>
                )}

                {!user && (
                    <div
                        style={{
                            display:'flex',
                            alignItems:'center',
                            gap:'10px',
                        }}
                    >                
                    <Link to="/registerEmail" className="register-link"
                        style={{
                            textDecoration:'underline',
                            fontSize:'16px',
                            color:'#666',
                        }}
                    >
                        Cadastre-se
                    </Link>                
                    <button className="button-primary"
                        style={{
                            width: '114px',
                            height: '40px',
                            borderRadius: '4px',
                            backgroundColor: '#FF6B9D',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <Link to="/login"
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                display: 'block',
                                width: '100%',
                                height: '100%',
                                // alignItems: 'center',
                                // justifyContent: 'center',
                                paddingTop:'4px'
                            }}                    
                        >
                            Entrar
                        </Link>
                    </button>
                    </div>
                )};

                {/* Cart Icon */}
                <Link to="/meus-pedidos"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(201,32,113,1)',
                        textDecoration: 'none',
                        position: 'relative',
                    }}
                 >
                
                    <img src={viteLogo} className="logo" alt="Vite logo" style={{width:'253px', height:'44px'}}/>              
                
                </Link>
            </div>
            
            <nav 
                style={{
                    display:'none',
                    marginTop:'10px',
                }}>
                <ul 
                    style={{
                        listStyle:'none',
                        padding:0,
                        margin:0,
                        display:'flex',
                        justifyContent:'center',
                        gap:'30px',
                    }}>
                    
                    <li 
                        style={{
                            textDecoration:'none',
                            color:'#333',
                            fontSize:'1rem',
                            fontWeight:500,
                            padding:'5px 0',
                            transition:'color 0.2s ease',
                        }}>
                            <NavLink to="/" end>
                                Home
                            </NavLink>
                    </li>
                    <li 
                        style={{
                            textDecoration:'none',
                            color:'#333',
                            fontSize:'1rem',
                            fontWeight:500,
                            padding:'5px 0',
                            transition:'color 0.2s ease',
                        }}>
                            <NavLink to="/produtos">
                                Produtos
                            </NavLink>
                    </li>
                    <li 
                        style={{
                            textDecoration:'none',
                            color:'#333',
                            fontSize:'1rem',
                            fontWeight:500,
                            padding:'5px 0',
                            transition:'color 0.2s ease',
                        }}>
                            <NavLink to="/categorias">
                                Categorias
                            </NavLink>
                    </li>
                    <li 
                        style={{
                            textDecoration:'none',
                            color:'#333',
                            fontSize:'1rem',
                            fontWeight:500,
                            padding:'5px 0',
                            transition:'color 0.2s ease',
                        }}>
                            <NavLink to="/meus-pedidos">
                                Meus pedidos
                            </NavLink>
                    </li>
                </ul>
            </nav>
            
            {isMobileMenuOpen && (
                <>
                <div
                    style={{
                        position:'fixed',
                        top:0,
                        left:0,
                        width:'100%',
                        height:'100%',
                        backgroundColor:'rgba(0,0,0,0.5)',
                        zIndex:1001
                    }}
                    onClick={toggleMobileMenu}>
                </div>

                <nav
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '280px',
                        height: '100%',
                        backgroundColor: '#fff',
                        boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.2)',
                        zIndex: 1002,
                        transform: 'translateX(0%)',
                        transition: 'transform 0.3s ease-out',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '20px',
                        boxSizing: 'border-box',
                        textAlign:'initial',
                    }}                
                >
                    <div
                        style={{
                            paddingBottom:'20px',
                            borderBottom:'1px solid #eee',
                            marginBottom:'20px',
                        }}
                    >
                    <h3 
                        style={{
                            margin:0,
                            color:'#555',
                            fontSize:'1.2rem',
                        }}
                    >
                        Páginas
                    </h3>
                    </div>
                    <ul 
                        style={{
                            listStyle:'none',
                            margin:0,
                            padding:0,
                            flexGrow:1,
                            alignItems:'flex-start',
                            justifyContent:'flex-start',                            
                        }}
                    >
                        <li 
                            style={{
                                marginBottom:'15px'
                            }}
                        >
                            <NavLink to="/" 
                                onClick={toggleMobileMenu} end
                            >
                                Home
                            </NavLink>                        
                        </li>
                        <li 
                            style={{
                                marginBottom:'15px'
                            }}
                        >
                            <NavLink to="/produtos"
                                onClick={toggleMobileMenu}
                            >
                                Produtos
                            </NavLink>
                        </li>
                        <li 
                            style={{
                                marginBottom:'15px'
                            }}
                        >
                            <NavLink to="/categorias" 
                                onClick={toggleMobileMenu}
                            >
                                Categorias
                            </NavLink>
                        </li>
                        <li 
                            style={{
                                marginBottom:'15px'
                            }}
                        >
                            <NavLink to="/meus-pedidos" 
                                onClick={toggleMobileMenu}
                            >
                                Meus pedidos
                            </NavLink>
                        </li>
                    </ul>
                    <hr style={{width:'100%'}}/>
                    <div 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            marginTop: '20px',
                            color:'#fff'
                        }}>
                    <button style={{ backgroundColor:'var(--primary)', color:'#fff', padding:'10px 15px', borderRadius:'4px', fontSize:'1em', cursor:'pointer', transition:'backgrounColor 0.2 esase', textAlign:'center', textDecoration:'none', display:'block'}} 
                        onClick={() => { toggleMobileMenu(); }}><Link to='/login' style={{color:'#fff'}}>Entrar</Link></button>
                    <button style={{ backgroundColor:'var(--primary)', color:'#fff', padding:'10px 15px', borderRadius:'4px', fontSize:'1em', cursor:'pointer', transition:'backgrounColor 0.2 esase', textAlign:'center', textDecoration:'none', display:'block'}} 
                        onClick={() => { toggleMobileMenu(); }}><Link to='/register' style={{color:'#fff'}}>Cadastre-se</Link></button>
                    </div>
                </nav>
                </>
            )}
            { !isMobile && (
                <div className="cabecalho">
                    <ul className="lista">
                        <li className="lista-li"><NavLink to={"/"}>Home</NavLink></li>
                        <li className="lista-li"><NavLink to={"/produtos"}>Produtos</NavLink></li>
                        <li className="lista-li"><NavLink to={"/categorias"}>Categorias</NavLink></li>
                        <li className="lista-li"><NavLink to={"/meus-pedidos"}>Meus pedidos</NavLink></li>
                    </ul>
                </div>
            )}
        </header>
    );
}
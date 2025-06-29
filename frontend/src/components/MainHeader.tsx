import { List, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import reactLogo from '../assets/logo-header.svg';
import { useEffect, useState, useRef } from "react";
import viteLogo from '../assets/mini-cart.svg';

import { CartModal } from "./CartModal";
import { useAuth } from "../admin/login/AuthContext";

interface HeaderCartItem {
    id:string;
    name:string;
    price:number;
    originalPrice?:number;
    imageUrl:string;
    quantity:number;
}

export const MainHeader:React.FC = () => {
    
    const [isCartModalVisible, setIsCartModalVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    // const [user, setUser] = useState(null);
    const { isAuthenticated, logout, user} = useAuth();
    const navigate = useNavigate();
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = () =>{
        logout();
        navigate('/login');
    }

    useEffect(()=>{
        const handleResize = ()=>{
            setIsMobile(window.innerWidth < 768);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[]);

    const exampleCartItems:HeaderCartItem[]=[
        {
            id:'nike-revolution-1',
            name:'camisa',
            price:219.00,
            originalPrice:280.00,
            imageUrl:'/public/Layer 1aa.png',
            quantity:1,
        },
        {
            id:'nike-revolution-1',
            name:'tenis nike revolution 6 next nature masculino',
            price:219.00,
            originalPrice:280.00,
            imageUrl:'/public/Layer 1aa.png',
            quantity:1,
        },
        {
            id:'nike-revolution-2',
            name:'tenis nike revolution 7 next nature masculino',
            price:219.00,
            imageUrl:'/public/Layer 1aa.png',
            quantity:1,
        },
    ];

    const totalItemsInCart = exampleCartItems.length;
    const totalCartValue = exampleCartItems.reduce((acc,item)=>acc + item.price * item.quantity,0);
    const handleMouseEnterCart = ()=>{
        if(!isMobile) {
            setIsCartModalVisible(true)
        }
    }

    const handleMouseLeaveCart = ()=>{
        setTimeout(()=>{
            setIsCartModalVisible(false)
        },2000)
    }
    
    const handleEmptyCart = ()=>{
        console.log('carrinho esvaziado')
        setIsCartModalVisible(false)
        navigate('/meu-carrinho')
    }

    const handleViewCart = ()=>{
        console.log('navegando para a página do carrinho')
        setIsCartModalVisible(false)
    }
    
    const [search, setSearch] = useState('');

    const filtered = exampleCartItems.filter((product) => {
        return product.name.toLowerCase().includes(search.toLowerCase());
    
    });

    const searchRef = useRef<HTMLDivElement | null>(null);

    // useEffect para clicar fora e fechar o dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setSearch(''); // fecha o dropdown limpando a pesquisa
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
                    <div ref={searchRef}
                        style={{
                            position: 'relative', // necessário para posicionar o dropdown
                            display: 'flex',
                            alignItems: 'stretch',
                            border: '1px solid #CCC',
                            borderRadius: '4px',
                            padding: '5px 10px',
                            flexGrow: 1,
                            maxWidth: '500px',
                            backgroundColor: 'rgba(204,204,204,1)'
                        }}>
                        <input
                            type="text"
                            placeholder="Pesquisar produto"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{
                                color: 'black',
                                backgroundColor: 'transparent',
                                border: 'none',
                                outline: 'none',
                                padding: '5px',
                                flexGrow: 1,
                            }}
                        />
                        
                        {/* Ícone de lupa */}                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            style={{width:'20px', height:'20px', fill:'#666', marginLeft:'8px', flexShrink:0, cursor:'pointer'}}
                            >
                            <path d="M10 2a8 8 0 0 1 6.32 12.94l5.38 5.39-1.41 1.41-5.38-5.39A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"/>
                        </svg>                    

                        {/* Dropdown de resultados */}
                        {search.length > 0 && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                right: 0,
                                backgroundColor: '#fff',
                                border: '1px solid #ccc',
                                borderTop: 'none',
                                maxHeight: '200px',
                                overflowY: 'auto',
                                zIndex: 1000,
                                boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
                            }}>
                                {filtered.length > 0 ? (
                                    filtered.map((item) => (
                                        <div key={item.id} style={{
                                            padding: '10px',
                                            borderBottom: '1px solid #eee',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            cursor: 'pointer',
                                            backgroundColor: '#fff'
                                        }}>
                                            <img src={item.imageUrl} alt={item.name} style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                                            <span style={{ color: '#333', fontSize: '14px' }}>{item.name}</span>
                                        </div>
                                    ))
                                ) : (
                                    <div style={{ padding: '10px', color: '#999' }}>Nenhum produto encontrado.</div>
                                )}
                            </div>
                        )}
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

                {/* {!user && ( */}
                {isAuthenticated ? (
                    <>
                        <span style={{ marginRight: '15px' }}>Olá, {user?.name || 'Usuário'}!</span> {/* Exibe o nome do usuário */}
                        <button onClick={handleLogout} style={{ padding: '8px 15px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Sair
                        </button>
                    </>
                ):(
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
                                whiteSpace:'nowrap',
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
                                    paddingTop:'4px',
                                }}                    
                            >
                                Entrar
                            </Link>
                        </button>
                    </div>
                )}

                <div 
                    className={`cart-icon-container ${isCartModalVisible ? 'active':''}`}
                    onMouseEnter={handleMouseEnterCart}
                    onMouseLeave={handleMouseLeaveCart}
                    style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(201,32,113,1)',
                        textDecoration: 'none',
                        cursor: 'pointer',
                    }}
                >
                    {/* Cart Icon */}
                    <Link to="/meus-pedidos"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'rgba(201,32,113,1)',
                            textDecoration: 'none',
                            position: 'relative',
                            padding: '5px'
                        }}
                    >
                        <img src={viteLogo} className="logo" alt="Vite logo" style={{width:'253px', height:'44px'}}/>           
                        {/*Contador de itens do carrinho*/}
                        {totalItemsInCart > 0 && (
                            <span 
                                style={{
                                    position: 'absolute',
                                    top: '-5px',
                                    right: '-5px',
                                    backgroundColor: '#e91e63',
                                    color: 'white',
                                    borderRadius: '50%',
                                    padding: '2px 7px',
                                    fontSize: '0.7em',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minWidth: '20px',
                                    height: '20px',
                                }}
                            >
                                {totalItemsInCart}
                            </span>
                        )}
                    </Link>
                    {/*Modal do carrinho */}
                    {isCartModalVisible && (
                        <CartModal
                            items = {exampleCartItems}
                            totalValue = {totalCartValue}
                            onEmptyCart = {handleEmptyCart}
                            onViewCart = {handleViewCart}
                        />
                    )}
                </div>
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
    )
}
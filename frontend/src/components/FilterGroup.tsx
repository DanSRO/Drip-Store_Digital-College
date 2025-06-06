import { Link } from 'react-router-dom';
import reactLogo from '../assets/logo-header.svg';
import { Logo } from './Logo';

export const FilterGroup = () =>{
    return(        
        <div className='header1'>
            <Link to='/'>
                <a href="./assets/logo-header.svg" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </Link>
            <div className='input-container'>          
                <input type="text" className='input' placeholder='Pesquisar produto' />
                <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    style={{width:'20px', height:'20px', fill:'#666', marginLeft:'8px', flexShrink:0}}
                >
                    <path d="M10 2a8 8 0 0 1 6.32 12.94l5.38 5.39-1.41 1.41-5.38-5.39A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"/>
                </svg>
            </div>
            <div style={{margin:'10px'}}>          
                <a href='/register' style={{textDecoration:'underline', fontSize:'16px', color:'dark-gray-2'}}>Cadastre-se</a>
            </div>
            <button className='button-primary' style={{width:'114px', height:'40px', borderRadius:'4px', color:'white', fontSize:'14px'}}><a href="/login" style={{color:'white'}}>Entrar</a></button>
            <Link to='/meus-pedidos'>
                <Logo/>
            </Link>
        </div>
    );
}
import { NavLink } from "react-router-dom";
export const Header = () =>{
    return(
        <>
        <div className="cabecalho">
            <ul className="lista">
                <li className="lista-li"><NavLink to={"/"}>Home</NavLink></li>
                <li className="lista-li"><NavLink to={"/produtos"}>Produtos</NavLink></li>
                <li className="lista-li"><NavLink to={"/categorias"}>Categorias</NavLink></li>
                <li className="lista-li"><NavLink to={"/meus-pedidos"}>Meus pedidos</NavLink></li>
            </ul>
        </div>        
        </>
    );
}
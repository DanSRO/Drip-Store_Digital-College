import  viteLogo from "../assets/mini-cart.svg"; 

export const Logo = () =>{
    return(
        <>
        <a href="./assets/mini-cart.svg" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" style={{width:'253px', height:'44px'}}/>
        </a>
      </>
    );
}
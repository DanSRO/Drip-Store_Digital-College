import reactLogo from '../assets/logo-footer.svg';
import { Infos } from './Infos';

export const Footer = () => {
  const informacoes = [
    { text:'Sobre Drip Store', link: '/about'},
    { text:'Segurança', link: '/seguranca'},
    {text:'WishList',link: '/wishlist'},
    {text:'Blog',link: '/blog'},
    {text:'Trabalhe conosco',link: '/trabalhe'},
    {text:'Meus pedidos',link: '/meus-pedidos'},
  ];

  const categorias = [
    { text: 'Camisetas', link: '/camisetas' },
    { text: 'Calças', link: '/calcas' },
    { text: 'Bonés', link: '/bones' },
    { text: 'Headphones', link: '/headphones' },
    { text: 'Tênis', link: '/tenis' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={reactLogo} alt="Logo" className="logo react" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <ul className="box-redes-sociais">
            <li className="facebook"><a href="https://www.facebook.com"><i className="fab fa-facebook-f icon"></i></a></li>
            <li className="instagram"><a href="https://instagram.com"><i className="fab fa-instagram icon"></i></a></li>
            <li className="twitter"><a href="https://twitter.com"><i className="fab fa-twitter icon"></i></a></li>
          </ul>
        </div>

        <Infos title='Informação' informations={informacoes}/>
        <Infos title='Categorias' informations={categorias}/>

        <div className="footer-column">
          <h4>Contato</h4>
          <ul className='footer-list'>
            <li>Av. Santos Dumont, 1510</li>
            <li>1º andar - Aldeota,</li> 
            <li>Fortaleza - CE, 60150-161</li>
            <li>(85) 3051-3411</li>
          </ul>
        </div>
      </div>
      <div>        
        <hr />
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Digital College
      </div>
    </footer>
  );
};
